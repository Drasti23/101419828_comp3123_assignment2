import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Login from './components/Login';
import Signup from './components/Signup';
import { EmployeeProvider } from './context/EmployeeContext';


import EditEmployee from './components/EditEmployee';
import ViewEmployee from './components/ViewEmployee';

const App = () => {
  
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [isAuthenticated, setIsAuthenticated] = useState(storedUser ? true : false);
  const [user, setUser] = useState(storedUser);

  const handleLogin = (data) => {
    setIsAuthenticated(true);
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));  
  };

  const handleSignup = (data) => {
    setIsAuthenticated(true);
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));  
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    
  }, [isAuthenticated]);

  return (
    <Router>
      <EmployeeProvider>
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<h1>Welcome to Employee Management</h1>} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route
            path="/employees"
            element={isAuthenticated ? <EmployeeList /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/create-employee"
            element={isAuthenticated ? <EmployeeForm onSubmit={() => {}} /> : <Login onLogin={handleLogin} />}
          />
          
          <Route
            path="/edit-employee/:id"
            element={isAuthenticated ? <EditEmployee /> : <Login onLogin={handleLogin} />}
          />
          
          <Route
            path="/view-employee/:id"
            element={isAuthenticated ? <ViewEmployee /> : <Login onLogin={handleLogin} />}
          />
        </Routes>
      </EmployeeProvider>
    </Router>
  );
};

export default App;
