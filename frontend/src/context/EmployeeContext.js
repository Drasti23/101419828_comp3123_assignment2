import React, { createContext, useContext, useState, useEffect } from 'react'; 
import { getEmployees } from '../services/api'; 


const EmployeeContext = createContext();


export const useEmployees = () => {
  return useContext(EmployeeContext);  
};


export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);  
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);  

  return (
    <EmployeeContext.Provider value={{ employees }}>
      {children}  
    </EmployeeContext.Provider>
  );
};
