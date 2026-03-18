export default function Shop() {
  return (
    <section className="mx-auto max-w-6xl py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold text-slate-900">Shop</h1>
        <p className="mt-2 text-slate-600">
          Browse products and add them to your cart. This page is a starting point for building out a full store.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="h-36 w-full rounded-xl bg-slate-100" />
            <h2 className="mt-4 text-lg font-semibold text-slate-900">Product {idx + 1}</h2>
            <p className="mt-2 text-sm text-slate-600">
              A short description about this product. Use this space to highlight what makes it special.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-slate-900">$29.99</span>
              <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
