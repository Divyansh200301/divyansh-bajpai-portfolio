
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-white/20 p-3 rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-blue-100">dbt1/00@srmist.edu.in</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-white">
              <div className="bg-white/20 p-3 rounded-lg">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-blue-100">8441908388</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-white">
              <div className="bg-white/20 p-3 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-blue-100">Chennai, Tamil Nadu</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/Divyansh200301"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-lg text-white hover:bg-white/30 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/divyansh-bajpai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-lg text-white hover:bg-white/30 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
