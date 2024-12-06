import axios from 'axios'
import { isTokenExpired } from './jwtUtils';

export const useAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true
})


useAxios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("authToken");
  
      if (token) {
        const isExpired = isTokenExpired(token);
  
        if (isExpired) {
          // Handle expired token
          localStorage.removeItem("authToken");
          alert("Session expired. Please log in again.");
          window.location.href = "/admin-auth"; // Redirect to login page
          throw new Error("Token expired");
        }
  
        // Attach token to the Authorization header
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  


  