import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { handleLogin, loading } = useAuth();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await handleLogin(form);
      toast.success("Login successful");

      console.log("Login response:", response);

      // Redirect to homepage or dashboard after a short delay
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Login failed. Please check your credentials.";
      toast.error(message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white flex flex-col md:flex-row shadow-lg rounded-xl w-full max-w-[700px] p-8 items-stretch">
        {/* Logo */}
        <div className="flex justify-center mb-6 w-full md:w-1/2 md:mb-0 items-center">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Vertical divider (hidden on small screens) */}
        <div className="hidden md:block w-px bg-gray-200 mx-6 self-stretch" />

        <div className="w-full md:w-1/2">
          {/* Title */}
          <h3 className="text-3xl font-bold text-start text-gray-800 mb-3">
            Login
          </h3>
          <p className="text-start mb-3 text-gray-500">
            Please enter your credentials to access your account.
          </p>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-3 rounded-lg font-semibold transition duration-200 ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-600 text-sm mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
