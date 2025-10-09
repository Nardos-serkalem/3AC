// src/api/services/authService.js
import axiosInstance from "../axiosInstance";
import { API_ENDPOINTS } from "../endpoints";

/**
 * Login user
 * @param {Object} credentials - { email, password }
 */
export const login = async (credentials) => {
  const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, credentials);
  return response.data;
};

/**
 * Register new user
 * @param {Object} userData - { name, email, password, ... }
 */
export const register = async (userData) => {
  const response = await axiosInstance.post(API_ENDPOINTS.REGISTER, userData);
  return response.data;
};

/**
 * Logout (if backend supports API logout)
 */
// export const logout = async () => {
//   const response = await axiosInstance.post("/auth/logout");
//   return response.data;
// };
