import React, { useEffect, useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from "react-router-dom";
import { Redirect } from 'react-router';
import Dashboard from './pages';
import Customers from './pages/Customers'
import Products from './pages/Products'
import Account from './pages/Account'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/404'

function App() {
  const [userToken, setToken] = useState('');
  // localStorage.removeItem('user');
  // localStorage.removeItem('token');
  const token = localStorage.getItem('token');
   if(!token) {
     return (
       <Router>
         <Routes>
           <Route exact path="/" element={<Login setToken={setToken} />}  />
           <Route path="/register" element={<Register />} />
         </Routes>
       </Router>
     );
   } else {
     return (
      <Router>
        <Routes>
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
  
}

export default App;
