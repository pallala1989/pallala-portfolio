
import React from 'react';
import { ExternalLink, Code, Monitor, Cloud, Database } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Credit Card Products Suite",
      company: "DE",
      description: "CAM, lending, authorizations. Focused on performance, health monitoring, and PROD reliability using Dynatrace, Splunk, and PCF.",
      technologies: ["Java", "PCF", "Kubernetes", "Dynatrace", "Splunk"],
      icon: <Monitor className="text-cyan-400" size={32} />,
      color: "cyan"
    },
    {
      title: "GlaceEMR Platform", 
      company: "GlaceEMR",
      description: "Full-stack role in certified EMR systems, developing secure patient portal and lab integration tools.",
      technologies: ["Spring", "JDBC", "Jaspersoft", "MVC"],
      icon: <Database className="text-blue-400" size={32} />,
      color: "blue"
    },
    {
      title: "ACETP Microservices",
      company: "BNP Paribas", 
      description: "Developed microservices architecture for fund transfer operations using Apache Camel and Docker.",
      technologies: ["Spring Boot", "Docker", "Apache Camel", "Microservices"],
      icon: <Cloud className="text-indigo-400" size={32} />,
      color: "indigo"
    },
    {
      title: "EIP Billing Automation",
      company: "EIP",
      description: "Led design and implementation of telecom billing tools, enhancing affordability options for mobile devices.",
      technologies: ["Core Java", "Hibernate", "REST", "SOAP"],
      icon: <Code className="text-purple-400" size={32} />,
      color: "purple"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  {project.icon}
                  <ExternalLink className="text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" size={20} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">{project.company}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
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
