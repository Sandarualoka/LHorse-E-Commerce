import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CartPanel({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close cart"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="text-center text-gray-500">
            <div className="text-5xl mb-3">🛒</div>
            <p className="text-base font-medium">Your cart is empty</p>
            <p className="text-sm text-gray-400 mt-1">Add products from the shop to get started</p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 space-y-3">
          <div className="flex justify-between text-base font-semibold">
            <span>Total:</span>
            <span className="text-gray-900">LKR 0.00</span>
          </div>
          <Link
            to="/cart"
            onClick={onClose}
            className="block w-full bg-blue-600 text-white text-center font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Full Cart
          </Link>
          <button
            onClick={onClose}
            className="w-full bg-gray-100 text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  )
}
