import { useMemo, useState } from 'react'
import FeatureStrip from '../components/landing/FeatureStrip'
import HeroSection from '../components/landing/HeroSection'
import SearchSection from '../components/landing/SearchSection'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import TrainerGrid from '../components/trainers/TrainerGrid'
import { trainers } from '../data/trainers'

function LandingPage() {
  const [filters, setFilters] = useState({
    search: '',
    specialty: '',
    location: '',
    packageType: '',
  })

  const specialties = useMemo(
    () => [...new Set(trainers.map((trainer) => trainer.specialty))],
    [],
  )
  const locations = useMemo(
    () => [...new Set(trainers.map((trainer) => trainer.location))],
    [],
  )
  const packageTypes = useMemo(
    () => [...new Set(trainers.map((trainer) => trainer.package_type))],
    [],
  )

  const filteredTrainers = useMemo(() => {
    return trainers.filter((trainer) => {
      const matchesSearch = trainer.full_name
        .toLowerCase()
        .includes(filters.search.toLowerCase().trim())
      const matchesSpecialty =
        !filters.specialty || trainer.specialty === filters.specialty
      const matchesLocation = !filters.location || trainer.location === filters.location
      const matchesPackage =
        !filters.packageType || trainer.package_type === filters.packageType

      return matchesSearch && matchesSpecialty && matchesLocation && matchesPackage
    })
  }, [filters])

  function handleFilterChange(name, value) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <HeroSection />
        <SearchSection
          filters={filters}
          specialties={specialties}
          locations={locations}
          packageTypes={packageTypes}
          onFilterChange={handleFilterChange}
        />
        <TrainerGrid trainers={filteredTrainers} />
        <FeatureStrip />
        <section className="bg-white" id="join">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:py-14">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Are you a trainer in Lebanon?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Join the waitlist for profile listings, package pages, and client
                booking tools.
              </p>
            </div>
            <a
              href="https://wa.me/96170111222?text=Hi%20TrainerBook%2C%20I%20want%20to%20list%20my%20trainer%20profile."
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              List your profile
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
