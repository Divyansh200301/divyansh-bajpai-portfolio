
import React from 'react';
import { Certificate, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Skill builder machine learning",
      date: "Nov 2024"
    },
    {
      name: "NPTEL Data analysis of algorithm",
      date: "Oct 2023"
    },
    {
      name: "NPTEL Programming in Java",
      date: "Mar 2024"
    },
    {
      name: "Oracle Foundational Certification",
      date: "Jan 2025"
    },
    {
      name: "Google AI/ML Virtual Internship",
      date: "June 2024"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                  <Certificate size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-2" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
