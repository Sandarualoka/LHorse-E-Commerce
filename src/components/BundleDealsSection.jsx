import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { bundleProducts } from '../data'

export default function BundleDealsSection() {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-900">Bundle deals</h3>
        <Link
          to="/shop"
          className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 transition-colors"
        >
          <span className="text-orange-400">🛒</span>
          3 from US $4.99
          <span className="text-gray-400">›</span>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {bundleProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}