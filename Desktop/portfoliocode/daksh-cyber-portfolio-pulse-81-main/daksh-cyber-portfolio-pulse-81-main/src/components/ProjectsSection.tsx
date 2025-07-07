
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ProjectsSection: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      name: 'CyberChat App',
      tech: ['Android', 'Firebase', 'Kotlin'],
      description: 'A secure messaging app with end-to-end encryption and real-time communication.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Neural Network Visualizer',
      tech: ['Python', 'TensorFlow', 'React'],
      description: 'Interactive visualization tool for understanding neural network architectures.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      status: 'In Progress'
    },
    {
      id: 3,
      name: 'Quantum Task Manager',
      tech: ['Java', 'Spring', 'PostgreSQL'],
      description: 'Advanced task management system with AI-powered scheduling and optimization.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      status: 'Planning'
    },
    {
      id: 4,
      name: 'BlockChain Explorer',
      tech: ['JavaScript', 'Node.js', 'Web3'],
      description: 'Decentralized application for exploring blockchain transactions and smart contracts.',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop',
      status: 'Completed'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="glitch-text cyber-text text-5xl font-orbitron font-black mb-4" data-text="PROJECTS">
            PROJECTS
          </h2>
          <p className="text-xl font-tech text-foreground/70">
            Digital solutions crafted with precision and innovation
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative">
          <div className="cyber-card p-8 min-h-[500px]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <div className="relative group">
                <div className="cyber-glow rounded-lg overflow-hidden">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].name}
                    className="w-full h-64 object-cover filter brightness-110 contrast-125"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-tech ${
                    projects[currentProject].status === 'Completed' 
                      ? 'bg-cyber-green/20 border border-cyber-green/30 text-cyber-green'
                      : projects[currentProject].status === 'In Progress'
                      ? 'bg-cyber-blue/20 border border-cyber-blue/30 text-cyber-blue'
                      : 'bg-cyber-purple/20 border border-cyber-purple/30 text-cyber-purple'
                  }`}>
                    {projects[currentProject].status}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-orbitron font-bold cyber-text mb-2">
                    {projects[currentProject].name}
                  </h3>
                  <p className="font-tech text-foreground/80 text-lg leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-orbitron font-bold cyber-text mb-3">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].tech.map((tech, index) => (
                      <span
                        key={tech}
                        className="px-4 py-2 cyber-glow rounded-lg font-tech text-sm animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button className="cyber-button">
                    View Project
                  </Button>
                  <Button className="cyber-button">
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <button
              onClick={prevProject}
              className="cyber-button text-2xl w-12 h-12 rounded-full flex items-center justify-center hover:animate-glow-pulse"
            >
              ←
            </button>

            {/* Project Indicators */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-cyber-blue animate-glow-pulse'
                      : 'bg-gray-600 hover:bg-cyber-blue/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="cyber-button text-2xl w-12 h-12 rounded-full flex items-center justify-center hover:animate-glow-pulse"
            >
              →
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setCurrentProject(index)}
              className={`cyber-card cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === currentProject ? 'animate-glow-pulse' : ''
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-32 object-cover rounded-lg mb-3 filter brightness-110"
              />
              <h4 className="font-orbitron font-bold cyber-text text-sm">
                {project.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
