import React, { useState } from 'react';

function RegisterModal({ show, handleClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
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
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Here you would typically make an API call to register
    console.log('Registration attempt:', formData);
    handleClose();
  };

  if (!show) return null;

  return (
    <div className="modal show" style={{ display: 'flex' }}>
      <div className="modal-content shadow-lg">
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <h2 className="fs-2 fw-bold mb-4" style={{ color: '#6a1b9a' }}>Create Account</h2>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
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
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="form-check-input"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms" className="form-check-label">
              I agree to the <a href="#" style={{ color: '#6a1b9a' }}>Terms of Service</a>
            </label>
          </div>
          <button type="submit" className="btn btn-yellow w-100 py-2">Create Account</button>
        </form>
        <div className="text-center mt-3">
          <button 
            className="btn btn-link text-purple p-0"
            onClick={() => {
              handleClose();
              // Assuming onShowLogin is a function that should be called
            }}
          >
            Already have an account? Login here
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal; 