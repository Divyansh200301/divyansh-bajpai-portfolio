
import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Divyansh Bajpai"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Divyansh Bajpai
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Software Engineer & AI Enthusiast
          </p>
          
          <div className="flex items-center justify-center text-gray-500 mb-8">
            <MapPin size={18} className="mr-2" />
            <span>Chennai, Tamil Nadu</span>
          </div>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Bachelor of Technology in CSE from SRM Institute of Technology with a CGPA of 9.66. 
            Passionate about developing innovative solutions using AI/ML, web technologies, and creating 
            efficient systems that solve real-world problems.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:dbt1/00@srmist.edu.in"
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Mail size={20} className="mr-2" />
              Contact Me
            </a>
            <a
              href="https://github.com/Divyansh200301"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/divyansh-bajpai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
