const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          About Me
        </h2>
        
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]" style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
        }}>
          <div className="text-slate-700 text-lg md:text-xl leading-relaxed space-y-6">
            <p className="mb-6">
              I am a passionate full-stack developer intern currently training in Java, Spring Boot, SQL, HTML, CSS, and JavaScript.
            </p>
            
            <p className="mb-6">
              I have built full-stack applications integrating RESTful APIs with MySQL, gaining hands-on experience in real-time project development using Spring Boot.
            </p>
            
            <p className="mb-6">
              I am well-versed in Git and GitHub workflows, version control, and basic deployment strategies.
            </p>
            
            <p className="mb-6">
              My learning also includes Java Exception Handling, object-oriented design, and backend database integration.
            </p>
            
            <p className="mb-6">
              I have a solid foundation in frontend technologies and backend logic, with a strong emphasis on writing clean, modular code and maintaining structured project design.
            </p>
            
            <p>
              I'm continuously upskilling with a focus on building responsive, scalable, and user-centric applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;