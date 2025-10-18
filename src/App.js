import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import CreateWish from './components/CreateWish';
import ParticleSystem from './components/ParticleSystem';
import FloatingDiyas from './components/FloatingDiyas';
import Menu3Dot from './components/Menu3Dot';

function App() {
  const [theme, setTheme] = useState('night');
  const [currentPage, setCurrentPage] = useState('dashboard');
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => {
          console.log('Autoplay blocked, user interaction needed:', err);
        });
      }
    };

    playAudio();

    const handleInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <div className={`app-container ${theme === 'day' ? 'theme-day' : 'theme-night'}`}>
      {/* Background Particles */}
      <ParticleSystem theme={theme} />
      
      {/* Floating Diyas (FIXED - no light rays) */}
      <FloatingDiyas />
      
      {/* 3-Dot Menu */}
      <Menu3Dot setCurrentPage={setCurrentPage} currentPage={currentPage} />
      
      {/* Main Content */}
      {currentPage === 'dashboard' ? (
        <Dashboard theme={theme} setTheme={setTheme} />
      ) : (
        <CreateWish setCurrentPage={setCurrentPage} />
      )}

      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/diwali-music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
