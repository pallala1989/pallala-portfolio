import React from 'react';
import { GraduationCap, User, Award, Target, Briefcase, Clock } from 'lucide-react';
export const About = () => {
  return <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 gradient-purple rounded-full opacity-5 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 gradient-blue rounded-full opacity-5 animate-pulse-custom"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 gradient-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 px-[32px] py-[20px]">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 gradient-blue rounded-xl">
                  <User className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Who I Am</h3>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Dynamic Lead Consultant with extensive experience excelling in Java development and microservices. 
                  Proven ability in performance tuning and agile methodologies, driving successful deployments and 
                  issue resolutions.
                </p>
                
                <p className="text-lg">Adept at collaborating with cross-functional teams, leveraging strong problem-solving skills to enhance application efficiency and reliability. Passionate about delivering innovative solutions i</p>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="p-3 gradient-orange rounded-lg w-fit mx-auto mb-3">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">12+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 py-[20px]">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-4 gradient-green rounded-xl">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 gradient-blue rounded-full"></div>
                  <div className="bg-gray-50 p-6 rounded-xl py-[5px]">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Master of Computer Applications
                    </h4>
                    <p className="text-blue-600 font-medium mb-1">JNTUA, India</p>
                    <p className="text-gray-500">June 2013</p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 gradient-blue rounded-full"></div>
                  <div className="bg-gray-50 p-6 rounded-xl py-[5px]">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Bachelor of Science in Computational Science
                    </h4>
                    <p className="text-blue-600 font-medium mb-1">SVU, India</p>
                    <p className="text-gray-500">June 2010</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="p-3 gradient-orange rounded-lg w-fit mx-auto mb-3">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="text-gray-900 font-semibold mb-1">Excellence</h4>
                <p className="text-gray-500 text-sm">Committed to delivering high-quality solutions</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="p-3 gradient-purple rounded-lg w-fit mx-auto mb-3">
                  <Target className="text-white" size={24} />
                </div>
                <h4 className="text-gray-900 font-semibold mb-1">Innovation</h4>
                <p className="text-gray-500 text-sm">Always exploring cutting-edge technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};