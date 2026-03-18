import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const renderStars = (rating) => {
    if (!rating) return null
    const stars = Math.round(rating)
    return (
      <div className="flex items-center gap-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < stars ? 'text-yellow-400 text-xs' : 'text-gray-300 text-xs'}>
              ★
            </span>
          ))}
        </div>
        <span className="text-xs text-gray-500">({rating})</span>
      </div>
    )
  }

  return (
    <Link to="/shop" className="block group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-base hover:shadow-lg transition-all duration-300 active:scale-95">
        {/* Image Container */}
        <div className="overflow-hidden aspect-square bg-gray-100 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-2.5 py-1 rounded-lg font-bold text-sm shadow-md">
              -{product.discount}%
            </div>
          )}
          
          {/* Flash Deal Badge */}
          {product.discount && product.discount > 50 && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2.5 py-1 rounded-lg text-xs font-bold shadow-md">
              🔥 Flash Deal
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="px-3 md:px-4 py-3 md:py-4 space-y-2">
          {/* Name */}
          <p className="text-sm text-gray-700 leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors font-medium font-display">
            {product.name}
          </p>

          {/* Rating */}
          {product.rating && renderStars(product.rating)}

          {/* Prices */}
          <div className="flex items-center gap-2 flex-wrap pt-1">
            <span className="text-lg font-bold text-red-600">{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
            )}
          </div>

          {/* Sold Count */}
          {product.sold && (
            <p className="text-xs text-gray-500 font-medium">Sold {product.sold}</p>
          )}

          {/* Free Shipping Badge */}
          <div className="flex items-center gap-1 text-xs pt-1">
            <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-lg font-semibold">🚚 Free Ship</span>
          </div>
        </div>
      </div>
    </Link>
  )
}