export default function AboutPage() {
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
                  className="text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
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

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Neon Store
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're passionate about bringing the future to your doorstep with
              cutting-edge neon technology and innovative design solutions.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Founded in 2020, Neon Store emerged from a simple vision: to
                  illuminate the world with innovative lighting solutions that
                  blend technology with artistry. What started as a small
                  workshop has grown into a leading destination for neon
                  enthusiasts worldwide.
                </p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Our team of designers, engineers, and artists work tirelessly
                  to create products that don't just light up spaces—they
                  transform them into immersive experiences that inspire and
                  energize.
                </p>
                <div className="flex space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      50K+
                    </div>
                    <div className="text-gray-400">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      200+
                    </div>
                    <div className="text-gray-400">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">
                      4.8★
                    </div>
                    <div className="text-gray-400">Rating</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-900/50 to-purple-900/50 rounded-2xl p-8 border border-cyan-500/30">
                  <div className="text-6xl mb-4 text-center">🌟</div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-white">
                    Innovation First
                  </h3>
                  <p className="text-gray-300 text-center">
                    We believe in pushing the boundaries of what's possible with
                    light, creating products that are both beautiful and
                    functional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "💡",
                  title: "Innovation",
                  description:
                    "We constantly push the boundaries of lighting technology to create products that amaze and inspire.",
                  color: "cyan",
                },
                {
                  icon: "🎨",
                  title: "Creativity",
                  description:
                    "Every product is a work of art, designed to transform spaces and create unforgettable experiences.",
                  color: "purple",
                },
                {
                  icon: "🌍",
                  title: "Sustainability",
                  description:
                    "We're committed to eco-friendly practices and energy-efficient LED technology for a better future.",
                  color: "pink",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-${value.color}-500/30 hover:border-${value.color}-400/60 transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="text-5xl mb-6 text-center">{value.icon}</div>
                  <h3
                    className={`text-2xl font-bold mb-4 text-center text-${value.color}-400`}
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Chen",
                  role: "CEO & Founder",
                  avatar: "👨‍💼",
                  description:
                    "Visionary leader with 15+ years in lighting design and technology innovation.",
                  color: "cyan",
                },
                {
                  name: "Sarah Kim",
                  role: "Head of Design",
                  avatar: "👩‍🎨",
                  description:
                    "Creative genius behind our most iconic neon art pieces and installations.",
                  color: "purple",
                },
                {
                  name: "Marcus Rodriguez",
                  role: "CTO",
                  avatar: "👨‍💻",
                  description:
                    "Tech wizard who brings our wildest lighting concepts to life through code.",
                  color: "pink",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-${member.color}-500/30 hover:border-${member.color}-400/60 transition-all duration-300 transform hover:scale-105 text-center`}
                >
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className={`text-${member.color}-400 font-medium mb-4`}>
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              To democratize access to premium lighting technology and empower
              everyone to create spaces that reflect their unique style and
              personality. We believe that great lighting isn't just about
              illumination—it's about transformation.
            </p>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Join the Neon Revolution
              </h3>
              <p className="text-gray-300 mb-6">
                Ready to transform your space with cutting-edge neon technology?
                Explore our collection and discover the future of lighting.
              </p>
              <a
                href="/products"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Shop Now
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
        }
      `}</style>
    </div>
  );
}
