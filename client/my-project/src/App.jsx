/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../src/Components/Dashboard/page';
import Page1 from '../src/Pages/Home/page';
import Profile from '../src/Pages/Profile/page';
import ModSidebar from '../src/Partials/ModSidebar/page';
import Login from '../src/Authentication/Login/page';
import Signup from '../src/Authentication/Signup/page';

const App = () => {
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />
       
       
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Dashboard>
                <ModSidebar />
                <Routes>
                  <Route path="/" element={<Page1 />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </Dashboard>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
