
import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Daksh's portfolio website";

  useEffect(() => {
    // Start first line animation
    setTimeout(() => setShowFirstLine(true), 500);
    
    // Start second line animation
    setTimeout(() => setShowSecondLine(true), 4000);
    
    // Start fade out
    setTimeout(() => setFadeOut(true), 6500);
    
    // Complete loading
    setTimeout(() => onComplete(), 7500);
  }, [onComplete]);

  useEffect(() => {
    if (showFirstLine) {
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypewriterText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }
  }, [showFirstLine, fullText]);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Matrix Background Effect */}
      <div className="matrix-bg">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-cyber-blue text-xs opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: 'matrix-rain 3s linear infinite'
            }}
          >
            {Math.random().toString(36).substring(7)}
          </div>
        ))}
      </div>

      <div className="text-center">
        {showFirstLine && (
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold cyber-text">
              {typewriterText}
              <span className={`inline-block ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </h1>
          </div>
        )}
        
        {showSecondLine && (
          <div className="animate-fade-in-up">
            <p 
              className="typewriter text-xl md:text-2xl font-tech text-cyber-blue/80"
              style={{ '--duration': '2s', '--steps': '20' } as React.CSSProperties}
            >
              made by daksh faldu
            </p>
          </div>
        )}
      </div>

      {/* Floating Social Media Icons */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <a
          href="https://github.com/DakshPatel40"
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-button p-4 animate-float hover:scale-110 transition-all duration-300"
        >
          <Github size={32} className="text-cyber-blue" />
        </a>
        <a
          href="https://www.linkedin.com/in/daksh-patel40"
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-button p-4 animate-float hover:scale-110 transition-all duration-300"
          style={{ animationDelay: '0.5s' }}
        >
          <Linkedin size={32} className="text-cyber-blue" />
        </a>
      </div>

      {/* Glitch effect overlay */}
      {fadeOut && (
        <div className="absolute inset-0 bg-black animate-glitch"></div>
      )}
    </div>
  );
};

export default LoadingScreen;
