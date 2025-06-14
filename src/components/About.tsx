
import React from 'react';
import { GraduationCap, User, Award, Target } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2360a5fa' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                  <User className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white">Who I Am</h3>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Dynamic Lead Consultant with extensive experience excelling in Java development and microservices. 
                  Proven ability in performance tuning and agile methodologies, driving successful deployments and 
                  issue resolutions.
                </p>
                
                <p className="text-lg">
                  Adept at collaborating with cross-functional teams, leveraging strong problem-solving skills to 
                  enhance application efficiency and reliability. Passionate about delivering innovative solutions 
                  in fast-paced environments.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                  <div className="text-2xl font-bold text-cyan-400">12+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">100+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-cyan-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <div className="bg-gray-700/50 p-6 rounded-xl ml-4">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Master of Computer Applications
                    </h4>
                    <p className="text-cyan-400 font-medium mb-1">JNTUA, India</p>
                    <p className="text-gray-400">June 2013</p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                  <div className="bg-gray-700/50 p-6 rounded-xl ml-4">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Bachelor of Science in Computational Science
                    </h4>
                    <p className="text-blue-400 font-medium mb-1">SVU, India</p>
                    <p className="text-gray-400">June 2010</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-400/50 transition-all duration-300 text-center">
                <Award className="text-green-400 mx-auto mb-3" size={32} />
                <h4 className="text-white font-semibold mb-1">Excellence</h4>
                <p className="text-gray-400 text-sm">Committed to delivering high-quality solutions</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-400/50 transition-all duration-300 text-center">
                <Target className="text-purple-400 mx-auto mb-3" size={32} />
                <h4 className="text-white font-semibold mb-1">Innovation</h4>
                <p className="text-gray-400 text-sm">Always exploring cutting-edge technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
