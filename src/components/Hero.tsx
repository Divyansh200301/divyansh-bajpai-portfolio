
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, Terminal, Code, Cpu } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const words = ['Software Engineer', 'AI Enthusiast', 'Problem Solver', 'Code Architect', 'Innovation Driver'];
  
  useEffect(() => {
    const typeWriter = () => {
      const currentWord = words[currentWordIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < currentWord.length) {
          setTypedText(currentWord.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            const deleteInterval = setInterval(() => {
              if (charIndex > 0) {
                setTypedText(currentWord.slice(0, charIndex - 1));
                charIndex--;
              } else {
                clearInterval(deleteInterval);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
              }
            }, 50);
          }, 2000);
        }
      }, 100);
    };
    
    typeWriter();
  }, [currentWordIndex]);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Matrix-like falling code effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Animated background elements with enhanced effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-20 left-20 animate-bounce delay-1000">
          <Terminal size={40} className="text-cyan-400/20" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-2000">
          <Code size={35} className="text-purple-400/20" />
        </div>
        <div className="absolute bottom-32 left-40 animate-bounce delay-3000">
          <Cpu size={45} className="text-green-400/20" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block group">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Divyansh Bajpai"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-2xl shadow-cyan-400/50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-cyan-400/80"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-500"></div>
            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
              <div className="absolute -top-2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
              <div className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-400 rounded-full transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6 animate-fade-in delay-300">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
            Divyansh Bajpai
          </h1>
          
          <div className="relative h-20">
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl -z-10 animate-pulse"></div>
          </div>
          
          <div className="flex items-center justify-center text-cyan-300 mb-8 animate-bounce">
            <MapPin size={20} className="mr-2" />
            <span className="text-lg">Chennai, Tamil Nadu</span>
          </div>
          
          <div className="relative group">
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 transform transition-all duration-500 group-hover:scale-105 group-hover:bg-white/10">
              Bachelor of Technology in CSE from SRM Institute of Technology with a CGPA of 9.66. 
              Passionate about developing innovative solutions using AI/ML, web technologies, and creating 
              efficient systems that solve real-world problems.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:dbt1/00@srmist.edu.in"
              className="group flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-110 transform relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Mail size={20} className="mr-3 group-hover:animate-pulse relative z-10" />
              <span className="relative z-10">Contact Me</span>
            </a>
            <a
              href="https://github.com/Divyansh200301"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-gray-200 rounded-full hover:bg-gray-700/50 hover:border-gray-400 transition-all duration-300 hover:scale-110 transform relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Github size={20} className="mr-3 group-hover:animate-pulse relative z-10" />
              <span className="relative z-10">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/divyansh-bajpai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-gray-200 rounded-full hover:bg-gray-700/50 hover:border-gray-400 transition-all duration-300 hover:scale-110 transform relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Linkedin size={20} className="mr-3 group-hover:animate-pulse relative z-10" />
              <span className="relative z-10">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
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
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
