
import React from 'react';

export const Skills = () => {
  const skillCategories = [
    {
      category: "Core Technologies",
      skills: ["Java", "Spring Boot", "Spring Cloud", "Microservices", "REST APIs", "SOAP"],
      color: "gradient-blue"
    },
    {
      category: "Cloud & DevOps", 
      skills: ["AWS", "PCF (Pivotal)", "Kubernetes", "Docker", "Jenkins", "Git"],
      color: "gradient-orange"
    },
    {
      category: "SRE & Monitoring",
      skills: ["Dynatrace", "Splunk", "Control-M", "Performance Tuning", "Issue Resolution"],
      color: "gradient-green"
    },
    {
      category: "Databases & Middleware",
      skills: ["PostgreSQL", "Oracle", "MySQL", "Cassandra", "Teradata", "RabbitMQ"],
      color: "gradient-purple"
    },
    {
      category: "Frontend & Frameworks",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "jQuery", "JSON"],
      color: "gradient-blue"
    },
    {
      category: "Tools & Methodologies",
      skills: ["JIRA", "Maven", "Gradle", "JUnit", "Mockito", "Agile Scrum"],
      color: "gradient-orange"
    },
    {
      category: "Enterprise Integration",
      skills: ["Apache Camel", "JMS", "Hibernate", "Log4J", "SLF4J", "WebSphere"],
      color: "gradient-green"
    },
    {
      category: "Infrastructure & OS",
      skills: ["Linux/Unix", "Windows", "Tomcat", "WebLogic", "PCF Operations"],
      color: "gradient-purple"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-36 h-36 gradient-purple rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 gradient-green rounded-full opacity-10 animate-pulse-custom"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive skill set spanning enterprise development, cloud operations, and team leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className={`glass-card rounded-2xl p-6 shadow-2xl border border-gray-700 hover-lift animate-fade-in-scale stagger-${(index % 6) + 1}`}>
              <div className={`w-12 h-12 ${category.color} rounded-xl mb-4 animate-glow`}></div>
              <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-2 py-1 text-xs rounded-full glass-effect text-gray-300 border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
