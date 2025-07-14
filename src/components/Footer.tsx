import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-neon-blue/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-neon-blue mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-neon-blue" />
                <a href="mailto:srujan.ks0903@gmail.com" className="hover:text-neon-blue transition-colors">
                  srujan.ks0903@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-neon-blue" />
                <span>7483183720</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} className="text-neon-blue" />
                <span>Bengalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-neon-cyan mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Experience', 'Certifications'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-neon-cyan transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-neon-green mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/SRUJANKS99"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-card border border-neon-blue/30 rounded-lg hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
              >
                <Github size={20} className="text-neon-blue" />
              </a>
              <a
                href="https://www.linkedin.com/in/ks-srujan-gowda-21ab3b2a3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-card border border-neon-cyan/30 rounded-lg hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
              >
                <Linkedin size={20} className="text-neon-cyan" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Srujan K S
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Srujan K S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;