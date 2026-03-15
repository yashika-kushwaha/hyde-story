import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes
} from "react-icons/fa";

function Navbar() {

  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  return (

    <nav className="bg-white shadow-md fixed w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
<Link to="/" className="flex items-center">
  <img 
    src="/logo/logo.png"
    alt="logo"
    className="h-10 w-auto object-contain"
  />
</Link>

        {/* Menu */}
        <ul className={`md:flex gap-8 items-center absolute md:static bg-white left-0 w-full md:w-auto transition-all duration-300
        ${menu ? "top-16" : "top-[-400px]"}`}>

          <li>
            <Link to="/" className="block p-4 md:p-0">
              Home
            </Link>
          </li>

          <li className="relative group">

            <Link to="/collections" className="block p-4 md:p-0">
              Collections
            </Link>

            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2">

              <Link to="/collections" className="block px-6 py-2 hover:bg-gray-100">
                Engagement Rings
              </Link>

              <Link to="/collections" className="block px-6 py-2 hover:bg-gray-100">
                Necklaces
              </Link>

              <Link to="/collections" className="block px-6 py-2 hover:bg-gray-100">
                Earrings
              </Link>

              <Link to="/collections" className="block px-6 py-2 hover:bg-gray-100">
                Bracelets
              </Link>

            </div>

          </li>

          <li>
            <Link to="/fine-jewelry" className="block p-4 md:p-0">
              Fine Jewelry
            </Link>
          </li>

          <li>
            <Link to="/diamonds" className="block p-4 md:p-0">
              Diamonds
            </Link>
          </li>

          <li>
            <Link to="/about" className="block p-4 md:p-0">
              About
            </Link>
          </li>

        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5 text-xl">

          <FaSearch
            className="cursor-pointer"
            onClick={() => setSearch(!search)}
          />

          <FaUser className="cursor-pointer" />

          <div className="relative cursor-pointer">
            <FaShoppingBag />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded">
              3
            </span>
          </div>

          {/* Mobile Toggle */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <FaTimes /> : <FaBars />}
          </div>

        </div>

      </div>

      {/* Search Box */}
      {search && (
        <div className="bg-gray-100 p-4">
          <input
            type="text"
            placeholder="Search for exquisite jewelry..."
            className="w-full p-3 border rounded"
          />
        </div>
      )}

    </nav>
  );
}

export default Navbar;