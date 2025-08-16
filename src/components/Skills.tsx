
import React from 'react';
import { Code, Cloud, Database, Server, Globe, Cpu } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-white" size={32} />,
      category: "Latest Java Technologies",
      skills: [
        "Java 21 (LTS)", "Spring Boot 3.x", "Spring WebFlux", "Spring Security 6", 
        "Jakarta EE", "Project Loom", "Virtual Threads", "Pattern Matching", 
        "Records & Sealed Classes", "Reactive Programming", "GraalVM Native", "JUnit 5"
      ],
      color: "gradient-primary",
      featured: true
    },
    {
      icon: <Cloud className="text-white" size={32} />,
      category: "Cloud & DevOps",
      skills: [
        "AWS (ECS, Lambda, RDS)", "Kubernetes", "PCF (Pivotal Cloud Foundry)", 
        "Docker", "Jenkins", "GitHub Actions", "Terraform", "AWS CDK"
      ],
      color: "gradient-secondary"
    },
    {
      icon: <Server className="text-white" size={32} />,
      category: "Microservices & Architecture",
      skills: [
        "Spring Cloud Gateway", "Service Mesh", "Event-Driven Architecture", 
        "CQRS", "Saga Pattern", "Circuit Breaker", "API Gateway", "Distributed Tracing"
      ],
      color: "gradient-accent"
    },
    {
      icon: <Database className="text-white" size={32} />,
      category: "Databases & Messaging",
      skills: [
        "PostgreSQL", "MongoDB", "Redis", "Cassandra", "Apache Kafka", 
        "RabbitMQ", "Amazon SQS", "Event Sourcing"
      ],
      color: "gradient-primary"
    },
    {
      icon: <Globe className="text-white" size={32} />,
      category: "Frontend & APIs",
      skills: [
        "React 18", "TypeScript", "Next.js", "REST APIs", "GraphQL", 
        "OpenAPI 3.0", "WebSocket", "Server-Sent Events"
      ],
      color: "gradient-secondary"
    },
    {
      icon: <Cpu className="text-white" size={32} />,
      category: "SRE & Monitoring",
      skills: [
        "Dynatrace", "Splunk", "Prometheus", "Grafana", "ELK Stack", 
        "Control-M", "Performance Tuning", "Load Testing"
      ],
      color: "gradient-accent"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-36 h-36 gradient-primary rounded-full opacity-10 animate-scale-in"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 gradient-accent rounded-full opacity-10 animate-scale-in stagger-2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Latest Java technologies and enterprise solutions with 12+ years of hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-2xl p-8 shadow-2xl border hover-lift animate-scale-in stagger-${index + 1} ${
                category.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-primary/50' : ''
              }`}
            >
              <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6 animate-glow`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                {category.category}
                {category.featured && (
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">Featured</span>
                )}
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="px-3 py-2 text-sm rounded-lg glass-card border border-border hover:border-primary hover:text-primary transition-all duration-200 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Highlights */}
        <div className="mt-16 text-center animate-fade-in-up stagger-6">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">Current Focus Areas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">21</span>
                </div>
                <h4 className="font-semibold text-foreground">Java 21 LTS</h4>
                <p className="text-sm text-muted-foreground">Latest features & performance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">3.x</span>
                </div>
                <h4 className="font-semibold text-foreground">Spring Boot 3</h4>
                <p className="text-sm text-muted-foreground">Native compilation & GraalVM</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gradient-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">K8s</span>
                </div>
                <h4 className="font-semibold text-foreground">Cloud Native</h4>
                <p className="text-sm text-muted-foreground">Kubernetes & microservices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
