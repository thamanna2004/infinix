import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './account.css';

const AccountSection = () => {
  const { isLoggedIn, user, logout } = useAuth();

  if (!isLoggedIn) return null;

  return (
    <section className="account section" id="account">
      <div className="container">
        <div className="account__header">
          <span className="eyebrow">Your Profile</span>
          <h2 className="account__title">Manage your account.</h2>
        </div>

        <div className="account__grid">
          {/* Profile Overview */}
          <div className="account-card profile-main">
            <div className="account-card__avatar">{user?.avatar}</div>
            <div className="account-card__info">
              <h3>{user?.name}</h3>
              <p>{user?.email}</p>
              <span className="account-badge">Verified Member</span>
            </div>
            <button className="btn-secondary logout-btn" onClick={logout}>Sign Out</button>
          </div>

          {/* Account Links */}
          <div className="account-card links-grid">
            <div className="account-link-item">
              <h4>Recent Orders</h4>
              <p>View and track your latest Apple product purchases.</p>
              <button className="link-action">View Orders</button>
            </div>
            <div className="account-link-item">
              <h4>Payment Methods</h4>
              <p>Securely manage your saved cards and billing info.</p>
              <button className="link-action">Manage Payments</button>
            </div>
            <div className="account-link-item">
              <h4>Shipping Addresses</h4>
              <p>Edit or add new shipping destinations for your orders.</p>
              <button className="link-action">Edit Addresses</button>
            </div>
            <div className="account-link-item">
              <h4>Privacy & Security</h4>
              <p>Update your password and security preferences.</p>
              <button className="link-action">Security Settings</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSection;
