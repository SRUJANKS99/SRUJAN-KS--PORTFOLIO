import React from 'react';
import { Gamepad2, Headphones, Lightbulb, Video, Box, Monitor } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      name: "Gaming",
      icon: <Gamepad2 className="text-neon-blue" size={32} />,
      color: "neon-blue",
      emoji: "🎮"
    },
    {
      name: "Anime & Music",
      icon: <Headphones className="text-neon-cyan" size={32} />,
      color: "neon-cyan",
      emoji: "🎧"
    },
    {
      name: "Tech Innovations",
      icon: <Lightbulb className="text-neon-green" size={32} />,
      color: "neon-green",
      emoji: "🧠"
    },
    {
      name: "Video Editing & VFX",
      icon: <Video className="text-neon-purple" size={32} />,
      color: "neon-purple",
      emoji: "✨"
    },
    {
      name: "3D Modeling",
      icon: <Box className="text-yellow-400" size={32} />,
      color: "yellow-400",
      emoji: "🧱"
    },
    {
      name: "Watching Tech Videos",
      icon: <Monitor className="text-pink-400" size={32} />,
      color: "pink-400",
      emoji: "📺"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'neon-blue': return 'border-neon-blue text-neon-blue';
      case 'neon-cyan': return 'border-neon-cyan text-neon-cyan';
      case 'neon-green': return 'border-neon-green text-neon-green';
      case 'neon-purple': return 'border-neon-purple text-neon-purple';
      case 'yellow-400': return 'border-yellow-400 text-yellow-400';
      case 'pink-400': return 'border-pink-400 text-pink-400';
      default: return 'border-neon-blue text-neon-blue';
    }
  };

  return (
    <section id="interests" className="py-20 bg-dark-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
            Interests
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-dark-card/80 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full border-2 ${getColorClass(interest.color)} bg-dark-bg/50 mb-4 group-hover:animate-float`}>
                    {interest.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {interest.name}
                  </h3>
                  <div className="text-3xl mb-2">
                    {interest.emoji}
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

export default Interests;