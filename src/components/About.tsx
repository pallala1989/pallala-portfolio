
import React from 'react';
import { GraduationCap, User } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="text-cyan-400" size={32} />
              <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              Dynamic Lead Consultant with extensive experience excelling in Java development and microservices. 
              Proven ability in performance tuning and agile methodologies, driving successful deployments and 
              issue resolutions.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              Adept at collaborating with cross-functional teams, leveraging strong problem-solving skills to 
              enhance application efficiency and reliability. Passionate about delivering innovative solutions 
              in fast-paced environments.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="text-cyan-400" size={32} />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-cyan-400">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Master of Computer Applications
                </h4>
                <p className="text-cyan-400 font-medium">JNTUA, India</p>
                <p className="text-gray-300">June 2013</p>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-blue-400">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Bachelor of Science in Computational Science
                </h4>
                <p className="text-blue-400 font-medium">SVU, India</p>
                <p className="text-gray-300">June 2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
