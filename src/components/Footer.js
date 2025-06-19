import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-accent text-white pt-10 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-bold mb-2">Afro Renovation and Demolition Inc.</h4>
          <p className="text-sm">Toronto, Ontario, Canada</p>
          <p className="text-sm">Transforming homes & spaces across the GTA</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <FaEnvelope className="text-secondary" />
            <p className="text-sm">info@afrorenovation.ca</p>
          </div>
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <FaPhoneAlt className="text-secondary" />
            <p className="text-sm">+1 (647) 123‑4567</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-6 text-xs text-gray-300">
        © {new Date().getFullYear()} Afro Renovation and Demolition Inc. — All Rights Reserved.
      </div>
    </footer>
  );
}
