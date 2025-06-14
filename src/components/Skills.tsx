
import React from 'react';

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "SQL"],
      color: "gradient-blue"
    },
    {
      category: "Frameworks & Libraries", 
      skills: ["Spring Boot", "React", "Hibernate", "Apache Camel"],
      color: "gradient-orange"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "PCF", "Kubernetes", "Docker", "Jenkins"],
      color: "gradient-green"
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "Cassandra", "MongoDB", "Oracle"],
      color: "gradient-purple"
    },
    {
      category: "Monitoring & Tools",
      skills: ["Dynatrace", "Splunk", "JIRA", "Git", "Maven", "Gradle"],
      color: "gradient-blue"
    },
    {
      category: "Architecture & Patterns",
      skills: ["Microservices", "REST", "SOAP", "MVC", "Performance Tuning"],
      color: "gradient-orange"
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
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`glass-card rounded-2xl p-8 shadow-2xl border border-gray-700 hover-lift animate-fade-in-scale stagger-${index + 1}`}>
              <div className={`w-12 h-12 ${category.color} rounded-xl mb-6 animate-glow`}></div>
              <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 text-sm rounded-full glass-effect text-gray-300 border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
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
