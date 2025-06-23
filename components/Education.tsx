import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "BE in Information Science & Engineering",
      institution: "GM Institute of Technology, Davangere",
      period: "2021–2025",
      grade: "CGPA: 7.80"
    },
    {
      degree: "Pre-University (PUC)",
      institution: "P R N Amratha Bharathi PU College, Hebri",
      period: "2019–2021",
      grade: "95.66%"
    },
    {
      degree: "High School (10th Grade)",
      institution: "National High School, Konandur",
      period: "2019",
      grade: "89.00%"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Education
        </h2>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
              }}
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">
                  {edu.degree}
                </h3>
              </div>
              
              <p className="text-gray-700 mb-3 font-medium">
                {edu.institution}
              </p>
              
              <div className="flex items-center mb-2">
                <Calendar className="text-blue-600 mr-2" size={16} />
                <span className="text-gray-600 text-sm">
                  {edu.period}
                </span>
              </div>
              
              <div className="flex items-center">
                <Award className="text-blue-600 mr-2" size={16} />
                <span className="text-gray-800 text-sm font-semibold">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;