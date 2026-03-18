import ProductCard from './ProductCard'
import CountdownTimer from './CountdownTimer'
import { superDeals } from '../data'

export default function SuperDealsSection() {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-900">SuperDeals</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="text-red-500">🕐</span>
          <span>Ends in:</span>
          <CountdownTimer />
          <span className="text-gray-400">›</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {superDeals.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}