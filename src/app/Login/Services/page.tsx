import axios from "axios";

interface LoginResponse {
  // token: string;
  email: string;
  password: string;
}

export const Services = async(email: string, password: string): Promise<LoginResponse> => {
  // const response = await axios.post('http://http://192.168.1.10:8001/api/auth/sign-in', {email, password});

  const response = await axios.get('http://192.168.1.10:8001/api/products');
  return response.data;
}