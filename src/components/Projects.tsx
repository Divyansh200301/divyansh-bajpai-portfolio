
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code2, Zap, Cpu, Database, Globe, Bot } from 'lucide-react';

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: "Document AI: PDF Data Extraction",
      description: "Developed a PDF data extraction system using LayoutLM Model v3 for accurate and structured extraction from unstructured documents.",
      technologies: ["AI/ML", "LayoutLM", "Python", "Data Processing"],
      highlights: [
        "Automated document processing workflows, resulting in a 40% increase in efficiency",
        "Project advanced to the finals in a competitive showcase",
        "Highlighting its innovative impact and practical relevance"
      ],
      gradient: "from-cyan-500 to-blue-600",
      icon: <Bot size={24} />,
      category: "AI/ML"
    },
    {
      title: "FinTaxPro: Tax Management System",
      description: "Created a comprehensive Tax Management System for automated tax filing for individuals and businesses.",
      technologies: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"],
      highlights: [
        "Scalable and secure application",
        "Automated tax filing system",
        "User-friendly interface for tax management"
      ],
      gradient: "from-purple-500 to-pink-600",
      icon: <Database size={24} />,
      category: "Web Development"
    },
    {
      title: "Chromelens: AI-Driven Image Colorization",
      description: "Developed and trained an AI model for image colorization using a Generative Adversarial Network (GAN).",
      technologies: ["Python", "TensorFlow", "GAN", "Computer Vision"],
      highlights: [
        "Implemented a generator for grayscale-to-color image conversion",
        "Created a discriminator to validate image realism",
        "Achieved high-quality, vibrant, and realistic colorizations"
      ],
      gradient: "from-green-500 to-teal-600",
      icon: <Cpu size={24} />,
      category: "Computer Vision"
    },
    {
      title: "WeatherWise: Real-Time Weather API Integration",
      description: "Integrated a real-time weather API into a web platform for up-to-date weather data.",
      technologies: ["JavaScript", "API Integration", "Web Development"],
      highlights: [
        "Implemented location-based weather updates, forecasts, and weather alerts",
        "Designed a responsive and user-friendly interface",
        "Seamless access to weather information"
      ],
      gradient: "from-orange-500 to-red-600",
      icon: <Globe size={24} />,
      category: "API Integration"
    },
    {
      title: "OrderEase: Efficient Order Serving Application",
      description: "Developed an order serving application using the First-Come-First-Serve (FCFS) algorithm.",
      technologies: ["Algorithm Design", "Software Engineering"],
      highlights: [
        "Ensured efficient management and processing of customer orders",
        "Optimized order queue management",
        "Streamlined order processing workflow"
      ],
      gradient: "from-indigo-500 to-purple-600",
      icon: <Code2 size={24} />,
      category: "Algorithms"
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
      { threshold: 0.1 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Matrix-like code rain effect */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/10 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {'</>'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
            Project Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of technical innovations and engineering solutions
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => refs.current[index] = el}
              data-index={index}
              className={`group relative transition-all duration-1000 transform ${
                visibleItems[index] 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-20 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 h-full">
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gray-700/80 backdrop-blur-sm text-cyan-300 rounded-full text-xs font-medium border border-cyan-400/30">
                    {project.category}
                  </span>
                </div>
                
                {/* Shimmer effect */}
                <div className={`absolute inset-0 -translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 ${
                  hoveredItem === index ? 'translate-x-full' : ''
                }`}></div>
                
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-r ${project.gradient} text-white p-3 rounded-xl mr-3 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 flex-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300 flex-grow">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm text-cyan-300 rounded-full text-sm font-medium border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 transform"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div 
                        key={highlightIndex} 
                        className={`flex items-start transition-all duration-500 transform ${
                          hoveredItem === index 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-2 opacity-70'
                        }`}
                        style={{ transitionDelay: `${highlightIndex * 100}ms` }}
                      >
                        <Zap size={16} className="text-cyan-400 mt-1 mr-3 flex-shrink-0 group-hover:animate-pulse" />
                        <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                          {highlight}
                        </p>
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

export default Projects;
