import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div>
          <Link to="/" className="text-3xl font-extrabold hover:text-gray-600">
            YatraXpress
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="text-black hover:text-gray-600 font-semibold text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/rides" className="text-black hover:text-gray-600 font-semibold text-lg">
              Rides
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black hover:text-gray-600 font-semibold text-lg">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black hover:text-gray-600 font-semibold text-lg">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/riders" className="text-black hover:text-gray-600 font-semibold text-lg">
              Riders
            </Link>
          </li>
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center space-y-4 mt-4 md:hidden">
          <li>
            <Link
              to="/"
              className="text-black hover:text-gray-600 font-semibold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/rides"
              className="text-black hover:text-gray-600 font-semibold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Rides
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black hover:text-gray-600 font-semibold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-black hover:text-gray-600 font-semibold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/riders"
              className="text-black hover:text-gray-600 font-semibold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Riders
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
