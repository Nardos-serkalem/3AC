import React from "react";
import { useParams, Link } from "react-router-dom";
import researchData from "../../data/researchData";

const ResearchDetail = () => {
  const { slug } = useParams();
  const research = researchData.find((r) => r.slug === slug);

  if (!research) {
    return (
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Research not found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find that research project.
          </p>
          <Link to="/researches" className="text-blue-600 hover:underline">
            Back to researches
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-0">
        <img
          src={research.image}
          alt={research.title}
          className="w-full h-94 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{research.title}</h1>
        <p className="text-gray-700 mb-6">{research.summary}</p>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: research.content }}
        />

        <div className="mt-8">
          <Link to="/researches" className="text-blue-600 hover:underline">
            ← Back to researches
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchDetail;
