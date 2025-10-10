import React from "react";
import lunarImg from "../assets/background.gif"; // Adjust path as needed
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const LunarMission = () => {
  return (
    <section className="py-8 bg-white text-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 md:px-0">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Lunar Mission Program
        </h2>

        <p className="text-center text-gray-600 max-w-4xl text-xl mx-auto mb-12">
          Our lunar exploration initiative is a multi-phase project focused on
          research, data collection, and future collaboration in missions that
          aim to reach, study, and simulate lunar environments from Africa.
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-20">
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
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Mission Objectives
            </h3>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start text-lg font-medium">
                <span className="text-blue-600 mr-2">
                  <Icon
                    icon="ph:arrow-bend-down-right-bold"
                    width="25"
                    height="25"
                  />
                </span>
                Simulate lunar terrain for testing and training purposes
              </li>
              <li className="flex items-start text-lg font-medium">
                <span className="text-blue-600 mr-2">
                  <Icon
                    icon="ph:arrow-bend-down-right-bold"
                    width="25"
                    height="25"
                  />
                </span>
                Collaborate on international lunar research and mission prep
              </li>
              <li className="flex items-start text-lg font-medium">
                <span className="text-blue-600 mr-2">
                  <Icon
                    icon="ph:arrow-bend-down-right-bold"
                    width="25"
                    height="25"
                  />
                </span>
                Use AI to analyze lunar surface imaging and geophysical data
              </li>
              <li className="flex items-start text-lg font-medium">
                <span className="text-blue-600 mr-2">
                  <Icon
                    icon="ph:arrow-bend-down-right-bold"
                    width="25"
                    height="25"
                  />
                </span>
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
          <Link
            to="/projects/lunar"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Learn More About The Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LunarMission;
