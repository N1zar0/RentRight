import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './design.css'; // Ensure this CSS file is properly linked

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '', role: 'tenant' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', credentials);
      console.log(response.data);

      if (credentials.role === 'manager') {
        navigate('/manager-dashboard');
      } else {
        navigate('/tenant-dashboard');
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <header className="navbar">
        <a href="/" className="RentRightBtn">RentRight</a>
      </header>
      <div className="container">
        <h2 className="header">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email:</label>
              <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Role:</label>
              <select name="role" value={credentials.role} onChange={handleChange}>
                <option value="tenant">Tenant</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <button className="button" type="submit">Login</button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 RentRight by PixelPerfect</p>
      </footer>
    </div>
  );
}

export default Login;