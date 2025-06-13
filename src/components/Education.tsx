
import React from 'react';
import { GraduationCap, Calendar, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "SRM Institute of Technology",
      degree: "Bachelor of Technology in CSE (Software Engineering)",
      location: "Chennai, Tamil Nadu",
      period: "Sept. 2022 - Present",
      cgpa: "Current CGPA: 9.66",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      institution: "Saraswati Vidhya mandir (U.P Board)",
      degree: "12th Percentage: 79%",
      location: "Banda, Uttar Pradesh",
      period: "May 2021 - Jun 2022",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      institution: "ST. Mary's School (C.B.S.E)",
      degree: "10th Percentage: 85%",
      location: "Banda, Uttar Pradesh",
      period: "May 2017 - May 2018",
      gradient: "from-green-500 to-teal-600"
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start space-x-6">
                  <div className={`bg-gradient-to-r ${edu.gradient} text-white p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-300 mb-2 text-lg">{edu.degree}</p>
                    <p className="text-gray-400">{edu.location}</p>
                    {edu.cgpa && (
                      <div className="flex items-center mt-3">
                        <Star size={16} className="text-yellow-400 mr-2" />
                        <p className="text-cyan-400 font-semibold">{edu.cgpa}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center text-gray-400 mt-6 md:mt-0">
                  <Calendar size={18} className="mr-3" />
                  <span className="text-lg">{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
