import React, { useState } from 'react';
import './CreateWish.css';

function CreateWish({ setCurrentPage }) {
  const [senderName, setSenderName] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [showWish, setShowWish] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  const handleReveal = () => {
    if (!senderName.trim() || !recipientName.trim()) {
      alert('Please enter both your name and recipient name!');
      return;
    }
    
    setIsRevealing(true);
    setTimeout(() => {
      setShowWish(true);
      setIsRevealing(false);
    }, 800);
  };

  const handleReset = () => {
    setShowWish(false);
    setSenderName('');
    setRecipientName('');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  return (
    <div className="create-wish-container">
      {/* Back Button - Always visible */}
      <button className="back-btn glass-card" onClick={handleBackToDashboard}>
        ← Back to Home
      </button>

      <div className="create-wish-content">
        {!showWish ? (
          <>
            <div className="create-title-section">
              <h1 className="create-title neon-glow-gold">
                ✨ Create Your Diwali Wish ✨
              </h1>
              <p className="create-subtitle">Personalize your festive greeting</p>
            </div>

            <div className="input-section">
              <div className="input-group glass-card">
                <label className="input-label">Your Name</label>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Enter your name..."
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                />
              </div>

              <div className="input-group glass-card">
                <label className="input-label">Recipient's Name</label>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Who are you wishing?"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                />
              </div>
            </div>

            <button 
              className={`create-reveal-btn ${isRevealing ? 'revealing' : ''}`}
              onClick={handleReveal}
            >
              <span className="btn-text">🪔 Create Wish 🪔</span>
              <span className="btn-shine"></span>
            </button>
          </>
        ) : (
          <div className="custom-wish-display glass-card">
            <div className="custom-wish-header">
              <span className="diya-icon-custom">🪔</span>
              <h2 className="custom-wish-title neon-glow-gold">Happy Diwali</h2>
              <span className="diya-icon-custom">🪔</span>
            </div>

            <div className="custom-wish-body">
              <h3 className="recipient-greeting">Dear {recipientName},</h3>
              
              <p className="custom-wish-message">
                May this Diwali bring you endless joy, prosperity, and the warmth of a thousand diyas. 
                May your life be as colorful as the rangoli and as bright as the fireworks in the sky.
              </p>

              <p className="custom-blessing">
                ✨ Wishing you a festival filled with light, love, and happiness ✨
              </p>

              <div className="custom-signature">
                <p className="from-line">With warm wishes,</p>
                <h4 className="sender-signature neon-glow-gold">{senderName}</h4>
              </div>
            </div>

            <div className="custom-wish-actions">
              <button className="action-btn reset-wish-btn" onClick={handleReset}>
                Create Another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateWish;
