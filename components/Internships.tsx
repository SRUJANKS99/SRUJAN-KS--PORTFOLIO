import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      title: "Java Full Stack Developer Intern",
      company: "TAP Academy",
      period: "March 2025 – Present",
      responsibilities: [
        "Training in Java, SQL, Spring Boot, HTML, CSS, JavaScript",
        "Built full-stack projects using backend APIs and MySQL",
        "Version control via Git & GitHub; deployment basics",
        "REST API design and exception handling in Spring Boot"
      ]
    },
    {
      title: "Java Programming Intern",
      company: "Edureka Learning Center",
      period: "Sep 2024 – Dec 2024",
      responsibilities: [
        "Developed console-based Java apps using OOP principles",
        "Hands-on with file I/O, loops, exception handling",
        "Practiced resume tools (FlowCV, Canva)",
        "Learned clean coding and project design principles"
      ]
    }
  ];

  return (
    <section id="internships" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Internships
        </h2>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
              }}
            >
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-600 mr-3" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {internship.title}
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {internship.company}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <Calendar className="text-blue-600 mr-2" size={16} />
                <span className="text-gray-600 text-sm">
                  {internship.period}
                </span>
              </div>
              
              <ul className="space-y-3">
                {internship.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700 text-sm">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;