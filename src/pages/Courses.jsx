import React from 'react';

const courses = [
  {
    title: 'Satellite Communication Basics',
    image: '/images/course-satcom.jpg',
    duration: '4 weeks',
    level: 'Beginner',
    description:
      'Learn how satellites communicate with ground stations and the basics of RF signals, orbits, and telemetry.',
    link: '/courses/satellite-basics',
  },
  {
    title: 'Machine Learning for Space Data',
    image: '/images/course-ml.jpg',
    duration: '6 weeks',
    level: 'Intermediate',
    description:
      'Build models that process and predict patterns in geospatial, atmospheric, and satellite image datasets.',
    link: '/courses/ml-space',
  },
  {
    title: 'CubeSat Development Workshop',
    image: '/images/course-cubesat.jpg',
    duration: '3 weeks',
    level: 'Advanced',
    description:
      'Hands-on training for designing, simulating, and programming small CubeSat platforms for real missions.',
    link: '/courses/cubesat',
  },
];

const Courses = () => {
  return (
    <section className="py-5 bg-white text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 fs-2">Our Training Programs</h2>
        <div className="row g-4">
          {courses.map((course, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={course.image}
                  alt={course.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{course.title}</h5>
                  <p className="text-muted small mb-2">
                    {course.duration} · {course.level}
                  </p>
                  <p className="card-text text-secondary small">{course.description}</p>
                  <a href={course.link} className="mt-auto text-primary text-decoration-none">
                    View Course →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
