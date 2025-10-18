import React, { useEffect, useState } from 'react';
import './CrackerAnimation.css';

function CrackerRocket({ startX, delay, color }) {
  const [launched, setLaunched] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLaunched(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div
      className="cracker-rocket"
      style={{
        left: startX,
        background: color
      }}
    >
      <div className={`rocket-body ${launched ? 'launched' : ''}`}>
        <div className="rocket-tip"></div>
        <div className="rocket-tail"></div>
      </div>
      {launched && (
        <div className="cracker-firework">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="firework-burst-particle"
              style={{
                '--angle': `${i * 22.5}deg`,
                '--burstColor': color
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CrackerAnimation() {
  // Launch 5 rockets at random X positions, staggered
  const rockets = [
    { startX: '14vw', delay: 100, color: '#ffd700' },
    { startX: '35vw', delay: 400, color: '#ff6b35' },
    { startX: '58vw', delay: 650, color: '#a855f7' },
    { startX: '78vw', delay: 900, color: '#ec4899' },
    { startX: '65vw', delay: 1200, color: '#ff512f' }
  ];

  return (
    <div className="cracker-animation-bg">
      {rockets.map((r, i) => (
        <CrackerRocket key={i} {...r} />
      ))}
    </div>
  );
}

export default CrackerAnimation;
