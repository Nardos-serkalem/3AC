import React from "react";
import discoverOverview from "../../assets/discoverOverview.jpg";
import { Icon } from '@iconify/react';

const Overview = () => {
  return (
    <section className="py-8 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-8">
          Overview of Our Mission
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-5xl mx-auto mb-12 leading-relaxed">
          The African Aeronautic and Astronautic Center (AAAC) is a continental
          initiative established to lead Africa into the new space age through
          innovation, collaboration, and scientific leadership.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              To empower African nations to design, develop, and launch their
              own space missions while contributing to global space research and
              planetary science.
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Core Objectives
            </h3>
            <ul className=" space-y-3 text-gray-700">
              <li className="flex"><span className="text-blue-600 mr-2"><Icon icon="ph:arrow-bend-down-right-bold" width="25" height="25" /></span>Develop autonomous African satellite systems</li>
              <li className="flex"><span className="text-blue-600 mr-2"><Icon icon="ph:arrow-bend-down-right-bold" width="25" height="25" /></span>Support AI-based space weather forecasting</li>
              <li className="flex"><span className="text-blue-600 mr-2"><Icon icon="ph:arrow-bend-down-right-bold" width="25" height="25" /></span>Train the next generation of African aerospace leaders</li>
              <li className="flex"><span className="text-blue-600 mr-2"><Icon icon="ph:arrow-bend-down-right-bold" width="25" height="25" /></span>Advance lunar and planetary research participation</li>
              <li className="flex"><span className="text-blue-600 mr-2"><Icon icon="ph:arrow-bend-down-right-bold" width="25" height="25" /></span>Foster partnerships across academia, government, and industry</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={discoverOverview}
              alt="Center overview"
              className="rounded-xl shadow-lg w-full h-[380px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
