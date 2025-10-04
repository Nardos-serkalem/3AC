import React from "react";

const Overview = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Overview of Our Mission
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
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
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Develop autonomous African satellite systems</li>
              <li>Support AI-based space weather forecasting</li>
              <li>Train the next generation of African aerospace leaders</li>
              <li>Advance lunar and planetary research participation</li>
              <li>Foster partnerships across academia, government, and industry</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/images/discover-overview.jpg"
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
