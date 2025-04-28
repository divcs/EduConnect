import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

function Navbar() {
  const location = useLocation();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLoginClick = () => setShowLoginModal(true);
  const handleRegisterClick = () => setShowRegisterModal(true);
  const handleCloseLogin = () => setShowLoginModal(false);
  const handleCloseRegister = () => setShowRegisterModal(false);

  return (
    <nav className="navbar navbar-ex  pand-lg navbar-dark shadow-lg fade-in">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/images/logo.png" alt="EduConnect Logo" className="me-2" />
          <span className="fs-4 fw-bold">EduConnect</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto fs-5">
            <li className="nav-item mx-3">
              <Link className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className={`nav-link ${location.pathname === '/notes' ? 'active-link' : ''}`} to="/notes">Notes</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className={`nav-link ${location.pathname === '/messages' ? 'active-link' : ''}`} to="/messages">Messages</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className={`nav-link ${location.pathname === '/teams' ? 'active-link' : ''}`} to="/teams">Teams</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className={`nav-link ${location.pathname === '/profile' ? 'active-link' : ''}`} to="/profile">Profile</Link>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <button className="btn btn-purple" onClick={handleLoginClick}>Login</button>
            <button className="btn btn-yellow" onClick={handleRegisterClick}>Register</button>
          </div>
        </div>
      </div>

      <LoginModal show={showLoginModal} handleClose={handleCloseLogin} />
      <RegisterModal show={showRegisterModal} handleClose={handleCloseRegister} />
    </nav>
  );
}

export default Navbar; 