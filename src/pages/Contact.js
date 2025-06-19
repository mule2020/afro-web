export default function Contact() {
  return (
    <div className="bg-background text-text">
      {/* Page Header */}
      <section className="py-16 px-6 text-center bg-primary text-white">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="max-w-xl mx-auto text-lg">
          Whether you're planning a renovation, a demolition, or just exploring options — we’d love to hear from you.
        </p>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 items-start">
        
        {/* Contact Details */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Afro Renovation and Demolition Inc.</h3>
            <p className="text-gray-700">
              111 Richmond St W, Toronto, ON, Canada
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-secondary">Phone</h4>
            <p className="text-gray-800">+1 (416) 555-2345</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-secondary">Email</h4>
            <p className="text-gray-800">info@afrorenovation.ca</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-secondary">Business Hours</h4>
            <p className="text-gray-800">Mon – Sat: 9:00 AM – 6:00 PM</p>
            <p className="text-gray-800">Closed Sundays</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <h3 className="text-xl font-semibold text-primary">Send Us a Message</h3>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-secondary focus:border-secondary"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-secondary focus:border-secondary"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tell us about your project..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-secondary focus:border-secondary"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-secondary text-white px-6 py-3 rounded shadow hover:bg-primary transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Optional Map */}
      <section className="px-6 pb-16 text-center">
        <h4 className="text-xl font-bold text-primary mb-2">Our Office</h4>
        <p className="mb-4 text-gray-700">Visit us at our downtown Toronto location</p>
        <div className="w-full h-64 rounded-lg overflow-hidden shadow">
          {/* Embed or placeholder map */}
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.344015185257!2d-79.3871!3d43.6502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d4f44e27fd%3A0xd2934c5e1e8a3c5e!2s111%20Richmond%20St%20W%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1710000000000!5m2!1sen!2sca"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
