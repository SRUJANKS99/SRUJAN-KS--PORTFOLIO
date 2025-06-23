import { BookOpen, Lightbulb, Heart, Gamepad2, Monitor, Video, Tv, Brain, Users, Wrench } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      title: "Innovation and Design Thinking",
      organizer: "GM Institute of Technology",
      icon: <Lightbulb className="text-blue-600" size={20} />
    },
    {
      title: "Digital Skills: User Experience (UX)",
      organizer: "Skill-building session",
      icon: <Monitor className="text-blue-600" size={20} />
    },
    {
      title: "Mini Project Presentation",
      organizer: "Blood Bank Management System",
      icon: <BookOpen className="text-blue-600" size={20} />
    },
    {
      title: "Technical Seminar",
      organizer: "Haptic Feedback & Gesture Control in Virtual Environments",
      icon: <Brain className="text-blue-600" size={20} />
    },
    {
      title: "Responsive Web Design & UI/UX Trends",
      organizer: "Self-paced workshop via TAP Academy",
      icon: <Monitor className="text-blue-600" size={20} />
    },
    {
      title: "Hands-on Workshop",
      organizer: "REST APIs and Spring Boot Integration (TAP Academy)",
      icon: <Wrench className="text-blue-600" size={20} />
    },
    {
      title: "Cybersecurity Basics & Web Security Principles",
      organizer: "Introductory Seminar",
      icon: <Brain className="text-blue-600" size={20} />
    },
    {
      title: "IoT & Smart Device Integration",
      organizer: "Tech club workshop",
      icon: <Wrench className="text-blue-600" size={20} />
    }
  ];

  const hobbies = [
    {
      title: "Gaming enthusiast",
      description: "passionate about strategy, open-world, and multiplayer experiences",
      icon: <Gamepad2 className="text-blue-600" size={20} />
    },
    {
      title: "Exploring new technologies",
      description: "innovative software tools and watching tech related videos",
      icon: <Monitor className="text-blue-600" size={20} />
    },
    {
      title: "Video editing and content creation",
      description: "using tools like Canva, FlowCV, Android Studio, and Blender",
      icon: <Video className="text-blue-600" size={20} />
    },
    {
      title: "Anime lover",
      description: "enjoy character-driven storytelling and artistic animation",
      icon: <Tv className="text-blue-600" size={20} />
    },
    {
      title: "Technical seminars",
      description: "attending skill-building sessions",
      icon: <Users className="text-blue-600" size={20} />
    },
    {
      title: "Innovation workshops",
      description: "participating in Design Thinking and mini project expos",
      icon: <Lightbulb className="text-blue-600" size={20} />
    },
    {
      title: "Hands-on development",
      description: "practicing through real-time projects and creative experiments",
      icon: <Wrench className="text-blue-600" size={20} />
    }
  ];

  return (
    <section id="workshops" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Workshops & Interests
        </h2>
        
        {/* Workshops & Seminars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-cyan-200 mb-8 text-center">
            📚 Workshops & Seminars
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                }}
              >
                <div className="flex items-center mb-3">
                  {workshop.icon}
                  <h4 className="text-gray-800 font-semibold ml-2 text-sm">
                    {workshop.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-xs">
                  {workshop.organizer}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Hobbies & Interests - Now with hover effects */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-200 mb-8 text-center">
            🎯 Hobbies & Interests
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                }}
              >
                <div className="flex items-center mb-3">
                  {hobby.icon}
                  <h4 className="text-gray-800 font-semibold ml-2">
                    {hobby.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;