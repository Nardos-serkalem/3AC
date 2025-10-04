import React from 'react';
import lunarImg from '../assets/background.gif'; // Adjust path as needed

const LunarMission = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Lunar Mission Program
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our lunar exploration initiative is a multi-phase project focused on research, data collection,
          and future collaboration in missions that aim to reach, study, and simulate lunar environments
          from Africa.
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src={lunarImg}
              alt="Lunar research"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Mission Objectives
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✔</span>
                Simulate lunar terrain for testing and training purposes
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✔</span>
                Collaborate on international lunar research and mission prep
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✔</span>
                Use AI to analyze lunar surface imaging and geophysical data
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✔</span>
                Engage African youth in space mission design and robotics
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            We are building Africa’s future on the Moon — one step at a time.
          </p>
          <a
            href="/projects/lunar"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Learn More About The Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default LunarMission;
