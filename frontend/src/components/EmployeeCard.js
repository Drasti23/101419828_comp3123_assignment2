import React from 'react';
import { Link } from 'react-router-dom';
import  "../App.css"

const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <div className="employee-card">
      <h3>{employee.first_name} {employee.last_name}</h3>
      <p>Email: {employee.email}</p>
      <p>Position: {employee.position}</p>
      <p>Salary: ${employee.salary}</p>
      <p>Department: {employee.department}</p>
      <Link to={`/edit-employee/${employee._id}`}>
        <button class="edit-btn" >Edit</button>
      </Link>
      <Link to={`/view-employee/${employee._id}`}>
        <button class="view-btn" >View</button>
      </Link>
      <button class="delete-btn" onClick={() => onDelete(employee._id)}>Delete</button>
    </div>
  );
};

export default EmployeeCard;
