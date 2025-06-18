export default function Footer() {
    return (
      <footer className="bg-accent text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h4 className="font-bold text-lg">Afro Renovation and Demolition Inc.</h4>
            <p className="text-sm">Toronto, Ontario, Canada</p>
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm">Email: info@afrorenovation.ca</p>
            <p className="text-sm">Phone: +1 (647) 123‑4567</p>
          </div>
        </div>
      </footer>
    );
  }
  