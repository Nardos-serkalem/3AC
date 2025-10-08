// src/components/ContactUs.jsx
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion as Motion } from "framer-motion";
const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form:", form);
    // You can integrate with backend/email service here
  };

  return (
    <section className="py-8 bg-gray-50 text-gray-800">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 px-6">
        {/* Left Side - Contact Form */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
        >
          <h2 className="text-start font-bold text-3xl md:text-5xl mb-3 text-gray-900">
            Contact Us
          </h2>
          <p className="text-start text-lg text-gray-600 mb-6">
            Got a question, feedback, or partnership idea? We'd love to hear
            from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows="6"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />

            {/* Submit Button */}
            <Motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Send Message
            </Motion.button>
          </form>
        </Motion.div>

        {/* Right Side - Contact Info + Map */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Contact Information
          </h3>

          <div className="space-y-2 md:space-y-0 flex flex-col md:flex-row md:items-center md:gap-6">
            <p className="text-gray-700 flex items-center gap-3">
              <Icon icon="ph:envelope-bold" width="25" height="25" className="text-blue-600" />
              info@aaacenter.org
            </p>
            <p className="text-gray-700 flex items-center gap-3">
              <Icon icon="ph:phone-bold" width="25" height="25" className="text-blue-600" />
              +251 921815662
            </p>
            <p className="text-gray-700 flex items-center gap-3">
              <Icon icon="ph:map-pin-bold" width="25" height="25" className="text-blue-600" />
              AAAC HQ, Addis Ababa, Ethiopia
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 mt-6">
            <iframe
              title="AAAC Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4789851701407!2d38.760385574827225!3d9.019994789130257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8585f0126257%3A0x65dd1dc0f4bc9ffd!2sSpace%20Science%20and%20Geospatial%20Institute!5e0!3m2!1sen!2set!4v1759649734902!5m2!1sen!2set"
              width="100%"
              height="425"
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl border-0"
              style={{ filter: "grayscale(50%)" }}
            ></iframe>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
