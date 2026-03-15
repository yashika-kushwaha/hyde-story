import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false); // for mobile dropdown

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setCollectionsOpen(false); // close dropdown when menu closes
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setCollectionsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50" onClick={closeMenu}>
          <img
            src="/logo/logo.png"
            alt="logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu (hidden on mobile) */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
          </li>

          {/* Collections dropdown (desktop) */}
          <li className="relative group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-orange-500 transition-colors">
              Collections
              <FaChevronDown className="text-xs group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                to="/collections/engagement-rings"
                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                onClick={closeMenu}
              >
                Engagement Rings
              </Link>
              <Link
                to="/collections/necklaces"
                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                onClick={closeMenu}
              >
                Necklaces
              </Link>
              <Link
                to="/collections/earrings"
                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                onClick={closeMenu}
              >
                Earrings
              </Link>
              <Link
                to="/collections/bracelets"
                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                onClick={closeMenu}
              >
                Bracelets
              </Link>
            </div>
          </li>

          <li>
            <Link
              to="/fine-jewelry"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Fine Jewelry
            </Link>
          </li>
          <li>
            <Link
              to="/diamonds"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Diamonds
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <FaSearch
            className="cursor-pointer hover:text-orange-500 transition-colors text-xl"
            onClick={() => setSearchOpen(!searchOpen)}
          />
          <FaUser className="cursor-pointer hover:text-orange-500 transition-colors text-xl" />
          <div className="relative cursor-pointer hover:text-orange-500 transition-colors">
            <FaShoppingBag className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              3
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Search bar - slides down */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          searchOpen ? "max-h-20" : "max-h-0"
        }`}
      >
        <div className="bg-gray-100 p-4">
          <input
            type="text"
            placeholder="Search for exquisite jewelry..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Mobile menu backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile menu panel - slides from top */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-6 flex flex-col items-center">
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <ul className="mt-12 space-y-4 text-center w-full">
            <li>
              <Link
                to="/"
                className="block text-gray-700 hover:text-orange-500 text-lg"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            {/* Collections with mobile dropdown */}
            <li>
              <button
                className="flex items-center justify-center w-full text-gray-700 hover:text-orange-500 text-lg gap-2"
                onClick={() => setCollectionsOpen(!collectionsOpen)}
              >
                Collections
                <FaChevronDown
                  className={`text-sm transition-transform ${
                    collectionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  collectionsOpen ? "max-h-48" : "max-h-0"
                }`}
              >
                <div className="mt-2 space-y-2">
                  <Link
                    to="/collections/engagement-rings"
                    className="block text-gray-600 hover:text-orange-500"
                    onClick={closeMenu}
                  >
                    Engagement Rings
                  </Link>
                  <Link
                    to="/collections/necklaces"
                    className="block text-gray-600 hover:text-orange-500"
                    onClick={closeMenu}
                  >
                    Necklaces
                  </Link>
                  <Link
                    to="/collections/earrings"
                    className="block text-gray-600 hover:text-orange-500"
                    onClick={closeMenu}
                  >
                    Earrings
                  </Link>
                  <Link
                    to="/collections/bracelets"
                    className="block text-gray-600 hover:text-orange-500"
                    onClick={closeMenu}
                  >
                    Bracelets
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/fine-jewelry"
                className="block text-gray-700 hover:text-orange-500 text-lg"
                onClick={closeMenu}
              >
                Fine Jewelry
              </Link>
            </li>
            <li>
              <Link
                to="/diamonds"
                className="block text-gray-700 hover:text-orange-500 text-lg"
                onClick={closeMenu}
              >
                Diamonds
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-orange-500 text-lg"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;