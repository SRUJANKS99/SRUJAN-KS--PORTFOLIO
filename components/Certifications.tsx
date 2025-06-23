import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Full Stack Developer",
      issuer: "TAP Academy",
      icon: <Award className="text-blue-600" size={24} />
    },
    {
      title: "Java",
      issuer: "HackerRank",
      icon: <Award className="text-blue-600" size={24} />
    },
    {
      title: "SQL",
      issuer: "HackerRank",
      icon: <Award className="text-blue-600" size={24} />
    },
    {
      title: "NCC 'A' Certificate",
      issuer: "National Cadet Corps",
      icon: <Award className="text-blue-600" size={24} />
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Certifications
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-center"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
              }}
            >
              <div className="flex justify-center mb-4">
                {cert.icon}
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {cert.title}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;