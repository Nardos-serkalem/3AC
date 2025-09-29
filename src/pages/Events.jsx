import React from 'react';

const events = [
  {
    title: 'African Space Week 2025',
    date: 'August 14 – 18, 2025',
    location: 'Addis Ababa, Ethiopia',
    image: '/images/event-spaceweek.jpg',
    description:
      'Join top scientists, engineers, and students for Africa’s largest gathering focused on space research, satellite tech, and lunar missions.',
  },
  {
    title: 'AI in Space Weather Forecasting',
    date: 'September 5, 2025',
    location: 'Online (Zoom)',
    image: '/images/event-ai.jpg',
    description:
      'A workshop on how machine learning is transforming solar storm prediction and space weather resilience.',
  },
  {
    title: 'CubeSat Hands-on Bootcamp',
    date: 'October 10 – 20, 2025',
    location: 'Kigali, Rwanda',
    image: '/images/event-cubesat.jpg',
    description:
      'Learn how to design, assemble, and program a real CubeSat prototype in this 10-day practical training.',
  },
];

const Events = () => {
  return (
    <section className="py-5 bg-white text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 fs-2">Upcoming Events</h2>
        <div className="row g-4">
          {events.map((event, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={event.image}
                  alt={event.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <p className="text-primary small mb-1">{event.date}</p>
                  <h5 className="card-title fw-semibold">{event.title}</h5>
                  <p className="text-muted small mb-2">{event.location}</p>
                  <p className="card-text text-secondary small">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
