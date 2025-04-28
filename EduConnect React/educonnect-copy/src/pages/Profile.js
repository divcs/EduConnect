import React, { useState } from 'react';
import { userProfile } from '../data/profileData';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(userProfile);

  const handleSave = (e) => {
    e.preventDefault();
    // Here you would typically save the profile to a backend
    console.log('Saving profile:', profile);
    setIsEditing(false);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <div className="feature-card p-4 text-center mb-4">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            {isEditing ? (
              <form onSubmit={handleSave}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="3"
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-purple w-100">Save Changes</button>
              </form>
            ) : (
              <>
                <h3 className="fs-4 fw-bold">{profile.name}</h3>
                <p className="text-muted">{profile.email}</p>
                <p className="mb-3">{profile.bio}</p>
                <button
                  className="btn btn-yellow w-100"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>

          <div className="feature-card p-4 mb-4">
            <h4 className="fs-5 fw-bold mb-3">Statistics</h4>
            <div className="d-flex justify-content-between mb-2">
              <span>Notes Shared</span>
              <span className="fw-bold">{profile.stats.notesShared}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Teams Joined</span>
              <span className="fw-bold">{profile.stats.teamsJoined}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Messages Sent</span>
              <span className="fw-bold">{profile.stats.messagesSent}</span>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="feature-card p-4 mb-4">
            <h4 className="fs-5 fw-bold mb-3">Skills</h4>
            <div className="d-flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span key={index} className="badge bg-purple">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="feature-card p-4">
            <h4 className="fs-5 fw-bold mb-3">Recent Activity</h4>
            <div className="list-group">
              {profile.recentActivity.map(activity => (
                <div
                  key={activity.id}
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h6 className="mb-0">
                      {activity.type === 'note' && '📝'}
                      {activity.type === 'team' && '👥'}
                      {activity.type === 'message' && '💬'}
                      {' '}{activity.title}
                    </h6>
                    <small className="text-muted">
                      {activity.action} on {activity.date}
                    </small>
                  </div>
                  <button className="btn btn-sm btn-purple">View</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile; 