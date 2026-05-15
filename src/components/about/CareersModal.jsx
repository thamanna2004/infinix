import React from 'react';
import './about-modals.css';

const CareersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const jobs = [
    { title: 'Senior UX Designer', location: 'Cupertino, CA', type: 'Full-time' },
    { title: 'Frontend Engineer (React)', location: 'Remote / Austin, TX', type: 'Full-time' },
    { title: 'Product Marketing Manager', location: 'London, UK', type: 'Full-time' },
    { title: 'Hardware Reliability Engineer', location: 'Shanghai, CN', type: 'Full-time' }
  ];

  return (
    <div className="info-overlay" onClick={onClose}>
      <div className="info-modal careers-modal" onClick={(e) => e.stopPropagation()}>
        <button className="info-close" onClick={onClose}>&times;</button>
        
        <div className="info-header">
          <span className="eyebrow">Careers at Infinix</span>
          <h2>Join the future of innovation.</h2>
          <p>We're looking for the boldest minds to help us redefine what's possible.</p>
        </div>

        <div className="jobs-list">
          {jobs.map((job, index) => (
            <div key={index} className="job-item">
              <div className="job-info">
                <h4>{job.title}</h4>
                <span>{job.location} • {job.type}</span>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>

        <div className="info-footer">
          <p>Don't see a role that fits? <a href="#">View all 500+ openings</a></p>
        </div>
      </div>
    </div>
  );
};

export default CareersModal;
