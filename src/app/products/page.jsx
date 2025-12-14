export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Cyber Neon Sign",
      price: 299,
      category: "Signs",
      image: "🔥",
      color: "cyan",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "RGB Gaming Mouse",
      price: 89,
      category: "Gaming",
      image: "🖱️",
      color: "purple",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 3,
      name: "LED Strip Lights",
      price: 45,
      category: "Lighting",
      image: "💡",
      color: "pink",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Neon Clock",
      price: 159,
      category: "Decor",
      image: "⏰",
      color: "cyan",
      rating: 4.5,
      reviews: 67,
    },
    {
      id: 5,
      name: "Gaming Keyboard",
      price: 199,
      category: "Gaming",
      image: "⌨️",
      color: "purple",
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 6,
      name: "Smart Bulbs",
      price: 79,
      category: "Lighting",
      image: "💡",
      color: "pink",
      rating: 4.4,
      reviews: 98,
    },
    {
      id: 7,
      name: "Neon Art Frame",
      price: 249,
      category: "Art",
      image: "🖼️",
      color: "cyan",
      rating: 4.6,
      reviews: 45,
    },
    {
      id: 8,
      name: "RGB Headset",
      price: 129,
      category: "Gaming",
      image: "🎧",
      color: "purple",
      rating: 4.7,
      reviews: 112,
    },
    {
      id: 9,
      name: "Neon Wall Panel",
      price: 399,
      category: "Decor",
      image: "🌈",
      color: "pink",
      rating: 4.8,
      reviews: 78,
    },
    {
      id: 10,
      name: "LED Desk Lamp",
      price: 119,
      category: "Lighting",
      image: "🔦",
      color: "cyan",
      rating: 4.5,
      reviews: 134,
    },
    {
      id: 11,
      name: "Gaming Chair RGB",
      price: 599,
      category: "Gaming",
      image: "🪑",
      color: "purple",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 12,
      name: "Neon Mirror",
      price: 329,
      category: "Decor",
      image: "🪞",
      color: "pink",
      rating: 4.6,
      reviews: 56,
    },
  ];

  const categories = ["All", "Signs", "Gaming", "Lighting", "Decor", "Art"];

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
                  className="text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
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
              <button className="relative p-2 text-white hover:text-cyan-400 transition-colors duration-300">
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our complete collection of neon lights, gaming gear, and
              futuristic decor
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {products.map((product) => (
              <div
                key={product.id}
                className={`group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-${product.color}-500/30 hover:border-${product.color}-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-${product.color}-500/20`}
              >
                <div
                  className={`h-48 bg-gradient-to-br from-${product.color}-900/50 to-gray-900 flex items-center justify-center text-6xl relative`}
                >
                  {product.image}
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-black/50 rounded-full text-white hover:text-red-400 transition-colors duration-300">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-sm px-2 py-1 rounded-full bg-${product.color}-500/20 text-${product.color}-400`}
                    >
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-400">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {product.reviews} reviews
                  </p>
                  <div className="flex items-center justify-between">
                    <p
                      className={`text-2xl font-bold text-${product.color}-400`}
                    >
                      ${product.price}
                    </p>
                    <button
                      className={`bg-gradient-to-r from-${product.color}-500 to-${product.color}-600 hover:from-${product.color}-600 hover:to-${product.color}-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
