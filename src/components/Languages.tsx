import React from 'react';
import { Globe } from 'lucide-react';

const Languages = () => {
  const languages = [
    {
      name: "Kannada",
      level: "Full Professional",
      proficiency: 100,
      color: "neon-blue"
    },
    {
      name: "English",
      level: "Full Professional",
      proficiency: 100,
      color: "neon-cyan"
    },
    {
      name: "Hindi",
      level: "Full Professional",
      proficiency: 100,
      color: "neon-green"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'neon-blue': return 'bg-neon-blue';
      case 'neon-cyan': return 'bg-neon-cyan';
      case 'neon-green': return 'bg-neon-green';
      default: return 'bg-neon-blue';
    }
  };

  return (
    <section id="languages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
            Languages
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-dark-card/60 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full border-2 border-neon-blue bg-dark-bg/50">
                    <Globe size={20} className="text-neon-blue" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {language.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {language.level}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getColorClass(language.color)} transition-all duration-1000 animate-glow`}
                      style={{ width: `${language.proficiency}%` }}
                    />
                  </div>
                  <span className="absolute right-0 top-3 text-sm text-gray-400">
                    {language.proficiency}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;