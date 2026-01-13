"use client"

import { useEffect, useState } from 'react'
import { format } from 'date-fns'

interface Slot {
    time: string // "09:00"
    available: boolean
}

interface SlotListProps {
    selectedDate: Date
    selectedTime: string | null
    onSelectTime: (time: string) => void
}

export default function SlotList({ selectedDate, selectedTime, onSelectTime }: SlotListProps) {
    const [slots, setSlots] = useState<Slot[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchSlots() {
            setLoading(true)
            setError(null)
            try {
                const dateStr = format(selectedDate, 'yyyy-MM-dd')
                const res = await fetch(`/api/availability?date=${dateStr}`)
                if (!res.ok) throw new Error("Failed to load slots")
                const data = await res.json()
                setSlots(data.slots || [])
            } catch (err) {
                setError("Could not load availability")
            } finally {
                setLoading(false)
            }
        }

        if (selectedDate) {
            fetchSlots()
        }
    }, [selectedDate])

    if (loading) {
        return (
            <div className="animate-pulse space-y-2">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-10 bg-gray-100 rounded-md"></div>
                ))}
            </div>
        )
    }

    if (error) {
        return <div className="text-red-500 text-sm py-4">{error}</div>
    }

    if (slots.length === 0) {
        return <div className="text-gray-500 text-sm py-4">No availability on this date.</div>
    }

    return (
        <div className="grid grid-cols-2 gap-2">
            {slots.map((slot) => (
                <button
                    key={slot.time}
                    disabled={!slot.available}
                    onClick={() => onSelectTime(slot.time)}
                    className={`
            py-2 px-4 text-sm font-medium rounded-md transition-all
            ${!slot.available
                            ? 'bg-gray-50 text-gray-300 cursor-not-allowed decoration-slice'
                            : selectedTime === slot.time
                                ? 'bg-green-600 text-white shadow-md transform scale-[1.02]'
                                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-900 hover:bg-gray-50'
                        }
          `}
                >
                    {slot.time}
                </button>
            ))}
        </div>
    )
}
