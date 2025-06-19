export default function Services() {
  return (
    <div className="bg-background text-text">

      {/* Header Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          At Afro Renovation and Demolition Inc., we deliver end-to-end solutions tailored to meet every client’s vision — with precision, professionalism, and care.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto grid gap-8 px-6 pb-20 md:grid-cols-3 sm:grid-cols-2">
        {[
          {
            title: "Home Renovation",
            desc: "Transform kitchens, bathrooms, basements and more — modern finishes, functional layouts, and premium materials.",
            img: "/images/c2.jpg"
          },
          {
            title: "Commercial Remodeling",
            desc: "Upgrade your office or retail space with clean, smart, and client-focused design solutions.",
            img: "/images/c3.jpg"
          },
          {
            title: "Interior Design",
            desc: "Our creative team delivers fresh and elegant design plans tailored to your space and lifestyle.",
            img: "/images/c4.jpg"
          },
          {
            title: "Demolition Services",
            desc: "Safe, fast, and eco-conscious demolition with proper permits and professional cleanup.",
            img: "/images/c1.jpg"
          },
          {
            title: "Flooring & Tiling",
            desc: "High-quality floor installations — from hardwood and vinyl to custom tile work.",
            img: "/images/c2.jpg"
          },
          {
            title: "Painting & Finishing",
            desc: "Interior and exterior painting, feature walls, staining, and smooth finishing.",
            img: "/images/c3.jpg"
          },
        ].map((service, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
            <img src={service.img} alt={service.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Highlight Strip */}
      <section className="bg-primary text-white py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Why Our Clients Choose Us</h3>
        <p className="max-w-3xl mx-auto text-lg">
          From first consultation to final cleanup, we ensure every detail is handled with care. We're proud of our transparent pricing, experienced team, and long-standing trust in Toronto communities.
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h4 className="text-2xl font-bold mb-4">Ready to Renovate or Demolish?</h4>
        <p className="text-gray-700 mb-6">Let’s turn your space into something exceptional. Book a free consultation today.</p>
        <a
          href="/contact"
          className="inline-block bg-secondary text-white px-6 py-3 rounded shadow hover:bg-primary transition"
        >
          Get a Free Quote
        </a>
      </section>
    </div>
  );
}
