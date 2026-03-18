import { Link } from 'react-router-dom'
import { bulkSaverProducts, buyAgainProducts } from '../data'

function ProductMini({ product }) {
  return (
    <div className="flex-shrink-0 w-[180px]">
      <div className="w-full h-[140px] bg-gray-100 rounded overflow-hidden mb-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-sm">
        <span className="font-bold text-gray-900">LKR{product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="text-gray-400 line-through text-xs ml-1">
            LKR{product.originalPrice.toFixed(2)}
          </span>
        )}
        {product.unit && (
          <span className="text-gray-500 text-xs ml-1">{product.unit}</span>
        )}
        {product.retailPrice && (
          <p className="text-gray-500 text-xs mt-0.5">LKR{product.retailPrice.toFixed(2)} for retail</p>
        )}
        {product.label && (
          <p className="text-gray-500 text-xs mt-0.5">{product.label}</p>
        )}
      </div>
    </div>
  )
}

export default function BusinessBannerSection() {
  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: '420px' }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Top content: branding + stats */}
      <div className="relative z-10 px-8 md:px-14 pt-8 pb-32 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {/* Left: Branding */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            <span className="italic">LHorse</span>{' '}
            <span className="text-orange-400 not-italic font-extrabold">Business</span>
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-white text-xs md:text-sm">
            <span className="flex items-center gap-1">🏷 Tax exemptions</span>
            <span className="text-white/40">|</span>
            <span className="flex items-center gap-1">💳 Express Payments</span>
            <span className="text-white/40">|</span>
            <span className="flex items-center gap-1">🛡 Financial Support</span>
          </div>
          <Link
            to="/business"
            className="mt-1 inline-block bg-white text-gray-900 text-sm font-semibold px-5 py-2 rounded hover:bg-gray-100 transition-colors w-fit"
          >
            Shop now
          </Link>
        </div>

        {/* Right: Stats */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-white">
          <div>
            <p className="text-2xl font-bold">5M+</p>
            <p className="text-xs text-white/70">Factory direct supply</p>
          </div>
          <div>
            <p className="text-2xl font-bold">20M+</p>
            <p className="text-xs text-white/70">Value dropshipping items</p>
          </div>
          <div>
            <p className="text-2xl font-bold">10</p>
            <p className="text-xs text-white/70">Local warehouses worldwide</p>
          </div>
          <div>
            <p className="text-2xl font-bold">24H</p>
            <p className="text-xs text-white/70">Personalized sourcing service</p>
          </div>
        </div>
      </div>

      {/* Floating white cards */}
      <div className="relative z-10 px-4 md:px-8 -mt-20 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">

        {/* Bulk Saver Hub */}
        <div className="bg-white rounded-lg p-5 shadow-lg">
          <h3 className="text-base font-bold text-gray-900 mb-4 text-center">Bulk Saver Hub</h3>
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {(bulkSaverProducts || fallbackBulk).map(p => (
              <ProductMini key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* Buy Again */}
        <div className="bg-white rounded-lg p-5 shadow-lg">
          <h3 className="text-base font-bold text-gray-900 mb-4 text-center">Buy again</h3>
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {(buyAgainProducts || fallbackBuyAgain).map(p => (
              <ProductMini key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

// Fallback demo data if not imported from data file
const fallbackBulk = [
  { id: 1, image: 'https://via.placeholder.com/180x140', price: 439.45, originalPrice: 659.17 },
  { id: 2, image: 'https://via.placeholder.com/180x140', price: 969.58, originalPrice: 2155.39 },
  { id: 3, image: 'https://via.placeholder.com/180x140', price: 329.38, unit: 'each, ≥5 pcs', retailPrice: 345.28 },
]
const fallbackBuyAgain = [
  { id: 4, image: 'https://via.placeholder.com/180x140', price: 463.03, unit: 'each, ≥3 pcs', label: 'Popular picks' },
  { id: 5, image: 'https://via.placeholder.com/180x140', price: 1138.81, unit: 'each, ≥3 pcs', label: 'Popular picks' },
  { id: 6, image: 'https://via.placeholder.com/180x140', price: 1346.45, unit: 'each, ≥3 pcs', label: 'Popular picks' },
]