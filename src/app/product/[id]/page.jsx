export default function ProductDetailPage({ params }) {
  // Mock product data - in a real app this would come from an API
  const product = {
    id: params.id,
    name: "Cyber Neon Sign",
    price: 299,
    originalPrice: 399,
    image: "🔥",
    color: "cyan",
    rating: 4.8,
    reviews: 124,
    category: "Signs",
    description:
      "Transform your space with this stunning cyber-themed neon sign. Perfect for gaming rooms, offices, or any space that needs a futuristic glow.",
    features: [
      "Premium LED neon technology",
      "Energy efficient - 80% less power consumption",
      "Dimmable with remote control",
      "Easy wall mounting system included",
      "2-year warranty",
      "Custom sizing available",
    ],
    specifications: {
      Dimensions: '24" x 12" x 1.5"',
      Power: "12V DC adapter included",
      Material: "Silicone LED strip with acrylic backing",
      Colors: "16 million color options",
      Lifespan: "50,000+ hours",
      Mounting: "Wall mount brackets included",
    },
    gallery: ["🔥", "⚡", "💫", "🌟"],
  };

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
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <a
                href="/"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Home
              </a>
              <span>/</span>
              <a
                href="/products"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Products
              </a>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Product Images */}
            <div>
              <div
                className={`bg-gradient-to-br from-${product.color}-900/50 to-gray-900 rounded-2xl p-12 mb-6 border border-${product.color}-500/30`}
              >
                <div className="text-center text-8xl mb-4">{product.image}</div>
                <div className="flex justify-center space-x-2">
                  {product.gallery.map((img, index) => (
                    <button
                      key={index}
                      className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl border border-${product.color}-500/30 hover:border-${product.color}-400/60 transition-colors duration-300`}
                    >
                      {img}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div
                className={`inline-block px-3 py-1 rounded-full bg-${product.color}-500/20 text-${product.color}-400 text-sm font-medium mb-4`}
              >
                {product.category}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-600"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-white font-medium">
                    {product.rating}
                  </span>
                </div>
                <span className="text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <span
                  className={`text-4xl font-bold text-${product.color}-400`}
                >
                  ${product.price}
                </span>
                <span className="text-2xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  Save ${product.originalPrice - product.price}
                </span>
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Add to Cart Section */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <label className="text-white font-medium">Quantity:</label>
                  <div className="flex items-center space-x-3">
                    <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-white transition-colors duration-300">
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
                    <span className="w-12 text-center text-white font-medium text-lg">
                      1
                    </span>
                    <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-white transition-colors duration-300">
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
                </div>

                <div className="flex space-x-4">
                  <button
                    className={`flex-1 bg-gradient-to-r from-${product.color}-500 to-${product.color}-600 hover:from-${product.color}-600 hover:to-${product.color}-700 px-6 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105`}
                  >
                    Add to Cart
                  </button>
                  <button className="px-6 py-4 border-2 border-gray-600 hover:border-gray-500 rounded-lg text-white transition-colors duration-300">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 text-center text-sm text-gray-400">
                  Free shipping on orders over $100 • 30-day returns
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <svg
                        className={`w-5 h-5 text-${product.color}-400`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-20">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700">
              <div className="border-b border-gray-700">
                <nav className="flex space-x-8 px-8">
                  <button className="py-4 border-b-2 border-cyan-400 text-cyan-400 font-medium">
                    Specifications
                  </button>
                  <button className="py-4 text-gray-400 hover:text-white transition-colors duration-300">
                    Reviews
                  </button>
                  <button className="py-4 text-gray-400 hover:text-white transition-colors duration-300">
                    Shipping
                  </button>
                </nav>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-3 border-b border-gray-800"
                      >
                        <span className="text-gray-400">{key}</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "RGB Gaming Mouse",
                  price: 89,
                  image: "🖱️",
                  color: "purple",
                },
                {
                  name: "LED Strip Lights",
                  price: 45,
                  image: "💡",
                  color: "pink",
                },
                { name: "Neon Clock", price: 159, image: "⏰", color: "cyan" },
                {
                  name: "Gaming Keyboard",
                  price: 199,
                  image: "⌨️",
                  color: "purple",
                },
              ].map((relatedProduct, index) => (
                <div
                  key={index}
                  className={`group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-${relatedProduct.color}-500/30 hover:border-${relatedProduct.color}-400/60 transition-all duration-300 transform hover:scale-105`}
                >
                  <div
                    className={`h-40 bg-gradient-to-br from-${relatedProduct.color}-900/50 to-gray-900 flex items-center justify-center text-5xl`}
                  >
                    {relatedProduct.image}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p
                        className={`text-xl font-bold text-${relatedProduct.color}-400`}
                      >
                        ${relatedProduct.price}
                      </p>
                      <button
                        className={`bg-gradient-to-r from-${relatedProduct.color}-500 to-${relatedProduct.color}-600 hover:from-${relatedProduct.color}-600 hover:to-${relatedProduct.color}-700 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-300`}
                      >
                        View
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
