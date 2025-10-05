// src/components/ContactUs.jsx
import React, { useState } from "react";
import { Icon } from "@iconify/react";

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
    <section className="py-8 bg-white text-gray-800">
      <div className="max-w-[1400px] mx-auto justify-between px-6 md:px-0 flex flex-col md:flex-row gap-10">
        <div className="max-w-1/2">
          <h2 className="text-start font-semibold text-3xl md:text-5xl mb-4">
            Contact Us
          </h2>
          <p className="text-start text-lg text-gray-600 mb-6">
            Got a question, feedback, or partnership idea? We'd love to hear
            from you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-xl shadow-md"
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-semibold mb-4">Contact Information</h3>
          <div className="mb-2 flex items-center gap-4 w-1/2 justify-between">
            <p className="text-gray-600 flex items-center gap-4">
              <span className="font-semibold text-lg"><Icon icon="ph:envelope" width="25" height="25" /> </span>{" "}
              info@ssgi.org
            </p>
            <p className="text-gray-600 flex items-center gap-4">
              <span className="font-semibold text-lg"><Icon icon="ph:phone" width="25" height="25" /></span> +251 456
              7890
            </p>
          </div>
          <p className="text-gray-600 mb-2 flex items-center gap-4">
            <span className="font-semibold text-lg"><Icon icon="ph:map-pin" width="25" height="25" /> </span> Space
            Science and Geospatial Institute Menilik II Ave, Addis Ababa
          </p>
          <iframe
            title="SSGI Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4789851701407!2d38.760385574827225!3d9.019994789130257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8585f0126257%3A0x65dd1dc0f4bc9ffd!2sSpace%20Science%20and%20Geospatial%20Institute!5e0!3m2!1sen!2set!4v1759649734902!5m2!1sen!2set"
            width="100%"
            height="390"
            className="border-0 rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
