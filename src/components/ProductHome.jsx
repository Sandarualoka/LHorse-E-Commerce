import { useState } from 'react'
import { ShoppingCart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

// Demo products matching the screenshot style
const morToLoveProducts = [
  {
    id: 1,
    title: 'Lenovo 2TB Memory Card USB3.0 High Speed Flash TF Card',
    image: 'https://images.unsplash.com/photo-1618478594486-c65b899c4936?w=300&q=80',
    price: 101.13,
    originalPrice: 168.55,
    discount: 40,
    rating: 4.8,
    sold: '120,000+',
    badge: 'WELCOME DEAL',
    freeShipping: true,
    newShopperSave: 55.04,
  },
  {
    id: 2,
    title: 'USB 3.2 Flash Drive 2TB 520MB/s High Speed Pen Drive',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&q=80',
    price: 527.51,
    originalPrice: 879.18,
    discount: 40,
    rating: 4.6,
    sold: '4k+',
    badge: 'WELCOME DEAL',
    freeShipping: true,
    newShopperSave: 31.22,
  },
  {
    id: 3,
    title: '3 Colors in 1 Smart Selfie Lamp USB Rechargeable Ring Light',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80',
    price: 415.03,
    originalPrice: 692.08,
    discount: 40,
    rating: 4.4,
    sold: '120,000+',
    badge: null,
    freeShipping: false,
    bundleDeal: true,
    newShopperSave: null,
  },
  {
    id: 4,
    title: 'Yoga Clothes Womenswear Set Sports Fitness Outfit',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&q=80',
    price: 743.8,
    originalPrice: 1239.67,
    discount: 40,
    rating: 4.8,
    sold: '100,000+',
    badge: 'New',
    freeShipping: true,
    newShopperSave: 97.11,
  },
  {
    id: 5,
    title: 'Cushion Rimless Sunglasses Oversized Square UV400 Shades',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&q=80',
    price: 3951.55,
    originalPrice: 6585.92,
    discount: 40,
    rating: 4.7,
    sold: '45,000+',
    badge: 'WELCOME DEAL',
    freeShipping: true,
    newShopperSave: 233.28,
  },
  {
    id: 6,
    title: 'New Arrival Necklace Gold Plated Chain Jewelry Set',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=80',
    price: 2385.68,
    originalPrice: 3976.13,
    discount: 40,
    rating: 4.5,
    sold: '1,173+',
    badge: 'WELCOME DEAL',
    freeShipping: false,
    newShopperSave: 174.20,
  },
  {
    id: 7,
    title: '64TB USB 3.0 Metal Pendrive Flash Drive High Speed Storage',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&q=80',
    price: 101.13,
    originalPrice: 168.55,
    discount: 40,
    rating: 4.0,
    sold: '3,560+',
    badge: 'WELCOME DEAL',
    freeShipping: true,
    newShopperSave: 55.04,
  },
  {
    id: 8,
    title: 'JUSTEK Type-C Purple OTG USB Flash Drive 2TB Expansion',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&q=80',
    price: 527.51,
    originalPrice: 879.18,
    discount: 35,
    rating: 4.0,
    sold: '1,400+',
    badge: null,
    freeShipping: false,
    newShopperSave: 31.22,
  },
  {
    id: 9,
    title: 'KIONVE Duo Cleopatra 2.0 Sex Eyes Color Contact Lenses',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&q=80',
    price: 1084.67,
    originalPrice: 1807.78,
    discount: 40,
    rating: 4.5,
    sold: '120,000+',
    badge: null,
    freeShipping: true,
    newShopperSave: null,
  },
  {
    id: 10,
    title: 'Earbuds Wireless Bluetooth 5.3 Sport Waterproof Headset',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&q=80',
    price: 743.8,
    originalPrice: 1239.67,
    discount: 40,
    rating: 4.5,
    sold: '45,000+',
    badge: 'Sale',
    freeShipping: true,
    newShopperSave: 97.11,
  },
  {
    id: 11,
    title: 'CCD+CMOS 4K 1080P Digital Camera Night Vision Vlogging',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&q=80',
    price: 3951.55,
    originalPrice: 6585.92,
    discount: 40,
    rating: 4.5,
    sold: '43,000+',
    badge: null,
    freeShipping: false,
    newShopperSave: 233.28,
  },
  {
    id: 12,
    title: 'PKCASE Smart Mirror Flip Phone Case Cover Makeup Mirror',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&q=80',
    price: 2385.68,
    originalPrice: 3976.13,
    discount: 30,
    rating: 4.5,
    sold: '2,400+',
    badge: 'WELCOME DEAL',
    freeShipping: true,
    newShopperSave: 174.20,
  },
]

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white border border-gray-100 rounded-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges row */}
        <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
          {product.badge === 'WELCOME DEAL' && (
            <span className="bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm leading-tight uppercase tracking-wide">
              WELCOME DEAL
            </span>
          )}
          {product.badge === 'New' && (
            <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm leading-tight">
              New
            </span>
          )}
          {product.badge === 'Sale' && (
            <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm leading-tight">
              Sale
            </span>
          )}
          {product.freeShipping && (
            <span className="bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm leading-tight">
              Free shipping
            </span>
          )}
          {product.bundleDeal && (
            <span className="bg-blue-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm leading-tight">
              Bundle deal
            </span>
          )}
        </div>

        {/* Cart button on hover */}
        <button
          className={`absolute bottom-2 right-2 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm transition-opacity duration-200 hover:bg-gray-50 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={(e) => {
            e.preventDefault()
            // add to cart logic
          }}
        >
          <ShoppingCart size={13} className="text-gray-700" />
        </button>
      </div>

      {/* Info */}
      <div className="p-2 flex flex-col gap-1 flex-1">
        {/* Title */}
        <p className="text-xs text-gray-700 leading-snug line-clamp-2">
          {product.title}
        </p>

        {/* Price row */}
        <div className="flex items-baseline gap-1 flex-wrap mt-0.5">
          <span className="text-sm font-bold text-gray-900">
            LKR{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-[11px] text-gray-400 line-through">
              LKR{product.originalPrice.toFixed(2)}
            </span>
          )}
          {product.discount && (
            <span className="text-[11px] text-orange-500 font-semibold">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Rating + sold */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={9}
                className={
                  i < Math.floor(product.rating)
                    ? 'text-orange-400 fill-orange-400'
                    : 'text-gray-200 fill-gray-200'
                }
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400">{product.rating}</span>
          <span className="text-[10px] text-gray-400">| {product.sold} sold</span>
        </div>

        {/* New shopper save tag */}
        {product.newShopperSave && (
          <div className="mt-auto pt-1">
            <span className="text-[10px] text-orange-600 bg-orange-50 border border-orange-100 px-1.5 py-0.5 rounded-sm leading-tight">
              New shoppers save LKR{product.newShopperSave.toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}

export default function ProductHome() {
  return (
    <div className="bg-white">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">More to love</h2>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-0 border-t border-l border-gray-100">
          {morToLoveProducts.map((product) => (
            <div key={product.id} className="border-b border-r border-gray-100">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}