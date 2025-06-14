
import React from 'react';
import { ExternalLink, Code, Monitor, Cloud, Database } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Credit Card Products Suite",
      company: "DE",
      description: "CAM, lending, authorizations. Focused on performance, health monitoring, and PROD reliability using Dynatrace, Splunk, and PCF.",
      technologies: ["Java", "PCF", "Kubernetes", "Dynatrace", "Splunk"],
      icon: <Monitor className="text-white" size={32} />,
      color: "gradient-blue"
    },
    {
      title: "GlaceEMR Platform", 
      company: "GlaceEMR",
      description: "Full-stack role in certified EMR systems, developing secure patient portal and lab integration tools.",
      technologies: ["Spring", "JDBC", "Jaspersoft", "MVC"],
      icon: <Database className="text-white" size={32} />,
      color: "gradient-orange"
    },
    {
      title: "ACETP Microservices",
      company: "BNP Paribas", 
      description: "Developed microservices architecture for fund transfer operations using Apache Camel and Docker.",
      technologies: ["Spring Boot", "Docker", "Apache Camel", "Microservices"],
      icon: <Cloud className="text-white" size={32} />,
      color: "gradient-green"
    },
    {
      title: "EIP Billing Automation",
      company: "EIP",
      description: "Led design and implementation of telecom billing tools, enhancing affordability options for mobile devices.",
      technologies: ["Core Java", "Hibernate", "REST", "SOAP"],
      icon: <Code className="text-white" size={32} />,
      color: "gradient-purple"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-36 h-36 gradient-green rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-28 h-28 gradient-purple rounded-full opacity-10 animate-pulse-custom"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`glass-card rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover-lift animate-fade-in-scale stagger-${index + 1}`}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 ${project.color} rounded-xl animate-glow`}>
                    {project.icon}
                  </div>
                  <ExternalLink className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors hover-lift" size={20} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-400 text-sm font-medium mb-4">{project.company}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 glass-effect text-gray-300 text-sm rounded-full border border-gray-600 hover:border-blue-400 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
