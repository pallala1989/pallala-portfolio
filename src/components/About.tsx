
import React from 'react';
import { GraduationCap, User, Award, Target, Briefcase, Clock, Shield } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 gradient-purple rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 gradient-blue rounded-full opacity-10 animate-pulse-custom"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Professional <span className="text-gradient">Profile</span>
          </h2>
          <div className="w-24 h-1 gradient-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="glass-card rounded-2xl p-8 shadow-2xl border border-gray-700 hover-lift">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 gradient-blue rounded-xl animate-glow">
                  <User className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white">Summary</h3>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Dynamic Lead Consultant with extensive experience excelling in Java development and 
                  microservices. Proven ability in performance tuning and agile methodologies, driving 
                  successful deployments and issue resolutions.
                </p>
                
                <p className="text-lg">
                  Adept at collaborating with cross-functional teams, leveraging strong problem-solving 
                  skills to enhance application efficiency and reliability. Passionate about delivering 
                  innovative solutions in fast-paced environments.
                </p>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-6 shadow-2xl border border-gray-700 text-center hover-lift animate-fade-in-scale stagger-2">
                <div className="p-3 gradient-orange rounded-lg w-fit mx-auto mb-3 animate-glow">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-gradient-gold">12+</div>
                <div className="text-sm text-gray-400">Years Leading</div>
              </div>
              
              <div className="glass-card rounded-xl p-6 shadow-2xl border border-gray-700 text-center hover-lift animate-fade-in-scale stagger-3">
                <div className="p-3 gradient-green rounded-lg w-fit mx-auto mb-3 animate-glow">
                  <Shield className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-green-400">SRE</div>
                <div className="text-sm text-gray-400">Operations</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card rounded-2xl p-8 shadow-2xl border border-gray-700 hover-lift">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 gradient-purple rounded-xl animate-glow">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white">Certifications</h3>
              </div>
              
              <div className="glass-effect p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-white mb-2">
                  AWS Solutions Architect - Associate
                </h4>
                <p className="text-blue-400 font-medium mb-1">Amazon Web Services</p>
                <p className="text-gray-400">Cloud Architecture & Solutions</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Education */}
            <div className="glass-card rounded-2xl p-8 shadow-2xl border border-gray-700 hover-lift">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-4 gradient-green rounded-xl animate-glow">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-blue-400 animate-slide-in-right stagger-2">
                  <div className="absolute -left-2 top-0 w-4 h-4 gradient-blue rounded-full animate-pulse-custom"></div>
                  <div className="glass-effect p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Master of Computer Applications
                    </h4>
                    <p className="text-blue-400 font-medium mb-1">JNTUA, India</p>
                    <p className="text-gray-400">Computer Science • June 2013</p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-400 animate-slide-in-right stagger-3">
                  <div className="absolute -left-2 top-0 w-4 h-4 gradient-blue rounded-full animate-pulse-custom"></div>
                  <div className="glass-effect p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Bachelor of Science
                    </h4>
                    <p className="text-blue-400 font-medium mb-1">SVU, India</p>
                    <p className="text-gray-400">Computational Science • June 2010</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-6 shadow-2xl border border-gray-700 text-center hover-lift animate-fade-in-scale stagger-4">
                <div className="p-3 gradient-orange rounded-lg w-fit mx-auto mb-3 animate-glow">
                  <Target className="text-white" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-1">Innovation</h4>
                <p className="text-gray-400 text-sm">Driving cutting-edge solutions</p>
              </div>
              <div className="glass-card rounded-xl p-6 shadow-2xl border border-gray-700 text-center hover-lift animate-fade-in-scale stagger-5">
                <div className="p-3 gradient-purple rounded-lg w-fit mx-auto mb-3 animate-glow">
                  <Clock className="text-white" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-1">Reliability</h4>
                <p className="text-gray-400 text-sm">24/7 operational excellence</p>
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card rounded-2xl p-8 shadow-2xl border border-gray-700 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">English</span>
                  <span className="text-blue-400 font-medium">Full Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Telugu</span>
                  <span className="text-green-400 font-medium">Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
