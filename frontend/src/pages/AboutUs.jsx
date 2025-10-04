// src/components/AboutUs.jsx
import React from "react";
import img1 from "../assets/colab.jpg"; // adjust path if needed

const AboutUs = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-center font-bold text-3xl md:text-4xl mb-6">
          About Us
        </h2>

        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          The African Aeronautic and Astronautic Center (AAAC) is a pioneering
          institution dedicated to advancing space science, satellite
          technology, and geospatial research across Africa and beyond.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div>
            <img
              src={img1}
              alt="About our space center"
              className="w-full h-[300px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-indigo-600 text-xl font-semibold mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              To foster innovation, collaboration, and excellence in aerospace
              technologies by providing access to satellite data, ground station
              services, and expert-driven research initiatives.
            </p>

            <h3 className="text-indigo-600 text-xl font-semibold mb-3">
              What We Do
            </h3>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>Operate and maintain ground station infrastructure</li>
              <li>Offer research collaboration opportunities in space science</li>
              <li>Deliver high-value satellite data services and analytics</li>
              <li>Run public engagement, training, and educational programs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
