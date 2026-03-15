import React from "react";
import { Link } from "react-router-dom";

const Home_Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center bg-gray-50 pt-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Discover Stylish <span className="text-orange-500">Bags</span> For
            Every Occasion
          </h1>

          <p className="text-gray-600 mb-8">
            Explore our premium collection of modern and elegant bags designed
            for comfort, style, and everyday use.
          </p>

          <div className="flex gap-4">

            <Link
              to="/collections"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Shop Now
            </Link>

            <Link
              to="/collections"
              className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
            >
              View Collection
            </Link>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1760624294582-5341f33f9fa4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bag"
            className="w-full max-w-md object-contain"
          />

        </div>

      </div>

    </section>
  );
};

export default Home_Hero;