import React from 'react';
import './Dashboard.css';

function Dashboard({ theme, setTheme }) {
  return (
    <div className="dashboard-container">
      {/* Theme Toggle Button ONLY */}
      <div className="dashboard-controls">
        <button 
          className="control-btn-dash glass-card" 
          onClick={() => setTheme(theme === 'night' ? 'day' : 'night')}
          title="Toggle Theme"
        >
          {theme === 'night' ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Main Wish Content */}
      <div className="dashboard-content">
        <div className="wish-card-main glass-card">
          <div className="diya-header">
            <span className="diya-icon-large">🪔</span>
            <h1 className="dashboard-title neon-glow-gold">Happy Diwali</h1>
            <span className="diya-icon-large">🪔</span>
          </div>

          <p className="festival-subtitle">Festival of Lights 2025</p>

          <div className="wish-message-container">
            <p className="main-wish-text">
              May this Diwali illuminate your life with endless joy, prosperity, and happiness. 
              May the divine light of diyas guide you towards success and fill your home with warmth and love.
            </p>

            <p className="blessing-text">
              ✨ May your days be as bright as the fireworks in the sky ✨
            </p>

            <p className="prosperity-text">
              🪔 Wishing you and your loved ones a blessed and joyous Diwali 🪔
            </p>
          </div>

          <div className="signature-section">
            <div className="signature-divider"></div>
            <p className="from-label">With love and warm wishes,</p>
            <h2 className="sender-name-dash neon-glow-gold">Eashan Darsh</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
