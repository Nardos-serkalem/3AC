// src/components/ContactUs.jsx
import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form:", form);
    // Submit to backend or email service
  };

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-center font-bold text-3xl md:text-4xl mb-4">
          Contact Us
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Got a question, feedback, or partnership idea? We'd love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md"
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <textarea
              name="message"
              rows="6"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
