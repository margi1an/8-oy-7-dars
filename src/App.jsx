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
  import Register from './Pages/Register'; 
  import './App.css';
import Todo from './Pages/Todo';

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
    const showNavbar = !['/login', '/register'].includes(location.pathname); 
  
    return (
      <div className="align">
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>}/>
          <Route path="/product/:id" element={<Product></Product>} />
          <Route path="/todo" element={<Todo></Todo>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> Register sahifasini qo'shing
        </Routes>
      </div>
    );
  }
  

  export default App;
