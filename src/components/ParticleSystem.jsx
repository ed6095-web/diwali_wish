import React, { useEffect, useState } from 'react';
import './ParticleSystem.css';

function Particle({ id, x, y, delay, duration, size, color }) {
  return (
    <div
      className="particle"
      style={{
        left: x,
        top: y,
        animationDelay: delay,
        animationDuration: duration,
        width: size,
        height: size,
        background: color
      }}
    />
  );
}

function ParticleSystem({ theme }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = theme === 'night' 
      ? ['#ffd700', '#ffb347', '#ff6b35', '#a855f7', '#ec4899']
      : ['#ffd700', '#ff8c00', '#ff6347', '#ff1493', '#8b00ff'];

    const newParticles = [];
    for (let i = 0; i < 60; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100 + '%',
        y: Math.random() * 100 + '%',
        delay: Math.random() * 5 + 's',
        duration: (Math.random() * 10 + 10) + 's',
        size: (Math.random() * 4 + 2) + 'px',
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setParticles(newParticles);
  }, [theme]);

  return (
    <div className="particle-system">
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}
    </div>
  );
}

export default ParticleSystem;
