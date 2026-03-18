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
  LogIn,
  UserPlus,
} from 'lucide-react'
import CartPanel from './CartPanel'

const categoryNavItems = [
  { label: 'Bundle deals', to: '/bundle-deals', highlight: true },
  { label: 'Choice', to: '/choice' },
  { label: 'SuperDeals', to: '/superdeals' },
  { label: 'AliExpress Business', to: '/business' },
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

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <>
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* ── Top bar ── */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-1 mr-2">
            <span className="text-xl font-black text-gray-900 tracking-tight">lHorse</span>
          </Link>

          {/* Search bar */}
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

          {/* Right side actions */}
          <div className="flex items-center gap-1 ml-2 flex-shrink-0">

            {/* Language / Currency */}
            <button className="hidden md:flex items-center gap-1 px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors">
              <span>🇱🇰</span>
              <span className="font-medium">EN / LKR</span>
              <ChevronDown size={12} />
            </button>

            {/* User dropdown */}
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

              {/* Dropdown panel */}
              {userDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden">
                  {/* Sign in button */}
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

                  {/* Menu items */}
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

            {/* Cart */}
            <button
              onClick={() => setCartPanelOpen(true)}
              className="relative flex flex-col items-center px-2 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors cursor-pointer"
            >
              <div className="relative">
                <ShoppingCart size={18} />
                {/* Badge */}
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                  0
                </span>
              </div>
              <span className="text-[10px] mt-0.5 hidden md:block leading-none">Cart</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Category nav bar ── */}
      <div className="border-b border-gray-100 bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center gap-1 overflow-x-auto scrollbar-hide">

          {/* All Categories */}
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

      {/* ── Mobile menu ── */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {categoryNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-sm rounded transition-colors ${
                    item.highlight
                      ? 'text-red-500 font-semibold'
                      : isActive
                      ? 'bg-gray-100 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-gray-100 flex gap-3">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 bg-gray-900 text-white text-sm font-semibold text-center py-2 rounded-lg"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 border border-gray-300 text-gray-700 text-sm font-medium text-center py-2 rounded-lg"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
    {/* Cart Panel */}
    <CartPanel isOpen={cartPanelOpen} onClose={() => setCartPanelOpen(false)} />
    </>
  )
}