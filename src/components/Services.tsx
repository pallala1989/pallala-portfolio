
import React from 'react';
import { Code, Cloud, Activity, Users } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Code className="text-white" size={48} />,
      title: "Lead Java Development",
      description: "End-to-end architecture, performance optimization, and cross-functional coordination for enterprise applications.",
      features: ["Microservices Architecture", "Performance Tuning", "Code Review & Mentoring", "Agile Development"],
      color: "gradient-blue"
    },
    {
      icon: <Cloud className="text-white" size={48} />,
      title: "Cloud Integration & Deployment", 
      description: "Expertise in PCF, Kubernetes, Jenkins CI/CD pipelines, and cloud operations for scalable solutions.",
      features: ["PCF & Kubernetes", "CI/CD Pipelines", "Docker Containerization", "Cloud Migration"],
      color: "gradient-orange"
    },
    {
      icon: <Activity className="text-white" size={48} />,
      title: "Monitoring & Reliability Engineering",
      description: "Dynatrace, Splunk, and Control-M job orchestration for robust application monitoring and reliability.",
      features: ["Application Monitoring", "Performance Analytics", "Issue Resolution", "System Reliability"],
      color: "gradient-green"
    },
    {
      icon: <Users className="text-white" size={48} />,
      title: "Technical Leadership",
      description: "Leading cross-functional teams and driving innovative solutions in fast-paced, high-performance environments.",
      features: ["Team Leadership", "Project Management", "Technical Strategy", "Stakeholder Communication"],
      color: "gradient-purple"
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
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions for your enterprise development needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
