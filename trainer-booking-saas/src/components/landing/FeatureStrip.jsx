function FeatureStrip() {
  const features = [
    'Verified trainer profiles',
    'Packages you can compare',
    'WhatsApp-first booking',
  ]

  return (
    <section className="bg-slate-950" id="features">
      <div className="mx-auto grid max-w-6xl gap-3 px-4 py-6 sm:grid-cols-3 sm:px-6">
        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white"
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureStrip
