import React, { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', form);
  };

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="bg-white p-4 p-md-5 rounded shadow text-center w-100" style={{ maxWidth: '420px' }}>
        <img
          src="/images/logo.png"
          alt="Company Logo"
          className="mb-4"
          style={{ height: '80px' }}
        />
        <h2 className="fw-bold mb-4 fs-4">Create an Account</h2>

        <form onSubmit={handleSubmit} className="text-start">
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        <p className="small mt-3">
          Already have an account?{' '}
          <a href="/login" className="text-primary text-decoration-none">Login</a>
        </p>
      </div>
    </section>
  );
};

export default Signup;
