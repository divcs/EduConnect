import React, { useState } from 'react';

function LoginModal({ show, handleClose }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to authenticate
    console.log('Login attempt:', formData);
    handleClose();
  };

  if (!show) return null;

  return (
    <div className="modal show" style={{ display: 'flex' }}>
      <div className="modal-content shadow-lg">
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <h2 className="fs-2 fw-bold mb-4" style={{ color: '#6a1b9a' }}>Login</h2>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="form-check-input"
              checked={formData.remember}
              onChange={handleChange}
            />
            <label htmlFor="remember" className="form-check-label">Remember me</label>
          </div>
          <button type="submit" className="btn btn-purple w-100 py-2">Login</button>
          <p className="text-center mt-3">
            <a href="#" className="text-decoration-none" style={{ color: '#6a1b9a' }}>Forgot password?</a>
          </p>
        </form>
        <div className="text-center mt-3">
          <button 
            className="btn btn-link text-purple p-0"
            onClick={() => {
              handleClose();
              // Assuming onShowRegister is called elsewhere in the component
            }}
          >
            Don't have an account? Register here
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal; 