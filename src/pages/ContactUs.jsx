import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form:', form);
    // Submit to backend or email service
  };

  return (
    <section className="py-5 bg-white text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 fs-2">Contact Us</h2>
        <p className="text-center text-secondary mb-5">
          Got a question, feedback, or partnership idea? We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="bg-light p-4 p-md-5 rounded shadow-sm">
          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              rows="6"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
