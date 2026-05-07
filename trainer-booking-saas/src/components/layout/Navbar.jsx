function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="text-lg font-bold tracking-tight text-slate-950">
          TrainerBook
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          <a href="#trainers" className="hover:text-slate-950">
            Trainers
          </a>
          <a href="#features" className="hover:text-slate-950">
            Features
          </a>
          <a href="#join" className="hover:text-slate-950">
            For trainers
          </a>
        </div>
        <a
          href="#trainers"
          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Find a trainer
        </a>
      </nav>
    </header>
  )
}

export default Navbar
