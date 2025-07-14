import React from 'react';
import { Code, Lightbulb, Users, Zap, Target, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-neon-blue" size={28} />,
      title: "Full Stack Development",
      description: "Java, Spring Boot, React, Firebase",
      gradient: "from-neon-blue to-blue-400"
    },
    {
      icon: <Lightbulb className="text-neon-cyan" size={28} />,
      title: "Problem Solver",
      description: "Clean, scalable code solutions",
      gradient: "from-neon-cyan to-cyan-400"
    },
    {
      icon: <Users className="text-neon-green" size={28} />,
      title: "Team Player",
      description: "Agile methodologies & collaboration",
      gradient: "from-neon-green to-green-400"
    },
    {
      icon: <Zap className="text-neon-purple" size={28} />,
      title: "Innovation",
      description: "UI/UX design & modern tech",
      gradient: "from-neon-purple to-purple-400"
    }
  ];

  const stats = [
    { number: "15+", label: "Projects Completed", color: "text-neon-blue", icon: "🚀" },
    { number: "0-1+", label: "Years Experience", color: "text-neon-cyan", icon: "💼" },
    { number: "100%", label: "Problem Sloving", color: "text-neon-green", icon: "🏆" },
    { number: "100%", label: "Code Quality", color: "text-neon-purple", icon: "⭐" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-card/30 to-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(14,165,233,0.05),_transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(6,182,212,0.05),_transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-blue/10 border border-neon-blue/20 rounded-full mb-6">
            <Target size={16} className="text-neon-blue" />
            <span className="text-neon-blue text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
            Crafting Digital Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Enhanced description with better typography */}
          <div className="bg-dark-card/60 backdrop-blur-md rounded-3xl p-8 mb-16 border border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-500 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-cyan/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="text-neon-blue" size={24} />
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Detail-oriented Information Science graduate with hands-on experience building and deploying 
                full-stack web and mobile applications using{' '}
                <span className="text-neon-blue font-semibold bg-neon-blue/10 px-2 py-1 rounded">Java</span>,{' '}
                <span className="text-neon-cyan font-semibold bg-neon-cyan/10 px-2 py-1 rounded">Spring Boot</span>,{' '}
                 <span className="text-neon-cyan font-semibold bg-neon-cyan/10 px-2 py-1 rounded">Java Script</span>,{' '}

                <span className="text-neon-green font-semibold bg-neon-green/10 px-2 py-1 rounded">Firebase</span>, and{' '}
                <span className="text-neon-purple font-semibold bg-neon-purple/10 px-2 py-1 rounded">React</span>. 
                Strong foundation in REST API development, responsive UI design, and agile teamwork as a{' '}
                <span className="text-yellow-400 font-semibold bg-yellow-400/10 px-2 py-1 rounded">Software Developer</span>. 
                Passionate about solving real-world challenges through clean, scalable code and innovative solutions.
              </p>
            </div>
          </div>

          {/* Enhanced stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-dark-card/60 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:animate-pulse`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced highlights grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-dark-card/60 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-all duration-500 group hover:transform hover:scale-105 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="p-4 bg-dark-bg/80 rounded-full mb-4 group-hover:animate-float border border-gray-600 group-hover:border-neon-blue/50 transition-all duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-neon-blue transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;