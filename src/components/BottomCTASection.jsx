import { Link } from 'react-router-dom'

export default function BottomCTASection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-12 md:py-20 w-full">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {/* Feature 1 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center text-white hover:bg-white/10 transition-all">
            <div className="text-5xl md:text-6xl mb-4">🚚</div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Free Shipping</h3>
            <p className="text-gray-300 text-sm md:text-base">On orders over LKR 500</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center text-white hover:bg-white/10 transition-all">
            <div className="text-5xl md:text-6xl mb-4">💯</div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Original Quality</h3>
            <p className="text-gray-300 text-sm md:text-base">100% authentic products</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center text-white hover:bg-white/10 transition-all">
            <div className="text-5xl md:text-6xl mb-4">🛡️</div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Secure Shopping</h3>
            <p className="text-gray-300 text-sm md:text-base">Safe payments & returns</p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Don't Miss Out! 🎉
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Thousands of amazing products waiting for you. Shop now and save up to 80% on selected items!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link
              to="/shop"
              className="ios-button-primary justify-center text-base md:text-lg shadow-xl hover:shadow-2xl"
            >
              Continue Shopping →
            </Link>
            <Link
              to="/cart"
              className="ios-button bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-sm justify-center text-base md:text-lg"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}