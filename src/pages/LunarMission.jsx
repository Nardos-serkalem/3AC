import React from 'react';
import lunarImg from '../assets/background.gif';  // Adjust path according to your folder structure

const LunarMission = () => {
  return (
    <section className="py-5 bg-white text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 fs-2">Lunar Mission Program</h2>

        <p className="text-center text-secondary mx-auto mb-5" style={{ maxWidth: '720px' }}>
          Our lunar exploration initiative is a multi-phase project focused on research, data collection, and future collaboration in missions that aim to reach, study, and simulate lunar environments from Africa.
        </p>

        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img
              src={lunarImg}
              alt="Lunar research"
              className="img-fluid rounded shadow"
              style={{ height: '320px', objectFit: 'cover', width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <h3 className="fs-4 fw-semibold text-primary mb-3">Mission Objectives</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Simulate lunar terrain for testing and training purposes</li>
              <li className="list-group-item">Collaborate on international lunar research and mission prep</li>
              <li className="list-group-item">Use AI to analyze lunar surface imaging and geophysical data</li>
              <li className="list-group-item">Engage African youth in space mission design and robotics</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="text-secondary mb-3">We are building Africa’s future on the Moon — one step at a time.</p>
          <a href="/projects/lunar" className="btn btn-primary px-4 py-2">
            Learn More About The Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default LunarMission;
