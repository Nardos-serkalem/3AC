import React from "react";

const newsList = [
  {
    title: "Africa Joins Global Lunar Research Mission",
    date: "May 22, 2025",
    image: "/images/news-lunar.jpg",
    description:
      "Our team is proud to contribute satellite signal analysis to the upcoming international lunar exploration program.",
    link: "/news/lunar-collab",
  },
  {
    title: "Ground Station Upgrade Completed",
    date: "April 10, 2025",
    image: "/images/news-groundstation.jpg",
    description:
      "New antenna and tracking systems have been successfully installed to improve data transmission and control.",
    link: "/news/station-upgrade",
  },
  {
    title: "STEM Program Launched for Youth",
    date: "March 1, 2025",
    image: "/images/news-stem.jpg",
    description:
      "We’ve launched a continent-wide initiative to train high school students in aerospace, robotics, and satellite coding.",
    link: "/news/stem-launch",
  },
];

const News = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center font-bold text-3xl mb-10">Latest News</h2>

        {/* News Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsList.map((news, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* News Image */}
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-5">
                <p className="text-indigo-600 text-sm font-medium mb-2">
                  {news.date}
                </p>
                <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{news.description}</p>
                <a
                  href={news.link}
                  className="text-indigo-600 text-sm font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
