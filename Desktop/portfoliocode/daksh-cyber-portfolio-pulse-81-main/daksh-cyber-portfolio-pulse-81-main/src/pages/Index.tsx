
import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import LoadingScreen from '@/components/LoadingScreen';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ThankYouSection from '@/components/ThankYouSection';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <div className="relative">
      {/* Loading Screen */}
      {!showContent && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {/* Main Content */}
      {showContent && (
        <div className="animate-fade-in-up">
          {/* Matrix Background Effect */}
          <div className="matrix-bg">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-cyber-blue/20 text-xs animate-matrix-rain font-tech"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              >
                {Math.random().toString(36).substring(2, 10)}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-cyber-blue/30">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <div className="font-orbitron font-bold cyber-text text-xl">
                  Daksh Faldu
                </div>
                <div className="hidden md:flex space-x-6 font-tech">
                  {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-cyber-blue transition-colors cursor-pointer"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Floating Social Media Icons */}
          <div className="fixed bottom-6 right-6 z-30 flex flex-col space-y-4">
            <a
              href="https://github.com/DakshPatel40"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button p-3 animate-float hover:scale-110 transition-all duration-300"
            >
              <Github size={24} className="text-cyber-blue" />
            </a>
            <a
              href="https://www.linkedin.com/in/daksh-patel40"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button p-3 animate-float hover:scale-110 transition-all duration-300"
              style={{ animationDelay: '0.5s' }}
            >
              <Linkedin size={24} className="text-cyber-blue" />
            </a>
          </div>

          {/* Sections */}
          <div id="about">
            <AboutSection />
          </div>
          <div id="skills">
            <SkillsSection />
          </div>
          <div id="projects">
            <ProjectsSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
          <ThankYouSection />
        </div>
      )}
    </div>
  );
};

export default Index;
