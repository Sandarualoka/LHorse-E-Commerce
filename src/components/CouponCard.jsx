import { useState } from 'react'

function CouponCard({ coupon }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(coupon.code).catch(() => { })
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }
  return (
    <div
      onClick={copy}
      className="flex items-center justify-between gap-3 md:gap-4 bg-white/10 backdrop-blur-md border border-white/30 hover:border-white/50 px-4 md:px-5 py-3 md:py-4 cursor-pointer transition-all rounded-2xl active:scale-95"
    >
      <div className="min-w-0">
        <span className="text-white font-black text-lg md:text-xl block">{coupon.off} OFF</span>
        <span className="text-white/70 text-xs md:text-sm font-medium block">Min. {coupon.min}</span>
      </div>
      <button
        onClick={e => { e.stopPropagation(); copy() }}
        className={`text-xs md:text-sm font-bold tracking-widest uppercase px-3 md:px-4 py-2 border rounded-lg transition-all whitespace-nowrap ml-auto ${copied
            ? 'bg-white border-white text-orange-600 shadow-lg'
            : 'bg-transparent border-white/40 text-white hover:bg-white/20'
          }`}
      >
        {copied ? '✓' : coupon.code}
      </button>
    </div>
  )
}

export default CouponCard