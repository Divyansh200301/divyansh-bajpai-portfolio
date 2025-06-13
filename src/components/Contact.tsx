
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="group flex items-center space-x-6 text-white bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-gray-300">dbt1/00@srmist.edu.in</p>
              </div>
            </div>

            <div className="group flex items-center space-x-6 text-white bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-300">8441908388</p>
              </div>
            </div>

            <div className="group flex items-center space-x-6 text-white bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-gray-300">Chennai, Tamil Nadu</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <a
                href="https://github.com/Divyansh200301"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl text-white hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-cyan-400/50 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/divyansh-bajpai"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl text-white hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-cyan-400/50 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 flex items-center justify-center"
              >
                <Send size={20} className="mr-3 group-hover:animate-pulse" />
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
