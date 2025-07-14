import React from 'react';
import { Code, Database, Server, Palette, Users, Wrench, Coffee, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="text-neon-blue" size={24} />,
      skills: [
        { name: "Java", icon: "☕", level: 90 },
        { name: "SQL", icon: "🗃️", level: 85 },
        { name: "HTML", icon: "🌐", level: 95 },
        { name: "JavaScript", icon: "⚡", level: 80 }
      ],
      color: "neon-blue"
    },
    {
      title: "Frameworks/Libraries",
      icon: <Server className="text-neon-cyan" size={24} />,
      skills: [
        { name: "Spring Boot", icon: "🍃", level: 85 },
        { name: "React.js", icon: "⚛️", level: 80 }
      ],
      color: "neon-cyan"
    },
    {
      title: "Databases",
      icon: <Database className="text-neon-green" size={24} />,
      skills: [
        { name: "MySQL", icon: "🐬", level: 85 },
        { name: "Firebase", icon: "🔥", level: 80 }
      ],
      color: "neon-green"
    },
    {
      title: "Platforms/Tools",
      icon: <Wrench className="text-neon-purple" size={24} />,
      skills: [
        { name: "Git", icon: "📝", level: 90 },
        { name: "GitHub", icon: "🐙", level: 90 },
        { name: "Vercel", icon: "▲", level: 75 },
        { name: "Android Studio", icon: "🤖", level: 70 }
      ],
      color: "neon-purple"
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-yellow-400" size={24} />,
      skills: [
        { name: "Problem Solving", icon: "🧩", level: 95 },
        { name: "Adaptability", icon: "🔄", level: 90 },
        { name: "Teamwork", icon: "🤝", level: 85 }
      ],
      color: "yellow-400"
    },
    {
      title: "Creative Tools",
      icon: <Palette className="text-pink-400" size={24} />,
      skills: [
        { name: "CapCut", icon: "✂️", level: 80 },
        { name: "Blender", icon: "🎨", level: 70 },
        { name: "Alight Motion", icon: "🎬", level: 75 }
      ],
      color: "pink-400"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'neon-blue': return 'border-neon-blue bg-neon-blue/20';
      case 'neon-cyan': return 'border-neon-cyan bg-neon-cyan/20';
      case 'neon-green': return 'border-neon-green bg-neon-green/20';
      case 'neon-purple': return 'border-neon-purple bg-neon-purple/20';
      case 'yellow-400': return 'border-yellow-400 bg-yellow-400/20';
      case 'pink-400': return 'border-pink-400 bg-pink-400/20';
      default: return 'border-neon-blue bg-neon-blue/20';
    }
  };

  return (
    <section id="skills" className="py-20 bg-dark-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-dark-card/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-full border-2 ${getColorClass(category.color)} bg-dark-bg/50`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative overflow-hidden"
                    >
                      <div className="flex items-center gap-3 p-4 bg-dark-bg/50 rounded-lg border border-gray-600 hover:border-neon-blue/50 transition-all duration-300 hover:transform hover:scale-105">
                        <span className="text-2xl group-hover/skill:animate-bounce">{skill.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-neon-blue text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full transition-all duration-1000 group-hover/skill:animate-pulse"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;