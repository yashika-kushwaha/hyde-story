import React from "react";
import { Link } from "react-router-dom";

const Collections = () => {
  // Collection categories data
  const categories = [
    {
      name: "Diamond Collection",
      description: "Luxury bags embellished with crystals and gemstones.",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop",
      slug: "diamond",
    },
    {
      name: "Leather Classics",
      description: "Timeless leather bags for everyday elegance.",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop",
      slug: "leather",
    },
    {
      name: "Travel Collection",
      description: "Durable and stylish bags for your journeys.",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop",
      slug: "travel",
    },
    {
      name: "Evening & Clutches",
      description: "Sophisticated pieces for special occasions.",
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&auto=format&fit=crop",
      slug: "evening",
    },
    {
      name: "Crossbody Bags",
      description: "Hands-free style with a modern twist.",
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop",
      slug: "crossbody",
    },
    {
      name: "Limited Editions",
      description: "Exclusive designs, only available for a short time.",
      image:
        "https://images.unsplash.com/photo-1591287084567-3752c0c5b5e6?w=600&auto=format&fit=crop",
      slug: "limited",
    },
  ];

  // Featured collection (spotlight)
  const spotlight = {
    name: "Artisan Collection",
    description:
      "Handcrafted by master artisans using traditional techniques. Each piece tells a unique story.",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&auto=format&fit=crop",
    slug: "artisan",
  };

  // New arrivals (sample products)
  const newArrivals = [
    {
      name: "Onyx Tote",
      price: 229.99,
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&auto=format&fit=crop",
      slug: "onyx-tote",
    },
    {
      name: "Ember Clutch",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&auto=format&fit=crop",
      slug: "ember-clutch",
    },
    {
      name: "Nomad Backpack",
      price: 189.99,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop",
      slug: "nomad-backpack",
    },
    {
      name: "Celestial Crossbody",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&auto=format&fit=crop",
      slug: "celestial-crossbody",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-400">Collections</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Discover bags that blend artistry with function. From everyday
            essentials to statement pieces.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              id="categories-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Explore by <span className="text-orange-500">Category</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find the perfect style for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <Link
                key={cat.slug}
                to={`/collections/${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-[4/5]"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-sm mb-4 opacity-90">{cat.description}</p>
                  <span className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Collection */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-semibold tracking-wider uppercase mb-2 block">
                Spotlight
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {spotlight.name}
              </h2>
              <p className="text-gray-600 text-lg mb-8">{spotlight.description}</p>
              <Link
                to={`/collections/${spotlight.slug}`}
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                View Collection
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={spotlight.image}
                alt={spotlight.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24" aria-labelledby="new-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              id="new-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              New <span className="text-orange-500">Arrivals</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Fresh off the workbench – see our latest creations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((item, index) => (
              <div
                key={item.slug}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  <h3 className="font-semibold text-gray-900 mb-2">
                    <Link
                      to={`/product/${item.slug}`}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold text-lg">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      className="text-sm bg-gray-100 hover:bg-orange-500 hover:text-white px-3 py-1.5 rounded-full transition-colors"
                      aria-label={`Add ${item.name} to cart`}
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
              to="/new-arrivals"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            >
              View All New Arrivals
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Note */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <svg
            className="w-16 h-16 mx-auto text-orange-500 mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Crafted with Care for <span className="text-orange-500">the Planet</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            We use ethically sourced materials and eco-friendly processes to
            minimize our footprint. Every bag is made to last, reducing waste
            and promoting slow fashion.
          </p>
          <Link
            to="/sustainability"
            className="inline-block border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Can't Decide?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Take our style quiz to find the bag that matches your personality.
          </p>
          <Link
            to="/quiz"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
          >
            Start the Quiz
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Collections;