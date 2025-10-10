import React from "react";
import { Link } from "react-router-dom";
import newsData from "../data/newsData";

const News = () => {
  return (
    <section className="py-8 bg-gray-50 text-gray-900">
      <div className="container max-w-[1400px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-10">
          Latest News
        </h2>

        {/* News Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news, index) => (
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
                <Link
                  to={`/news/${news.slug}`}
                  className="text-indigo-600 text-sm font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
