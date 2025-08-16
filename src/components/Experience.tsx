
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Lead Java Engineer",
      company: "Virtusa Corp",
      client: "Chase Bank",
      location: "Wilmington, DE",
      period: "Jul 2025 – Present",
      description: "Leading Java engineering initiatives for Chase's core banking systems, focusing on modernization with latest Java technologies, microservices architecture, and cloud-native solutions. Driving technical excellence across multiple development teams.",
      highlights: [
        "Java 21 & Spring Boot 3.x implementation",
        "Microservices architecture with Spring Cloud Gateway",
        "AWS native solutions (ECS, Lambda, RDS)",
        "Team leadership and technical mentoring",
        "Performance optimization and scalability",
        "CI/CD pipeline automation with Jenkins"
      ],
      color: "gradient-primary",
      current: true
    },
    {
      title: "Lead Consultant",
      company: "DE (Previous Role)",
      location: "Multiple Projects",
      period: "Oct 2021 – Jun 2025",
      description: "Led Java engineering initiatives for credit card products including CAM (Card Account Management), Card authorizations, Financial transactions, Lending, and Pricing. Specialized in production issue resolution, application monitoring, and cloud operations.",
      highlights: [
        "Production issue resolution and RCA documentation",
        "Dynatrace and Splunk monitoring expertise", 
        "PCF and Kubernetes operations (restart, restage, scaling)",
        "Control-M job management and automation",
        "SR/DR flip events and change management",
        "Custom PCF services creation (DB, GSLB, User services)"
      ],
      color: "gradient-secondary"
    },
    {
      title: "Full Stack Java Developer", 
      company: "GlaceEMR",
      location: "Chennai, IN",
      period: "Sep 2020 – Sep 2021",
      description: "Developed comprehensive ONC certified electronic medical records software with integrated patient portal, e-RX, lab interfaces, and HIPAA-compliant solutions. Implemented MVC architecture using Spring framework.",
      highlights: [
        "ONC certified EMR platform development",
        "Spring MVC architecture implementation",
        "JDBC database integration and DAO layer",
        "TibcoJaspersoft report generation",
        "HIPAA compliance and data security",
        "Agile development with daily standups"
      ],
      color: "gradient-accent"
    },
    {
      title: "Senior Java Developer",
      company: "BNP Paribas", 
      location: "Chennai, IN",
      period: "Aug 2019 – Aug 2020",
      description: "Developed microservices for ACETP fund transfer systems using Java, Spring Boot, and Apache Camel. Managed Docker deployments, Jenkins CI/CD, and provided 24/7 production support.",
      highlights: [
        "Microservices development (Java, Spring Boot, Apache Camel)",
        "Docker containerization and deployment",
        "Jenkins CI/CD pipeline management",
        "24/7 production support and monitoring",
        "Cross-team collaboration (Custody, Simulation, Exec)",
        "Agile Scrum methodology"
      ],
      color: "gradient-primary"
    },
    {
      title: "IT Application Engineer",
      company: "Equipment Installment Plan (EIP)",
      location: "Mumbai, IN", 
      period: "Aug 2012 – Aug 2019",
      description: "Led analysis, design, and development of EIP billing applications for zero-interest mobile equipment financing. Implemented Core Java solutions with Hibernate, Spring MVC, and integrated external systems.",
      highlights: [
        "Full SDLC participation and workflow design",
        "Spring MVC and Hibernate ORM implementation",
        "REST and SOAP web services integration",
        "WebLogic deployment and build scripts",
        "Production monitoring and issue resolution",
        "Code review and quality assurance"
      ],
      color: "gradient-secondary"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 gradient-secondary rounded-full opacity-10 animate-scale-in"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 gradient-primary rounded-full opacity-10 animate-scale-in stagger-2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            12+ years of enterprise software development and technical leadership
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent transform md:-translate-x-1/2 rounded-full animate-glow"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } animate-scale-in stagger-${index + 1}`}>
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 w-6 h-6 ${exp.color} rounded-full transform md:-translate-x-1/2 z-10 border-4 border-background shadow-2xl animate-glow`}></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="glass-card p-8 rounded-2xl shadow-2xl border hover-lift">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 ${exp.color} rounded-lg animate-glow`}>
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        {exp.current && (
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">Current</span>
                        )}
                      </div>
                    </div>
                    
                    <h4 className="text-primary font-semibold mb-2">
                      {exp.company}
                      {exp.client && <span className="text-muted-foreground"> (Client: {exp.client})</span>}
                    </h4>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-primary mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
