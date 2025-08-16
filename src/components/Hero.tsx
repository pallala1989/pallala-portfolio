
import React, { useState, useEffect } from 'react';
import { ArrowDown, Star, Users, Award } from 'lucide-react';

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['Senior Lead Java Engineer', 'Spring Boot Expert', 'Microservices Architect', 'AWS Solutions', 'Kubernetes Leader', 'PCF Specialist', 'SRE Engineer', 'Team Leadership', 'React Development', 'Enterprise Solutions'];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const shouldDelete = isDeleting;
    const timeout = setTimeout(() => {
      if (!shouldDelete && displayText !== currentRole) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else if (shouldDelete && displayText !== '') {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else if (!shouldDelete && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (shouldDelete && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
      }
    }, shouldDelete ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentRoleIndex, displayText, isDeleting, roles]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="min-h-screen bg-background relative overflow-hidden pt-16 sm:pt-20">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 gradient-secondary rounded-full opacity-20 animate-scale-in"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 gradient-primary rounded-full opacity-20 animate-scale-in stagger-2"></div>
        <div className="absolute bottom-40 left-4 sm:left-20 w-24 sm:w-40 h-24 sm:h-40 gradient-accent rounded-full opacity-20 animate-scale-in stagger-3"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-20 sm:w-28 h-20 sm:h-28 gradient-primary rounded-full opacity-20 animate-scale-in stagger-1"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-8">
          
          {/* Profile Image */}
          <div className="relative animate-slide-in-right stagger-2 order-1 lg:order-2 w-full flex justify-center lg:block">
            <div className="relative">
              <div className="w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 mx-auto rounded-full gradient-primary p-2 shadow-2xl animate-glow">
                <div className="w-full h-full rounded-full bg-card p-2 relative overflow-hidden glass-card">
                  <img 
                    src="https://i.postimg.cc/Vst9vkXF/raja-passphoto.png" 
                    alt="Rajasekhar Pallala" 
                    className="w-full h-full object-cover rounded-full" 
                  />
                  
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1.5 sm:p-2 gradient-secondary rounded-full animate-scale-in shadow-lg">
                    <Star size={12} className="text-white sm:w-4 sm:h-4" />
                  </div>
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 p-1.5 sm:p-2 gradient-accent rounded-full animate-scale-in stagger-2 shadow-lg">
                    <Users size={12} className="text-white sm:w-4 sm:h-4" />
                  </div>
                  <div className="absolute top-1/2 left-2 sm:left-4 p-1.5 sm:p-2 gradient-primary rounded-full animate-scale-in stagger-3 shadow-lg">
                    <Award size={12} className="text-white sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light animate-fade-in-up">
                  <span className="text-2xl">👋</span> Hi, I'm
                </div>
                <div className="relative">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-scale-in text-foreground">
                    Rajasekhar Pallala
                  </h1>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-24 sm:w-32 h-0.5 sm:h-1 gradient-primary animate-fade-in-up stagger-2 rounded-full"></div>
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium animate-fade-in-up stagger-2">Senior Lead Java Engineer</div>
                <div className="text-sm sm:text-base text-primary animate-fade-in-up stagger-3">📍 Wilmington, DE | 📧 pallala1989@gmail.com | 📱 903-921-0271</div>
              </div>
              
              {/* Animated Role Section */}
              <div className="animate-fade-in-up stagger-3 glass-card rounded-xl p-3 sm:p-4 border mx-auto lg:mx-0 max-w-md lg:max-w-none">
                <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-primary font-medium mb-2">💡 Specializing in:</div>
                <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-gradient font-bold min-w-[200px]">
                  {displayText}
                  <span className="animate-pulse text-primary">|</span>
                </div>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up stagger-4">
                Senior Lead Java Engineer at Virtusa Corp (Chase client) with 12+ years of enterprise experience. 
                Expert in modern Java technologies, microservices architecture, and cloud-native solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 py-6 sm:py-8 max-w-md mx-auto lg:max-w-none">
              <div className="text-center glass-card p-3 sm:p-4 rounded-xl hover-lift animate-scale-in stagger-4">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">12+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center glass-card p-3 sm:p-4 rounded-xl hover-lift animate-scale-in stagger-5">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">Enterprise</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Solutions</div>
              </div>
              <div className="text-center glass-card p-3 sm:p-4 rounded-xl hover-lift animate-scale-in stagger-6">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">Leadership</div>
                <div className="text-xs sm:text-sm text-muted-foreground">& Mentoring</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up stagger-4 max-w-sm mx-auto lg:max-w-none">
              <button 
                onClick={() => scrollTo('skills')} 
                className="px-6 sm:px-8 py-3 sm:py-4 gradient-primary text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium text-sm sm:text-base"
              >
                View Skills
              </button>
              <button 
                onClick={() => scrollTo('contact')} 
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium glass-card text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-scale-in">
          <div className="p-2 sm:p-3 rounded-full glass-card border border-primary">
            <ArrowDown className="text-primary" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};
