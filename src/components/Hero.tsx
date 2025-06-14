
import React, { useState, useEffect } from 'react';
import { ArrowDown, Star, Users, Award } from 'lucide-react';

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['Java', 'AWS', 'OOPs', 'Kubernetes', 'String handling', 'PCF', 'Exception handling', 'Jira', 'Multi-threading', 'Git', 'Collections API', 'Jenkins', 'Spring', 'Docker', 'Spring Boot', 'Log4J', 'Spring Cloud', 'SLF4J', 'Eureka', 'JUnit', 'Config server', 'Mockito', 'Zuul load balancer', 'HTML/HTML5', 'Histrix', 'CSS/CSS3', 'Performance tuning', 'Java Script', 'REST', 'J Query', 'SOAP', 'React', 'RabbitMQ', 'JSON', 'JMS', 'Windows', 'Oracle', 'Linux/Unix', 'MySQL', 'Tomcat', 'PostgreSQL', 'WebSphere', 'Cassandra', 'Maven', 'Teradata', 'Gradle'];

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
    <section id="home" className="min-h-screen bg-gray-900 relative overflow-hidden pt-16 sm:pt-20">
      {/* Enhanced Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 gradient-orange rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 gradient-blue rounded-full opacity-20 animate-pulse-custom stagger-2"></div>
        <div className="absolute bottom-40 left-4 sm:left-20 w-24 sm:w-40 h-24 sm:h-40 gradient-green rounded-full opacity-20 animate-float stagger-3"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-20 sm:w-28 h-20 sm:h-28 gradient-purple rounded-full opacity-20 animate-pulse-custom stagger-1"></div>
        
        {/* Abstract shapes with glow */}
        <div className="absolute top-1/3 left-1/4 w-12 sm:w-16 h-12 sm:h-16 border-4 border-blue-400 rotate-45 animate-rotate-slow animate-glow"></div>
        <div className="absolute top-2/3 right-1/3 w-8 sm:w-12 h-8 sm:h-12 bg-orange-400 rounded-lg animate-pulse-custom stagger-4"></div>
        <div className="absolute top-1/2 left-4 sm:left-10 w-6 sm:w-8 h-6 sm:h-8 bg-green-400 rotate-45 animate-float stagger-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-8">
          
          {/* Mobile Profile Image - Shows first on mobile */}
          <div className="relative animate-slide-in-right stagger-2 order-1 lg:order-2 w-full flex justify-center lg:block">
            <div className="relative">
              {/* Main Profile Circle with enhanced glow */}
              <div className="w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 mx-auto rounded-full gradient-blue p-2 shadow-2xl animate-glow">
                <div className="w-full h-full rounded-full bg-gray-800 p-2 relative overflow-hidden glass-card">
                  <img 
                    src="https://i.postimg.cc/Vst9vkXF/raja-passphoto.png" 
                    alt="Rajasekhar Pallala" 
                    className="w-full h-full object-cover rounded-full" 
                  />
                  
                  {/* Enhanced Floating Icons */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1.5 sm:p-2 bg-orange-500 rounded-full animate-float shadow-lg">
                    <Star size={12} className="text-white sm:w-4 sm:h-4" />
                  </div>
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 p-1.5 sm:p-2 bg-green-500 rounded-full animate-float stagger-2 shadow-lg">
                    <Users size={12} className="text-white sm:w-4 sm:h-4" />
                  </div>
                  <div className="absolute top-1/2 left-2 sm:left-4 p-1.5 sm:p-2 bg-purple-500 rounded-full animate-float stagger-3 shadow-lg">
                    <Award size={12} className="text-white sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-12 sm:w-16 h-12 sm:h-16 gradient-orange rounded-lg opacity-30 animate-pulse-custom"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 sm:w-20 h-16 sm:h-20 gradient-green rounded-full opacity-30 animate-float"></div>
              <div className="absolute top-1/2 -right-4 sm:-right-8 w-8 sm:w-12 h-8 sm:h-12 gradient-purple rounded-lg opacity-30 animate-rotate-slow"></div>
            </div>
          </div>

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              {/* Updated heading format */}
              <div className="space-y-3 sm:space-y-4">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light animate-slide-in-up">
                  <span className="text-blue-400">👋</span> Hi there, I'm
                </div>
                <div className="relative">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-scale text-white">
                    Rajasekhar
                  </h1>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-500 animate-slide-in-up stagger-2 rounded-full bg-green-700"></div>
                </div>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-medium animate-slide-in-up stagger-2">Lead Full Stack Developer</div>
              </div>
              
              {/* Animated Role Section */}
              <div className="animate-slide-in-up stagger-3 bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700 mx-auto lg:mx-0 max-w-md lg:max-w-none">
                <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-400 font-medium mb-2">💡 I am skilled in:</div>
                <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-gradient-gold font-bold min-w-[120px]">
                  {displayText}
                  <span className="animate-pulse text-blue-400">|</span>
                </div>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-slide-in-up stagger-4">
                Innovative software engineer specializing in scalable Java solutions, 
                microservices architecture, and cloud-native applications with 12+ years of experience.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 py-6 sm:py-8 max-w-md mx-auto lg:max-w-none">
              <div className="text-center glass-card p-3 sm:p-4 rounded-xl hover-lift animate-fade-in-scale stagger-4">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-gold">12+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center glass-card p-3 sm:p-4 rounded-xl hover-lift animate-fade-in-scale stagger-5">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400">5+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center glass-card p-3 sm:p-4 rounded-xl hover-lift animate-fade-in-scale stagger-6">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400">15+</div>
                <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-in-up stagger-4 max-w-sm mx-auto lg:max-w-none">
              <button 
                onClick={() => scrollTo('projects')} 
                className="px-6 sm:px-8 py-3 sm:py-4 gradient-blue text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium hover-glow text-sm sm:text-base"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollTo('contact')} 
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-medium glass-effect text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="p-2 sm:p-3 rounded-full glass-effect border border-blue-400">
            <ArrowDown className="text-blue-400" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};
