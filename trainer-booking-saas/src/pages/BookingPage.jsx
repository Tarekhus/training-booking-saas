import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import { trainers } from '../data/trainers'

const timeSlots = ['7:00 AM', '10:00 AM', '5:30 PM', '7:00 PM']

const initialFormData = {
  date: '',
  time: '',
  fullName: '',
  phone: '',
  email: '',
  notes: '',
}

function BookingPage() {
  const { trainerId } = useParams()
  const trainer = trainers.find(
    (currentTrainer) => currentTrainer.id === Number(trainerId),
  )
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [submittedBooking, setSubmittedBooking] = useState(null)

  if (!trainer) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-950">Trainer not found</h1>
            <p className="mt-2 text-sm text-slate-600">
              This booking page does not match an available trainer.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to trainers
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }))
  }

  function validateForm() {
    const nextErrors = {}

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Name is required.'
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Phone number is required.'
    }

    if (!formData.date) {
      nextErrors.date = 'Date is required.'
    }

    if (!formData.time) {
      nextErrors.time = 'Time is required.'
    }

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setSubmittedBooking(formData)
  }

  const bookingSummary = submittedBooking || formData
  const whatsappMessage = `Hi Coach ${trainer.full_name}, I requested a session on ${bookingSummary.date} at ${bookingSummary.time}. My name is ${bookingSummary.fullName}.`
  const whatsappUrl = `https://wa.me/${trainer.whatsapp_number}?text=${encodeURIComponent(
    whatsappMessage,
  )}`

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <Link
          to={`/trainers/${trainer.id}`}
          className="mb-6 inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          Back to trainer profile
        </Link>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <aside className="space-y-6">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <img
                src={trainer.image_url}
                alt={trainer.full_name}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Booking request
                </p>
                <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                  {trainer.full_name}
                </h1>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {trainer.specialty} in {trainer.location}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Package
                    </p>
                    <p className="font-semibold text-slate-950">
                      {trainer.package_type}
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Starts at
                    </p>
                    <p className="font-semibold text-slate-950">${trainer.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            {!submittedBooking ? (
              <>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    Request a session
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                    Pick a preferred time
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    This sends a frontend-only request preview. Final confirmation
                    happens directly with the trainer.
                  </p>
                </div>

                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1 block text-sm font-semibold text-slate-700">
                        Date
                      </span>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                      />
                      {errors.date ? (
                        <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                      ) : null}
                    </label>

                    <div>
                      <span className="mb-1 block text-sm font-semibold text-slate-700">
                        Time
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((slot) => (
                          <label key={slot}>
                            <input
                              type="radio"
                              name="time"
                              value={slot}
                              checked={formData.time === slot}
                              onChange={handleChange}
                              className="peer sr-only"
                            />
                            <span className="block cursor-pointer rounded-lg border border-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-700 transition peer-checked:border-emerald-600 peer-checked:bg-emerald-50 peer-checked:text-emerald-700">
                              {slot}
                            </span>
                          </label>
                        ))}
                      </div>
                      {errors.time ? (
                        <p className="mt-1 text-sm text-red-600">{errors.time}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1 block text-sm font-semibold text-slate-700">
                        Client full name
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                      />
                      {errors.fullName ? (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.fullName}
                        </p>
                      ) : null}
                    </label>

                    <label className="block">
                      <span className="mb-1 block text-sm font-semibold text-slate-700">
                        Phone number
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+961..."
                        className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                      />
                      {errors.phone ? (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      ) : null}
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-slate-700">
                      Email optional
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-slate-700">
                      Notes optional
                    </span>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Goal, preferred area, injuries, or anything useful."
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
                  >
                    Submit booking request
                  </button>
                </form>
              </>
            ) : (
              <div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    Request submitted
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    Your booking request is ready.
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Send the WhatsApp message below to confirm the session directly
                    with {trainer.full_name}.
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-bold text-slate-950">
                    Booking summary
                  </h3>
                  <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-slate-500">
                        Trainer
                      </dt>
                      <dd className="font-semibold text-slate-950">
                        {trainer.full_name}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-slate-500">
                        Client
                      </dt>
                      <dd className="font-semibold text-slate-950">
                        {submittedBooking.fullName}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-slate-500">
                        Date
                      </dt>
                      <dd className="font-semibold text-slate-950">
                        {submittedBooking.date}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-slate-500">
                        Time
                      </dt>
                      <dd className="font-semibold text-slate-950">
                        {submittedBooking.time}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-slate-500">
                        Phone
                      </dt>
                      <dd className="font-semibold text-slate-950">
                        {submittedBooking.phone}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-slate-500">
                        Package
                      </dt>
                      <dd className="font-semibold text-slate-950">
                        {trainer.package_type}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Send on WhatsApp
                  </a>
                  <Link
                    to={`/trainers/${trainer.id}`}
                    className="inline-flex justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                  >
                    View trainer profile
                  </Link>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default BookingPage
