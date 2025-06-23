'use client';

import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';

const Home = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* <ParticlesBackground /> */}

      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center pt-16 px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <img
            src="/srujan-ks.jpg"
            alt="Srujan KS"
            className="w-52 h-52 md:w-64 md:h-64 mx-auto mb-8 rounded-full object-cover shadow-2xl border-4 border-white/30"
          />

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg text-white">
            SRUJAN K S
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-200 mb-10 font-medium">
            Java Full Stack Developer
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Hire Me
            </button>

            <a
              href="/SRUJAN-K-S-CV.pdf"
              download
              className="bg-white/20 hover:bg-white/30 text-white hover:text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-md border-2 border-white/30 hover:border-white/50 shadow-xl"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a
              href="https://www.linkedin.com/in/ks-srujan-gowda-21ab3b2a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white hover:text-cyan-200 transition-all duration-300 transform hover:scale-110 group"
            >
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 shadow-lg group-hover:shadow-xl">
                <Linkedin size={36} />
              </div>
              <span className="text-sm font-medium mt-3">LinkedIn</span>
            </a>

            <a
              href="https://github.com/SRUJANKS99"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white hover:text-cyan-200 transition-all duration-300 transform hover:scale-110 group"
            >
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 shadow-lg group-hover:shadow-xl">
                <Github size={36} />
              </div>
              <span className="text-sm font-medium mt-3">GitHub</span>
            </a>

            <button
              onClick={scrollToContact}
              className="flex flex-col items-center text-white hover:text-cyan-200 transition-all duration-300 transform hover:scale-110 cursor-pointer group"
            >
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 shadow-lg group-hover:shadow-xl">
                <Mail size={36} />
              </div>
              <span className="text-sm font-medium mt-3">Email</span>
            </button>

            <button
              onClick={scrollToContact}
              className="flex flex-col items-center text-white hover:text-cyan-200 transition-all duration-300 transform hover:scale-110 cursor-pointer group"
            >
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 shadow-lg group-hover:shadow-xl">
                <Phone size={36} />
              </div>
              <span className="text-sm font-medium mt-3">Phone</span>
            </button>

            <a
              href="https://flowcv.com/resume/faql9tv9o50n"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white hover:text-cyan-200 transition-all duration-300 transform hover:scale-110 group"
            >
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 shadow-lg group-hover:shadow-xl">
                <FileText size={36} />
              </div>
              <span className="text-sm font-medium mt-3">View Resume</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
