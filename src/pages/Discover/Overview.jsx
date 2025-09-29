import React from 'react';

const Overview = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Overview of Our Mission</h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
          The African Aeronautic and Astronautic Center (AAAC) is a continental initiative established to lead Africa into the new space age through innovation, collaboration, and scientific leadership.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              To empower African nations to design, develop, and launch their own space missions while contributing to global space research and planetary science.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mb-4">Core Objectives</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Develop autonomous African satellite systems</li>
              <li>Support AI-based space weather forecasting</li>
              <li>Train the next generation of African aerospace leaders</li>
              <li>Advance lunar and planetary research participation</li>
              <li>Foster partnerships across academia, government, and industry</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/discover-overview.jpg"
              alt="Center overview"
              className="rounded shadow-lg w-full object-cover h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
