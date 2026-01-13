import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { google } from 'googleapis'
import prisma from '@/lib/prisma'

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get user's account to retrieve access token
    const account = await prisma.account.findFirst({
        where: {
            userId: (session.user as any).id,
            provider: 'google'
        }
    })

    if (!account || !account.access_token) {
        return NextResponse.json({ error: "No Google Account connected" }, { status: 400 })
    }

    const body = await req.json()
    const { bookingId } = body

    const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
        include: { service: true }
    })

    if (!booking) return NextResponse.json({ error: "Booking not found" }, { status: 404 })

    const auth = new google.auth.OAuth2()
    auth.setCredentials({ access_token: account.access_token })

    const calendar = google.calendar({ version: 'v3', auth })

    try {
        const event = await calendar.events.insert({
            calendarId: 'primary',
            requestBody: {
                summary: `Appointment: ${booking.service.name}`,
                description: `Service: ${booking.service.name}\nNotes: ${booking.notes || 'None'}`,
                start: {
                    dateTime: booking.startTimeUtc.toISOString(),
                },
                end: {
                    dateTime: booking.endTimeUtc.toISOString(),
                },
            }
        })

        return NextResponse.json({ link: event.data.htmlLink })
    } catch (error) {
        console.error("Google Calendar Error:", error)
        return NextResponse.json({ error: "Failed to create calendar event" }, { status: 500 })
    }
}
