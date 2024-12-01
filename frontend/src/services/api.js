import axios from 'axios';

const API_URL = 'http://localhost:5001'; 

export const getEmployees = async () => {
  try {
    const response = await axios.get(`${API_URL}/employees`);
    console.log('Fetched employees:', response.data); 
    return response.data.data;  
  } catch (error) {
    throw new Error('Failed to fetch employees');
  }
};
