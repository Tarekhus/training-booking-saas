import heroImage from '../../assets/hero.png'

function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_380px] lg:items-center lg:py-14">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Lebanon trainer booking
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Find a trainer, compare packages, book on WhatsApp.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A practical way to discover independent fitness coaches by location,
            specialty, and package type.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <img
            src={heroImage}
            alt="Fitness coaching session"
            className="h-64 w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
