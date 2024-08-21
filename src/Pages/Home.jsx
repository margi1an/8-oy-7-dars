import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Footer from '../Components/Footer'; // Footer componentini import qilish

function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className='align mt-9'>
      <div className="text-center mb-8">
        <h1 className='text-3xl font-semibold'>Products :</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div
            key={product.id}
            className="card"
            onClick={() => handleCardClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-description">{truncateText(product.description, 100)}</p>
              <p className="card-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer /> {/* Footer qo'shilmoqda */}
    </div>
  );
}

export default Home;
