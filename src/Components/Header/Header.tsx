import { useState } from "react";
import { FaBars, FaTimes, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full z-50 bg-white shadow-sm py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-48 md:w-60 lg:w-64 h-auto object-contain"
          />
        </div>

        {/* Contact Info & Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Contact Info for Large Screens */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Mail Section */}
            <div className="flex items-center space-x-3">
              <a
                href="mailto:admin@carebridgerehab.com"
                className="bg-[#2c5899] text-white p-3 rounded-full"
              >
                <FaEnvelope className="text-white text-2xl" />
              </a>
              <div className="leading-tight">
                <p className="text-sm text-gray-500">MAIL US</p>
                <a
                  href="mailto:office@carebridgetherapeutics.com"
                  className="text-base text-[#2c5899] font-bold"
                >
                  office@carebridgetherapeutics.com
                </a>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-center space-x-3">
              <a
                href="https://wa.me/17086789145"
                className="bg-[#2c5899] text-white p-3 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhone className="text-white text-2xl" />
              </a>
              <div className="leading-tight">
                <p className="text-sm text-gray-500">CALL US</p>
                <a
                  href="https://wa.me/17086789145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#2c5899] font-bold"
                >
                  +1 (708) 678-9145
                </a>
              </div>
            </div>
          </div>

          {/* Menu Toggle for Small Screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#2c5899] text-3xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          menuOpen || window.innerWidth >= 768 ? "block" : "hidden"
        } bg-gray-100 mt-3 md:block`}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 py-3">
          {/* Navigation Links */}
          <Link
            to="/"
            className="text-gray-700 hover:text-[#2c5899] text-lg font-semibold"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="text-gray-700 hover:text-[#2c5899] text-lg font-semibold"
          >
            About
          </Link>
          <Link
            to="/Services"
            className="text-gray-700 hover:text-[#2c5899] text-lg font-semibold"
          >
            Services
          </Link>
          <Link
            to="/Contact"
            className="text-gray-700 hover:text-[#2c5899] text-lg font-semibold"
          >
            Contact us
          </Link>
          <Link
            to="/privacy"
            className="text-gray-700 hover:text-[#2c5899] text-lg font-semibold"
          >
            Privacy Policy
          </Link>

          {/* Contact Info for Small Screens */}
          {menuOpen && (
            <div className="flex flex-col md:hidden space-y-4 mt-4">
              {/* Mail Section */}
              <div className="flex items-center space-x-2">
                <a
                  href="mailto:admin@carebridgerehab.com"
                  className="bg-[#2c5899] text-white p-2 rounded-full"
                >
                  <FaEnvelope className="text-white text-2xl" />
                </a>
                <div>
                  <p className="text-sm text-gray-500">MAIL US</p>
                  <a
                    href="mailto:office@carebridgetherapeutics.com"
                    className="text-sm text-[#2c5899] font-bold"
                  >
                    office@carebridgetherapeutics.com
                  </a>
                </div>
              </div>

              {/* Phone Section */}
              <div className="flex items-center space-x-2">
                <a
                  href="https://wa.me/17086789145"
                  className="bg-[#2c5899] text-white p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPhone className="text-white text-2xl" />
                </a>
                <div>
                  <p className="text-sm text-gray-500">CALL US</p>
                  <a
                    href="https://wa.me/17086789145"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2c5899] font-bold"
                  >
                    +1 (708) 678-9145
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
