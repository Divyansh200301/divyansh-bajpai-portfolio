
import React from 'react';
import { Code, Database, Cloud, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Java", "Python", "C/C++", "SQL (Postgres)", "JavaScript", "HTML/CSS", "MongoDB"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Database size={24} />,
      skills: ["React", "Node.js", "Flask", "Express.js"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Developer Tools",
      icon: <Cloud size={24} />,
      skills: ["Git", "Docker", "Google Cloud Platform", "VS Code", "Visual Studio", "Eclipse"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "AI/ML Technologies",
      icon: <Cpu size={24} />,
      skills: ["TensorFlow", "Machine Learning", "Computer Vision", "Generative AI", "LayoutLM", "GANs"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-700/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
