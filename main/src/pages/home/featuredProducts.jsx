import React from "react";
import { Link } from "react-router-dom";

// Sample product data – replace with your actual data source
const featuredProducts = [
  {
    id: 1,
    name: "Leather Tote Bag",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&auto=format&fit=crop",
    slug: "leather-tote-bag",
  },
  {
    id: 2,
    name: "Canvas Backpack",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop",
    slug: "canvas-backpack",
  },
  {
    id: 3,
    name: "Crossbody Sling",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&auto=format&fit=crop",
    slug: "crossbody-sling",
  },
  {
    id: 4,
    name: "Clutch Evening Bag",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&auto=format&fit=crop",
    slug: "clutch-evening-bag",
  },
];

const HomeFeatured = () => {
  return (
    <section className="w-full py-20 bg-white" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            id="featured-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Featured <span className="text-orange-500">Collections</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Handpicked styles that combine elegance with everyday functionality.
            Discover your next favorite bag.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Quick View Overlay (optional) */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Link
                    to={`/product/${product.slug}`}
                    className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    Quick View
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                  <Link to={`/product/${product.slug}`} className="hover:text-orange-500 transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-bold">${product.price.toFixed(2)}</span>
                  <button
                    className="text-sm bg-gray-100 hover:bg-orange-500 hover:text-white px-3 py-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-orange-500 transition-colors duration-300 font-medium group"
          >
            View All Products
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;