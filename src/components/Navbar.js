import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-60 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/logoo.jpg"
              alt="Afro Renovation Logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-lg">Afro Renovation</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-medium text-sm">
            <Link to="/" className="hover:text-secondary">Home</Link>
            <Link to="/about" className="hover:text-secondary">About</Link>
            <Link to="/services" className="hover:text-secondary">Services</Link>
            <Link to="/projects" className="hover:text-secondary">Projects</Link>
            <Link to="/contact" className="hover:text-secondary">Contact</Link>
          </div>

          {/* Mobile Menu Toggle */}
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
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-75" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-secondary"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
