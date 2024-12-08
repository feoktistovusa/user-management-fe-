import type { AuthProvider } from "@refinedev/core";
import axios from "axios";

export const TOKEN_KEY = "access_token";
const API_URL = import.meta.env.VITE_API_URL;

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        login: email, // Ensure 'login' corresponds to your backend's expected field
        password,
      });

      const { access_token } = response.data;

      // Store the JWT token in localStorage
      localStorage.setItem(TOKEN_KEY, access_token);

      return {
        success: true,
        redirectTo: "/users",
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          name: "Login Error",
          message: error.response?.data?.message || "Invalid credentials",
        },
      };
    }
  },
  logout: async () => {
    localStorage.removeItem(TOKEN_KEY);
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        authenticated: true,
      };
    }
    return {
      authenticated: false,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload.role; // Ensure your JWT payload includes 'role'
      } catch (error) {
        return null;
      }
    }
    return null;
  },
  getIdentity: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return {
          id: payload.id, // Ensure your JWT payload includes 'id'
          name: payload.name, // Ensure your JWT payload includes 'name'
          avatar: payload.avatar || "https://i.pravatar.cc/300",
        };
      } catch (error) {
        return null;
      }
    }
    return null;
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
