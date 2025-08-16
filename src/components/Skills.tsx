
import React from 'react';
import { Code, Cloud, Database, Server, Globe, Cpu, Zap, Shield } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-primary-foreground" size={32} />,
      category: "Latest Java Technologies",
      skills: [
        "Java 21 (LTS)", "Spring Boot 3.x", "Spring WebFlux", "Spring Security 6", 
        "Jakarta EE", "Project Loom", "Virtual Threads", "Pattern Matching", 
        "Records & Sealed Classes", "Reactive Programming", "GraalVM Native", "JUnit 5"
      ],
      color: "bg-primary",
      featured: true
    },
    {
      icon: <Cloud className="text-primary-foreground" size={32} />,
      category: "Cloud & DevOps",
      skills: [
        "AWS (ECS, Lambda, RDS)", "Kubernetes", "PCF (Pivotal Cloud Foundry)", 
        "Docker", "Jenkins", "GitHub Actions", "Terraform", "AWS CDK"
      ],
      color: "bg-primary/90"
    },
    {
      icon: <Server className="text-primary-foreground" size={32} />,
      category: "Microservices & Architecture",
      skills: [
        "Spring Cloud Gateway", "Service Mesh", "Event-Driven Architecture", 
        "CQRS", "Saga Pattern", "Circuit Breaker", "API Gateway", "Distributed Tracing"
      ],
      color: "bg-primary/80"
    },
    {
      icon: <Database className="text-primary-foreground" size={32} />,
      category: "Databases & Messaging",
      skills: [
        "PostgreSQL", "MongoDB", "Redis", "Cassandra", "Apache Kafka", 
        "RabbitMQ", "Amazon SQS", "Event Sourcing"
      ],
      color: "bg-primary/70"
    },
    {
      icon: <Globe className="text-primary-foreground" size={32} />,
      category: "Frontend & APIs",
      skills: [
        "React 18", "TypeScript", "Next.js", "REST APIs", "GraphQL", 
        "OpenAPI 3.0", "WebSocket", "Server-Sent Events"
      ],
      color: "bg-primary/60"
    },
    {
      icon: <Cpu className="text-primary-foreground" size={32} />,
      category: "SRE & Monitoring",
      skills: [
        "Dynatrace", "Splunk", "Prometheus", "Grafana", "ELK Stack", 
        "Control-M", "Performance Tuning", "Load Testing"
      ],
      color: "bg-primary/50"
    }
  ];

  return (
    <section id="skills" className="section-spacing bg-accent/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="section-header animate-fade-in-up">
          <h2 className="text-balance">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Latest Java technologies and enterprise solutions with 12+ years of hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`executive-card p-8 hover-lift animate-scale-in stagger-${index + 1} ${
                category.featured ? 'ring-2 ring-primary/50 lg:col-span-1 md:col-span-2' : ''
              }`}
            >
              <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                {category.icon}
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-bold text-foreground">
                  {category.category}
                </h3>
                {category.featured && (
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="grid gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-badge group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Highlights */}
        <div className="mt-20 animate-fade-in-up stagger-6">
          <div className="executive-card p-12 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Current Focus Areas</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-bold text-2xl">21</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Java 21 LTS</h4>
                <p className="text-muted-foreground">Latest features & performance optimizations</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-bold text-xl">3.x</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Spring Boot 3</h4>
                <p className="text-muted-foreground">Native compilation & GraalVM integration</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-primary-foreground" size={32} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Cloud Native</h4>
                <p className="text-muted-foreground">Kubernetes & microservices architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
