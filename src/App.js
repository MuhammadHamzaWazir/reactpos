import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './pages';
import Customers from './pages/Customers'
import Products from './pages/Products'
import Account from './pages/Account'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/404'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />      
        <Route path="/register" element={<Register />} />      
        <Route path="/404" element={<NotFound />} />      
        <Route path="/" element={<DashboardLayout children={<Dashboard />} />} />      
        <Route path="/customers" element={<DashboardLayout children={<Customers />} />} />      
        <Route path="/products" element={<DashboardLayout children={<Products />} />} />      
        <Route path="/account" element={<DashboardLayout children={<Account />} />} />      
        <Route path="/settings" element={<DashboardLayout children={<Settings />} />} />     
      </Routes>
    </Router>
      
  );
}

export default App;
