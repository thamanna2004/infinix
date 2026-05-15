import React from 'react';
import './offer-modal.css';

const OfferDetailModal = ({ isOpen, onClose, offer }) => {
  if (!isOpen || !offer) return null;

  return (
    <div className="offer-modal-overlay" onClick={onClose}>
      <div className="offer-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="offer-modal-close" onClick={onClose}>&times;</button>
        
        <div className="offer-modal-header">
          <span className="eyebrow">{offer.eyebrow}</span>
          <h2>{offer.title}</h2>
        </div>

        <div className="offer-modal-body">
          <section className="offer-modal-section">
            <h4>Offer Overview</h4>
            <p>{offer.desc}</p>
          </section>

          <section className="offer-modal-section">
            <h4>Key Benefits</h4>
            <ul className="benefits-list">
              {offer.benefits?.map((benefit, i) => (
                <li key={i}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          <div className="offer-modal-grid">
            <div className="offer-modal-info-box">
              <span className="info-label">Discount Details</span>
              <span className="info-value">{offer.discount || 'Special Pricing'}</span>
            </div>
            <div className="offer-modal-info-box">
              <span className="info-label">Offer Expiry</span>
              <span className="info-value">{offer.expiry || 'Limited Time Only'}</span>
            </div>
          </div>

          <section className="offer-modal-section">
            <h4>Product Information</h4>
            <p>Our latest generation products are designed with Apple Intelligence at the core, providing unparalleled performance and privacy.</p>
          </section>
        </div>

        <div className="offer-modal-footer">
          <button className="btn-primary full-width" onClick={onClose}>Got it</button>
        </div>
      </div>
    </div>
  );
};

export default OfferDetailModal;
