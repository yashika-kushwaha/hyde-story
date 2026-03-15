import React from "react";
import { Link } from "react-router-dom";

// Sample product data – replace with your actual diamond bag products
const diamondBags = [
  {
    id: 1,
    name: "Stardust Clutch",
    price: 429.99,
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&auto=format&fit=crop",
    slug: "stardust-clutch",
  },
  {
    id: 2,
    name: "Crystal Quilted Shoulder",
    price: 589.99,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&auto=format&fit=crop",
    slug: "crystal-shoulder",
  },
  {
    id: 3,
    name: "Diamond Mesh Tote",
    price: 799.99,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&auto=format&fit=crop",
    slug: "diamond-mesh-tote",
  },
  {
    id: 4,
    name: "Gemstone Mini Bag",
    price: 329.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop",
    slug: "gemstone-mini",
  },
  {
    id: 5,
    name: "Sapphire Evening Clutch",
    price: 499.99,
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&auto=format&fit=crop",
    slug: "sapphire-clutch",
  },
  {
    id: 6,
    name: "Pearl & Crystal Satchel",
    price: 459.99,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&auto=format&fit=crop",
    slug: "pearl-satchel",
  },
];

// Lookbook images (for editorial section)
const lookbookImages = [
  {
    url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop",
    caption: "Evening Glam",
  },
  {
    url: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&auto=format&fit=crop",
    caption: "City Sparkle",
  },
  {
    url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop",
    caption: "Red Carpet",
  },
  {
    url: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&auto=format&fit=crop",
    caption: "Modern Muse",
  },
];

// Celebrities / influencers (for as seen on)
const celebrities = [
  {
    name: "Emma Stone",
    image:
      "https://images.unsplash.com/photo-1494790108777-296ef5a5f7d1?w=400&auto=format&fit=crop",
    occasion: "Golden Globe Awards",
  },
  {
    name: "Zendaya",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop",
    occasion: "Paris Fashion Week",
  },
  {
    name: "Priyanka Chopra",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop",
    occasion: "Met Gala",
  },
];

