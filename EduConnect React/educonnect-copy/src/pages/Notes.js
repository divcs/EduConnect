import React, { useState } from 'react';
import { notesData, courses } from '../data/notesData';

function Notes() {
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = notesData.filter(note => {
    const matchesCourse = selectedCourse === 'all' || note.course === selectedCourse;
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.description.toLowerCase().includes(searchQuery.toLowerCase());
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
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-purple" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="all">All Courses</option>
            {courses.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="feature-card p-4">
            <h3 className="fs-4 fw-bold mb-3">Upload New Notes</h3>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Title" />
              </div>
              <div className="mb-3">
                <select className="form-select">
                  <option>Select Course</option>
                  {courses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Description" rows="3"></textarea>
              </div>
              <div className="mb-3">
                <input type="file" className="form-control" accept=".pdf" />
              </div>
              <button type="submit" className="btn btn-purple w-100">Upload</button>
            </form>
          </div>
        </div>

        <div className="col-md-8">
          {filteredNotes.map(note => (
            <div key={note.id} className="feature-card p-4 mb-4">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h3 className="fs-4 fw-bold">{note.title}</h3>
                  <p className="text-muted mb-2">{note.course} • {note.author} • {note.date}</p>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-purple">
                    <i className="bi bi-heart"></i> {note.likes}
                  </button>
                  <button className="btn btn-sm btn-purple">
                    <i className="bi bi-chat"></i> {note.comments}
                  </button>
                </div>
              </div>
              <p className="mb-3">{note.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <a href={note.fileUrl} className="btn btn-yellow" download>
                  <i className="bi bi-download"></i> Download PDF
                </a>
                <button className="btn btn-purple">View Comments</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes; 