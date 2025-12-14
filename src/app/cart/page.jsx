export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Cyber Neon Sign",
      price: 299,
      quantity: 1,
      image: "🔥",
      color: "cyan",
    },
    {
      id: 2,
      name: "RGB Gaming Mouse",
      price: 89,
      quantity: 2,
      image: "🖱️",
      color: "purple",
    },
    {
      id: 3,
      name: "LED Strip Lights",
      price: 45,
      quantity: 1,
      image: "💡",
      color: "pink",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              >
                NEON STORE
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="/products"
                  className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Products
                </a>
                <a
                  href="/about"
                  className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-cyan-400 transition-colors duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Shopping Cart
            </h1>
            <p className="text-xl text-gray-300">
              Review your neon selections before checkout
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400">
                  Cart Items ({cartItems.length})
                </h2>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                    >
                      <div
                        className={`w-20 h-20 bg-gradient-to-br from-${item.color}-900/50 to-gray-900 rounded-lg flex items-center justify-center text-3xl`}
                      >
                        {item.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {item.name}
                        </h3>
                        <p className={`text-${item.color}-400 font-medium`}>
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors duration-300">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <span className="w-8 text-center text-white font-medium">
                          {item.quantity}
                        </span>
                        <button className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors duration-300">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-white">
                          ${item.price * item.quantity}
                        </p>
                        <button className="text-red-400 hover:text-red-300 text-sm transition-colors duration-300">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <a
                      href="/products"
                      className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                    >
                      ← Continue Shopping
                    </a>
                    <button className="text-red-400 hover:text-red-300 font-medium transition-colors duration-300">
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-purple-400">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 mb-4">
                  Proceed to Checkout
                </button>

                <div className="text-center text-sm text-gray-400 mb-6">
                  Secure checkout powered by SSL encryption
                </div>

                {/* Promo Code */}
                <div className="border-t border-gray-700 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Promo Code
                  </h3>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    />
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-white font-medium transition-colors duration-300">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="border-t border-gray-700 pt-6 mt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    We Accept
                  </h3>
                  <div className="flex space-x-3">
                    <div className="bg-gray-800 p-2 rounded border border-gray-600">
                      <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-400 rounded text-xs text-white flex items-center justify-center font-bold">
                        VISA
                      </div>
                    </div>
                    <div className="bg-gray-800 p-2 rounded border border-gray-600">
                      <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-orange-400 rounded text-xs text-white flex items-center justify-center font-bold">
                        MC
                      </div>
                    </div>
                    <div className="bg-gray-800 p-2 rounded border border-gray-600">
                      <div className="w-8 h-5 bg-gradient-to-r from-blue-800 to-blue-600 rounded text-xs text-white flex items-center justify-center font-bold">
                        AMEX
                      </div>
                    </div>
                    <div className="bg-gray-800 p-2 rounded border border-gray-600">
                      <div className="w-8 h-5 bg-gradient-to-r from-purple-600 to-pink-500 rounded text-xs text-white flex items-center justify-center font-bold">
                        PP
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Products */}
          <section className="mt-20 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Neon Clock", price: 159, image: "⏰", color: "cyan" },
                {
                  name: "Gaming Keyboard",
                  price: 199,
                  image: "⌨️",
                  color: "purple",
                },
                { name: "Smart Bulbs", price: 79, image: "💡", color: "pink" },
                {
                  name: "RGB Headset",
                  price: 129,
                  image: "🎧",
                  color: "purple",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className={`group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-${product.color}-500/30 hover:border-${product.color}-400/60 transition-all duration-300 transform hover:scale-105`}
                >
                  <div
                    className={`h-32 bg-gradient-to-br from-${product.color}-900/50 to-gray-900 flex items-center justify-center text-4xl`}
                  >
                    {product.image}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p
                        className={`text-xl font-bold text-${product.color}-400`}
                      >
                        ${product.price}
                      </p>
                      <button
                        className={`bg-gradient-to-r from-${product.color}-500 to-${product.color}-600 hover:from-${product.color}-600 hover:to-${product.color}-700 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300`}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
        }
      `}</style>
    </div>
  );
}
