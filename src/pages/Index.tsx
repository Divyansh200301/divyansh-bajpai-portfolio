
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <Header />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Achievements />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
