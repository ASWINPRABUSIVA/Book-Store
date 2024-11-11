import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard';
import SellerDashboard from './Seller/SellerDashboard';
import UserDashboard from './User/UserDashboard';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
