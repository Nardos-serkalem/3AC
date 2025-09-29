import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Adjust path as needed

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', form);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <img src={logo} alt="Logo" className="img-fluid mx-auto d-block mb-3" style={{ height: '60px' }} />
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input type="email" name="email" className="form-control" placeholder="Email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group mb-3">
            <input type="password" name="password" className="form-control" placeholder="Password" value={form.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
