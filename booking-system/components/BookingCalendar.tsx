"use client"

import { useState } from 'react'
import Calendar from 'react-calendar'
import { format } from 'date-fns'
import 'react-calendar/dist/Calendar.css'
import { cn } from '@/lib/utils'

interface BookingCalendarProps {
    selectedDate: Date | null
    onSelectDate: (date: Date) => void
    availabilityCache?: Record<string, boolean> // 'YYYY-MM-DD': hasSlots
}

export default function BookingCalendar({ selectedDate, onSelectDate, availabilityCache = {} }: BookingCalendarProps) {

    return (
        <div className="p-4 bg-white rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Select Date</h2>
            <div className="booking-calendar-wrapper">
                <Calendar
                    onChange={(value) => onSelectDate(value as Date)}
                    value={selectedDate}
                    minDate={new Date()}
                    className="w-full border-none"
                    tileClassName={({ date, view }) => {
                        if (view === 'month') {
                            const dateStr = format(date, 'yyyy-MM-dd')
                            // Add custom classes for availability if needed, 
                            // for now just basic styling
                            return cn(
                                "rounded-full hover:bg-gray-100 transition-colors p-2 text-sm",
                                selectedDate && date.toDateString() === selectedDate.toDateString() ? "bg-black text-white hover:bg-black/90" : ""
                            )
                        }
                        return ""
                    }}
                    tileDisabled={({ date }) => {
                        // Disable Sundays
                        return date.getDay() === 0
                    }}
                />
            </div>
            <style jsx global>{`
        .booking-calendar-wrapper .react-calendar {
          width: 100%;
          border: none;
          font-family: inherit;
        }
        .booking-calendar-wrapper .react-calendar__tile--now {
          background: transparent;
          color: #000;
          font-weight: bold;
        }
        .booking-calendar-wrapper .react-calendar__tile--active {
          background: #000 !important;
          color: white !important;
        }
        .booking-calendar-wrapper .react-calendar__tile--active:enabled:hover,
        .booking-calendar-wrapper .react-calendar__tile--active:enabled:focus {
          background: #333 !important;
        }
      `}</style>
        </div>
    )
}
