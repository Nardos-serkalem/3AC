import React from 'react';
import nasaLogo from '../../assets/nasa.png';
import esaLogo from '../../assets/nasa.png';
import skaLogo from '../../assets/nasa.png';

const organizations = [
  {
    name: 'NASA',
    logo: nasaLogo,
    description: 'Collaborating on lunar mission research and space weather forecasting pilot projects.'
  },
  {
    name: 'European Space Agency (ESA)',
    logo: esaLogo,
    description: 'Partnering in CubeSat development and training for African engineers.'
  },
  {
    name: 'SKA Africa',
    logo: skaLogo,
    description: 'Coordinating data processing pipelines and AI-based astronomical analysis.'
  }
];

const Organizational = () => {
  return (
    <section className="py-5 bg-white text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 fs-2">Organizational Partners</h2>

        <div className="row g-4 justify-content-center">
          {organizations.map((org, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 d-flex">
              <div className="card flex-fill shadow-sm border-0 text-center p-3">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="mx-auto mb-3"
                  style={{ height: '80px', objectFit: 'contain' }}
                />
                <h5 className="fw-semibold">{org.name}</h5>
                <p className="text-muted small">{org.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizational;
