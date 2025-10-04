import React from 'react';

const Membership = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Become a Member
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Join our growing network of African space scientists, engineers, students, and institutions committed to advancing space research and education across the continent.
        </p>

        {/* Card Container */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
          {/* Benefits */}
          <h4 className="text-xl font-semibold text-blue-600 mb-4">Membership Benefits</h4>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              Access to exclusive research publications and webinars
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              Participate in mission simulations and data analysis
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              Opportunities to contribute to real space projects
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              Networking with African and global space professionals
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              Discounts on training courses and workshops
            </li>
          </ul>

          {/* Membership Types */}
          <h4 className="text-xl font-semibold text-blue-600 mb-4">Membership Types</h4>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li>
              <strong>Student Membership:</strong> For undergraduate or graduate students
            </li>
            <li>
              <strong>Professional Membership:</strong> For researchers, engineers, and space professionals
            </li>
            <li>
              <strong>Institutional Membership:</strong> For universities, companies, or government organizations
            </li>
          </ul>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="/signup"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
            >
              Apply for Membership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
