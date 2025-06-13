
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, User, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isTyping, setIsTyping] = useState(false);
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Network connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on the next breakthrough project?
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {[
              { icon: <Mail size={24} />, title: "Email", value: "dbt1/00@srmist.edu.in", gradient: "from-cyan-500 to-blue-600" },
              { icon: <Phone size={24} />, title: "Phone", value: "8441908388", gradient: "from-green-500 to-teal-600" },
              { icon: <MapPin size={24} />, title: "Location", value: "Chennai, Tamil Nadu", gradient: "from-purple-500 to-pink-600" }
            ].map((contact, index) => (
              <div
                key={index}
                className="group flex items-center space-x-6 text-white bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
                
                <div className={`bg-gradient-to-r ${contact.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative overflow-hidden`}>
                  {contact.icon}
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                    {contact.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex space-x-4 pt-6">
              {[
                { href: "https://github.com/Divyansh200301", icon: <Github size={24} />, label: "GitHub" },
                { href: "https://linkedin.com/in/divyansh-bajpai", icon: <Linkedin size={24} />, label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl text-white hover:bg-gray-700/50 transition-all duration-500 border border-gray-700 hover:border-cyan-400/50 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/20 relative overflow-hidden"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
                  <div className="relative z-10 group-hover:animate-pulse">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden">
            {/* Form background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="absolute top-4 right-4 flex items-center space-x-2 text-cyan-400">
                <MessageCircle size={16} className="animate-bounce" />
                <span className="text-xs">Typing...</span>
              </div>
            )}

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Sparkles size={24} className="mr-3 text-cyan-400 animate-pulse" />
                Send a Message
              </h3>
              
              <form className="space-y-6">
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your name', icon: <User size={16} /> },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email', icon: <Mail size={16} /> }
                ].map((field, index) => (
                  <div
                    key={field.name}
                    className="relative"
                    onMouseEnter={() => setHoveredField(field.name)}
                    onMouseLeave={() => setHoveredField(null)}
                  >
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                      <span className="mr-2 text-cyan-400">{field.icon}</span>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-500 ${
                        hoveredField === field.name ? 'scale-105 shadow-lg shadow-cyan-500/20' : ''
                      }`}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredField('message')}
                  onMouseLeave={() => setHoveredField(null)}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                    <MessageCircle size={16} className="mr-2 text-cyan-400" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-500 resize-none ${
                      hoveredField === 'message' ? 'scale-105 shadow-lg shadow-cyan-500/20' : ''
                    }`}
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-cyan-400 hover:to-purple-500 transition-all duration-500 font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 flex items-center justify-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Send size={20} className="mr-3 group-hover:animate-pulse relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
