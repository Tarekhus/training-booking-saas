function SearchSection({
  filters,
  specialties,
  locations,
  packageTypes,
  onFilterChange,
}) {
  return (
    <section className="border-y border-slate-200 bg-white" id="trainers">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="text-base font-bold text-slate-950">Search trainers</h2>
            <p className="hidden text-sm text-slate-500 sm:block">
              Filter by what matters first.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Search
            </span>
            <input
              type="search"
              value={filters.search}
              onChange={(event) => onFilterChange('search', event.target.value)}
              placeholder="Search by trainer name"
              className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Specialty
            </span>
            <select
              value={filters.specialty}
              onChange={(event) => onFilterChange('specialty', event.target.value)}
              className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            >
              <option value="">All specialties</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Location
            </span>
            <select
              value={filters.location}
              onChange={(event) => onFilterChange('location', event.target.value)}
              className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            >
              <option value="">All locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Package
            </span>
            <select
              value={filters.packageType}
              onChange={(event) => onFilterChange('packageType', event.target.value)}
              className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            >
              <option value="">All packages</option>
              {packageTypes.map((packageType) => (
                <option key={packageType} value={packageType}>
                  {packageType}
                </option>
              ))}
            </select>
          </label>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
