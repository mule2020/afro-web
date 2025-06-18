export default function Contact() {
    return (
      <section className="p-8 max-w-xl">
        <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
        <p className="mt-4">Have questions or want to start a project? Reach out to us!</p>
        <form className="mt-6 flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded hover:bg-secondary transition"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  