
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Divyansh Bajpai"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-2xl shadow-cyan-400/50"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-20 animate-pulse"></div>
          </div>
        </div>
        
        <div className="space-y-6 animate-fade-in delay-300">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Divyansh Bajpai
          </h1>
          
          <div className="relative">
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Software Engineer & AI Enthusiast
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl -z-10"></div>
          </div>
          
          <div className="flex items-center justify-center text-cyan-300 mb-8">
            <MapPin size={20} className="mr-2" />
            <span className="text-lg">Chennai, Tamil Nadu</span>
          </div>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
            Bachelor of Technology in CSE from SRM Institute of Technology with a CGPA of 9.66. 
            Passionate about developing innovative solutions using AI/ML, web technologies, and creating 
            efficient systems that solve real-world problems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:dbt1/00@srmist.edu.in"
              className="group flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              <Mail size={20} className="mr-3 group-hover:animate-pulse" />
              Contact Me
            </a>
            <a
              href="https://github.com/Divyansh200301"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-gray-200 rounded-full hover:bg-gray-700/50 hover:border-gray-400 transition-all duration-300 hover:scale-105"
            >
              <Github size={20} className="mr-3 group-hover:animate-pulse" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/divyansh-bajpai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-gray-200 rounded-full hover:bg-gray-700/50 hover:border-gray-400 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} className="mr-3 group-hover:animate-pulse" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
