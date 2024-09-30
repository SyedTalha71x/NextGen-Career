/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../src/Components/Dashboard/page';
import Page1 from '../src/Pages/Home/page'
import Profile from '../src/Pages/Profile/page'
import ModSidebar from '../src/Partials/ModSidebar/page'

const App = () => {

  return (
    <Router>
      <Dashboard>
        <ModSidebar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Dashboard>
    </Router>
  );
};

export default App;
