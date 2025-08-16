
import React from 'react';
import { Target, Award, Users, TrendingUp, Code, Shield, Zap, Globe } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: <Code className="text-primary-foreground w-6 h-6" />,
      title: "Technical Excellence",
      description: "12+ years mastering Java ecosystem, from legacy systems to cutting-edge microservices."
    },
    {
      icon: <Users className="text-primary-foreground w-6 h-6" />,
      title: "Leadership Excellence",
      description: "Leading cross-functional teams, mentoring developers, and driving technical strategies."
    },
    {
      icon: <Shield className="text-primary-foreground w-6 h-6" />,
      title: "Enterprise Solutions",
      description: "Architecting robust, scalable solutions for mission-critical banking applications."
    },
    {
      icon: <Zap className="text-primary-foreground w-6 h-6" />,
      title: "Performance Engineering",
      description: "Optimizing application performance and ensuring 99.9% uptime for production systems."
    }
  ];

  const achievements = [
    { metric: "12+", label: "Years Experience", icon: <Award className="w-5 h-5 text-primary" /> },
    { metric: "50+", label: "Projects Delivered", icon: <Target className="w-5 h-5 text-primary" /> },
    { metric: "Enterprise", label: "Banking Solutions", icon: <Globe className="w-5 h-5 text-primary" /> },
    { metric: "24/7", label: "Production Support", icon: <TrendingUp className="w-5 h-5 text-primary" /> }
  ];

  return (
    <section id="about" className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="section-header animate-fade-in-up">
          <h2 className="text-balance">
            About <span className="gradient-text">Rajasekhar Pallala</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Senior Lead Java Engineer with expertise in enterprise solutions and technical leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Driving Innovation in Enterprise Java Development
              </h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  As a Senior Lead Java Engineer at Virtusa Corp working with Chase Banking Solutions, 
                  I specialize in architecting and delivering enterprise-grade applications that serve 
                  millions of users globally.
                </p>
                
                <p>
                  My expertise spans the complete software development lifecycle, from requirements 
                  analysis to production deployment and monitoring. I excel in modernizing legacy 
                  systems, implementing microservices architectures, and ensuring optimal performance 
                  in high-traffic environments.
                </p>
                
                <p>
                  With a passion for mentoring and knowledge sharing, I lead technical discussions, 
                  conduct code reviews, and foster a culture of continuous learning within my teams.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className={`executive-card p-6 hover-lift animate-scale-in stagger-${index + 1}`}>
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="executive-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Key Achievements</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`text-center space-y-3 animate-scale-in stagger-${index + 1}`}>
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                      {achievement.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{achievement.metric}</div>
                      <div className="text-sm text-muted-foreground font-medium">{achievement.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="executive-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Certifications & Education</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-accent rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">AWS Solutions Architect - Associate</div>
                    <div className="text-sm text-muted-foreground">Amazon Web Services</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-accent rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Master of Computer Applications</div>
                    <div className="text-sm text-muted-foreground">JNTUA - Computer Science</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
