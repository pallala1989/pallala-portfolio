
import React from 'react';
import { ExternalLink, Code, Monitor, Cloud, Database, Shield, CreditCard } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Credit Card Products Suite",
      company: "DE - Lead Consultant",
      description: "Leading comprehensive credit card management systems including CAM (Card Account Management), authorizations, financial transactions, lending, and pricing modules. Implementing robust monitoring with Dynatrace and Splunk for production reliability.",
      technologies: ["Java", "Spring Boot", "PCF", "Kubernetes", "Dynatrace", "Splunk", "Control-M"],
      icon: <CreditCard className="text-white" size={32} />,
      color: "gradient-blue",
      achievements: [
        "24/7 production support and monitoring",
        "PCF and Kubernetes operations management", 
        "Custom service creation and deployment automation",
        "SR/DR flip events coordination"
      ]
    },
    {
      title: "GlaceEMR Healthcare Platform", 
      company: "GlaceEMR - Full Stack Developer",
      description: "Developed ONC certified electronic medical records software with integrated patient portal, e-prescription system, lab interfaces, and HIPAA-compliant data security for comprehensive healthcare management.",
      technologies: ["Spring MVC", "JDBC", "Jaspersoft", "Hibernate", "Java"],
      icon: <Shield className="text-white" size={32} />,
      color: "gradient-orange",
      achievements: [
        "ONC certification compliance implementation",
        "Patient portal and e-RX integration",
        "HIPAA-compliant security measures",
        "Automated report generation system"
      ]
    },
    {
      title: "ACETP Microservices Platform",
      company: "BNP Paribas - Senior Developer", 
      description: "Architected and developed microservices for fund transfer operations using Apache Camel integration patterns, Docker containerization, and Jenkins CI/CD for custody, clearing, and settlement services.",
      technologies: ["Spring Boot", "Apache Camel", "Docker", "Jenkins", "Microservices"],
      icon: <Cloud className="text-white" size={32} />,
      color: "gradient-green",
      achievements: [
        "Microservices architecture design",
        "Apache Camel integration patterns",
        "Docker deployment automation",
        "24/7 production monitoring and support"
      ]
    },
    {
      title: "EIP Billing Automation System",
      company: "EIP - IT Application Engineer",
      description: "Designed and implemented comprehensive billing automation for Equipment Installment Plan, enabling zero-interest mobile equipment financing with integrated payment processing and customer management.",
      technologies: ["Core Java", "Spring MVC", "Hibernate", "REST", "SOAP", "WebLogic"],
      icon: <Database className="text-white" size={32} />,
      color: "gradient-purple",
      achievements: [
        "Full SDLC implementation",
        "REST and SOAP web services integration",
        "WebLogic deployment optimization",
        "Performance tuning and monitoring"
      ]
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
            Enterprise <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leading complex enterprise projects across financial services, healthcare, and fintech domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
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
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
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
