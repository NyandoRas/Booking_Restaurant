import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeInDown">
          Welcome to Our Restaurant
        </h1>
        <p className="text-lg md:text-2xl mb-6 animate-fadeInUp">
          Where flavor meets elegance
        </p>
        <a
          href="/booking"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Book a Table
        </a>
      </div>
    </section>
  );
};

export default Hero;
