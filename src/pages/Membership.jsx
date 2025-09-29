import React from 'react';

const Membership = () => {
  return (
    <section className="py-5 bg-light text-dark">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 className="text-center fw-bold mb-4 fs-2">Become a Member</h2>
        <p className="text-center text-secondary mb-5 mx-auto" style={{ maxWidth: '640px' }}>
          Join our growing network of African space scientists, engineers, students, and institutions committed to advancing space research and education across the continent.
        </p>

        <div className="bg-white p-4 p-md-5 rounded shadow">
          <h4 className="text-primary fw-semibold mb-3">Membership Benefits</h4>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">Access to exclusive research publications and webinars</li>
            <li className="list-group-item">Participate in mission simulations and data analysis</li>
            <li className="list-group-item">Opportunities to contribute to real space projects</li>
            <li className="list-group-item">Networking with African and global space professionals</li>
            <li className="list-group-item">Discounts on training courses and workshops</li>
          </ul>

          <h4 className="text-primary fw-semibold mb-3">Membership Types</h4>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              <strong>Student Membership:</strong> For undergraduate or graduate students
            </li>
            <li className="list-group-item">
              <strong>Professional Membership:</strong> For researchers, engineers, and space professionals
            </li>
            <li className="list-group-item">
              <strong>Institutional Membership:</strong> For universities, companies, or government organizations
            </li>
          </ul>

          <div className="text-center mt-4">
            <a href="/signup" className="btn btn-primary px-4 py-2">
              Apply for Membership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
