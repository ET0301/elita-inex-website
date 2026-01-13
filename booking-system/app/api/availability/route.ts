import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { startOfDay, endOfDay, addMinutes, isBefore, setHours, setMinutes, parseISO, isAfter } from 'date-fns'

// Config
const WORK_START_HOUR = 9
const WORK_END_HOUR = 17
const SLOT_DURATION = 30
const TIMEZONE_OFFSET_HOURS = 1 // Norway is UTC+1 (standard) or +2 (DST). 
// Simplification: We will store times as UTC in DB and assume standard working hours in local time map to specific UTC hours.
// For a real app, use a library like 'date-fns-tz' to handle timezone strictly.
// Here we will just generate logical slots.

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const dateStr = searchParams.get('date')

    if (!dateStr) {
        return NextResponse.json({ error: "Date required" }, { status: 400 })
    }

    // Parse date (YYYY-MM-DD)
    const selectedDate = parseISO(dateStr)
    const start = startOfDay(selectedDate)
    const end = endOfDay(selectedDate)

    // 1. Get existing bookings for this day
    const bookings = await prisma.booking.findMany({
        where: {
            startTimeUtc: {
                gte: start,
                lt: end
            },
            status: 'CONFIRMED'
        }
    })

    // 2. Generate all possible slots
    const slots: { time: string, available: boolean }[] = []
    let currentSlot = setMinutes(setHours(start, WORK_START_HOUR), 0)
    const endTime = setMinutes(setHours(start, WORK_END_HOUR), 0)

    // Skip weekends (simple rule)
    const dayOfWeek = selectedDate.getDay() // 0 = Sun, 6 = Sat
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        if (dayOfWeek === 6) {
            // Sat 10-14
            currentSlot = setMinutes(setHours(start, 10), 0)
            const satEnd = setMinutes(setHours(start, 14), 0)
            while (isBefore(currentSlot, satEnd)) {
                slots.push(createSlotObj(currentSlot, bookings, selectedDate))
                currentSlot = addMinutes(currentSlot, SLOT_DURATION)
            }
        }
        // Sunday closed - empty slots
    } else {
        // Weekday 09-17
        while (isBefore(currentSlot, endTime)) {
            slots.push(createSlotObj(currentSlot, bookings, selectedDate))
            currentSlot = addMinutes(currentSlot, SLOT_DURATION)
        }
    }

    return NextResponse.json({ slots })
}

function createSlotObj(slotTime: Date, bookings: any[], dateContext: Date) {
    // Check if slot overlaps with any booking
    // A slot at 09:00 with duration 30m overlaps if booking starts at 09:00 or 09:15 etc (simplified: matches start time)
    // Since we have fixed 30m slots, valid if no booking *starts* at this time (assuming all bookings align to grid).
    // If we support 60m/90m bookings, we need range check.

    const slotEnd = addMinutes(slotTime, SLOT_DURATION)

    const isBooked = bookings.some(b => {
        // Logic: Overlap if (StartA < EndB) and (EndA > StartB)
        return isBefore(b.startTimeUtc, slotEnd) && isAfter(b.endTimeUtc, slotTime)
    })

    // Format as "HH:mm"
    // Note: slotTime is a Date object which has local browser time? No, server time.
    // We need to output the time string that represents the slot.
    // Since we constructed it from dateStr + setHours, it represents local time 09:00 if system is local.
    // To be safe, just format numeric.

    const hours = slotTime.getHours().toString().padStart(2, '0')
    const minutes = slotTime.getMinutes().toString().padStart(2, '0')
    const timeStr = `${hours}:${minutes}`

    return {
        time: timeStr,
        available: !isBooked
    }
}
