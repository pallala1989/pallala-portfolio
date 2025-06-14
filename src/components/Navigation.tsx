
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'glass-card shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold animate-slide-in-left">
            <span className="text-white">Rajasekhar</span>
            <span className="text-gradient ml-2">Pallala</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 animate-slide-in-right">
            {['home', 'about', 'experience', 'projects', 'skills', 'services', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative text-gray-300 hover:text-white transition-all duration-300 capitalize font-medium py-2 px-4 rounded-lg hover:glass-effect stagger-${index + 1} animate-fade-in-scale`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:glass-effect transition-all duration-300 animate-fade-in-scale"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="transition-transform duration-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden glass-card rounded-xl mt-2 p-4 border border-gray-700 shadow-2xl animate-slide-in-up">
            {['home', 'about', 'experience', 'projects', 'skills', 'services', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`block w-full text-left py-3 text-gray-300 hover:text-white transition-all duration-300 capitalize font-medium border-b border-gray-700 last:border-b-0 hover:glass-effect rounded px-2 stagger-${index + 1} animate-slide-in-left`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
