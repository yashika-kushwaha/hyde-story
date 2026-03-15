import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 pt-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background pattern for depth */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in-up">
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Discover Stylish{" "}
            <span className="text-orange-500 relative inline-block">
              Bags
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-200 rounded-full"></span>
            </span>{" "}
            For Every Occasion
          </h1>

          <p className="text-gray-600 text-lg max-w-md">
            Explore our premium collection of modern and elegant bags designed
            for comfort, style, and everyday use.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/collections"
              className="group relative bg-black text-white px-8 py-3 rounded-lg overflow-hidden transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              <span className="relative z-10">Shop Now</span>
              <span className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>

            <Link
              to="/collections"
              className="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              View Collection
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center animate-fade-in">
          <div className="relative w-full max-w-md aspect-square">
            <img
              src="https://images.unsplash.com/photo-1760624294582-5341f33f9fa4?q=80&w=880&auto=format&fit=crop"
              srcSet="
                https://images.unsplash.com/photo-1760624294582-5341f33f9fa4?w=400&q=80 400w,
                https://images.unsplash.com/photo-1760624294582-5341f33f9fa4?w=880&q=80 880w,
                https://images.unsplash.com/photo-1760624294582-5341f33f9fa4?w=1200&q=80 1200w
              "
              sizes="(max-width: 768px) 400px, (max-width: 1200px) 880px, 1200px"
              alt="Elegant leather handbag with gold accents"
              className="w-full h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Smooth scroll indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;