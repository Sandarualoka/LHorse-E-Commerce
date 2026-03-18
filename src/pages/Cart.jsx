export default function Cart() {
  return (
    <section className="mx-auto max-w-4xl py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold text-slate-900">Shopping Cart</h1>
        <p className="mt-2 text-slate-600">Review items in your cart and proceed to checkout.</p>
      </header>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-600">Your cart is empty. Add a product from the shop to get started.</p>
      </div>
    </section>
  )
}
