import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  // Team member data
  const teamMembers = [
    {
      name: "Emily Chen",
      role: "Founder & Creative Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop",
      bio: "Former luxury buyer with a passion for timeless design.",
    },
    {
      name: "Michael Torres",
      role: "Head of Craftsmanship",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      bio: "Master leather artisan with 20 years of experience.",
    },
    {
      name: "Sophia Williams",
      role: "Sustainability Lead",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop",
      bio: "Driving ethical sourcing and eco-friendly practices.",
    },
  ];

  // Milestones
  const milestones = [
    { year: "2015", title: "Brand Founded", description: "Started in a small studio in Milan." },
    { year: "2017", title: "First Flagship Store", description: "Opened in SoHo, New York." },
    { year: "2019", title: "Sustainable Commitment", description: "100% ethically sourced leather." },
    { year: "2022", title: "Global Reach", description: "Now shipping to over 30 countries." },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Crafting Stories, <span className="text-orange-500">One Bag at a Time</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe accessories should be as unique as the person carrying them. 
            Our journey began with a simple idea: create timeless pieces that blend 
            artistry with everyday functionality.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-500">Story</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Founded in 2015, we started with a mission to redefine modern elegance. 
              What began as a small atelier in Milan has grown into a global brand 
              loved by those who appreciate quality and design.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Every bag is a collaboration between master artisans and visionary 
              designers. We source the finest materials and pour our passion into 
              each stitch, ensuring that every piece tells a story of its own.
            </p>
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Explore Our Collections
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1591287084567-3752c0c5b5e6?w=600&auto=format&fit=crop"
              alt="Artisan crafting bag"
              className="rounded-2xl shadow-lg object-cover h-64 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&auto=format&fit=crop"
              alt="Leather workshop"
              className="rounded-2xl shadow-lg object-cover h-64 w-full mt-8"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & <span className="text-orange-500">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Guided by integrity, creativity, and a love for craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on materials or craftsmanship. Every bag is built to last.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 8v2m0 0v2m0-2h0m-6-8h.01M18 8h.01M6 12h.01M18 12h.01M6 16h.01M18 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ethical Sourcing</h3>
              <p className="text-gray-600">
                We partner with suppliers who share our commitment to fair labor and sustainability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Love</h3>
              <p className="text-gray-600">
                Our community inspires us. We design with your needs and dreams in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Journey</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Key moments that shaped who we are today.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the <span className="text-orange-500">Makers</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Passionate people behind every stitch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Features) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <svg className="w-12 h-12 mx-auto text-orange-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Shipping Worldwide</h3>
              <p className="text-gray-600">On all orders over $200.</p>
            </div>
            <div>
              <svg className="w-12 h-12 mx-auto text-orange-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">30-Day Returns</h3>
              <p className="text-gray-600">Not in love? Return for free.</p>
            </div>
            <div>
              <svg className="w-12 h-12 mx-auto text-orange-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2-Year Warranty</h3>
              <p className="text-gray-600">On craftsmanship and materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Find Your Perfect Bag?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Explore our collections and discover the accessory that speaks to you.
          </p>
          <Link
            to="/collections"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;