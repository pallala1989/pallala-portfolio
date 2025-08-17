
import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Mail, Phone, Award, Code, Zap, Star } from 'lucide-react';

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
   'Java 17+, Spring Boot 3.x, and Reactive Programming',
  'Cloud-native Architecture and Microservices Design',
  'AWS Cloud Services: Lambda, ECS/EKS, DynamoDB, CloudFormation, Terraform',
  'Kubernetes: orchestration, Helm, service mesh (Istio)',
  'Pivotal Cloud Foundry (PCF) Platform and Deployments',
  'Performance Optimization: JVM tuning, Garbage Collection, async processing',
  'Memory Management: Heap analysis, native memory tracking, Java profilers',
  'Legacy Application Migration to AWS and Cloud Refactoring',
  'Database Administration: Oracle, PostgreSQL, AWS RDS, DynamoDB, Cassandra, MongoDB',
  'Messaging & Streaming Technologies: Kafka, RabbitMQ, AWS Kinesis',
  'DevOps Automation: CI/CD pipelines, Infrastructure as Code, Jenkins, GitLab CI',
  'Security & Compliance: IAM, API Gateway security, OAuth2, JWT, AWS Shield/WAF',
  'Serverless Architectures: AWS Lambda, Step Functions, EventBridge',
  'Observability: Distributed tracing (OpenTelemetry), ELK/EFK stacks, logging',
  'Test Automation: JUnit 5, Cucumber, Postman, contract testing'
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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen hero-gradient relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-8">
          
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary animate-fade-in-up border border-primary/20">
                <Award className="w-4 h-4" />
                Senior Lead Java Engineer
              </div>
              
              <div className="space-y-4">
                <h1 className="animate-scale-in">
                  Rajasekhar Pallala
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-fade-in-up stagger-1"></div>
              </div>
              
              <div className="text-xl text-accent font-semibold animate-fade-in-up stagger-2">
                Virtusa Corp - Chase Banking Solutions
              </div>
              
              {/* Animated Role Section */}
              <div className="glass-card p-6 animate-fade-in-up stagger-3">
                <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                  Expertise in:
                </div>
                <div className="text-2xl font-bold gradient-text min-h-[32px] flex items-center">
                  {displayText}
                  <span className="animate-pulse text-primary ml-1">|</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up stagger-4">
                Dynamic Lead Consultant with 12+ years of enterprise experience, specializing in Java development and 
                microservices architecture. Proven expertise in performance optimization, cloud solutions, and leading 
                cross-functional teams for mission-critical banking applications.
              </p>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up stagger-5">
                <div className="glass-card p-4 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground">Location</div>
                      <div className="text-sm font-semibold text-foreground">Wilmington, DE</div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground">Email</div>
                     <div className="contact-text break-all">pallala1989@gmail.com</div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground">Phone</div>
                      <div className="text-sm font-semibold text-foreground">903-921-0271</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="glass-card p-6 text-center animate-scale-in stagger-4">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="glass-card p-6 text-center animate-scale-in stagger-5">
                <div className="text-2xl font-bold text-accent mb-2">Enterprise</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Banking Solutions</div>
              </div>
              <div className="glass-card p-6 text-center animate-scale-in stagger-6">
                <div className="text-2xl font-bold text-primary mb-2">Leadership</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">& Mentoring</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-6">
              <button 
                onClick={() => scrollTo('skills')} 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold shadow-2xl hover:shadow-primary/20 hover:scale-105"
              >
                View Technical Skills
              </button>
              <button 
                onClick={() => scrollTo('contact')} 
                className="px-8 py-4 border border-primary/60 text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative animate-slide-in-right stagger-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-3xl animate-float"></div>
                <div className="relative z-10 w-full h-full p-4">
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
                    <img 
                      src="https://i.postimg.cc/Vst9vkXF/raja-passphoto.png" 
                      alt="Rajasekhar Pallala" 
                      className="w-full h-full object-cover object-center" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-float border border-primary/30">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center animate-float border border-accent/30" style={{ animationDelay: '1s' }}>
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-float border border-primary/30" style={{ animationDelay: '2s' }}>
                <Star className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
          <button 
            onClick={() => scrollTo('skills')}
            className="p-3 rounded-full bg-primary/20 border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:scale-110"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
