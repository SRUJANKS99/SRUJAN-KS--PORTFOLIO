import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Full Stack Developer",
      issuer: "TAP Academy",
      year: "2025",
      color: "neon-blue"
    },
    {
      title: "Java Programming",
      issuer: "HackerRank",
      year: "2025",
      color: "neon-cyan"
    },
    {
      title: "Java Programming",
      issuer: "Edureka",
      year: "2024",
      color: "neon-green"
    },
    {
      title: "SQL Certificate",
      issuer: "HackerRank",
      year: "2024",
      color: "neon-purple"
    },
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB University",
      year: "2023",
      color: "neon-blue"
    },
    {
      title: "NCC 'A' Certificate",
      issuer: "National Cadet Corps, India",
      year: "2020",
      color: "neon-cyan"
    },
    {
      title: "Innovation & Design Thinking",
      issuer: "GMIT Davangere",
      year: "2024",
      color: "neon-green"
    },
    {
      title: "User Experience & Digital Skills",
      issuer: "Skill Workshop",
      year: "2024",
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
    <section id="certifications" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-dark-card/60 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-full border-2 ${getColorClass(cert.color)} bg-dark-bg/50 flex-shrink-0`}>
                    <Award size={20} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar size={14} />
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
