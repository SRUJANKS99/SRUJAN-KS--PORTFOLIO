import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Download, ExternalLink, X } from 'lucide-react';

const Hero = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Java Full Stack Developer",
    "Software Developer",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const ResumeModal = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-card border border-neon-blue/30 rounded-2xl max-w-md w-full p-6 animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Resume Options</h3>
          <button
            onClick={() => setShowResumeModal(false)}
            className="p-2 hover:bg-dark-hover rounded-full transition-colors"
          >
            <X size={24} className="text-gray-400" />
          </button>
        </div>
        
        <div className="space-y-4">
          <a
            href="/resume.pdf"
            download="Srujan_KS_Resume.pdf"
            className="flex items-center gap-3 w-full p-4 bg-neon-blue/20 border border-neon-blue/30 rounded-lg hover:bg-neon-blue/30 transition-all duration-300 group"
            onClick={() => setShowResumeModal(false)}
          >
            <div className="p-2 bg-neon-blue/20 rounded-full">
              <Download size={20} className="text-neon-blue" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Download Resume</h4>
              <p className="text-gray-400 text-sm">Save PDF to your device</p>
            </div>
          </a>
          
          <a
            href="https://flowcv.com/resume/1trswvmhk5r8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full p-4 bg-neon-green/20 border border-neon-green/30 rounded-lg hover:bg-neon-green/30 transition-all duration-300 group"
            onClick={() => setShowResumeModal(false)}
          >
            <div className="p-2 bg-neon-green/20 rounded-full">
              <ExternalLink size={20} className="text-neon-green" />
            </div>
            <div>
              <h4 className="text-white font-semibold">View Resume</h4>
              <p className="text-gray-400 text-sm">Open in new tab</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(14,165,233,0.15),_transparent)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(6,182,212,0.15),_transparent)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,_rgba(16,185,129,0.1),_transparent)] animate-pulse"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center animate-slide-up">
          <div className="mb-12">
            {/* Clean name without background box */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-green bg-clip-text text-transparent relative">
              <span className="inline-block hover:scale-110 transition-transform duration-300">S</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300">r</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300">u</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300">j</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300">a</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300">n</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300 mx-4">K</span>
              <span className="inline-block hover:scale-110 transition-transform duration-300">S</span>
            </h1>
            
            {/* Rotating role titles */}
            <div className="text-2xl md:text-3xl text-gray-300 mb-4 font-medium h-12 flex items-center justify-center">
              <span className="animate-fade-in" key={currentRole}>
                {roles[currentRole]}
              </span>
            </div>
            
            <div className="text-lg text-neon-blue mb-6 font-light">
              Software Developer | Problem Solver
            </div>
            
            {/* Enhanced contact info with better spacing */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300">
              <div className="flex items-center gap-2 hover:text-neon-blue transition-colors cursor-pointer">
                <MapPin size={16} className="text-neon-blue" />
                <span>Bengalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2 hover:text-neon-blue transition-colors">
                <Mail size={16} className="text-neon-blue" />
                <a href="mailto:srujan.ks0903@gmail.com" className="hover:text-neon-blue transition-colors">
                  srujan.ks0903@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 hover:text-neon-blue transition-colors cursor-pointer">
                <Phone size={16} className="text-neon-blue" />
                <span>7483183720</span>
              </div>
            </div>
          </div>

          {/* Enhanced social links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-dark-card/80 backdrop-blur-md border border-neon-blue/30 rounded-xl hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25"
            >
              <Github size={24} className="group-hover:text-neon-blue transition-colors" />
              <span className="font-semibold group-hover:text-neon-blue transition-colors">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-dark-card/80 backdrop-blur-md border border-neon-cyan/30 rounded-xl hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-lg hover:shadow-neon-cyan/25"
            >
              <Linkedin size={24} className="group-hover:text-neon-cyan transition-colors" />
              <span className="font-semibold group-hover:text-neon-cyan transition-colors">LinkedIn</span>
            </a>
            <button
              onClick={() => setShowResumeModal(true)}
              className="flex items-center gap-3 px-8 py-4 bg-dark-card/80 backdrop-blur-md border border-neon-green/30 rounded-xl hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-lg hover:shadow-neon-green/25"
            >
              <FileText size={24} className="group-hover:text-neon-green transition-colors" />
              <span className="font-semibold group-hover:text-neon-green transition-colors">Resume</span>
            </button>
          </div>

          {/* Interactive scroll indicator */}
          <div className="animate-float">
            <div className="text-gray-400 mb-6 font-light text-lg">
              Scroll down to explore my journey
            </div>
            <div 
              className="w-8 h-12 border-2 border-neon-blue rounded-full mx-auto relative hover:border-neon-cyan transition-colors cursor-pointer group"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="w-2 h-4 bg-neon-blue rounded-full mx-auto mt-3 animate-bounce group-hover:bg-neon-cyan transition-colors"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && <ResumeModal />}
    </section>
  );
};

export default Hero;