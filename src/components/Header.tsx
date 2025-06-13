
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/30 shadow-lg shadow-cyan-500/10' 
        : 'bg-slate-900/80 backdrop-blur-md border-b border-cyan-400/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="group flex items-center space-x-3">
            <div className="relative">
              <Terminal size={28} className="text-cyan-400 group-hover:animate-pulse transition-all duration-300" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Divyansh Bajpai
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-cyan-400 transition-all duration-500 font-medium group transform hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500 group-hover:w-full"></span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-110"></div>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative z-10">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Navigation with enhanced animations */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}>
          <div className="border-t border-cyan-400/20 backdrop-blur-md">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-3 text-gray-300 hover:text-cyan-400 transition-all duration-500 relative group transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 ml-4">{item.name}</span>
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
