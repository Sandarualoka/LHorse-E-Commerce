import { Link } from 'react-router-dom'
import CouponCard from './CouponCard'
import { coupons } from '../data'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-4 py-12 md:py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <span className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold border border-white/20">
                🎉 Grand Anniversary Sale
              </span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                Up to<br />
                <span className="text-7xl md:text-8xl drop-shadow-2xl">80%</span><br />
                OFF Today!
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-md font-medium">
              Exclusive deals on thousands of products. Limited time offers - Shop now before they're gone!
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
              <Link
                to="/shop"
                className="ios-button-primary group inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>🛍️</span>
                <span>Shop Now</span>
              </Link>
              <Link
                to="/shop"
                className="ios-button bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-sm inline-flex items-center justify-center gap-2"
              >
                <span>View All</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right: Coupons */}
          <div className="space-y-4 md:space-y-5">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">🎁 Exclusive Coupons</h3>
              <p className="text-white/80 text-sm mt-1">Save more with these special codes</p>
            </div>
            <div className="space-y-3">
              {coupons.map(c => <CouponCard key={c.code} coupon={c} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}