const Diamonds = () => {
  return (
    <main className="bg-black text-white">
      {/* Hero Section with Video Placeholder (if video not available, use image with overlay) */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background image with shimmer effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2070&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Animated sparkle overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-white rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-700"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-sm tracking-[0.3em] uppercase mb-4 text-gray-300 animate-fade-in-up">
            The Diamond Collection
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight animate-fade-in-up animation-delay-200">
            Where <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Light</span> Meets Leather
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300 animate-fade-in-up animation-delay-400">
            Hand‑set crystals on the finest Italian leathers. Each piece is a
            constellation of craftsmanship.
          </p>
          <div className="flex flex-wrap gap-6 justify-center animate-fade-in-up animation-delay-600">
            <Link
              to="/collections/diamonds"
              className="group relative px-10 py-5 bg-transparent border border-white text-white font-medium overflow-hidden transition-all duration-300 hover:text-black"
            >
              <span className="relative z-10">Discover the Collection</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link
              to="/custom"
              className="px-10 py-5 bg-white text-black font-medium hover:bg-gray-200 transition-colors"
            >
              Create Your Own
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Lookbook / Editorial Grid */}
      <section className="py-24 px-6 bg-black" aria-labelledby="lookbook-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              id="lookbook-heading"
              className="text-4xl md:text-5xl font-light mb-4"
            >
              The <span className="font-bold text-blue-300">Lookbook</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              See how the Diamond Collection transforms moments into memories.
            </p>
          </div>

          {/* Masonry-like grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="relative group overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={lookbookImages[0].url}
                  alt={lookbookImages[0].caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-lg font-semibold">{lookbookImages[0].caption}</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl aspect-square">
                <img
                  src={lookbookImages[1].url}
                  alt={lookbookImages[1].caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-lg font-semibold">{lookbookImages[1].caption}</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 mt-6 md:mt-12">
              <div className="relative group overflow-hidden rounded-2xl aspect-square">
                <img
                  src={lookbookImages[2].url}
                  alt={lookbookImages[2].caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-lg font-semibold">{lookbookImages[2].caption}</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={lookbookImages[3].url}
                  alt={lookbookImages[3].caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-lg font-semibold">{lookbookImages[3].caption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Diamond Difference (icon features) */}
      <section className="py-24 bg-gray-900" aria-labelledby="difference-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              id="difference-heading"
              className="text-4xl md:text-5xl font-light mb-4"
            >
              The <span className="font-bold text-blue-300">Diamond</span> Difference
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              What makes our diamond bags truly exceptional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4m0 0l-2-2m2 2l2-2m-2 16v-4m0 0l-2 2m2-2l2 2M5 12H3m4 0H7m10 0h2m-2 0h-2m-8 0H5m10 0h-2M6 6l1 1m9-1l-1 1M6 18l1-1m9 1l-1-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Conflict‑Free Crystals</h3>
              <p className="text-gray-400">All our stones are ethically sourced and certified.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Hand‑Set by Artisans</h3>
              <p className="text-gray-400">Every stone is individually placed for maximum brilliance.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Lifetime Guarantee</h3>
              <p className="text-gray-400">We stand behind the quality of our craftsmanship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Carousel style on mobile, grid on desktop */}
      <section className="py-24 bg-black" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              id="featured-heading"
              className="text-4xl md:text-5xl font-light mb-4"
            >
              Bestselling <span className="font-bold text-blue-300">Sparkles</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our most loved diamond bags, crafted to dazzle.
            </p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:overflow-visible">
            {diamondBags.slice(0, 4).map((bag, index) => (
              <div
                key={bag.id}
                className="group relative min-w-[280px] md:min-w-0 bg-gray-800 rounded-2xl overflow-hidden snap-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={bag.image}
                    alt={bag.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <button
                    className="absolute top-4 right-4 bg-gray-900 p-2 rounded-full shadow-md hover:bg-blue-400 hover:text-black transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white mb-2 line-clamp-1">
                    <Link to={`/product/${bag.slug}`} className="hover:text-blue-300 transition-colors">
                      {bag.name}
                    </Link>
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300 font-bold text-lg">${bag.price.toFixed(2)}</span>
                    <button
                      className="text-sm bg-gray-700 hover:bg-blue-400 hover:text-black px-3 py-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label={`Add ${bag.name} to cart`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/collections/diamonds"
              className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-300 font-medium group"
            >
              View All Diamond Bags
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* As Seen On (Celebrity Section) */}
      <section className="py-24 bg-gray-900" aria-labelledby="celebrity-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              id="celebrity-heading"
              className="text-4xl md:text-5xl font-light mb-4"
            >
              As Seen <span className="font-bold text-blue-300">On</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Worn by icons at the world's most glamorous events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {celebrities.map((celeb, index) => (
              <div key={celeb.name} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-300">
                  <img src={celeb.image} alt={celeb.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-2xl font-semibold">{celeb.name}</h3>
                <p className="text-gray-400">{celeb.occasion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Sparkle (Process Timeline) */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Behind the <span className="font-bold text-blue-300">Sparkle</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From sketch to showcase – the journey of a diamond bag.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line (hidden on mobile) */}
            <div className="hidden md:block absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-500"></div>
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl font-bold text-white relative z-10">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-2">Step {step}</h3>
                <p className="text-gray-400 text-sm">
                  {step === 1 && "Design sketch and stone selection"}
                  {step === 2 && "Hand‑cutting Italian leather"}
                  {step === 3 && "Artisan stone setting"}
                  {step === 4 && "Final polish and quality check"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter with Diamond Guide */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Get the <span className="font-bold text-blue-300">Diamond Guide</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Subscribe and receive our exclusive guide to caring for diamond bags,
            plus early access to new collections.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-blue-300 transition-colors"
            >
              Send Me the Guide
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>
    </main>
  );
};

export default Diamonds;