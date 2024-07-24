// utils/auth.ts

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setAuthToken = (token: string) => {
  // cookies.set('email', token, { path: '/' });
  cookies.set("loggedin", token);
  cookies.set("userId", token);
};

export const getAuthToken = () : string | undefined => {
  const loggedIn = cookies.get("loggedin");
  const userId = cookies.get("userId");
  return loggedIn && userId ? userId : undefined;
};

export const removeAuthToken = () => {
  cookies.remove("userId");
  cookies.remove("loogedin");
};
