
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Create email content
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Daksh,\n\n` +
      `You have received a new message from your portfolio website:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    
    // Open default email client with prefilled data
    const mailtoLink = `mailto:dakshfaldu2007@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="glitch-text cyber-text text-5xl font-orbitron font-black mb-4" data-text="CONTACT ME">
            CONTACT ME
          </h2>
          <p className="text-xl font-tech text-foreground/70">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="cyber-card">
            <h3 className="text-2xl font-orbitron font-bold cyber-text mb-6">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-tech text-cyber-blue mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="cyber-glow bg-transparent border-cyber-blue/30 text-foreground font-tech focus:border-cyber-blue"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block font-tech text-cyber-blue mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="cyber-glow bg-transparent border-cyber-blue/30 text-foreground font-tech focus:border-cyber-blue"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block font-tech text-cyber-blue mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="cyber-glow bg-transparent border-cyber-blue/30 text-foreground font-tech focus:border-cyber-blue resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="cyber-button w-full hover:animate-glow-pulse"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="cyber-card">
              <h3 className="text-2xl font-orbitron font-bold cyber-text mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4 font-tech">
                <div className="flex items-center space-x-3">
                  <span className="text-cyber-blue">📧</span>
                  <span>dakshfaldu2007@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyber-blue">📱</span>
                  <span>+91 7574004603</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyber-blue">📍</span>
                  <span>Near Ram Temple, Mahobatpara, Kutiana, Porbandar - 362650</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="cyber-card">
              <h3 className="text-2xl font-orbitron font-bold cyber-text mb-6">
                Connect With Me
              </h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/DakshPatel40"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button p-4 hover:animate-float group"
                >
                  <Github className="w-6 h-6 group-hover:text-black transition-colors" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/daksh-patel40"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button p-4 hover:animate-float group"
                  style={{ animationDelay: '0.2s' }}
                >
                  <Linkedin className="w-6 h-6 group-hover:text-black transition-colors" />
                </a>
                
                <a
                  href="https://www.instagram.com/daksh_patel40/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button p-4 hover:animate-float group"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Instagram className="w-6 h-6 group-hover:text-black transition-colors" />
                </a>
              </div>

              <div className="mt-6 p-4 bg-cyber-blue/10 border border-cyber-blue/20 rounded-lg">
                <p className="font-tech text-sm text-foreground/80">
                  Open to collaboration on innovative projects and freelance opportunities. 
                  Let's build the future together! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
