import { useState, useRef, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
  Package,
  Coins,
} from 'lucide-react'
import CartPanel from './CartPanel'

const categoryNavItems = [
  { label: 'Bundle deals', to: '/bundle-deals', highlight: true },
  { label: 'Choice', to: '/choice' },
  { label: 'SuperDeals', to: '/superdeals' },
  { label: 'LHorse Business', to: '/business' },
  { label: 'Computer, Office & Education', to: '/category/computer' },
  { label: 'Home Improvement & Lighting', to: '/category/home' },
]

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartPanelOpen, setCartPanelOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        {/* Top bar */}
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">

            <Link to="/" className="flex-shrink-0 flex items-center gap-1 mr-2">
              <span className="text-xl font-black text-gray-900 tracking-tight">lHorse</span>
            </Link>

            <form
              onSubmit={handleSearch}
              className="flex-1 flex items-center border border-gray-300 rounded overflow-hidden hover:border-gray-400 focus-within:border-gray-800 transition-colors"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-4 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none bg-white"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-900 hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                <Search size={16} className="text-white" />
              </button>
            </form>

            <div className="flex items-center gap-1 ml-2 flex-shrink-0">

              <button className="hidden md:flex items-center gap-1 px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors">
                <span>🇱🇰</span>
                <span className="font-medium">EN / LKR</span>
                <ChevronDown size={12} />
              </button>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(prev => !prev)}
                  className="flex flex-col items-center px-2 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                >
                  <User size={18} />
                  <span className="text-[10px] mt-0.5 hidden md:block leading-none">
                    Sign in / Register
                  </span>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden">
                    <div className="p-4 border-b border-gray-100">
                      <Link
                        to="/login"
                        onClick={() => setUserDropdownOpen(false)}
                        className="block w-full bg-gray-900 text-white text-sm font-semibold text-center py-2.5 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Sign in
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setUserDropdownOpen(false)}
                        className="block text-center text-sm text-gray-500 hover:text-gray-800 mt-2 transition-colors"
                      >
                        Register
                      </Link>
                    </div>
                    <div className="py-1">
                      <Link
                        to="/account/orders"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Package size={15} className="text-gray-400" />
                        My Orders
                      </Link>
                      <Link
                        to="/account/coins"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Coins size={15} className="text-gray-400" />
                        My Coins
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => setCartPanelOpen(true)}
                className="relative flex flex-col items-center px-2 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors cursor-pointer"
              >
                <div className="relative">
                  <ShoppingCart size={18} />
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                    0
                  </span>
                </div>
                <span className="text-[10px] mt-0.5 hidden md:block leading-none">Cart</span>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Category nav (desktop only) */}
        <div className="border-b border-gray-100 bg-white hidden md:block">
          <div className="max-w-7xl mx-auto px-4 h-10 flex items-center gap-1 overflow-x-auto scrollbar-hide">
            <button className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded transition-colors mr-2">
              <Menu size={15} />
              All Categories
            </button>
            <div className="w-px h-5 bg-gray-200 mr-2" />
            {categoryNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex-shrink-0 px-3 py-1.5 text-sm rounded transition-colors whitespace-nowrap ${
                    item.highlight
                      ? 'text-red-500 font-semibold hover:bg-red-50'
                      : isActive
                      ? 'text-gray-900 font-semibold bg-gray-100'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      {/* ── Mobile slide-in drawer ── */}

      {/* Dimmed backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-14 border-b border-gray-100 flex-shrink-0">
          <span className="text-lg font-black text-gray-900 tracking-tight">lHorse</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Auth buttons */}
        <div className="px-4 py-4 border-b border-gray-100 flex gap-2 flex-shrink-0">
          <Link
            to="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="flex-1 bg-gray-900 text-white text-sm font-semibold text-center py-2.5 rounded-xl hover:bg-gray-700 transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            onClick={() => setMobileMenuOpen(false)}
            className="flex-1 border border-gray-200 text-gray-700 text-sm font-medium text-center py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Register
          </Link>
        </div>

        {/* Nav links — scrollable */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <p className="px-3 mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Browse
          </p>
          {categoryNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-xl text-sm font-medium transition-colors mb-0.5 ${
                  item.highlight
                    ? 'text-red-500 hover:bg-red-50'
                    : isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Account links pinned to bottom */}
        <div className="border-t border-gray-100 px-3 py-3 flex-shrink-0">
          <p className="px-3 mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Account
          </p>
          <Link
            to="/account/orders"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Package size={15} className="text-gray-400" />
            My Orders
          </Link>
          <Link
            to="/account/coins"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Coins size={15} className="text-gray-400" />
            My Coins
          </Link>
        </div>
      </div>

      {/* Cart Panel */}
      <CartPanel isOpen={cartPanelOpen} onClose={() => setCartPanelOpen(false)} />
    </>
  )
}