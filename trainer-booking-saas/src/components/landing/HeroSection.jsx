function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-8 pt-9 sm:px-6 lg:grid-cols-[1fr_320px] lg:items-center lg:pb-10 lg:pt-12">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Lebanon trainer booking
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Find a trainer, compare packages, book on WhatsApp.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A practical way to discover independent fitness coaches by location,
            specialty, and package type.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm lg:grid-cols-1">
          <div className="rounded-lg bg-white p-3">
            <p className="text-2xl font-bold text-slate-950">6</p>
            <p className="text-xs font-medium text-slate-500">trainer profiles</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <p className="text-2xl font-bold text-slate-950">5</p>
            <p className="text-xs font-medium text-slate-500">specialties</p>
          </div>
          <div className="rounded-lg bg-white p-3">
            <p className="text-2xl font-bold text-slate-950">3</p>
            <p className="text-xs font-medium text-slate-500">package types</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
