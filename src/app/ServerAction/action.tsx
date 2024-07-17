"use server";

// Base URL for your APIs
const apiUrl = "http://192.168.1.10:8001/api";

export const SignIn = async (e: any) => {
  let email: string = e.email;
  let password: string = e.password;

  const responseLogin = await fetch(`${apiUrl}/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await responseLogin.json();
  return data;
};

export const fetchCategory = async () => {
  const responseCategory = await fetch(`${apiUrl}/categories`);
  const data = await responseCategory.json();
  // console.log(data)
  return data;
};


