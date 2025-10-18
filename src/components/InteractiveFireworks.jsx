import React, { useState } from 'react';
import './InteractiveFireworks.css';

function FireworkBurst({ x, y, id, color }) {
  return (
    <div 
      className="firework-burst" 
      style={{ left: x, top: y }}
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="firework-particle"
          style={{
            '--angle': `${i * 30}deg`,
            '--color': color,
            animationDelay: `${i * 0.02}s`
          }}
        />
      ))}
    </div>
  );
}

function InteractiveFireworks() {
  const [fireworks, setFireworks] = useState([]);

  const handleClick = (e) => {
    const colors = ['#ffd700', '#ff6b35', '#a855f7', '#ec4899', '#3b82f6', '#10b981'];
    const newFirework = {
      id: Date.now(),
      x: e.clientX + 'px',
      y: e.clientY + 'px',
      color: colors[Math.floor(Math.random() * colors.length)]
    };

    setFireworks([...fireworks, newFirework]);

    setTimeout(() => {
      setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id));
    }, 2000);
  };

  return (
    <div className="interactive-fireworks" onClick={handleClick}>
      {fireworks.map((fw) => (
        <FireworkBurst key={fw.id} {...fw} />
      ))}
    </div>
  );
}

export default InteractiveFireworks;
