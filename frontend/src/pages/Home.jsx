// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/background.gif';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white py-12"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            African Aeronautics and Astronautics Center
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Providing cutting-edge ground station infrastructure and research capabilities for space data mining intelligence.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
            >
              Our Services
            </Link>
            <Link
              to="/researches"
              className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg shadow-md transition"
            >
              View Research
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 text-center">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-blue-600 font-bold text-3xl">2+</h2>
            <p className="text-gray-600">Ground Stations</p>
          </div>
          <div>
            <h2 className="text-blue-600 font-bold text-3xl">20+</h2>
            <p className="text-gray-600">Research Papers</p>
          </div>
          <div>
            <h2 className="text-blue-600 font-bold text-3xl">5+</h2>
            <p className="text-gray-600">Global Partners</p>
          </div>
          <div>
            <h2 className="text-blue-600 font-bold text-3xl">2TB+</h2>
            <p className="text-gray-600">Daily Data Processing</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center mb-10 font-extrabold text-2xl md:text-3xl">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ground Station Rental */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src="/images/ground-station.jpg"
                alt="Ground Station"
                className="h-52 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow text-center">
                <h5 className="font-bold text-lg">Ground Station Rental</h5>
                <p className="text-gray-600 text-sm mt-3 flex-grow">
                  Access our global network of high-performance ground stations
                  for satellite communications, telemetry, and downlink.
                </p>
                <Link
                  to="/services"
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Space Data Mining */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src="/images/data-mining.jpg"
                alt="Data Mining"
                className="h-52 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow text-center">
                <h5 className="font-bold text-lg">Space Data Mining</h5>
                <p className="text-gray-600 text-sm mt-3 flex-grow">
                  Leverage our advanced algorithms and processing capabilities
                  to extract valuable insights from space-based observations.
                </p>
                <Link
                  to="/services"
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Research Collaboration */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src="/images/research-team.jpg"
                alt="Research Collaboration"
                className="h-52 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow text-center">
                <h5 className="font-bold text-lg">Research Collaboration</h5>
                <p className="text-gray-600 text-sm mt-3 flex-grow">
                  Partner with our expert team on cutting-edge projects in space
                  science, satellite remote sensing, and data intelligence.
                </p>
                <Link
                  to="/researches"
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
