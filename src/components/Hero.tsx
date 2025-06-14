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
  return <section id="home" className="min-h-screen bg-gray-900 relative overflow-hidden pt-20">
      {/* Enhanced Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 gradient-orange rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 gradient-blue rounded-full opacity-20 animate-pulse-custom stagger-2"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 gradient-green rounded-full opacity-20 animate-float stagger-3"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 gradient-purple rounded-full opacity-20 animate-pulse-custom stagger-1"></div>
        
        {/* Abstract shapes with glow */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border-4 border-blue-400 rotate-45 animate-rotate-slow animate-glow"></div>
        <div className="absolute top-2/3 right-1/3 w-12 h-12 bg-orange-400 rounded-lg animate-pulse-custom stagger-4"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-green-400 rotate-45 animate-float stagger-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              {/* Updated heading format */}
              <div className="space-y-4">
                <div className="text-2xl md:text-3xl text-gray-300 font-light animate-slide-in-up">
                  <span className="text-blue-400">👋</span> Hi there, I'm
                </div>
                <div className="relative">
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in-scale text-white">
                    Rajasekhar
                  </h1>
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 animate-slide-in-up stagger-2 rounded-full bg-green-700"></div>
                </div>
                <div className="text-xl md:text-2xl text-gray-300 font-medium animate-slide-in-up stagger-2">Lead Full Stack Developer</div>
              </div>
              
              {/* Animated Role Section */}
              <div className="animate-slide-in-up stagger-3 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <span className="text-lg md:text-xl text-blue-400 font-medium">💡 I am skilled in: </span>
                <span className="text-lg md:text-xl text-gradient-gold font-bold min-w-[120px] inline-block">
                  {displayText}
                  <span className="animate-pulse text-blue-400">|</span>
                </span>
              </div>
              
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg animate-slide-in-up stagger-4">
                Innovative software engineer specializing in scalable Java solutions, 
                microservices architecture, and cloud-native applications with 12+ years of experience.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center glass-card p-4 rounded-xl hover-lift animate-fade-in-scale stagger-4">
                <div className="text-3xl font-bold text-gradient-gold">12+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center glass-card p-4 rounded-xl hover-lift animate-fade-in-scale stagger-5">
                <div className="text-3xl font-bold text-green-400">5+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center glass-card p-4 rounded-xl hover-lift animate-fade-in-scale stagger-6">
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up stagger-4">
              <button onClick={() => scrollTo('projects')} className="px-8 py-4 gradient-blue text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium hover-glow">
                View My Work
              </button>
              <button onClick={() => scrollTo('contact')} className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-medium glass-effect">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Enhanced Right Content - Profile Image */}
          <div className="relative animate-slide-in-right stagger-2">
            <div className="relative">
              {/* Main Profile Circle with enhanced glow */}
              <div className="w-80 h-80 mx-auto rounded-full gradient-blue p-2 shadow-2xl animate-glow">
                <div className="w-full h-full rounded-full bg-gray-800 p-2 relative overflow-hidden glass-card">
                  <img src="https://i.postimg.cc/Vst9vkXF/raja-passphoto.png" alt="Rajasekhar Pallala" className="w-full h-full object-cover rounded-full" />
                  
                  {/* Enhanced Floating Icons */}
                  <div className="absolute top-4 right-4 p-2 bg-orange-500 rounded-full animate-float shadow-lg">
                    <Star size={16} className="text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 p-2 bg-green-500 rounded-full animate-float stagger-2 shadow-lg">
                    <Users size={16} className="text-white" />
                  </div>
                  <div className="absolute top-1/2 left-4 p-2 bg-purple-500 rounded-full animate-float stagger-3 shadow-lg">
                    <Award size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 gradient-orange rounded-lg opacity-30 animate-pulse-custom"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 gradient-green rounded-full opacity-30 animate-float"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 gradient-purple rounded-lg opacity-30 animate-rotate-slow"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="p-3 rounded-full glass-effect border border-blue-400">
            <ArrowDown className="text-blue-400" size={24} />
          </div>
        </div>
      </div>
    </section>;
};