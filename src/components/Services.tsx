
import React from 'react';
import { Code, Cloud, Activity, Users } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Code className="text-cyan-400" size={48} />,
      title: "Lead Java Development",
      description: "End-to-end architecture, performance optimization, and cross-functional coordination for enterprise applications.",
      features: ["Microservices Architecture", "Performance Tuning", "Code Review & Mentoring", "Agile Development"]
    },
    {
      icon: <Cloud className="text-blue-400" size={48} />,
      title: "Cloud Integration & Deployment", 
      description: "Expertise in PCF, Kubernetes, Jenkins CI/CD pipelines, and cloud operations for scalable solutions.",
      features: ["PCF & Kubernetes", "CI/CD Pipelines", "Docker Containerization", "Cloud Migration"]
    },
    {
      icon: <Activity className="text-indigo-400" size={48} />,
      title: "Monitoring & Reliability Engineering",
      description: "Dynatrace, Splunk, and Control-M job orchestration for robust application monitoring and reliability.",
      features: ["Application Monitoring", "Performance Analytics", "Issue Resolution", "System Reliability"]
    },
    {
      icon: <Users className="text-purple-400" size={48} />,
      title: "Technical Leadership",
      description: "Leading cross-functional teams and driving innovative solutions in fast-paced, high-performance environments.",
      features: ["Team Leadership", "Project Management", "Technical Strategy", "Stakeholder Communication"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          What I <span className="text-cyan-400">Offer</span>
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16">
          Comprehensive solutions for your enterprise development needs
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">{service.icon}</div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
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
