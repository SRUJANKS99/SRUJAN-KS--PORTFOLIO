import React from 'react';
import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Java Full Stack Developer Intern",
      company: "TAP Academy",
      location: "Bengaluru",
      period: "April 2021 – Present",
      achievements: [
        "Developed RESTful APIs using Spring Boot and MySQL, reducing response latency by 40%",
        "Built responsive front-end features with HTML, CSS, and JavaScript, improving load speed by 30%",
        "Collaborated in Agile sprints with a 4-member team using Git/GitHub",
        "Ensured 99% code stability through version control and QA testing"
      ],
      color: "neon-blue"
    },
    {
      title: "Java Programming Intern",
      company: "Edureka Learning Center",
      location: "Davangere",
      period: "Sept 2024 – Dec 2024",
      achievements: [
        "Developed modular Java console apps using OOP and TDD",
        "Increased code clarity and reusability by 50%",
        "Optimized logic for 35% faster runtime with exception handling and file I/O",
        "Participated in peer code reviews and debugging sessions"
      ],
      color: "neon-cyan"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'neon-blue': return 'border-neon-blue text-neon-blue';
      case 'neon-cyan': return 'border-neon-cyan text-neon-cyan';
      default: return 'border-neon-blue text-neon-blue';
    }
  };

  return (
    <section id="experience" className="py-20 bg-dark-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-dark-card/80 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`p-4 rounded-full border-2 ${getColorClass(exp.color)} bg-dark-bg/50`}>
                      <Briefcase size={32} />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-4">
                      {exp.company}
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-neon-green" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-neon-blue" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-3">
                          <TrendingUp size={16} className="text-neon-green mt-1 flex-shrink-0" />
                          <p className="text-gray-300">{achievement}</p>
                        </div>
                      ))}
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

export default Experience;