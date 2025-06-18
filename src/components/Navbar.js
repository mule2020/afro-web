import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded">
              <span className="text-gray-700 font-bold">Logo</span>
            </div>
            <span className="font-bold text-lg">Afro Renovation</span>
          </div>

          <div className="hidden md:flex space-x-6 font-medium text-sm">
            <Link to="/" className="hover:text-secondary">Home</Link>
            <Link to="/about" className="hover:text-secondary">About</Link>
            <Link to="/services" className="hover:text-secondary">Services</Link>
            <Link to="/projects" className="hover:text-secondary">Projects</Link>
            <Link to="/contact" className="hover:text-secondary">Contact</Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-secondary hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-75" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-secondary"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-secondary"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-secondary"
            >
              Services
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-secondary"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-secondary"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
