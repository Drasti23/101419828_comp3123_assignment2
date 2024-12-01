import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/employees/${id}`);
        if (response.data && response.data.data) {
          setEmployee(response.data.data);  
        } else {
          setError('Employee not found');
        }
        setLoading(false);
      } catch (error) {
        setError('Error fetching employee details.');
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) {
    return <p>Fetching employee details...</p>;  
  }

  if (error) {
    return <p>{error}</p>;  
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p><strong>Name:</strong> {employee.first_name} {employee.last_name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Salary:</strong> ${employee.salary}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Date of Joining:</strong> {employee.date_of_joining}</p>
      
    </div>
  );
};

export default ViewEmployee;
