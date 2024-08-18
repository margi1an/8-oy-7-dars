import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Prouct';
import Loader from './Components/Loader';
import Login from './Pages/Login';
import Register from './Pages/Register'; // Register page import qiling
import ProtectedRoute from './Components/ProtectedRoute';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://json-api.uz/api/project/test-api/products')
      .then((response) => {
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const showNavbar = !['/login', '/register'].includes(location.pathname); // Navbarni ko'rsatmaslik kerak bo'lgan sahifalarni tekshirish

  return (
    <div className="align">
      {showNavbar && <Navbar />} {/* Shartli ravishda Navbarni ko'rsatish */}
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Register sahifasini qo'shing */}
      </Routes>
    </div>
  );
}

export default App;
