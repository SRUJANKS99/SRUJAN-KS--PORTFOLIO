import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const primaryProjects = [
    {
      title: "AI Resume Builder",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "OpenAI API"],
      github: "https://github.com/SRUJANKS99/resume-ai",
      live: "https://resume-ai-peach.vercel.app/",
      features: [
        "AI-powered resume content generation",
        "Modern, responsive UI with Tailwind CSS",
        "PDF export of generated resumes",
        "Built with Next.js & TypeScript",
        "Uses OpenAI for generating resume sections",
        "Dark/light mode support"
      ],
      image: "/resume%20ai.png"

    },
    {
      title: "University Resource and Examination Management System",
      techStack: ["Java", "Spring Boot", "SQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/SRUJANKS99/University-Resource-and-Exam-Management-System",
      features: [
        "Centralized portal for exam schedules, results, and documents",
        "Real-time result publishing",
        "Role-based access for Admin, Faculty, Students",
        "Spring Boot backend + MySQL integration",
        "Automated result/report generation",
        "HTML/CSS-based frontend with seamless UX"
      ],
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Real-time Tourist Spot Finder and Tour Booking App",
      techStack: ["Java", "Firebase Realtime DB", "Google Maps API"],
      github: "https://github.com/SRUJANKS99/Real-time-tourist-spot-finder-and-tour-booking-android-application",
      features: [
        "Android app for searching and booking tourist spots",
        "Google Maps API for navigation and previews",
        "Firebase Authentication + Realtime booking",
        "Material Design UI with filters by region/type/rating",
        "Responsive design tested on multiple devices"
      ],
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Android Chat Application",
      techStack: ["Java", "Firebase"],
      github: "https://github.com/SRUJANKS99/Android_Chat_Application-main",
      features: [
        "Real-time chat with Firebase backend",
        "OTP-based secure login",
        "Push notifications, media sharing, emoji support",
        "Responsive chat UI",
        "Firebase sync, offline caching, encryption"
      ],
      image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const otherProjects = [
    {
      title: "National Project Management System",
      techStack: "Python (Django), SQLite/MySQL",
      description: "Built a university-wide portal with task tracking, access roles, and secure project evaluations.",
      github: "https://github.com/SRUJANKS99/National-Project-Management-main"
    },
    {
      title: "Blood Bank Management System",
      techStack: "PHP, XAMPP, MySQL, HTML/CSS",
      description: "Managed blood inventory, donor search, and request workflows with responsive admin UI.",
      github: "https://github.com/SRUJANKS99/blood-bank-management-system-main"
    },
    {
      title: "Bus Tracking Android Application",
      techStack: "Android Studio, GPS, Firebase",
      description: "Developed an app for real-time school bus tracking with alerts and geofencing.",
      github: "https://github.com/SRUJANKS99/Bus_Tracking-Android-master"
    },
    {
      title: "Automatic Attendance Management System",
      techStack: "Raspberry Pi, OpenCV, Azure, SQLite",
      description: "Created a face-recognition system for attendance with real-time updates and anti-spoofing.",
      github: "https://github.com/SRUJANKS99/Automatic-attendance-management-system-master"
    },
    {
      title: "Expense Tracker MERN App",
      techStack: "MongoDB, Express.js, React.js, Node.js",
      description: "Full-stack finance manager with secure login, CRUD operations, and budget visualizations.",
      github: "https://github.com/SRUJANKS99/expense-tracker-mern-master"
    },
    {
      title: "College ERP System",
      techStack: "Python (Django)",
      description: "Built modules for marks, attendance, timetable, and admin dashboard with role-based access.",
      github: "https://github.com/SRUJANKS99/College-ERP-master"
    },
    {
      title: "Online Exam System (Master)",
      techStack: "PHP, MySQL",
      description: "Online quiz system with user logins, time limits, and automatic result tracking.",
      github: "https://github.com/SRUJANKS99/Online-Exam-System--master"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Projects
        </h2>

        {/* Primary Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-cyan-200 mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {primaryProjects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h4>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    >
                      <Github size={20} className="mr-2" />
                      View Code
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors font-medium"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-200 mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                }}
              >
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {project.title}
                </h4>

                <p className="text-blue-600 text-sm mb-3 font-medium">
                  {project.techStack}
                </p>

                <p className="text-gray-700 text-sm mb-4">
                  {project.description}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  <Github size={16} className="mr-2" />
                  View Code
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
