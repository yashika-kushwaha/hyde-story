import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo */}
        <div>
          <Link to="/" className="flex items-center">
  <img 
    src="/logo/logo.png"
    alt="logo"
    className="h-10 w-auto object-contain"
  />
</Link>
          <p className="text-gray-400">
            Luxury jewelry crafted with perfection and elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/collections">Collections</Link>
            </li>

            <li>
              <Link to="/fine-jewelry">Fine Jewelry</Link>
            </li>

            <li>
              <Link to="/diamonds">Diamonds</Link>
            </li>

          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>

          <ul className="space-y-2 text-gray-400">

            <li>Contact Us</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>

          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-xl">

            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
            <FaYoutube className="cursor-pointer hover:text-gray-300" />

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © 2026 Aurelia. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;