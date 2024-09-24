import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../src/Components/Dashboard/page';
import Page1 from '../src/Pages/Home/page'
import Email from '../src/Pages/Email/page'

const App = () => {
  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/email" element={<Email />} />
        </Routes>
      </Dashboard>
    </Router>
  );
};

export default App;
