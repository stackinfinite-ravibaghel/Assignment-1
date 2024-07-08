import axios from 'axios';

// Base URL for your APIs
const apiUrl = 'http://192.168.1.10:8001/api'; 

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

// Function to fetch category
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${apiUrl}/categories`);
    return response.data; // Assuming response.data is an array of products
    // console.log(response.data);
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Throw error to be handled by the caller
  }
};

// Function to fetch products
export const fetchDefaultProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`);
    return response.data; // Assuming response.data is an array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Throw error to be handled by the caller
  }
};

// Function to fetch products by id
export const fetchProductbyid = async (productId :any) => {
  try {
    const response = await axios.get(`${apiUrl}/products/?categoryId=${productId}`);
    console.log(response.data)
    return response.data;
     // Assuming response.data is an array of products
  } catch (error) {
    console.error("Error fetching product ${productId}:", error);
    throw error; // Throw error to be handled by the caller
  }
};


// Function to fetch CartList
export const fetchCartsList = async (userId : any) => {
  try {
    const response = await axios.get(`${apiUrl}/carts/products/${userId}`);
    return response.data; // Assuming response.data is an array of products
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Throw error to be handled by the caller
  }
};
// Function to  Add Product to Cart
export const addProductToCart = async (productId : any,userId : any) => {
  try {
    const response = await axios.post(`${apiUrl}/carts/add/${productId}`,{userId:userId,quantity:1});
    return response.data; // Assuming response.data is an array of products
    // console.log(response.data);
  } catch (error) {
    console.error("Error - Add Product to cart :", error);
    throw error; // Throw error to be handled by the caller
  }
};

// Function to delete Product to Cart
export const deleteProductToCart = async (productId : any, userId : any) => {
  // console.log("Got :",productId, userId);
  try {
    const response = await axios.delete(`${apiUrl}/carts/delete/${productId}`,{data:{userId:userId}});
    
    return response.data; // Assuming response.data is an array of products
    // console.log(response.data);
  } catch (error) {
    console.error("Error - Delete Product to cart :", error);
    throw error; // Throw error to be handled by the caller
  }
};

// Function to Increase Product to Cart
export const increaseProductToCart = async (productId : any, userId : any) => {
  // console.log("Got :",productId, userId);
  try {
    const response = await axios.delete(`${apiUrl}/carts/increase/${productId}`,{data:{userId:userId}});
    console.log("Successfully Increased :" , response.data);
    return response.data; // Assuming response.data is an array of products
    // console.log(response.data);
  } catch (error) {
    console.error("Error - increase Product to cart :", error);
    throw error; // Throw error to be handled by the caller
  }
};

// Add more functions as needed for other APIs (signup, categories, etc.)
