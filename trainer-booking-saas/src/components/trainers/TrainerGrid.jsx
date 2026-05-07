import TrainerCard from './TrainerCard'

function TrainerGrid({ trainers }) {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Available trainers
            </h2>
            <p className="text-sm text-slate-600">
              {trainers.length} trainer{trainers.length === 1 ? '' : 's'} match your
              search.
            </p>
          </div>
        </div>

        {trainers.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <h3 className="text-lg font-bold text-slate-950">No trainers found</h3>
            <p className="mt-2 text-sm text-slate-600">
              Try changing the search term or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default TrainerGrid
