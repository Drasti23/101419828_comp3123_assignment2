import React, { useState, useEffect } from 'react';
import { createEmployee, updateEmployee } from '../services/employee';

const EmployeeForm = ({ employee, onSubmit }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    position: '',
    salary: '',
    date_of_joining: '',
    department: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    }
  }, [employee]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      if (employee) {
        await updateEmployee(employee._id, formData);
      } else {
        await createEmployee(formData);
      }
      setError(''); 
      alert('Employee added successfully!');
      onSubmit();
    } catch (err) {
      console.error('Error details:', err);
      setError(err.response?.data?.message || err.message || 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        name="salary"
        type="number"
        value={formData.salary}
        onChange={handleChange}
        placeholder="Salary"
        required
      />
      <input
        name="date_of_joining"
        type="date"
        value={formData.date_of_joining}
        onChange={handleChange}
        required
      />
      <input
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <button type="submit">{employee ? 'Update' : 'Create'} Employee</button>
      {error && <p>{error}</p>}

      
    </form>
  );
};

export default EmployeeForm;
