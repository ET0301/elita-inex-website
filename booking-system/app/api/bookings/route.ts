import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { parseISO, addMinutes, setHours, setMinutes } from 'date-fns'

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions)

    if (!session || !session.user || !session.user.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const body = await req.json()
        const { serviceId, date, time, notes } = body // date: YYYY-MM-DD, time: HH:mm

        const service = await prisma.service.findUnique({ where: { id: serviceId } })
        if (!service) return NextResponse.json({ error: "Invalid service" }, { status: 400 })

        // Construct Date objects
        // CAUTION: This constructs time in SERVER local time. Real app should use UTC strictly.
        const [hours, minutes] = time.split(':').map(Number)
        const startDate = parseISO(date)
        startDate.setHours(hours, minutes, 0, 0)

        const endDate = addMinutes(startDate, service.durationMinutes)

        // Check availability (Double check race condition in transaction ideally)
        const conflicting = await prisma.booking.findFirst({
            where: {
                OR: [
                    {
                        startTimeUtc: { lt: endDate },
                        endTimeUtc: { gt: startDate }
                    }
                ],
                status: 'CONFIRMED'
            }
        })

        if (conflicting) {
            return NextResponse.json({ error: "Time slot no longer available" }, { status: 409 })
        }

        // Create Booking
        const booking = await prisma.booking.create({
            data: {
                userId: (session.user as any).id, // From session callback
                serviceId,
                startTimeUtc: startDate,
                endTimeUtc: endDate,
                notes,
                status: 'CONFIRMED'
            }
        })

        // Log audit
        await prisma.auditLog.create({
            data: {
                action: 'CREATE_BOOKING',
                bookingId: booking.id,
                actorEmail: session.user.email,
                metaJson: JSON.stringify({ price: service.priceNok })
            }
        })

        return NextResponse.json(booking)

    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}
