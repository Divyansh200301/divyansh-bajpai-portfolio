
import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Winner, HakTrax Alexa Developer Club Hackathon",
      icon: <Trophy size={24} />,
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      title: "Second Prize, Layers 3.0 Competition",
      icon: <Award size={24} />,
      color: "text-blue-600 bg-blue-100"
    },
    {
      title: "Rank 9, CSE Software Engineering Merit Based Scholarship",
      icon: <Star size={24} />,
      color: "text-green-600 bg-green-100"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition and accomplishments in my academic and professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className={`inline-flex p-4 rounded-full mb-4 ${achievement.color}`}>
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {achievement.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
