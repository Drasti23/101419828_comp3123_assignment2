import React from 'react';
import { useEmployees } from '../context/EmployeeContext';  
import EmployeeCard from './EmployeeCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../App.css"

const API_URL = 'http://localhost:5001'; 


const deleteEmployee = async (id, setEmployees) => {
  try {
    await axios.delete(`${API_URL}/employees/${id}`);
    setEmployees(prev => prev.filter(employee => employee._id !== id)); 
  } catch (error) {
    console.error('Failed to delete employee', error);
  }
};

const EmployeeList = () => {
  const { employees, setEmployees } = useEmployees();  
  
  return (
    <div>
      <h2>Employee List</h2>
      <Link to="/create-employee">
        <button className='add-employee-btn'>Add Employee</button>
      </Link>
      <div className="employee-list-container">
        {employees.length === 0 ? (
          <p>No employees found</p>
        ) : (
          employees.map(employee => (
            <EmployeeCard 
              key={employee._id} 
              employee={employee} 
              onDelete={(id) => deleteEmployee(id, setEmployees)}  
            />
          ))
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
