// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="flex items-center text-white min-h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/assets/img2.jpg)", // replace with your image path
      }}
    >
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Explore the Frontiers of Space Weather & Solar Storm Forecasting
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Join AAAC Center in advancing aerospace research, solar storm
            monitoring, and global collaborations.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
