// src/components/Courses.jsx
import React from "react";

const courses = [
  {
    title: "Satellite Communication Basics",
    image: "/images/course-satcom.jpg",
    duration: "4 weeks",
    level: "Beginner",
    description:
      "Learn how satellites communicate with ground stations and the basics of RF signals, orbits, and telemetry.",
    link: "/courses/satellite-basics",
  },
  {
    title: "Machine Learning for Space Data",
    image: "/images/course-ml.jpg",
    duration: "6 weeks",
    level: "Intermediate",
    description:
      "Build models that process and predict patterns in geospatial, atmospheric, and satellite image datasets.",
    link: "/courses/ml-space",
  },
  {
    title: "CubeSat Development Workshop",
    image: "/images/course-cubesat.jpg",
    duration: "3 weeks",
    level: "Advanced",
    description:
      "Hands-on training for designing, simulating, and programming small CubeSat platforms for real missions.",
    link: "/courses/cubesat",
  },
];

const Courses = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center font-bold text-3xl md:text-4xl mb-12">
          Our Training Programs
        </h2>

        {/* Course Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover rounded-t-xl"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h5 className="text-lg font-semibold mb-2">{course.title}</h5>
                <p className="text-sm text-gray-500 mb-2">
                  {course.duration} · {course.level}
                </p>
                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {course.description}
                </p>

                {/* Link */}
                <a
                  href={course.link}
                  className="mt-auto text-indigo-600 font-medium hover:underline"
                >
                  View Course →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
