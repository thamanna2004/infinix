import React from 'react';
import './about-modals.css';

const InfoModal = ({ isOpen, onClose, title, content, eyebrow, type }) => {
  if (!isOpen) return null;

  const renderContent = () => {
    switch (type) {
      case 'news':
        return (
          <div className="news-grid">
            {[
              { date: 'Oct 24, 2025', title: 'Infinix announces next-gen silicon architecture.' },
              { date: 'Oct 15, 2025', title: 'Global sustainability report: 100% carbon neutral by 2030.' },
              { date: 'Sep 30, 2025', title: 'New flagship store opens in the heart of Tokyo.' }
            ].map((item, i) => (
              <div key={i} className="news-card">
                <span className="news-date">{item.date}</span>
                <h4>{item.title}</h4>
                <button className="read-more">Read Full Story &rarr;</button>
              </div>
            ))}
          </div>
        );
      case 'leadership':
        return (
          <div className="leadership-grid">
            {[
              { name: 'Elena Vance', role: 'Chief Executive Officer', img: '👤' },
              { name: 'Marcus Thorne', role: 'Head of Hardware', img: '👤' },
              { name: 'Sarah Chen', role: 'Design Director', img: '👤' },
              { name: 'David Miller', role: 'Software Engineering', img: '👤' }
            ].map((member, i) => (
              <div key={i} className="leader-card">
                <div className="leader-img">{member.img}</div>
                <div className="leader-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'investors':
        return (
          <div className="investor-stats">
            <div className="stat-item">
              <span className="stat-value">$89.4B</span>
              <span className="stat-label">Quarterly Revenue</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">1.2B+</span>
              <span className="stat-label">Active Devices</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">+14%</span>
              <span className="stat-label">YoY Growth</span>
            </div>
            <p className="investor-note">Infinix continues to deliver strong financial performance driven by innovation across all product categories.</p>
          </div>
        );
      default:
        return (
          <div className="info-body-inner">
            <p>{content}</p>
            <div className="placeholder-content">
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
              <div className="skeleton-line"></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="info-overlay" onClick={onClose}>
      <div className={`info-modal ${type}-modal`} onClick={(e) => e.stopPropagation()}>
        <button className="info-close" onClick={onClose}>&times;</button>
        
        <div className="info-header">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
        </div>

        <div className="info-body">
          {renderContent()}
        </div>

        <div className="info-footer">
          <button className="btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
