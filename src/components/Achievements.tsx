
import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Winner, HakTrax Alexa Developer Club Hackathon",
      icon: <Trophy size={28} />,
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Second Prize, Layers 3.0 Competition",
      icon: <Award size={28} />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Rank 9, CSE Software Engineering Merit Based Scholarship",
      icon: <Star size={28} />,
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition and accomplishments in my academic and professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative">
                <div className={`inline-flex p-6 rounded-full mb-6 bg-gradient-to-r ${achievement.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-relaxed">
                  {achievement.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
