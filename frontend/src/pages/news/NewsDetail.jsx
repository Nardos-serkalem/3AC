import React from "react";
import { useParams, Link } from "react-router-dom";
import newsData from "../../data/newsData";

const NewsDetail = () => {
  const { slug } = useParams();
  const news = newsData.find((n) => n.slug === slug);

  if (!news) {
    return (
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">News not found</h2>
          <p className="text-gray-600 mb-6">We couldn't find that news item.</p>
          <Link to="/news" className="text-blue-600 hover:underline">
            Back to news
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />
        <p className="text-indigo-600 text-sm font-medium mb-2">{news.date}</p>
        <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
        <p className="text-gray-700 mb-6">{news.description}</p>

        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />

        <div className="mt-8">
          <Link to="/news" className="text-blue-600 hover:underline">
            ← Back to news
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
