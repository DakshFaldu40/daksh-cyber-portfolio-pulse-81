
import React from 'react';

const ThankYouSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Matrix Rain Effect */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-cyber-blue/30 text-xs animate-matrix-rain font-tech"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Math.random().toString(36).substring(2, 8)}
          </div>
        ))}

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Thank You Text */}
        <div className="mb-12">
          <h1 className="glitch-text cyber-text text-6xl md:text-8xl font-orbitron font-black mb-6" data-text="THANK YOU">
            THANK YOU
          </h1>
          <p className="text-2xl md:text-3xl font-tech text-foreground/80 mb-8">
            for visiting my digital domain
          </p>
        </div>

        {/* Signature */}
        <div className="cyber-card max-w-2xl mx-auto mb-12">
          <div className="text-center space-y-4">
            <div className="text-3xl font-orbitron font-bold cyber-text">
              Daksh Faldu
            </div>
            <div className="text-lg font-tech text-cyber-blue/80">
              Full Stack Developer • Tech Enthusiast • Digital Creator
            </div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent mx-auto"></div>
            <p className="font-tech text-foreground/70 text-sm">
              "Crafting digital experiences, one line of code at a time"
            </p>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className="cyber-button animate-float cursor-pointer">
            <span className="text-cyber-blue">{"<"}</span>
            Code
            <span className="text-cyber-blue">{"/>"}</span>
          </div>
          <div className="cyber-button animate-float cursor-pointer" style={{ animationDelay: '0.5s' }}>
            <span className="text-cyber-purple">{"{"}</span>
            Create
            <span className="text-cyber-purple">{"}"}</span>
          </div>
          <div className="cyber-button animate-float cursor-pointer" style={{ animationDelay: '1s' }}>
            <span className="text-cyber-green">[</span>
            Innovate
            <span className="text-cyber-green">]</span>
          </div>
        </div>

        {/* Final Message */}
        <div className="font-tech text-lg text-foreground/60 animate-fade-in-up">
          <p className="mb-2">Stay connected • Keep coding • Build the future</p>
          <p className="text-cyber-blue">
            © 2024 Daksh Faldu | All rights reserved in the digital realm
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-12 cyber-button animate-glow-pulse"
        >
          ↑ Back to Top
        </button>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 text-cyber-blue/30 font-tech text-xs">
        {'<html>'}
      </div>
      <div className="absolute top-10 right-10 text-cyber-blue/30 font-tech text-xs">
        {'</html>'}
      </div>
      <div className="absolute bottom-10 left-10 text-cyber-blue/30 font-tech text-xs">
        {'/* End of Portfolio */'}
      </div>
      <div className="absolute bottom-10 right-10 text-cyber-blue/30 font-tech text-xs">
        {'// Thank you for visiting'}
      </div>
    </section>
  );
};

export default ThankYouSection;
