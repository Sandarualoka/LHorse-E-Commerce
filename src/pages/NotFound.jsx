import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl py-24 text-center">
      <h1 className="text-4xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-600">
        The page you were looking for does not exist.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
        >
          Go back home
        </Link>
      </div>
    </section>
  )
}
