
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Lead Consultant",
      company: "DE",
      period: "Oct 2021 – Present",
      description: "Lead engineer on credit card management systems, handling deployments, monitoring, and operational tasks using PCF, Kubernetes, Dynatrace, and Splunk.",
      color: "gradient-blue"
    },
    {
      title: "Full Stack Java Developer", 
      company: "GlaceEMR, Chennai",
      period: "Sep 2020 – Sep 2021",
      description: "Built and maintained EMR systems with Spring, JDBC, Jaspersoft, and MVC architecture.",
      color: "gradient-orange"
    },
    {
      title: "Senior Java Developer",
      company: "BNP Paribas, Chennai", 
      period: "Aug 2019 – Aug 2020",
      description: "Developed and deployed microservices with Java, Spring Boot, Docker, and Jenkins.",
      color: "gradient-green"
    },
    {
      title: "IT Application Engineer",
      company: "EIP, Mumbai",
      period: "Aug 2012 – Aug 2019", 
      description: "Developed EIP billing systems with Core Java, Hibernate, and REST/SOAP integration.",
      color: "gradient-purple"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 gradient-orange rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 gradient-blue rounded-full opacity-10 animate-pulse-custom"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 transform md:-translate-x-1/2 rounded-full animate-glow"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } animate-fade-in-scale stagger-${index + 1}`}>
                {/* Enhanced Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 w-6 h-6 ${exp.color} rounded-full transform md:-translate-x-1/2 z-10 border-4 border-gray-800 shadow-2xl animate-pulse-custom`}></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="glass-card p-8 rounded-2xl shadow-2xl border border-gray-700 hover-lift">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 ${exp.color} rounded-lg animate-glow`}>
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    </div>
                    
                    <h4 className="text-blue-400 font-semibold mb-3">{exp.company}</h4>
                    
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
