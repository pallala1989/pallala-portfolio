
import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Mail, Phone, Award, Users, TrendingUp, Star } from 'lucide-react';

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
    'Senior Lead Java Engineer',
    'Enterprise Solutions Architect', 
    'Microservices Expert',
    'AWS Cloud Specialist',
    'Technical Leadership',
    'Performance Engineering',
    'DevOps & SRE Professional',
    'Full Stack Development'
  ];

  // Mouse interaction effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <section id="home" className="min-h-screen bg-background relative overflow-hidden pt-20 interactive-bg">
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-8">
          
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary animate-fade-in-up border border-primary/20">
                  <Award className="w-4 h-4 mr-2" />
                  Senior Lead Java Engineer
                </div>
                
                <div className="space-y-3">
                  <h1 className="text-balance animate-scale-in">
                    Rajasekhar <span className="gradient-text">Pallala</span>
                  </h1>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-fade-in-up stagger-1"></div>
                </div>
                
                <div className="text-lg text-primary font-semibold animate-fade-in-up stagger-2">
                  Virtusa Corp - Chase Banking Solutions
                </div>
              </div>
              
              {/* Animated Role Section */}
              <div className="executive-card p-6 animate-fade-in-up stagger-3 mouse-glow">
                <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Expertise in:</div>
                <div className="text-xl sm:text-2xl font-bold gradient-text min-h-[32px] flex items-center">
                  {displayText}
                  <span className="animate-pulse text-primary ml-1">|</span>
                </div>
              </div>
              
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up stagger-4 text-balance">
                Dynamic Lead Consultant with 12+ years of enterprise experience, excelling in Java development and 
                microservices architecture. Proven track record in performance tuning, cloud solutions, and leading 
                cross-functional teams to deliver mission-critical banking applications.
              </p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up stagger-5">
                <div className="flex items-center space-x-3 text-muted-foreground group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Location</div>
                    <div className="text-xs text-muted-foreground">Wilmington, DE</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Email</div>
                    <div className="text-xs text-muted-foreground">pallala1989@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Phone</div>
                    <div className="text-xs text-muted-foreground">903-921-0271</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="stats-card animate-scale-in stagger-4">
                <div className="stats-number">12+</div>
                <div className="stats-label">Years Experience</div>
              </div>
              <div className="stats-card animate-scale-in stagger-5">
                <div className="stats-number">Enterprise</div>
                <div className="stats-label">Banking Solutions</div>
              </div>
              <div className="stats-card animate-scale-in stagger-6">
                <div className="stats-number">Leadership</div>
                <div className="stats-label">& Mentoring</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up stagger-6">
              <button 
                onClick={() => scrollTo('skills')} 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Technical Skills
              </button>
              <button 
                onClick={() => scrollTo('contact')} 
                className="px-6 py-3 border border-primary/60 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold hover:shadow-lg transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Enhanced Professional Image */}
          <div className="relative animate-slide-in-right stagger-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="profile-container w-72 h-72 lg:w-80 lg:h-80">
                <div className="profile-image w-full h-full">
                  <img 
                    src="https://i.postimg.cc/Vst9vkXF/raja-passphoto.png" 
                    alt="Rajasekhar Pallala - Senior Lead Java Engineer" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="floating-badge -top-3 -right-4 animate-scale-in">
                <Users className="w-3 h-3 mr-1" />
                Team Lead
              </div>
              <div className="floating-badge -bottom-3 -left-4 animate-scale-in stagger-2">
                <TrendingUp className="w-3 h-3 mr-1" />
                Growth
              </div>
              <div className="floating-badge top-1/2 -left-6 animate-scale-in stagger-3">
                <Star className="w-3 h-3 mr-1" />
                Expert
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-full animate-float border border-primary/20"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full animate-float border border-accent/20" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-scale-in">
          <button 
            onClick={() => scrollTo('skills')}
            className="p-3 rounded-full bg-primary/10 border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
