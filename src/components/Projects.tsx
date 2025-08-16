
import React from 'react';
import { ExternalLink, Code, Monitor, Cloud, Database, Shield, CreditCard, Calendar } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Credit Card Products Suite",
      company: "Virtusa Corp - Chase Banking",
      period: "July 2025 - Present",
      description: "Leading comprehensive credit card management systems including CAM (Card Account Management), authorizations, financial transactions, lending, and pricing modules as Senior Lead Java Engineer.",
      technologies: ["Java 21", "Spring Boot 3.x", "Kubernetes", "AWS", "Dynatrace", "Splunk", "PCF"],
      icon: <CreditCard className="text-primary-foreground" size={32} />,
      color: "bg-primary",
      achievements: [
        "Leading technical architecture for next-gen banking solutions",
        "Implementing microservices with latest Java 21 features",
        "Managing cross-functional teams and stakeholder communications",
        "Driving DevOps practices and cloud-native deployments"
      ],
      current: true
    },
    {
      title: "Legacy Credit Card Systems",
      company: "DE - Lead Consultant", 
      period: "Oct 2021 - June 2025",
      description: "Led comprehensive credit card management systems including CAM, authorizations, financial transactions, lending, and pricing modules with 24/7 production support.",
      technologies: ["Java", "Spring Boot", "PCF", "Kubernetes", "Dynatrace", "Splunk", "Control-M"],
      icon: <Code className="text-primary-foreground" size={32} />,
      color: "bg-primary/90",
      achievements: [
        "24/7 production support and monitoring excellence",
        "PCF and Kubernetes operations management", 
        "Custom service creation and deployment automation",
        "SR/DR flip events coordination and execution"
      ]
    },
    {
      title: "GlaceEMR Healthcare Platform", 
      company: "GlaceEMR - Full Stack Developer",
      period: "Sep 2020 - Sep 2021",
      description: "Developed ONC certified electronic medical records software with integrated patient portal, e-prescription system, and HIPAA-compliant security.",
      technologies: ["Spring MVC", "JDBC", "Jaspersoft", "Hibernate", "Java"],
      icon: <Shield className="text-primary-foreground" size={32} />,
      color: "bg-primary/80",
      achievements: [
        "ONC certification compliance implementation",
        "Patient portal and e-RX integration development",
        "HIPAA-compliant security measures implementation",
        "Automated report generation system design"
      ]
    },
    {
      title: "ACETP Microservices Platform",
      company: "BNP Paribas - Senior Developer", 
      period: "Aug 2019 - Aug 2020",
      description: "Architected microservices for fund transfer operations using Apache Camel integration patterns and Docker containerization for custody and settlement services.",
      technologies: ["Spring Boot", "Apache Camel", "Docker", "Jenkins", "Microservices"],
      icon: <Cloud className="text-primary-foreground" size={32} />,
      color: "bg-primary/70",
      achievements: [
        "Microservices architecture design and implementation",
        "Apache Camel integration patterns development",
        "Docker deployment automation setup",
        "24/7 production monitoring and support delivery"
      ]
    },
    {
      title: "EIP Billing Automation System",
      company: "EIP - IT Application Engineer",
      period: "Aug 2012 - Aug 2019",
      description: "Designed comprehensive billing automation for Equipment Installment Plan, enabling zero-interest mobile equipment financing with integrated payment processing.",
      technologies: ["Core Java", "Spring MVC", "Hibernate", "REST", "SOAP", "WebLogic"],
      icon: <Database className="text-primary-foreground" size={32} />,
      color: "bg-primary/60",
      achievements: [
        "Full SDLC implementation and management",
        "REST and SOAP web services integration",
        "WebLogic deployment optimization",
        "Performance tuning and monitoring implementation"
      ]
    }
  ];

  return (
    <section id="projects" className="section-spacing bg-accent/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="section-header animate-fade-in-up">
          <h2 className="text-balance">
            Enterprise <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Leading complex enterprise projects across financial services, healthcare, and fintech domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`executive-card overflow-hidden hover-lift animate-scale-in stagger-${index + 1} ${project.current ? 'ring-2 ring-primary/50' : ''}`}>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 ${project.color} rounded-2xl shadow-lg`}>
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.current && (
                      <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">
                        Current
                      </span>
                    )}
                    <ExternalLink className="text-muted-foreground hover:text-primary cursor-pointer transition-colors hover-lift" size={20} />
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-primary font-semibold">{project.company}</span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
