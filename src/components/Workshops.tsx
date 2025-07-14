import React from 'react';
import { Users, Lightbulb, Code, Presentation } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      title: "Immersive Interaction & Haptic Feedback in VR",
      icon: <Code className="text-neon-blue" size={24} />,
      color: "neon-blue"
    },
    {
      title: "User Experience & Digital Skills",
      icon: <Users className="text-neon-cyan" size={24} />,
      color: "neon-cyan"
    },
    {
      title: "Innovation & Design Thinking",
      icon: <Lightbulb className="text-neon-green" size={24} />,
      color: "neon-green"
    },
    {
      title: "Blood Bank Management System (Project Presentation)",
      icon: <Presentation className="text-neon-purple" size={24} />,
      color: "neon-purple"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'neon-blue': return 'border-neon-blue text-neon-blue';
      case 'neon-cyan': return 'border-neon-cyan text-neon-cyan';
      case 'neon-green': return 'border-neon-green text-neon-green';
      case 'neon-purple': return 'border-neon-purple text-neon-purple';
      default: return 'border-neon-blue text-neon-blue';
    }
  };

  return (
    <section id="workshops" className="py-20 bg-dark-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
            Certifications & Workshops
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Java Full Stack Developer", issuer: "TAP Academy", year: "2025", icon: "☕" },
              { title: "Java Programming", issuer: "HackerRank", year: "2025", icon: "🏆" },
              { title: "SQL Certificate", issuer: "HackerRank", year: "2024", icon: "🗃️" },
              { title: "MongoDB Intro", issuer: "MongoDB University", year: "2023", icon: "🍃" }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-dark-card/60 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105 text-center"
              >
                <div className="text-4xl mb-3 group-hover:animate-bounce">{cert.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
                <span className="text-neon-blue text-sm">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Workshops & Seminars
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-dark-card/80 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full border-2 ${getColorClass(workshop.color)} bg-dark-bg/50`}>
                    {workshop.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {workshop.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;