import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.) in Information Science",
      institution: "GM Institute of Technology, Davangere",
      grade: "CGPA: 7.80/10",
      period: "2021 – 2025",
      color: "neon-blue"
    },
    {
      degree: "Pre-University (PUC)",
      institution: "P R N Amrutha Bharathi PU College, Hebri",
      grade: "Percentage: 95.66%",
      period: "2019 – 2021",
      color: "neon-cyan"
    },
    {
      degree: "SSLC (10th Grade)",
      institution: "National High School, Konandur",
      grade: "Percentage: 89.00%",
      period: "2018 – 2019",
      color: "neon-green"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'neon-blue': return 'border-neon-blue text-neon-blue';
      case 'neon-cyan': return 'border-neon-cyan text-neon-cyan';
      case 'neon-green': return 'border-neon-green text-neon-green';
      default: return 'border-neon-blue text-neon-blue';
    }
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-dark-card/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className={`p-4 rounded-full border-2 ${getColorClass(edu.color)} bg-dark-bg/50`}>
                      <GraduationCap size={32} />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-300 text-lg mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-neon-green" />
                        <span className="text-neon-green font-semibold">{edu.grade}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-neon-blue" />
                        <span>{edu.period}</span>
                      </div>
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

export default Education;