import React, { useState } from 'react';
import './Menu3Dot.css';

function Menu3Dot({ setCurrentPage, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCreateWish = () => {
    setCurrentPage('create');
    setIsOpen(false);
  };

  return (
    <div className="menu-3dot-container">
      {/* 3-Dot Button */}
      <button 
        className={`menu-toggle-btn glass-card ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </button>

      {/* Backdrop */}
      {isOpen && <div className="menu-backdrop" onClick={toggleMenu}></div>}

      {/* Menu Items - Only Create Wish */}
      <div className={`menu-items ${isOpen ? 'menu-open' : ''}`}>
        <button className="menu-item glass-card" onClick={handleCreateWish}>
          <span className="menu-icon">✍️</span>
          <span className="menu-text">Create Custom Wish</span>
        </button>
      </div>
    </div>
  );
}

export default Menu3Dot;
