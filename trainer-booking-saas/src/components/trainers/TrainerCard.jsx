function TrainerCard({ trainer }) {
  const whatsappMessage = `Hi ${trainer.full_name}, I found your profile on TrainerBook and would like to book a ${trainer.package_type} session.`
  const whatsappUrl = `https://wa.me/${trainer.whatsapp_number}?text=${encodeURIComponent(
    whatsappMessage,
  )}`

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={trainer.image_url}
        alt={trainer.full_name}
        className="h-52 w-full object-cover"
      />
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-950">{trainer.full_name}</h3>
            <p className="text-sm font-medium text-emerald-700">
              {trainer.specialty}
            </p>
          </div>
          <div className="rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-700">
            {trainer.rating}
          </div>
        </div>

        <p className="text-sm leading-6 text-slate-600">{trainer.short_bio}</p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">Location</p>
            <p className="font-semibold text-slate-900">{trainer.location}</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">Package</p>
            <p className="font-semibold text-slate-900">{trainer.package_type}</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">From</p>
            <p className="font-semibold text-slate-900">${trainer.price}</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">Experience</p>
            <p className="font-semibold text-slate-900">
              {trainer.experience_years} years
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:text-slate-950">
            View Profile
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}

export default TrainerCard
