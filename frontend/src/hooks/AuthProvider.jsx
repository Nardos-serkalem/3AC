import React, { useState, useEffect } from "react";
import { login, register } from "../api/services/authService";
import AuthContext from "./authContext";

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(false);

  // Handle login
  const handleLogin = async (credentials) => {
    setLoading(true);
    try {
      const data = await login(credentials);
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
      }
      return data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Handle register
  const handleRegister = async (userData) => {
    setLoading(true);
    try {
      const data = await register(userData);
      return data;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Auto logout if token expires (optional)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        handleLogin,
        handleRegister,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
