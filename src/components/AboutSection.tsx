
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar/Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full cyber-glow animate-glow-pulse overflow-hidden">
              <img
                src="/daksh.jpg"
                alt="Daksh Faldu"
                className="w-full h-full object-cover filter brightness-110 contrast-125 hue-rotate-180"
              />
            </div>
            {/* Glitch overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-blue/20 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* About Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="glitch-text cyber-text text-5xl font-orbitron font-black" data-text="ABOUT ME">
            ABOUT ME
          </div>
          
          <div className="cyber-card">
            <h2 className="text-3xl font-orbitron font-bold cyber-text mb-4">
              Daksh Faldu
            </h2>
            
            <div className="space-y-4 text-lg font-tech text-foreground/90">
              <p>
                <span className="text-cyber-blue">Age:</span> 20 years old
              </p>
              <p>
                <span className="text-cyber-blue">Location:</span> Near Ram Temple, Mahobatpara, Kutiana, Porbandar - 362650
              </p>
              <p>
                <span className="text-cyber-blue">Passion:</span> Crafting digital experiences through code
              </p>
              <p className="leading-relaxed">
                I'm a passionate developer who thrives in the intersection of technology and creativity. 
                With expertise in multiple programming languages and frameworks, I build solutions that 
                push the boundaries of what's possible in the digital space.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                or diving deep into the latest trends in software development and cybersecurity.
              </p>
            </div>

            <div className="mt-6 flex space-x-4">
              <div className="cyber-button animate-float">
                <span className="text-cyber-blue">{"<"}</span>
                Developer
                <span className="text-cyber-blue">{"/>"}</span>
              </div>
              <div className="cyber-button animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-cyber-purple">{"{"}</span>
                Creator
                <span className="text-cyber-purple">{"}"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
