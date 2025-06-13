
import React from 'react';
import { ExternalLink, Github, Code2, Zap } from 'lucide-react';

const Projects = () => {
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
      gradient: "from-cyan-500 to-blue-600"
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
      gradient: "from-purple-500 to-pink-600"
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
      gradient: "from-green-500 to-teal-600"
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
      gradient: "from-orange-500 to-red-600"
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
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects and innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-6">
                <div className="flex items-center mb-4">
                  <div className={`bg-gradient-to-r ${project.gradient} text-white p-3 rounded-xl mr-3 shadow-lg`}>
                    <Code2 size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm text-cyan-300 rounded-full text-sm font-medium border border-gray-600 hover:border-cyan-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start">
                      <Zap size={16} className="text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-300">{highlight}</p>
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

export default Projects;
