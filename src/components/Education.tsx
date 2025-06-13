
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "SRM Institute of Technology",
      degree: "Bachelor of Technology in CSE (Software Engineering)",
      location: "Chennai, Tamil Nadu",
      period: "Sept. 2022 - Present",
      cgpa: "Current CGPA: 9.66",
    },
    {
      institution: "Saraswati Vidhya mandir (U.P Board)",
      degree: "12th Percentage: 79%",
      location: "Banda, Uttar Pradesh",
      period: "May 2021 - Jun 2022",
    },
    {
      institution: "ST. Mary's School (C.B.S.E)",
      degree: "10th Percentage: 85%",
      location: "Banda, Uttar Pradesh",
      period: "May 2017 - May 2018",
    },
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-700 mb-1">{edu.degree}</p>
                    <p className="text-gray-600 text-sm">{edu.location}</p>
                    {edu.cgpa && (
                      <p className="text-blue-600 font-medium mt-2">{edu.cgpa}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center text-gray-500 mt-4 md:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
