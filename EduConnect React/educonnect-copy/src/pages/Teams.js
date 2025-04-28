import React, { useState } from 'react';
import { teamsData, availableRoles } from '../data/teamsData';

function Teams() {
  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeams = teamsData.filter(team => {
    const matchesCourse = selectedCourse === 'all' || team.course === selectedCourse;
    const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         team.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCourse && matchesSearch;
  });

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search teams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-purple" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="all">All Courses</option>
            <option value="CAP756">CAP756</option>
            <option value="CAP757">CAP757</option>
            <option value="CAP758">CAP758</option>
          </select>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-yellow w-100"
            onClick={() => setShowCreateTeam(true)}
          >
            Create Team
          </button>
        </div>
      </div>

      <div className="row">
        {filteredTeams.map(team => (
          <div key={team.id} className="col-md-6 mb-4">
            <div className="feature-card p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h3 className="fs-4 fw-bold">{team.name}</h3>
                  <p className="text-muted mb-0">{team.course}</p>
                </div>
                <span className={`badge ${team.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                  {team.status}
                </span>
              </div>
              
              <p className="mb-3">{team.description}</p>
              
              <div className="mb-3">
                <h6 className="fw-bold">Team Members:</h6>
                <div className="d-flex flex-wrap gap-2">
                  {team.members.map(member => (
                    <span key={member.id} className="badge bg-purple">
                      {member.name} ({member.role})
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <h6 className="fw-bold">Looking For:</h6>
                <div className="d-flex flex-wrap gap-2">
                  {team.lookingFor.map(role => (
                    <span key={role} className="badge bg-yellow text-dark">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <button className="btn btn-purple w-100">Join Team</button>
            </div>
          </div>
        ))}
      </div>

      {showCreateTeam && (
        <div className="modal show" style={{ display: 'flex' }}>
          <div className="modal-content shadow-lg">
            <span className="close-btn" onClick={() => setShowCreateTeam(false)}>&times;</span>
            <h2 className="fs-2 fw-bold mb-4" style={{ color: '#6a1b9a' }}>Create New Team</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="teamName" className="form-label">Team Name</label>
                <input type="text" className="form-control" id="teamName" required />
              </div>
              <div className="mb-3">
                <label htmlFor="course" className="form-label">Course</label>
                <select className="form-select" id="course" required>
                  <option value="CAP756">CAP756</option>
                  <option value="CAP757">CAP757</option>
                  <option value="CAP758">CAP758</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" rows="3" required></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Looking For (Select multiple)</label>
                <div className="d-flex flex-wrap gap-2">
                  {availableRoles.map(role => (
                    <div key={role} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={role}
                        id={role}
                      />
                      <label className="form-check-label" htmlFor={role}>
                        {role}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <button type="submit" className="btn btn-yellow w-100">Create Team</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Teams; 