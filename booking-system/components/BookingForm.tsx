"use client"

import { useState } from 'react'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'

interface Service {
    id: string
    name: string
    durationMinutes: number
    priceNok: number
}

interface BookingFormProps {
    selectedDate: Date
    selectedTime: string
    user: {
        name?: string | null
        email?: string | null
    }
}

export default function BookingForm({ selectedDate, selectedTime, user }: BookingFormProps) {
    const router = useRouter()
    const [services] = useState<Service[]>([
        { id: '1', name: 'Consultation', durationMinutes: 30, priceNok: 500 },
        { id: '2', name: 'Installation', durationMinutes: 60, priceNok: 1200 },
        { id: '3', name: 'Premium Service', durationMinutes: 90, priceNok: 2000 },
    ]) // Ideally fetched from DB, but hardcoded for seed consistency for now

    const [serviceId, setServiceId] = useState(services[0].id)
    const [notes, setNotes] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            // Updated to connect to production URL (n8n Webhook)
            const res = await fetch('/webhook/ef2f7a53-d213-4674-b882-20ea3ebd04b3', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    serviceId,
                    date: format(selectedDate, 'yyyy-MM-dd'),
                    time: selectedTime,
                    notes,
                    user: {
                        name: user.name,
                        email: user.email
                    },
                    source: 'booking_system'
                })
            })

            if (!res.ok) throw new Error("Booking failed")

            // Success
            alert(`Booking Request Sent! We will contact you shortly.`)
            router.refresh()

        } catch (err) {
            console.error(err)
            alert("Something went wrong. Please try again.")
        } finally {
            setSubmitting(false)
        }
    }

    const selectedService = services.find(s => s.id === serviceId)

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="font-medium text-gray-900 border-b pb-2">Summary</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="block text-gray-500 text-xs uppercase tracking-wider">Date</span>
                        <span className="font-medium">{format(selectedDate, 'PPP')}</span>
                    </div>
                    <div>
                        <span className="block text-gray-500 text-xs uppercase tracking-wider">Time</span>
                        <span className="font-medium">{selectedTime}</span>
                    </div>
                    {selectedService && (
                        <div className="col-span-2">
                            <span className="block text-gray-500 text-xs uppercase tracking-wider">Service</span>
                            <span className="font-medium">{selectedService.name} ({selectedService.durationMinutes} min) - {selectedService.priceNok} NOK</span>
                        </div>
                    )}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-2 border"
                >
                    {services.map(s => (
                        <option key={s.id} value={s.id}>
                            {s.name} ({s.durationMinutes}m)
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" disabled value={user.name || ''} className="w-full bg-gray-100 border border-gray-200 rounded-md p-2 text-gray-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="text" disabled value={user.email || ''} className="w-full bg-gray-100 border border-gray-200 rounded-md p-2 text-gray-500" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black p-2 border"
                    placeholder="Gate code, parking info, etc."
                />
            </div>

            <button
                type="submit"
                disabled={submitting}
                className="w-full bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center"
            >
                {submitting ? 'Confirming...' : 'Confirm Booking'}
            </button>

            <p className="text-xs text-center text-gray-500">
                You will receive a minimal confirmation email. Local time is displayed.
            </p>
        </form>
    )
}
