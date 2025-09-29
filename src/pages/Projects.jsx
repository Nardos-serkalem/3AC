import React from 'react';

const projects = [
  {
    title: 'Lunar Dust Particle Sensor',
    status: 'In Progress',
    image: '/images/project-lunar.jpg',
    description:
      'We are developing a lightweight sensor for monitoring dust particles on the Moon’s surface as part of a global lunar research initiative.',
  },
  {
    title: 'AfricaSat-1 Microsatellite',
    status: 'Completed',
    image: '/images/project-sat1.jpg',
    description:
      'A successful launch of our first microsatellite designed for Earth observation, weather monitoring, and climate analytics.',
  },
  {
    title: 'Space Weather AI Pipeline',
    status: 'In Progress',
    image: '/images/project-ai.jpg',
    description:
      'A deep learning-based system to forecast solar flares and geomagnetic storms using satellite and ground-based data.',
  },
];

const Projects = () => {
  return (
    <section className="py-5 bg-light text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 fs-2">Our Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm h-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <span
                    className={`badge mb-2 ${
                      project.status === 'Completed'
                        ? 'bg-success-subtle text-success-emphasis'
                        : 'bg-warning-subtle text-warning-emphasis'
                    }`}
                  >
                    {project.status}
                  </span>
                  <h5 className="card-title fw-semibold">{project.title}</h5>
                  <p className="card-text small text-secondary">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
