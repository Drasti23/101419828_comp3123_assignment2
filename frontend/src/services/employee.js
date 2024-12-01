import axios from 'axios';


const API_URL = 'http://localhost:5001'; 



export const createEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${API_URL}/employees`, employeeData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create employee');
  }
};


export const updateEmployee = async (id, employeeData) => {
  try {
    const response = await axios.put(`${API_URL}/employees/${id}`, employeeData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update employee');
  }
};

