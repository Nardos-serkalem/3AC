import React from "react";
import groundImg from "../assets/ground.jpg";
import dataImg from "../assets/data.jpg";
import colabImg from "../assets/colab.jpg";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-gray-500 mt-2">
          Explore the key services we offer in aerospace and satellite science.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Service 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
          <img
            src={groundImg}
            alt="Ground Station Access"
            className="w-full h-52 object-cover"
          />
          <div className="p-6 text-center">
            <h5 className="text-lg font-semibold">
              Satellite Ground Station Access
            </h5>
            <p className="text-gray-500 text-sm mt-2">
              High-speed access to satellite telemetry, tracking, and command
              operations across Africa.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
          <img
            src={dataImg}
            alt="Data Services"
            className="w-full h-52 object-cover"
          />
          <div className="p-6 text-center">
            <h5 className="text-lg font-semibold">Space Data Processing</h5>
            <p className="text-gray-500 text-sm mt-2">
              We convert raw satellite signals into insights using AI/ML-powered
              pipelines.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
          <img
            src={colabImg}
            alt="Research Support"
            className="w-full h-52 object-cover"
          />
          <div className="p-6 text-center">
            <h5 className="text-lg font-semibold">Research & Training Support</h5>
            <p className="text-gray-500 text-sm mt-2">
              We mentor and support institutions with satellite datasets,
              curriculum, and research environments.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-500">
          Interested in working with us or using our facilities?
        </p>
        <a
          href="/contact-us"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Our Team
        </a>
      </div>
    </div>
  );
};

export default Services;
