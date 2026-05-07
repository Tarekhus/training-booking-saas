import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import { trainers } from '../data/trainers'

const availabilitySlots = ['Mon 6:00 PM', 'Wed 7:30 PM', 'Sat 10:00 AM']

const skillsBySpecialty = {
  Boxing: ['Boxing technique', 'Conditioning', 'Footwork'],
  'Functional Fitness': ['Mobility', 'Strength circuits', 'Stamina'],
  Pilates: ['Core strength', 'Posture', 'Controlled movement'],
  'Strength Training': ['Hypertrophy', 'Form coaching', 'Progressive plans'],
  'Weight Loss': ['Fat-loss plans', 'Habit coaching', 'Weekly check-ins'],
  Yoga: ['Mobility', 'Breathwork', 'Flexibility'],
}

function TrainerProfilePage() {
  const { trainerId } = useParams()
  const [imageFailed, setImageFailed] = useState(false)
  const trainer = trainers.find(
    (currentTrainer) => currentTrainer.id === Number(trainerId),
  )

  if (!trainer) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-950">Trainer not found</h1>
            <p className="mt-2 text-sm text-slate-600">
              This trainer profile does not exist or may have been removed.
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

  const whatsappMessage = `Hi ${trainer.full_name}, I found your profile on TrainerBook and would like to book a ${trainer.package_type} session.`
  const whatsappUrl = `https://wa.me/${trainer.whatsapp_number}?text=${encodeURIComponent(
    whatsappMessage,
  )}`
  const initials = trainer.full_name
    .split(' ')
    .map((namePart) => namePart[0])
    .join('')
  const skills = skillsBySpecialty[trainer.specialty] || [
    trainer.specialty,
    'Personal coaching',
    'Training plans',
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <Link
          to="/"
          className="mb-6 inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          Back to trainers
        </Link>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[420px_1fr]">
            <div className="h-80 bg-gradient-to-br from-emerald-100 via-slate-100 to-slate-200 lg:h-full">
              {!imageFailed ? (
                <img
                  src={trainer.image_url}
                  alt={trainer.full_name}
                  onError={() => setImageFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-emerald-700 shadow-sm">
                    {initials}
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    {trainer.specialty}
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    {trainer.full_name}
                  </h1>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {trainer.short_bio}
                  </p>
                </div>
                <div className="w-fit rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
                  {trainer.rating} rating
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Location
                  </p>
                  <p className="mt-1 font-bold text-slate-950">{trainer.location}</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Experience
                  </p>
                  <p className="mt-1 font-bold text-slate-950">
                    {trainer.experience_years} years
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Package
                  </p>
                  <p className="mt-1 font-bold text-slate-950">
                    {trainer.package_type}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Starts at
                  </p>
                  <p className="mt-1 font-bold text-slate-950">${trainer.price}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">Availability preview</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {availabilitySlots.map((slot) => (
                  <div
                    key={slot}
                    className="rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800"
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">
                Certifications and skills
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Ready to book your session?
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Message {trainer.full_name.split(' ')[0]} on WhatsApp.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Ask about available times, session location, and the best package for
              your goal.
            </p>
            <div className="mt-6 grid gap-3">
              <Link
                to={`/trainers/${trainer.id}/book`}
                className="inline-flex w-full justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Book Session
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full justify-center rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                Quick contact on WhatsApp
              </a>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default TrainerProfilePage
