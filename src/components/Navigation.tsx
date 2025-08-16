
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold animate-slide-in-left">
            <span className="text-foreground">Rajasekhar</span>
            <span className="text-primary ml-2">Pallala</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 animate-slide-in-right">
            {['home', 'skills', 'about', 'experience', 'projects', 'services', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-muted-foreground hover:text-foreground transition-all duration-300 capitalize font-medium py-2 px-4 rounded-lg hover:bg-muted stagger-${index + 1} animate-fade-in-up`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-all duration-300 animate-fade-in-up"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden executive-card mt-2 p-4 animate-fade-in-up">
            {['home', 'skills', 'about', 'experience', 'projects', 'services', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-all duration-300 capitalize font-medium border-b border-border last:border-b-0 hover:bg-muted rounded px-2 stagger-${index + 1} animate-slide-in-left`}
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
