
import React from 'react';
import { Code, Database, Cloud, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Java", "Python", "C/C++", "SQL (Postgres)", "JavaScript", "HTML/CSS", "MongoDB"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Database size={24} />,
      skills: ["React", "Node.js", "Flask", "Express.js"]
    },
    {
      title: "Developer Tools",
      icon: <Cloud size={24} />,
      skills: ["Git", "Docker", "Google Cloud Platform", "VS Code", "Visual Studio", "Eclipse"]
    },
    {
      title: "AI/ML Technologies",
      icon: <Cpu size={24} />,
      skills: ["TensorFlow", "Machine Learning", "Computer Vision", "Generative AI", "LayoutLM", "GANs"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white px-3 py-2 rounded-lg shadow-sm text-sm text-gray-700"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
