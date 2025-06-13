
import React, { useEffect, useRef, useState } from 'react';
import { Award, Calendar, Zap, Shield, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const certifications = [
    {
      name: "AWS Skill builder machine learning",
      date: "Nov 2024",
      gradient: "from-orange-500 to-red-600",
      status: "Latest",
      level: "Advanced"
    },
    {
      name: "NPTEL Data analysis of algorithm",
      date: "Oct 2023",
      gradient: "from-cyan-500 to-blue-600",
      status: "Certified",
      level: "Intermediate"
    },
    {
      name: "NPTEL Programming in Java",
      date: "Mar 2024",
      gradient: "from-green-500 to-teal-600",
      status: "Certified",
      level: "Advanced"
    },
    {
      name: "Oracle Foundational Certification",
      date: "Jan 2025",
      gradient: "from-purple-500 to-pink-600",
      status: "Upcoming",
      level: "Foundation"
    },
    {
      name: "Google AI/ML Virtual Internship",
      date: "June 2024",
      gradient: "from-indigo-500 to-purple-600",
      status: "Completed",
      level: "Professional"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
            
            // Staggered animation for each item
            setTimeout(() => {
              setAnimatedItems(prev => {
                const newAnimated = [...prev];
                newAnimated[index] = true;
                return newAnimated;
              });
            }, index * 150);
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Latest':
        return <Zap size={16} className="text-yellow-400" />;
      case 'Certified':
        return <CheckCircle size={16} className="text-green-400" />;
      case 'Completed':
        return <Shield size={16} className="text-blue-400" />;
      case 'Upcoming':
        return <Star size={16} className="text-purple-400" />;
      default:
        return <Award size={16} className="text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Certificate badges floating */}
        {['🏅', '📜', '🎓', '⚡', '🌟'].map((badge, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {badge}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
            Professional Credentials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development journey
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              ref={el => refs.current[index] = el}
              data-index={index}
              className={`group relative transition-all duration-1000 transform ${
                visibleItems[index] 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-20 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden h-full">
                {/* Status badge */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-gray-700/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {getStatusIcon(cert.status)}
                  <span className="text-xs text-gray-300">{cert.status}</span>
                </div>
                
                {/* Level indicator */}
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    cert.level === 'Advanced' ? 'bg-red-500/20 text-red-300' :
                    cert.level === 'Professional' ? 'bg-purple-500/20 text-purple-300' :
                    cert.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {cert.level}
                  </span>
                </div>
                
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Shimmer effect */}
                <div className={`absolute inset-0 -translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 ${
                  animatedItems[index] ? 'translate-x-full' : ''
                }`}></div>
                
                <div className="relative flex items-start space-x-4 mt-8">
                  <div className={`bg-gradient-to-r ${cert.gradient} text-white p-3 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative overflow-hidden`}>
                    <Award size={20} />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                      {cert.name}
                    </h3>
                    <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <Calendar size={14} className="mr-2 group-hover:animate-pulse" />
                      <span>{cert.date}</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="mt-3 w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${cert.gradient} rounded-full transition-all duration-1000 transform origin-left ${
                          animatedItems[index] ? 'scale-x-100' : 'scale-x-0'
                        }`}
                        style={{ transitionDelay: `${index * 200 + 500}ms` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
