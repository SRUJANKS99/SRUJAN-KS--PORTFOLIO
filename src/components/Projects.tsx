import React, { useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database, X, Star, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = [
    {
      title: "University Resource & Exam Management System",
      description: "Built secure portal with role-based access for 100+ users",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
      highlights: [
        "Reduced admin workload by 70% through automation",
        "Integrated real-time MySQL-backed APIs",
        "Auto-generated academic reports for staff",
        "Secure role-based access control"
      ],
      icon: <Database className="text-neon-blue" size={28} />,
      color: "neon-blue",
      link: "https://github.com/SRUJANKS99/University-Resource-and-Exam-Management-System",
      featured: true,
      stats: { users: "100+", reduction: "70%", apis: "15+" }
    },
    {
      title: "AI Resume Builder & Analyzer with ChatBot",
      description: "Built AI-powered resume analyzer using GPT",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Tailwind CSS", "OpenAI API", "Formspree", "Vercel"],
      highlights: [
        "Increased suggestion accuracy by 60%",
        "Designed mobile-first UI with React + Tailwind",
        "Secured forms via Formspree",
        "Global deployment on Vercel"
      ],
      icon: <Code className="text-neon-cyan" size={28} />,
      color: "neon-cyan",
      link: "https://resume-ai-peach.vercel.app/",
      featured: true,
      stats: { accuracy: "60%", users: "500+", uptime: "99.9%" }
    },
    {
      title: "Real-Time Tourist Spot Finder & Booking App",
      description: "Developed Android app for exploring 50+ tourist locations",
      image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Java", "Firebase Realtime DB", "Google Maps API"],
      highlights: [
        "Integrated GPS-based navigation with real-time updates",
        "Enabled booking system with Firebase sync",
        "Offline support and cloud backup",
        "Location-based recommendations"
      ],
      icon: <Smartphone className="text-neon-green" size={28} />,
      color: "neon-green",
      link: "https://github.com/SRUJANKS99/Real-time-tourist-spot-finder-and-tour-booking-android-application",
      featured: true,
      stats: { locations: "50+", bookings: "1000+", rating: "4.8/5" }
    },
    {
      title: "Android Chat Application",
      description: "Real-time chat with Firebase backend",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Java", "Firebase"],
      highlights: [
        "OTP-based secure login",
        "Push notifications and media sharing",
        "Emoji support and responsive chat UI",
        "Firebase sync with offline caching"
      ],
      icon: <Smartphone className="text-neon-purple" size={28} />,
      color: "neon-purple",
      link: "https://github.com/SRUJANKS99/Android_Chat_Application-main",
      featured: true,
      stats: { messages: "10K+", users: "200+", response: "<1s" }
    }
  ];

  const otherProjects = [
    {
      title: "National Project Management System",
      tech: ["Python", "Django", "SQLite", "MySQL"],
      description: "University-wide portal with task tracking and access roles",
      category: "Web Development"
    },
    {
      title: "Blood Bank Management System",
      tech: ["PHP", "XAMPP", "MySQL", "HTML", "CSS"],
      description: "Managed blood inventory and donor search workflows",
      category: "Healthcare"
    },
    {
      title: "Bus Tracking Android Application",
      tech: ["Android Studio", "GPS", "Firebase", "Google Maps API"],
      description: "Real-time school bus tracking with alerts and geofencing",
      category: "Mobile Development"
    },
    {
      title: "Automatic Attendance Management System",
      tech: ["Raspberry Pi", "OpenCV", "Azure", "SQLite"],
      description: "Face-recognition system with real-time updates",
      category: "AI/ML"
    },
    {
      title: "Expense Tracker MERN App",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      description: "Finance manager with secure login and budget visualizations",
      category: "Full Stack"
    },
    {
      title: "College ERP System",
      tech: ["Python", "Django", "SQLite"],
      description: "Modules for marks, attendance, and admin dashboard",
      category: "Web Development"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'neon-blue': return 'border-neon-blue text-neon-blue bg-neon-blue/10';
      case 'neon-cyan': return 'border-neon-cyan text-neon-cyan bg-neon-cyan/10';
      case 'neon-green': return 'border-neon-green text-neon-green bg-neon-green/10';
      case 'neon-purple': return 'border-neon-purple text-neon-purple bg-neon-purple/10';
      default: return 'border-neon-blue text-neon-blue bg-neon-blue/10';
    }
  };

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-card border border-neon-blue/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full border-2 ${getColorClass(project.color)}`}>
                {project.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-1">{project.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-3 hover:bg-dark-hover rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>
        </div>
        
        <div className="p-8">
          {/* Project Stats */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-6 mb-8">
              {Object.entries(project.stats).map(([key, value], index) => (
                <div key={index} className="text-center p-4 bg-dark-bg/50 rounded-xl">
                  <div className="text-2xl font-bold text-neon-blue mb-1">{value}</div>
                  <div className="text-gray-400 text-sm capitalize">{key}</div>
                </div>
              ))}
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Star className="text-neon-blue" size={20} />
                Key Features
              </h4>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="text-neon-cyan" size={20} />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-neon-blue/20 text-neon-blue rounded-full text-sm border border-neon-blue/30 hover:bg-neon-blue/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8 pt-6 border-t border-gray-700">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-neon-blue/20 text-neon-blue border border-neon-blue/30 rounded-xl hover:bg-neon-blue/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <ExternalLink size={18} />
              View Project
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white border border-gray-600 rounded-xl hover:bg-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Github size={18} />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(14,165,233,0.05),_transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(6,182,212,0.05),_transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-blue/10 border border-neon-blue/20 rounded-full mb-6">
            <Code size={16} className="text-neon-blue" />
            <span className="text-neon-blue text-sm font-medium">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-dark-card/60 backdrop-blur-md rounded-3xl p-8 border border-gray-700 hover:border-neon-blue/50 transition-all duration-500 group hover:transform hover:scale-105 cursor-pointer card-hover relative overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Project Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-2 px-3 py-1 bg-dark-bg/80 backdrop-blur-md rounded-full">
                        <Star className="text-yellow-400" size={14} />
                        <span className="text-yellow-400 text-sm font-medium">Featured</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-full border-2 ${getColorClass(project.color)} group-hover:animate-float`}>
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Project stats preview */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {Object.entries(project.stats).slice(0, 3).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center p-2 bg-dark-bg/50 rounded-lg">
                          <div className="text-sm font-bold text-neon-blue">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm border border-neon-blue/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400 flex items-center gap-2">
                      <Users size={14} />
                      Click to view details
                    </span>
                    <ExternalLink size={18} className="text-neon-blue group-hover:animate-float" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-dark-card/60 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded text-xs">
                    {project.category}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded text-xs border border-neon-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 2 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                      +{project.tech.length - 2}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;