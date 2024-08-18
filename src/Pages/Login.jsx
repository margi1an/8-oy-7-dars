import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // CSS faylni import qiling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      alert('Noto‘g‘ri email yoki parol');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Tizimga kirish</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Parol</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">
            Kirish
          </button>
        </form>
        <div className="register-link">
          <a href="/register" className='text-slate-700'> Already have an account? <span className='text-blue'>Register</span></a>
        </div>
      </div>
    </div>
  );
}

export default Login;
