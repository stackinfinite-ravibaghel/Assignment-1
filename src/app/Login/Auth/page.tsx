// utils/auth.ts

import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setAuthToken = (token: string) => {
  cookies.set('email', token, { path: '/' });
};

export const getAuthToken = () => {
  return cookies.get('email');
};

export const removeAuthToken = () => {
  cookies.remove('email');
};
