// src/components/Events.jsx
import React from "react";

const events = [
  {
    title: "African Space Week 2025",
    date: "August 14 – 18, 2025",
    location: "Addis Ababa, Ethiopia",
    image: "/images/event-spaceweek.jpg",
    description:
      "Join top scientists, engineers, and students for Africa’s largest gathering focused on space research, satellite tech, and lunar missions.",
  },
  {
    title: "AI in Space Weather Forecasting",
    date: "September 5, 2025",
    location: "Online (Zoom)",
    image: "/images/event-ai.jpg",
    description:
      "A workshop on how machine learning is transforming solar storm prediction and space weather resilience.",
  },
  {
    title: "CubeSat Hands-on Bootcamp",
    date: "October 10 – 20, 2025",
    location: "Kigali, Rwanda",
    image: "/images/event-cubesat.jpg",
    description:
      "Learn how to design, assemble, and program a real CubeSat prototype in this 10-day practical training.",
  },
];

const Events = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center font-bold text-3xl md:text-4xl mb-12">
          Upcoming Events
        </h2>

        {/* Event Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover rounded-t-xl"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-indigo-600 text-sm font-medium mb-1">
                  {event.date}
                </p>
                <h5 className="text-lg font-semibold mb-1">{event.title}</h5>
                <p className="text-gray-500 text-sm mb-2">{event.location}</p>
                <p className="text-gray-600 text-sm flex-1">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
