
import React from 'react';
import { Award, Calendar, Zap } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Skill builder machine learning",
      date: "Nov 2024",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "NPTEL Data analysis of algorithm",
      date: "Oct 2023",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      name: "NPTEL Programming in Java",
      date: "Mar 2024",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "Oracle Foundational Certification",
      date: "Jan 2025",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Google AI/ML Virtual Internship",
      date: "June 2024",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative flex items-start space-x-4">
                <div className={`bg-gradient-to-r ${cert.gradient} text-white p-3 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Award size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <div className="flex items-center text-gray-400">
                    <Calendar size={14} className="mr-2" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
