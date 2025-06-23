import { Code, Database, Globe, Smartphone, GitBranch, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="text-blue-600" size={24} />,
      skills: ["Java", "SQL"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="text-blue-600" size={24} />,
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frameworks",
      icon: <Server className="text-blue-600" size={24} />,
      skills: ["Spring Boot"]
    },
    {
      title: "Databases",
      icon: <Database className="text-blue-600" size={24} />,
      skills: ["MySQL", "Firebase Realtime DB", "SQLite"]
    },
    {
      title: "Tools",
      icon: <GitBranch className="text-blue-600" size={24} />,
      skills: ["Android Studio", "Git", "GitHub", "Firebase Console"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Skills
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
              }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800 ml-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-50 text-gray-800 px-4 py-2 rounded-lg border border-blue-200 font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;