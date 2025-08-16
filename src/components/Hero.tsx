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
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-12">
          
          {/* Content */}
          <div className="space-y-10 animate-slide-in-left">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-accent/20 backdrop-blur-xl rounded-full text-sm font-semibold text-accent-foreground animate-fade-in-up border border-border/40">
                  <Award className="w-5 h-5 mr-3 text-primary" />
                  Senior Lead Java Engineer
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-balance animate-scale-in">
                    Rajasekhar <span className="gradient-text">Pallala</span>
                  </h1>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary/60 rounded-full animate-fade-in-up stagger-1 shadow-lg shadow-primary/30"></div>
                </div>
                
                <div className="text-2xl text-primary font-semibold animate-fade-in-up stagger-2">
                  Virtusa Corp - Chase Banking Solutions
                </div>
              </div>
              
              {/* Animated Role Section */}
              <div className="executive-card p-8 animate-fade-in-up stagger-3 animate-pulse-glow">
                <div className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Expertise in:</div>
                <div className="text-3xl font-bold gradient-text min-h-[40px] flex items-center">
                  {displayText}
                  <span className="animate-pulse text-primary ml-1">|</span>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up stagger-4 text-balance">
                Dynamic Lead Consultant with 12+ years of enterprise experience, excelling in Java development and 
                microservices architecture. Proven track record in performance tuning, cloud solutions, and leading 
                cross-functional teams to deliver mission-critical banking applications.
              </p>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-3 gap-6 animate-fade-in-up stagger-5">
                <div className="flex items-center space-x-4 text-muted-foreground group">
                  <div className="w-12 h-12 bg-accent/20 backdrop-blur-xl rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-border/40">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Location</div>
                    <div className="text-sm">Wilmington, DE</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-muted-foreground group">
                  <div className="w-12 h-12 bg-accent/20 backdrop-blur-xl rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-border/40">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Email</div>
                    <div className="text-sm">pallala1989@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-muted-foreground group">
                  <div className="w-12 h-12 bg-accent/20 backdrop-blur-xl rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-border/40">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Phone</div>
                    <div className="text-sm">903-921-0271</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
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
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-6">
              <button 
                onClick={() => scrollTo('skills')} 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-2xl hover:shadow-primary/30 transform hover:-translate-y-2 backdrop-blur-xl border border-primary/20"
              >
                View Technical Skills
              </button>
              <button 
                onClick={() => scrollTo('contact')} 
                className="px-8 py-4 border-2 border-primary/60 text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/30 transform hover:-translate-y-2"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Enhanced Professional Image */}
          <div className="relative animate-slide-in-right stagger-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="profile-container w-80 h-80 lg:w-96 lg:h-96">
                <div className="profile-image w-full h-full">
                  <img 
                    src="https://i.postimg.cc/Vst9vkXF/raja-passphoto.png" 
                    alt="Rajasekhar Pallala - Senior Lead Java Engineer" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="floating-badge -top-4 -right-6 animate-scale-in">
                <Users className="w-5 h-5 mr-2" />
                Team Lead
              </div>
              <div className="floating-badge -bottom-4 -left-6 animate-scale-in stagger-2">
                <TrendingUp className="w-5 h-5 mr-2" />
                Growth
              </div>
              <div className="floating-badge top-1/2 -left-8 animate-scale-in stagger-3">
                <Star className="w-5 h-5 mr-2" />
                Expert
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full animate-float backdrop-blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full animate-float backdrop-blur-xl" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scale-in">
          <button 
            onClick={() => scrollTo('skills')}
            className="p-4 rounded-full bg-accent/20 border border-border/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-2xl hover:shadow-primary/30 backdrop-blur-xl animate-pulse-glow"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
