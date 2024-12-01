import React, { useState } from 'react';
import { searchEmployees } from '../services/employee';

const EmployeeSearch = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const results = await searchEmployees({ id: searchTerm, position: searchTerm, department: searchTerm });
      onSearchResults(results);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by ID, Position, or Department"
      />
      <button type="submit">Search</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default EmployeeSearch;