import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import EmployeeForm from './EmployeeForm'; 

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/employees/${id}`);
        setEmployee(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching employee data for editing.');
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleEditSubmit = async (updatedEmployeeData) => {
    try {
      if (!id) {
        throw new Error('Employee ID is missing');
      }
      // Make the PUT request with the employee ID
      const response = await axios.put(`http://localhost:5001/employees/${id}`, updatedEmployeeData);
      console.log('Updated Employee:', response.data);
      alert('Employee updated successfully');
      navigate('/employees');
    } catch (err) {
      console.error('Error updating employee:', err);
      alert('Failed to update employee');
    }
  };
  
  if (loading) {
    return <p>Loading employee data for editing...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div>
      <h2>Edit Employee</h2>
      <EmployeeForm employee={employee} onSubmit={handleEditSubmit} />
    </div>
  );
};

export default EditEmployee;
