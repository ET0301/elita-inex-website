"use client"

import { useState } from 'react'
import BookingCalendar from '@/components/BookingCalendar'
import SlotList from '@/components/SlotList'
import BookingForm from '@/components/BookingForm'

export default function BookingPageClient({ user }: { user: any }) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
            <header className="mb-12 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Book Appointment</h1>
                    <p className="text-gray-500 mt-2">Welcome back, {user.name}</p>
                </div>
                <div className="hidden md:block text-sm text-gray-400">
                    UTC: {new Date().toISOString().split('T')[0]}
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Calendar & Slots */}
                <div className="lg:col-span-5 space-y-8">
                    <BookingCalendar
                        selectedDate={selectedDate}
                        onSelectDate={(date) => {
                            setSelectedDate(date)
                            setSelectedTime(null) // Reset time when date changes
                        }}
                    />

                    {selectedDate && (
                        <div className="bg-white p-6 rounded-lg shadow-sm border animate-accordion-down">
                            <h3 className="font-semibold text-gray-900 mb-4">Available Times</h3>
                            <SlotList
                                selectedDate={selectedDate}
                                selectedTime={selectedTime}
                                onSelectTime={setSelectedTime}
                            />
                        </div>
                    )}
                </div>

                {/* Right Column: Form */}
                <div className="lg:col-span-7">
                    <div className={`
             transition-all duration-500 ease-in-out
             ${selectedTime ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-4 pointer-events-none blur-[1px]'}
          `}>
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                            <div className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900">Complete Booking</h2>
                                <p className="text-gray-500 text-sm">Review details and confirm your appointment.</p>
                            </div>

                            {selectedDate && selectedTime ? (
                                <BookingForm
                                    selectedDate={selectedDate}
                                    selectedTime={selectedTime}
                                    user={user}
                                />
                            ) : (
                                <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg">
                                    Select a date and time to continue
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
