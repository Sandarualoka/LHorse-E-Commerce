export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-2 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} lHorse. Built with React + Vite.</p>
        <p className="flex flex-wrap items-center justify-center gap-2">
          <a href="/" className="text-slate-500 hover:underline">
            Privacy
          </a>
          <span aria-hidden>·</span>
          <a href="/" className="text-slate-500 hover:underline">
            Terms
          </a>
        </p>
      </div>
    </footer>
  )
}
