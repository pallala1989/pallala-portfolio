
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Lead Consultant",
      company: "DE",
      period: "Oct 2021 – Present",
      description: "Lead engineer on credit card management systems, handling deployments, monitoring, and operational tasks using PCF, Kubernetes, Dynatrace, and Splunk.",
      color: "cyan"
    },
    {
      title: "Full Stack Java Developer", 
      company: "GlaceEMR, Chennai",
      period: "Sep 2020 – Sep 2021",
      description: "Built and maintained EMR systems with Spring, JDBC, Jaspersoft, and MVC architecture.",
      color: "blue"
    },
    {
      title: "Senior Java Developer",
      company: "BNP Paribas, Chennai", 
      period: "Aug 2019 – Aug 2020",
      description: "Developed and deployed microservices with Java, Spring Boot, Docker, and Jenkins.",
      color: "indigo"
    },
    {
      title: "IT Application Engineer",
      company: "EIP, Mumbai",
      period: "Aug 2012 – Aug 2019", 
      description: "Developed EIP billing systems with Core Java, Hibernate, and REST/SOAP integration.",
      color: "purple"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Professional <span className="text-cyan-400">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center space-x-2 mb-3">
                      <Briefcase className="text-cyan-400" size={20} />
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    </div>
                    
                    <h4 className="text-cyan-400 font-medium mb-2">{exp.company}</h4>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="text-gray-400" size={16} />
                      <span className="text-gray-400 text-sm">{exp.period}</span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
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
