import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Prouct'; // Import the Product page
import Loader from './Components/Loader'; // Import the Loader component
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://json-api.uz/api/project/test-api/products')
      .then((response) => {
        console.log(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <Router>
      <div className="align">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} /> {/* Add the Product route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
