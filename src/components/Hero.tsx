
import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Mail, Phone, Award, Users, TrendingUp } from 'lucide-react';

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
    'DevOps & SRE',
    'Full Stack Development'
  ];

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
    <section id="home" className="min-h-screen bg-background relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-8">
          
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground animate-fade-in-up">
                  <Award className="w-4 h-4 mr-2" />
                  Senior Lead Java Engineer
                </div>
                
                <div>
                  <h1 className="font-bold text-foreground leading-tight animate-scale-in">
                    Rajasekhar Pallala
                  </h1>
                  <div className="w-24 h-1 bg-primary mt-4 rounded-full animate-fade-in-up stagger-1"></div>
                </div>
                
                <div className="text-xl text-muted-foreground font-medium animate-fade-in-up stagger-2">
                  Virtusa Corp - Chase Banking Solutions
                </div>
              </div>
              
              {/* Animated Role Section */}
              <div className="executive-card p-6 animate-fade-in-up stagger-3">
                <div className="text-sm font-medium text-muted-foreground mb-2">Expertise in:</div>
                <div className="text-2xl font-semibold text-gradient min-h-[32px]">
                  {displayText}
                  <span className="animate-pulse text-primary">|</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up stagger-4">
                Dynamic Lead Consultant with 12+ years of enterprise experience, excelling in Java development and 
                microservices architecture. Proven track record in performance tuning, cloud solutions, and leading 
                cross-functional teams to deliver mission-critical banking applications.
              </p>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-3 gap-4 animate-fade-in-up stagger-5">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Wilmington, DE</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>pallala1989@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>903-921-0271</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center executive-card p-6 hover-lift animate-scale-in stagger-4">
                <div className="text-3xl font-bold text-foreground">12+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="text-center executive-card p-6 hover-lift animate-scale-in stagger-5">
                <div className="text-3xl font-bold text-foreground">Enterprise</div>
                <div className="text-sm text-muted-foreground mt-1">Banking Solutions</div>
              </div>
              <div className="text-center executive-card p-6 hover-lift animate-scale-in stagger-6">
                <div className="text-3xl font-bold text-foreground">Leadership</div>
                <div className="text-sm text-muted-foreground mt-1">& Mentoring</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-6">
              <button 
                onClick={() => scrollTo('skills')} 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
              >
                View Technical Skills
              </button>
              <button 
                onClick={() => scrollTo('contact')} 
                className="px-8 py-4 border border-border text-foreground rounded-lg hover:bg-muted transition-all duration-300 font-medium"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative animate-slide-in-right stagger-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden executive-card">
                <img 
                  src="https://i.postimg.cc/Vst9vkXF/raja-passphoto.png" 
                  alt="Rajasekhar Pallala" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Professional badges */}
              <div className="absolute -top-4 -right-4 executive-card p-3 animate-scale-in">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 executive-card p-3 animate-scale-in stagger-2">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scale-in">
          <button 
            onClick={() => scrollTo('skills')}
            className="p-3 rounded-full border border-border hover:bg-muted transition-all duration-300"
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};
