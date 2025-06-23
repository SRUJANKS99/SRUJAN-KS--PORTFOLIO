'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Home from '@/components/Home';
import About from '@/components/About';
import Education from '@/components/Education';
import Internships from '@/components/Internships';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Workshops from '@/components/Workshops';
import Contact from '@/components/Contact';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'internships', 'projects', 'skills', 'certifications', 'workshops', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)'
    }}>
      <Navigation activeSection={activeSection} />
      
      <main className="relative">
        <Home />
        <About />
        <Education />
        <Internships />
        <Projects />
        <Skills />
        <Certifications />
        <Workshops />
        <Contact />
      </main>
    </div>
  );
};