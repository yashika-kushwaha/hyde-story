import React from "react";
import { Link } from "react-router-dom";

// Sample product data – replace with your actual data
const featuredBags = [
  {
    id: 1,
    name: "Classic Leather Tote",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&auto=format&fit=crop",
    slug: "classic-leather-tote",
  },
  {
    id: 2,
    name: "Canvas Backpack",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop",
    slug: "canvas-backpack",
  },
  {
    id: 3,
    name: "Crossbody Sling Bag",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&auto=format&fit=crop",
    slug: "crossbody-sling",
  },
  {
    id: 4,
    name: "Evening Clutch",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&auto=format&fit=crop",
    slug: "evening-clutch",
  },
  {
    id: 5,
    name: "Travel Duffel Bag",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop",
    slug: "travel-duffel",
  },
  {
    id: 6,
    name: "Mini Backpack",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&auto=format&fit=crop",
    slug: "mini-backpack",
  },
  {
    id: 7,
    name: "Leather Satchel",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&auto=format&fit=crop",
    slug: "leather-satchel",
  },
  {
    id: 8,
    name: "Woven Beach Bag",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&auto=format&fit=crop",
    slug: "woven-beach-bag",
  },
];

const categories = [
  {
    name: "Tote Bags",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop",
    slug: "totes",
  },
  {
    name: "Backpacks",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop",
    slug: "backpacks",
  },
  {
    name: "Crossbody Bags",
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop",
    slug: "crossbody",
  },
  {
    name: "Clutches",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&auto=format&fit=crop",
    slug: "clutches",
  },
  {
    name: "Travel Bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop",
    slug: "travel",
  },
  {
    name: "Shoulder Bags",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop",
    slug: "shoulder",
  },
];

const BagsPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-screen min-h-[600px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop")', // Stylish bags display
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Carry <span className="text-orange-400">Your Story</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Discover bags that blend style, durability, and functionality—perfect
            for every journey, from daily commutes to weekend getaways.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/collections/bags"
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 text-lg"
            >
              Shop Bags
            </Link>
            <Link
              to="/new-arrivals"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 text-lg"
            >
              New Arrivals
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gray-50" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              id="categories-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Shop by <span className="text-orange-500">Category</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From everyday essentials to travel companions, find the perfect bag
              that fits your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                to={`/collections/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-square animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              id="featured-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Bestselling <span className="text-orange-500">Favorites</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our most loved bags, crafted with premium materials and designed
              to turn heads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBags.slice(0, 8).map((bag, index) => (
              <div
                key={bag.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={bag.image}
                    alt={bag.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <button
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-colors"
                    aria-label="Add to wishlist"
                  >
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
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                    <Link
                      to={`/product/${bag.slug}`}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {bag.name}
                    </Link>
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold text-lg">
                      ${bag.price.toFixed(2)}
                    </span>
                    <button
                      className="text-sm bg-gray-100 hover:bg-orange-500 hover:text-white px-3 py-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      aria-label={`Add ${bag.name} to cart`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up">
            <Link
              to="/collections/bags"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-orange-500 transition-colors duration-300 font-medium group"
            >
              View All Bags
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Craftsmanship Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Made to <span className="text-orange-500">Last</span> a Lifetime
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Each bag is thoughtfully designed and handcrafted by skilled
              artisans using full-grain leather and premium hardware. We believe
              in creating pieces that age beautifully and accompany you through
              all of life's adventures.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1"
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
                <span className="text-gray-700">Premium full-grain leather and eco-friendly materials</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1"
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
                <span className="text-gray-700">Hand-stitched details and reinforced stress points</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1"
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
                <span className="text-gray-700">Timeless designs that never go out of style</span>
              </li>
            </ul>
            <Link
              to="/craftsmanship"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-medium"
            >
              Learn About Our Process
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=600&auto=format&fit=crop"
              alt="Leather crafting"
              className="rounded-2xl shadow-lg object-cover h-64 w-full"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1591287084567-3752c0c5b5e6?w=600&auto=format&fit=crop"
              alt="Bag design sketch"
              className="rounded-2xl shadow-lg object-cover h-64 w-full mt-8"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-orange-50">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join the <span className="text-orange-500">Bag Lovers</span> Club
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Sign up for exclusive offers, early access to new collections, and
            styling tips.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-500 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </main>
  );
};

export default BagsPage;