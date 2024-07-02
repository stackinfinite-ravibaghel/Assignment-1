

import axios from 'axios';

const apiUrl = 'http://192.168.1.11:8001/api'; // Base URL for your APIs

// Function to handle login
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/sign-in`, { email, password });
    return response.data; // Return the data received from the API
  } catch (error) {
    console.error("Login failed:", error);
    throw error; // Throw error to be handled by the caller
  }
};

// Function to handle sign-up
export const signup = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/sign-up`, {name, email, password });
    return response.data; // Return the data received from the API
  } catch (error) {
    console.error("Sign Up failed:", error);
    throw error; // Throw error to be handled by the caller
  }
};

// Function to fetch products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`);
    return response.data; // Assuming response.data is an array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Throw error to be handled by the caller
  }
};

// Function to fetch category
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${apiUrl}/categories`);
    return response.data; // Assuming response.data is an array of products
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Throw error to be handled by the caller
  }
};

// Add more functions as needed for other APIs (signup, categories, etc.)
