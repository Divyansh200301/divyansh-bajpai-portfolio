
import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

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
      ]
    },
    {
      title: "FinTaxPro: Tax Management System",
      description: "Created a comprehensive Tax Management System for automated tax filing for individuals and businesses.",
      technologies: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"],
      highlights: [
        "Scalable and secure application",
        "Automated tax filing system",
        "User-friendly interface for tax management"
      ]
    },
    {
      title: "Chromelens: AI-Driven Image Colorization",
      description: "Developed and trained an AI model for image colorization using a Generative Adversarial Network (GAN).",
      technologies: ["Python", "TensorFlow", "GAN", "Computer Vision"],
      highlights: [
        "Implemented a generator for grayscale-to-color image conversion",
        "Created a discriminator to validate image realism",
        "Achieved high-quality, vibrant, and realistic colorizations"
      ]
    },
    {
      title: "WeatherWise: Real-Time Weather API Integration",
      description: "Integrated a real-time weather API into a web platform for up-to-date weather data.",
      technologies: ["JavaScript", "API Integration", "Web Development"],
      highlights: [
        "Implemented location-based weather updates, forecasts, and weather alerts",
        "Designed a responsive and user-friendly interface",
        "Seamless access to weather information"
      ]
    },
    {
      title: "OrderEase: Efficient Order Serving Application",
      description: "Developed an order serving application using the First-Come-First-Serve (FCFS) algorithm.",
      technologies: ["Algorithm Design", "Software Engineering"],
      highlights: [
        "Ensured efficient management and processing of customer orders",
        "Optimized order queue management",
        "Streamlined order processing workflow"
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects and innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                    <Code2 size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600">{highlight}</p>
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
