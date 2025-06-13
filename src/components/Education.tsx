
import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, Star, BookOpen, Award } from 'lucide-react';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const educationData = [
    {
      institution: "SRM Institute of Technology",
      degree: "Bachelor of Technology in CSE (Software Engineering)",
      location: "Chennai, Tamil Nadu",
      period: "Sept. 2022 - Present",
      cgpa: "Current CGPA: 9.66",
      gradient: "from-cyan-500 to-blue-600",
      description: "The journey of transformation from curious mind to skilled engineer"
    },
    {
      institution: "Saraswati Vidhya mandir (U.P Board)",
      degree: "12th Percentage: 79%",
      location: "Banda, Uttar Pradesh",
      period: "May 2021 - Jun 2022",
      gradient: "from-purple-500 to-pink-600",
      description: "Foundation years that sparked the passion for technology"
    },
    {
      institution: "ST. Mary's School (C.B.S.E)",
      degree: "10th Percentage: 85%",
      location: "Banda, Uttar Pradesh",
      period: "May 2017 - May 2018",
      gradient: "from-green-500 to-teal-600",
      description: "Where the coding adventure began"
    },
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

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating educational icons */}
        <div className="absolute top-20 left-20 animate-bounce delay-500">
          <BookOpen size={40} className="text-purple-400/20" />
        </div>
        <div className="absolute top-60 right-32 animate-bounce delay-1500">
          <Award size={35} className="text-cyan-400/20" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
            Educational Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The academic path that shaped a future engineer
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={el => refs.current[index] = el}
              data-index={index}
              className={`group relative transition-all duration-1000 transform ${
                visibleItems[index] 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"></div>
                
                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start space-x-6">
                    <div className={`bg-gradient-to-r ${edu.gradient} text-white p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative overflow-hidden`}>
                      <GraduationCap size={28} />
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                        {edu.institution}
                      </h3>
                      <p className="text-gray-300 mb-2 text-lg group-hover:text-white transition-colors duration-300">
                        {edu.degree}
                      </p>
                      <p className="text-gray-400 mb-3">{edu.location}</p>
                      <p className="text-sm text-purple-300 italic mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {edu.description}
                      </p>
                      {edu.cgpa && (
                        <div className="flex items-center mt-3 group">
                          <Star size={16} className="text-yellow-400 mr-2 group-hover:animate-spin" />
                          <p className="text-cyan-400 font-semibold group-hover:text-cyan-300">
                            {edu.cgpa}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 mt-6 md:mt-0 group-hover:text-cyan-300 transition-colors duration-300">
                    <Calendar size={18} className="mr-3 group-hover:animate-pulse" />
                    <span className="text-lg">{edu.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Timeline connector */}
        <div className="absolute left-1/2 top-32 bottom-32 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 transform -translate-x-1/2 opacity-30"></div>
      </div>
    </section>
  );
};

export default Education;
