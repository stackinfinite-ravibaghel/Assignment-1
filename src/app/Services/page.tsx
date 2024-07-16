import axios from 'axios';

// Base URL for your APIs
const apiUrl = 'http://192.168.1.3:8001/api'; 

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

// fetch WishList
export const fetchWishList = async (userId : any) => {
  try {
    const responseWish = await axios.get(`${apiUrl}/wishlist/${userId}`);
    // console.log(responseWish.data);
    return responseWish.data; 
  } catch (error) {
    console.error("Error fetching Wish:", error);
    throw error; 
  }
};

// Add Product to WishList
export const addProductToWishList = async (productId : any,userId : string) => {
  // console.log(productId , userId)
  try {
    const responseWish = await axios.post(`${apiUrl}/wishlist/add`,{userId:userId,productId:productId});
    // console.log(responseWish.data);
    return responseWish.data; 
  } catch (error) {
    // console.log(uSerId);
    console.error("Error fetching Wish:", error);
    throw error; 
  }
};

// Add Product to WishList
export const removeProductToWishList = async (productId : any,userId : string) => {
  // console.log("Remove WishList Product",productId , userId)
  try {
    const responseWish = await axios.delete(`${apiUrl}/wishlist/remove`,{data:{userId:userId,productId:productId}});
    // console.log(responseWish.data);
    return responseWish.data; 
  } catch (error) {
    // console.log(uSerId);
    console.error("Error Remove WishList Product:", error);
    throw error; 
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
export const fetchDefaultProducts = async (currentPage : any) => {
  try {
    const response = await axios.get(`${apiUrl}/products?page=${currentPage}`);
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
    // console.log(response.data)
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
    // console.log(response.data);
    return response.data; // Assuming response.data is an array of products
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
export const increaseProductToCart = async (productId : any, userId : any, quantity : any) => {
  // console.log("Got :",productId, userId);
  try {
    const response = await axios.put(`${apiUrl}/carts/increase/${productId}`,{userId:userId});
    console.log("Successfully Increased :" , response.data);
    return response.data; // Assuming response.data is an array of products
    // console.log(response.data);
  } catch (error) {
    console.error("Error - increase Product to cart :", error);
    throw error; // Throw error to be handled by the caller
  }
};


// Function to Increase Product to Cart
export const decreaseProductToCart = async (productId : any, userId : any, quantity : any) => {
  // console.log("Got :",productId, userId);
  try {
    const response = await axios.put(`${apiUrl}/carts/decrease/${productId}`,{userId:userId});
    console.log("Successfully Decreased :" , response.data);
    return response.data; // Assuming response.data is an array of products
    // console.log(response.data);
  } catch (error) {
    console.error("Error - increase Product to cart :", error);
    throw error; // Throw error to be handled by the caller
  }
};

// Add more functions as needed for other APIs (signup, categories, etc.)
