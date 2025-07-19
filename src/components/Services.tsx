
import React from 'react';
import { Code, Cloud, Activity, Users, Database, Settings } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Code className="text-white" size={48} />,
      title: "Enterprise Java Development",
      description: "Lead full-stack Java development with Spring Boot, microservices architecture, and performance optimization for large-scale enterprise applications.",
      features: ["Microservices Architecture", "Spring Boot & Cloud", "Performance Tuning", "Code Review & Mentoring"],
      color: "gradient-blue"
    },
    {
      icon: <Cloud className="text-white" size={48} />,
      title: "Cloud Operations & DevOps", 
      description: "Expert in AWS, PCF, Kubernetes operations, CI/CD pipelines with Jenkins, and container orchestration for scalable cloud solutions.",
      features: ["AWS Solutions Architecture", "PCF & Kubernetes", "Jenkins CI/CD", "Docker Containerization"],
      color: "gradient-orange"
    },
    {
      icon: <Activity className="text-white" size={48} />,
      title: "SRE & Application Monitoring",
      description: "Comprehensive site reliability engineering with Dynatrace, Splunk monitoring, Control-M automation, and 24/7 production support.",
      features: ["Dynatrace & Splunk Expertise", "Production Issue Resolution", "Control-M Job Management", "Performance Analytics"],
      color: "gradient-green"
    },
    {
      icon: <Users className="text-white" size={48} />,
      title: "Technical Leadership",
      description: "Leading cross-functional teams, mentoring developers, driving agile methodologies, and managing complex enterprise projects.",
      features: ["Team Leadership", "Agile Scrum Management", "Technical Strategy", "Cross-team Collaboration"],
      color: "gradient-purple"
    },
    {
      icon: <Database className="text-white" size={48} />,
      title: "Database & Integration",
      description: "Expert database design with PostgreSQL, Oracle, MySQL, and seamless system integration using REST/SOAP APIs and messaging.",
      features: ["Database Architecture", "REST/SOAP Integration", "JMS & RabbitMQ", "Data Migration"],
      color: "gradient-blue"
    },
    {
      icon: <Settings className="text-white" size={48} />,
      title: "System Architecture & Design",
      description: "Designing scalable system architectures, implementing design patterns, and ensuring high availability for mission-critical applications.",
      features: ["System Design", "High Availability", "Scalability Planning", "Architecture Review"],
      color: "gradient-orange"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 gradient-blue rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 gradient-orange rounded-full opacity-10 animate-pulse-custom"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Core <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive enterprise solutions and technical leadership across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`glass-card rounded-2xl p-8 shadow-2xl border border-gray-700 hover-lift animate-fade-in-scale stagger-${index + 1}`}>
              <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-6 animate-glow`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-custom"></div>
                    <span className="text-gray-300">{feature}</span>
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
