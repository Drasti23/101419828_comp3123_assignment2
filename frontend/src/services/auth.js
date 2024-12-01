import axios from 'axios';

const API_URL = 'http://localhost:5001'; 


export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to sign up');
  }
};


export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to login');
  }
};
