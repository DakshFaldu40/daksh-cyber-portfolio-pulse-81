
import React from 'react';

const SkillsSection: React.FC = () => {
  const basicSkills = [
    { name: 'Python', icon: '🐍', level: 90 },
    { name: 'C++', icon: '⚡', level: 85 },
    { name: 'Java', icon: '☕', level: 80 },
    { name: 'HTML', icon: '🌐', level: 95 },
    { name: 'CSS', icon: '🎨', level: 90 },
    { name: 'JavaScript', icon: '🚀', level: 88 },
    { name: 'DSA', icon: '🧠', level: 85 },
    { name: 'RoomDB', icon: '💾', level: 75 },
    { name: 'Jetpack Compose', icon: '📱', level: 80 }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="glitch-text cyber-text text-5xl font-orbitron font-black mb-4" data-text="SKILLS & EXPERTISE">
            SKILLS & EXPERTISE
          </h2>
          <p className="text-xl font-tech text-foreground/70">
            Technologies I've mastered in the digital realm
          </p>
        </div>

        {/* Basic Skills Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-orbitron font-bold cyber-text mb-8 text-center">
            Core Technologies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="cyber-card hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl group-hover:animate-bounce">{skill.icon}</span>
                  <h4 className="text-xl font-orbitron font-bold cyber-text">{skill.name}</h4>
                </div>
                
                {/* Skill Level Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyber-blue to-cyber-purple h-2 rounded-full transition-all duration-1000 group-hover:animate-glow-pulse"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="absolute right-0 -top-6 text-sm font-tech text-cyber-blue">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Skills */}
        <div>
          <h3 className="text-3xl font-orbitron font-bold cyber-text mb-8 text-center">
            Advanced Specializations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Android Development */}
            <div className="cyber-card hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-6xl group-hover:animate-float">📱</span>
                  <div>
                    <h4 className="text-2xl font-orbitron font-bold cyber-text">Android Development</h4>
                    <p className="font-tech text-foreground/70">Native Mobile Apps</p>
                  </div>
                </div>
                <p className="font-tech text-foreground/80 mb-4 leading-relaxed">
                  Expert in building native Android applications using Kotlin, Java, and modern Android 
                  architecture components. Specialized in Material Design and user experience optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Kotlin', 'Android SDK', 'Material Design', 'MVVM'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyber-blue/20 border border-cyber-blue/30 rounded-full text-sm font-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Firebase */}
            <div className="cyber-card hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-6xl group-hover:animate-float">🔥</span>
                  <div>
                    <h4 className="text-2xl font-orbitron font-bold cyber-text">Firebase</h4>
                    <p className="font-tech text-foreground/70">Backend as a Service</p>
                  </div>
                </div>
                <p className="font-tech text-foreground/80 mb-4 leading-relaxed">
                  Proficient in implementing Firebase services for authentication, real-time databases, 
                  cloud storage, and serverless functions. Building scalable backend solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Authentication', 'Firestore', 'Cloud Functions', 'Analytics'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyber-purple/20 border border-cyber-purple/30 rounded-full text-sm font-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
