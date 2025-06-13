
import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Cloud, Cpu, Terminal, Globe, Zap, Layers } from 'lucide-react';

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [animatedSkills, setAnimatedSkills] = useState<boolean[][]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Java", "Python", "C/C++", "SQL (Postgres)", "JavaScript", "HTML/CSS", "MongoDB"],
      gradient: "from-cyan-500 to-blue-600",
      description: "The foundation of all digital creation"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers size={24} />,
      skills: ["React", "Node.js", "Flask", "Express.js"],
      gradient: "from-purple-500 to-pink-600",
      description: "Building blocks for scalable applications"
    },
    {
      title: "Developer Tools",
      icon: <Terminal size={24} />,
      skills: ["Git", "Docker", "Google Cloud Platform", "VS Code", "Visual Studio", "Eclipse"],
      gradient: "from-green-500 to-teal-600",
      description: "Arsenal for efficient development"
    },
    {
      title: "AI/ML Technologies",
      icon: <Cpu size={24} />,
      skills: ["TensorFlow", "Machine Learning", "Computer Vision", "Generative AI", "LayoutLM", "GANs"],
      gradient: "from-orange-500 to-red-600",
      description: "The future of intelligent systems"
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
            
            // Animate skills one by one
            setTimeout(() => {
              const skillCount = skillCategories[index].skills.length;
              for (let i = 0; i < skillCount; i++) {
                setTimeout(() => {
                  setAnimatedSkills(prev => {
                    const newAnimated = [...prev];
                    if (!newAnimated[index]) newAnimated[index] = [];
                    newAnimated[index][i] = true;
                    return newAnimated;
                  });
                }, i * 150);
              }
            }, 300);
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating tech symbols */}
        {['{', '}', '<', '>', '/', '*', '+', '='].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/10 text-2xl font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tools and technologies mastered in the engineering journey
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
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
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 h-full overflow-hidden">
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"></div>
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.gradient} text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-6 italic group-hover:text-gray-300 transition-colors duration-300">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`relative bg-gray-700/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-500 transform overflow-hidden ${
                          animatedSkills[index] && animatedSkills[index][skillIndex]
                            ? 'translate-x-0 opacity-100 scale-100'
                            : 'translate-x-4 opacity-0 scale-95'
                        }`}
                        style={{ transitionDelay: `${skillIndex * 100}ms` }}
                      >
                        <span className="relative z-10">{skill}</span>
                        
                        {/* Skill level indicator */}
                        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-1000 transform origin-left scale-x-0 group-hover:scale-x-100"></div>
                        
                        {/* Hover shimmer */}
                        <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                      </div>
                    ))}
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

export default Skills;
