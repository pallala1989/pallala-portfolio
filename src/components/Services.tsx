
import React from 'react';
import { Code, Cloud, Activity, Users, Database, Settings } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Code className="text-primary" size={32} />,
      title: "Enterprise Java Development",
      description: "Lead full-stack Java development with Spring Boot, microservices architecture, and performance optimization for large-scale enterprise applications.",
      features: ["Microservices Architecture", "Spring Boot & Cloud", "Performance Engineering", "Code Review & Mentoring"],
    },
    {
      icon: <Cloud className="text-primary" size={32} />,
      title: "Cloud Operations & DevOps", 
      description: "Expert in AWS, PCF, Kubernetes operations, CI/CD pipelines with Jenkins, and container orchestration for scalable cloud solutions.",
      features: ["AWS Solutions Architecture", "PCF & Kubernetes", "Jenkins CI/CD", "Docker Containerization"],
    },
    {
      icon: <Activity className="text-primary" size={32} />,
      title: "SRE & Application Monitoring",
      description: "Comprehensive site reliability engineering with Dynatrace, Splunk monitoring, Control-M automation, and 24/7 production support.",
      features: ["Dynatrace & Splunk Expertise", "Production Issue Resolution", "Control-M Job Management", "Performance Analytics"],
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Technical Leadership",
      description: "Leading cross-functional teams, mentoring developers, driving agile methodologies, and managing complex enterprise projects.",
      features: ["Team Leadership", "Agile Scrum Management", "Technical Strategy", "Cross-team Collaboration"],
    },
    {
      icon: <Database className="text-primary" size={32} />,
      title: "Database & Integration",
      description: "Expert database design with PostgreSQL, Oracle, MySQL, and seamless system integration using REST/SOAP APIs and messaging.",
      features: ["Database Architecture", "REST/SOAP Integration", "JMS & RabbitMQ", "Data Migration"],
    },
    {
      icon: <Settings className="text-primary" size={32} />,
      title: "System Architecture & Design",
      description: "Designing scalable system architectures, implementing design patterns, and ensuring high availability for mission-critical applications.",
      features: ["System Design", "High Availability", "Scalability Planning", "Architecture Review"],
    }
  ];

  return (
    <section id="services" className="section-spacing bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-bold mb-6 text-foreground">
            Core <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive enterprise solutions and technical leadership across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`executive-card p-8 hover-lift animate-fade-in-up stagger-${index + 1}`}>
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
