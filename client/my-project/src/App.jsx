/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../src/Components/Dashboard/page';
import Page1 from '../src/Pages/Home/page';
import Profile from '../src/Pages/Profile/page';
import ModSidebar from '../src/Partials/ModSidebar/page';
import Login from '../src/Authentication/Login/page';
import Signup from '../src/Authentication/Signup/page';
import VerifyEmail from '../src/Authentication/VerifyEmail/page';
import OTP from '../src/Authentication/OTP/page';
import ResetPassword from '../src/Authentication/ResetPassword/page';

// Sample authentication status (replace with real logic)
const isAuthenticated = false; 

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  return isAuthenticated ? <Navigate to="/" /> : children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="/verifyemail" element={<PublicRoute><VerifyEmail /></PublicRoute>} />
        <Route path="/verifyotp" element={<PublicRoute><OTP /></PublicRoute>} />
        <Route path="/resetpassword" element={<PublicRoute><ResetPassword /></PublicRoute>} />

        <Route path="/" element={<ProtectedRoute><Dashboard><ModSidebar /><Page1 /></Dashboard></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Dashboard><ModSidebar /><Profile /></Dashboard></ProtectedRoute>} />

        {/* Fallback for any undefined route */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default App;
