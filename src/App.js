import React, { Component } from 'react';
import DashboardLayout from './components/DashboardLayout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />      
      </Routes>
    </Router>
      
  );
}

export default App;
