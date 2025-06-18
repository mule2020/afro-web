export default function About() {
    return (
      <div>
  
        {/* Hero Section with Quote */}
        <section
          className="relative bg-cover bg-center py-20 px-4 sm:px-8"
          style={{ backgroundImage: "url('/images/c2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-white">
            <div className="border-l-4 border-secondary pl-6">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-lg leading-relaxed mb-4 italic">
                “At Afro Renovation and Demolition Inc., we believe every structure deserves a second chance — whether through transformation, precision demolition, or revitalized design.”
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                Based in Toronto, we specialize in full-scale renovations, creative space planning, and safe demolitions. With a passionate team and a commitment to quality, we turn visions into reality — on time and on budget.
              </p>
            </div>
          </div>
        </section>
  
        {/* Company Overview Section */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <img
              src="/images/c4.jpg"
              alt="Team at work"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Who We Are</h3>
              <p className="text-text text-lg leading-relaxed">
                Afro Renovation is a dedicated startup fueled by craftsmanship and driven by results. We offer full-service home and commercial renovation, demolition, and design services across the Greater Toronto Area.
                From residential remodeling to commercial upgrades, our team works with integrity, innovation, and safety.
              </p>
            </div>
          </div>
        </section>
  
        {/* Core Values Section */}
        <section className="bg-primary text-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-10 text-center">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white text-primary rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-xl mb-2">Quality</h4>
                <p className="text-sm">We never cut corners. Every project reflects top-notch craftsmanship.</p>
              </div>
              <div className="bg-white text-primary rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-xl mb-2">Integrity</h4>
                <p className="text-sm">Honest communication and transparent pricing are our foundations.</p>
              </div>
              <div className="bg-white text-primary rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-xl mb-2">Safety</h4>
                <p className="text-sm">We prioritize safety for both our team and your property.</p>
              </div>
              <div className="bg-white text-primary rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-xl mb-2">Innovation</h4>
                <p className="text-sm">Smart solutions and modern design techniques in every build.</p>
              </div>
              <div className="bg-white text-primary rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-xl mb-2">Timeliness</h4>
                <p className="text-sm">We stay on schedule and keep you informed at every stage.</p>
              </div>
              <div className="bg-white text-primary rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-xl mb-2">Sustainability</h4>
                <p className="text-sm">We care about the environment and source responsibly.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="bg-background py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary mb-6">Why Choose Afro Renovation?</h3>
            <p className="text-text text-lg mb-6">
              Whether you're renovating your dream home or demolishing an old space for new potential,
              we're here to guide you every step of the way. Our clients choose us for our expertise,
              personalized service, and proven results.
            </p>
            <p className="text-secondary font-semibold">Let’s build something great together.</p>
          </div>
        </section>
  
      </div>
    );
  }
  