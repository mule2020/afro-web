import { useState } from 'react';

export default function Projects() {
  const allProjects = [
    {
      title: "Modern Kitchen Renovation",
      type: "Full Home Reno",
      date: "March 2025 • Toronto",
      img: "/images/c1.jpg",
    },
    {
      title: "Retail Space Demolition",
      type: "Demolition",
      date: "Feb 2025 • Scarborough",
      img: "/images/c2.jpg",
    },
    {
      title: "Basement Finishing",
      type: "Interior Remodel",
      date: "Jan 2025 • North York",
      img: "/images/c3.jpg",
    },
    {
      title: "Condo Painting + Flooring",
      type: "Design & Finish",
      date: "Dec 2024 • Etobicoke",
      img: "/images/c4.jpg",
    },
    {
      title: "Office Partitioning",
      type: "Commercial Design",
      date: "Nov 2024 • Downtown Toronto",
      img: "/images/c1.jpg",
    },
    {
      title: "Full House Demolition",
      type: "Demolition",
      date: "Oct 2024 • Mississauga",
      img: "/images/c3.jpg",
    },
  ];

  const categories = ["All", ...new Set(allProjects.map(p => p.type))];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? allProjects
    : allProjects.filter(p => p.type === activeFilter);

  return (
    <div className="bg-background text-text">

      {/* Header */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">Our Recent Projects</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Afro Renovation and Demolition Inc. has successfully completed numerous projects across Toronto — from high-end kitchen renovations to complete building demolitions. Here are some of our highlights:
        </p>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-6xl mx-auto px-6 pb-8 flex flex-wrap justify-center gap-4">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full border font-medium text-sm transition ${
              activeFilter === cat
                ? 'bg-primary text-white'
                : 'bg-white text-primary border-primary hover:bg-secondary hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((proj, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary">{proj.title}</h3>
              <p className="text-sm text-secondary font-medium">{proj.type}</p>
              <p className="text-xs text-gray-500 mt-1">{proj.date}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Trust Highlight Strip */}
      <section className="bg-secondary text-white text-center py-16 px-6">
        <h3 className="text-2xl font-bold mb-4">Built on Trust. Backed by Results.</h3>
        <p className="max-w-3xl mx-auto text-lg">
          Our clients love our transparency, craftsmanship, and commitment. Every project is handled with pride and precision. Let us make your space the next success story.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6">
        <h4 className="text-2xl font-bold mb-4">Have a project in mind?</h4>
        <p className="text-gray-700 mb-6">We’d love to hear about it. Let’s build something great together.</p>
        <a
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded shadow hover:bg-secondary transition"
        >
          Request a Free Estimate
        </a>
      </section>
    </div>
  );
}
