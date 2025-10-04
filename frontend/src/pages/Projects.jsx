import React from "react";

const projects = [
  {
    title: "Lunar Dust Particle Sensor",
    status: "In Progress",
    image: "/images/project-lunar.jpg",
    description:
      "We are developing a lightweight sensor for monitoring dust particles on the Moon’s surface as part of a global lunar research initiative.",
  },
  {
    title: "AfricaSat-1 Microsatellite",
    status: "Completed",
    image: "/images/project-sat1.jpg",
    description:
      "A successful launch of our first microsatellite designed for Earth observation, weather monitoring, and climate analytics.",
  },
  {
    title: "Space Weather AI Pipeline",
    status: "In Progress",
    image: "/images/project-ai.jpg",
    description:
      "A deep learning-based system to forecast solar flares and geomagnetic storms using satellite and ground-based data.",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center font-bold text-3xl mb-10">Our Projects</h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Project Content */}
              <div className="p-5">
                {/* Status Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </span>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
