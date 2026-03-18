import HeroSection from '../components/HeroSection'
import BundleDealsSection from '../components/BundleDealsSection'
import SuperDealsSection from '../components/SuperDealsSection'
import BusinessBannerSection from '../components/LHorseInfo'
import ProductHome from '../components/ProductHome'
import BottomCTASection from '../components/BottomCTASection'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Banner */}
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 space-y-10 md:space-y-14">

        {/* Today's Best Offers Section */}
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Today's Best Offers
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-medium">
              Handpicked deals just for you
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <BundleDealsSection />
            <SuperDealsSection />
          </div>
        </div>

      </div>

      {/* Business Banner with Bulk Saver Hub + Buy Again */}
      <BusinessBannerSection />

      {/* More to Love product grid */}
      <ProductHome />

      {/* Bottom CTA */}
      <BottomCTASection />
    </div>
  )
}