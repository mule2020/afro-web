export default function Home() {
    return (
      <div>
  
        {/* Hero Section */}
        <section
          className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
          style={{
            backgroundImage: "url('/images/c3.jpg')",
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Welcome to Afro Renovation and Demolition Inc.
          </h1>
          <p className="mt-4 max-w-xl text-lg md:text-xl drop-shadow-md">
            We bring precision, creativity, and quality to every space we transform.
            Check out our services and recent projects!
          </p>
        </section>
  
        {/* Highlights Section */}
        <section className="bg-background py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">What We Offer</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-secondary">
              <h3 className="text-xl font-semibold mb-2 text-accent">Home Renovations</h3>
              <p className="text-text text-sm">
                From kitchens to basements — we revamp your home to match your vision and boost value.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-secondary">
              <h3 className="text-xl font-semibold mb-2 text-accent">Commercial Remodeling</h3>
              <p className="text-text text-sm">
                Modernize your retail or office space with clean, efficient, and appealing designs.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-secondary">
              <h3 className="text-xl font-semibold mb-2 text-accent">Demolition Services</h3>
              <p className="text-text text-sm">
                Safe, fast, and environmentally conscious demolition solutions tailored to your needs.
              </p>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="bg-primary text-white py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Choose Afro Renovation?</h2>
            <p className="text-lg mb-6">
              We combine experience, innovation, and care to deliver exceptional results. Every project we take on is handled with passion and precision.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white bg-opacity-10 rounded p-4">
                <h4 className="font-semibold text-lg">✔ Transparent Pricing</h4>
                <p className="text-sm">No hidden costs. No surprises.</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded p-4">
                <h4 className="font-semibold text-lg">✔ Timely Delivery</h4>
                <p className="text-sm">We respect your time and your deadlines.</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded p-4">
                <h4 className="font-semibold text-lg">✔ Quality Materials</h4>
                <p className="text-sm">We use trusted brands and sustainable options.</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded p-4">
                <h4 className="font-semibold text-lg">✔ Local Expertise</h4>
                <p className="text-sm">Proudly serving Toronto and the GTA.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Recent Projects Preview */}
        <section className="bg-background py-16 px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-10">Recent Projects</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow-md overflow-hidden">
              <img src="/images/c1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">Modern Kitchen Reno</h4>
                <p className="text-sm text-text">Toronto | March 2025</p>
              </div>
            </div>
            <div className="bg-white rounded shadow-md overflow-hidden">
              <img src="/images/c2.jpg" alt="Project 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">Retail Space Redesign</h4>
                <p className="text-sm text-text">Scarborough | Feb 2025</p>
              </div>
            </div>
            <div className="bg-white rounded shadow-md overflow-hidden">
              <img src="/images/c4.jpg" alt="Project 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">Full House Demolition</h4>
                <p className="text-sm text-text">North York | Jan 2025</p>
              </div>
            </div>
          </div>
        </section>
  
      </div>
    );
  }
  