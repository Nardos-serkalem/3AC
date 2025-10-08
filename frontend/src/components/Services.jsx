// src/components/Services.jsx
import React from "react";
import groundImg from "../assets/ground.jpg";
import dataImg from "../assets/data.jpg";
import colabImg from "../assets/colab.jpg";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Services
        </h2>
        <p className="text-gray-600 mt-3">
          Explore the key services we offer in aerospace and satellite science.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Service 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img
            src={groundImg}
            alt="Ground Station Access"
            className="w-full h-52 object-cover"
          />
          <div className="p-6 text-center">
            <h5 className="text-lg font-semibold text-gray-900 mb-2">
              Satellite Ground Station Access
            </h5>
            <p className="text-gray-600 text-sm">
              High-speed access to satellite telemetry, tracking, and command
              operations across Africa.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img
            src={dataImg}
            alt="Data Services"
            className="w-full h-52 object-cover"
          />
          <div className="p-6 text-center">
            <h5 className="text-lg font-semibold text-gray-900 mb-2">
              Space Data Processing
            </h5>
            <p className="text-gray-600 text-sm">
              We convert raw satellite signals into insights using AI/ML-powered
              pipelines.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img
            src={colabImg}
            alt="Research Support"
            className="w-full h-52 object-cover"
          />
          <div className="p-6 text-center">
            <h5 className="text-lg font-semibold text-gray-900 mb-2">
              Research & Training Support
            </h5>
            <p className="text-gray-600 text-sm">
              We mentor and support institutions with satellite datasets,
              curriculum, and research environments.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Interested in working with us or using our facilities?
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Contact Our Team
        </a>
      </div>
    </div>
  );
};

export default Services;
