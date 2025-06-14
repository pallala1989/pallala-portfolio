
import React from 'react';

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "SQL"],
      color: "cyan"
    },
    {
      category: "Frameworks & Libraries", 
      skills: ["Spring Boot", "React", "Hibernate", "Apache Camel"],
      color: "blue"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "PCF", "Kubernetes", "Docker", "Jenkins"],
      color: "indigo"
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "Cassandra", "MongoDB", "Oracle"],
      color: "purple"
    },
    {
      category: "Monitoring & Tools",
      skills: ["Dynatrace", "Splunk", "JIRA", "Git", "Maven", "Gradle"],
      color: "pink"
    },
    {
      category: "Architecture & Patterns",
      skills: ["Microservices", "REST", "SOAP", "MVC", "Performance Tuning"],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      cyan: "border-cyan-400 text-cyan-400 bg-cyan-400/10",
      blue: "border-blue-400 text-blue-400 bg-blue-400/10", 
      indigo: "border-indigo-400 text-indigo-400 bg-indigo-400/10",
      purple: "border-purple-400 text-purple-400 bg-purple-400/10",
      pink: "border-pink-400 text-pink-400 bg-pink-400/10",
      green: "border-green-400 text-green-400 bg-green-400/10"
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 hover:scale-105 ${getColorClasses(category.color)}`}
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
