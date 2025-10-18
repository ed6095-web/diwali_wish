import React from 'react';
import './FloatingDiyas.css';

function Diya3D({ delay, left, top }) {
  return (
    <div 
      className="diya-3d-container" 
      style={{ left, top, animationDelay: delay }}
    >
      <div className="diya-3d">
        <div className="diya-body"></div>
        <div className="diya-flame">
          <div className="flame-core"></div>
          <div className="flame-glow"></div>
        </div>
        {/* REMOVE LINE: <div className="diya-light-rays"></div> */}
      </div>
    </div>
  );
}

function FloatingDiyas() {
  const diyas = [
    { delay: '0s', left: '10%', top: '20%' },
    { delay: '1s', left: '85%', top: '15%' },
    { delay: '2s', left: '15%', top: '70%' },
    { delay: '1.5s', left: '80%', top: '75%' },
    { delay: '0.5s', left: '50%', top: '10%' },
  ];

  return (
    <div className="floating-diyas-container">
      {diyas.map((diya, idx) => (
        <Diya3D key={idx} {...diya} />
      ))}
    </div>
  );
}

export default FloatingDiyas;
