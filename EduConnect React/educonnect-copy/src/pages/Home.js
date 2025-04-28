import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div>
      <section className="text-center py-5 fade-in">
        <div className="container">
          <h2 className="display-4 fw-bold">Share Knowledge, Collaborate, and Grow</h2>
          <p className="mt-3 fs-4">Access notes, chat with peers, and form teams for hackathons.</p>
          <div className="mt-4">
            <button onClick={handleGetStarted} className="btn btn-yellow btn-lg">Get Started</button>
          </div>
        </div>
      </section>

      <section className="container py-5 fade-in">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="feature-card p-4 hover-grow h-100">
              <h3 className="fs-3 fw-bold">📚 Notes Sharing</h3>
              <p className="mt-2">Upload and browse notes organized by courses.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-card p-4 hover-grow h-100">
              <h3 className="fs-3 fw-bold">💬 Real-time Chat</h3>
              <p className="mt-2">Connect with peers and discuss course materials.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-card p-4 hover-grow h-100">
              <h3 className="fs-3 fw-bold">👥 Team Formation</h3>
              <p className="mt-2">Find teammates for projects and hackathons.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-card p-4 hover-grow h-100">
              <h3 className="fs-3 fw-bold">📊 Progress Tracking</h3>
              <p className="mt-2">Monitor your learning journey and achievements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 