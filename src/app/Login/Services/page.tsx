import axios from "axios";

interface LoginResponse {
  // token: string;
  email: string;
}

export const Services = async(email: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post('http://http://192.168.1.9:8001/api/auth/sign-in', {email, password});
  return response.data;
}