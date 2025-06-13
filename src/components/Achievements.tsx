
import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Award, Star, Zap, Crown, Medal } from 'lucide-react';

const Achievements = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const achievements = [
    {
      title: "Winner, HakTrax Alexa Developer Club Hackathon",
      icon: <Trophy size={28} />,
      gradient: "from-yellow-500 to-orange-600",
      description: "Victory in competitive hackathon environment",
      celebration: "🏆"
    },
    {
      title: "Second Prize, Layers 3.0 Competition",
      icon: <Medal size={28} />,
      gradient: "from-blue-500 to-purple-600",
      description: "Excellence in technical innovation",
      celebration: "🥈"
    },
    {
      title: "Rank 9, CSE Software Engineering Merit Based Scholarship",
      icon: <Crown size={28} />,
      gradient: "from-green-500 to-teal-600",
      description: "Academic excellence recognition",
      celebration: "⭐"
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating celebration elements */}
        {['🎉', '⚡', '💫', '🌟', '✨'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
            Hall of Fame
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Milestones and recognitions in the engineering journey
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              ref={el => refs.current[index] = el}
              data-index={index}
              className={`group relative transition-all duration-1000 transform ${
                visibleItems[index] 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-20 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20 text-center overflow-hidden h-full">
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Celebration effect */}
                <div className="absolute top-4 right-4 text-3xl animate-spin group-hover:animate-bounce transition-all duration-500">
                  {achievement.celebration}
                </div>
                
                {/* Shimmer effect */}
                <div className={`absolute inset-0 -translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 ${
                  hoveredItem === index ? 'translate-x-full' : ''
                }`}></div>
                
                <div className="relative">
                  <div className={`inline-flex p-6 rounded-full mb-6 bg-gradient-to-r ${achievement.gradient} text-white shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative overflow-hidden`}>
                    {achievement.icon}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-relaxed mb-4">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 italic">
                    {achievement.description}
                  </p>
                  
                  {/* Achievement level indicator */}
                  <div className="mt-6 flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`transition-all duration-500 ${
                          i < 4 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-600'
                        } ${hoveredItem === index ? 'animate-pulse' : ''}`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 blur-xl -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
