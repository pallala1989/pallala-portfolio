import React from 'react';
import { ArrowDown, Star, Users, Award } from 'lucide-react';
export const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen bg-white relative overflow-hidden pt-20">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 gradient-orange rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 gradient-blue rounded-full opacity-10 animate-pulse-custom" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 gradient-green rounded-full opacity-10 animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 gradient-purple rounded-full opacity-10 animate-pulse-custom" style={{
        animationDelay: '0.5s'
      }}></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border-4 border-blue-200 rotate-45 animate-rotate-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-12 h-12 bg-orange-200 rounded-lg animate-pulse-custom" style={{
        animationDelay: '1.5s'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Hello, I'm</span>
                <br />
                <span className="text-gradient">Rajasekhar</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
                Lead Java Developer
              </h2>
              
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                Innovative software engineer specializing in scalable Java solutions, 
                microservices architecture, and cloud-native applications with 12+ years of experience.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">12+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">
              </div>
                <div className="text-sm text-gray-500">
              </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">
              </div>
                <div className="text-sm text-gray-500">
              </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo('projects')} className="px-8 py-4 gradient-blue text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium">
                View My Work
              </button>
              <button onClick={() => scrollTo('contact')} className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-in-up" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative">
              {/* Main Profile Circle */}
              <div className="w-80 h-80 mx-auto rounded-full gradient-blue p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white p-2 relative overflow-hidden">
                  <img src="https://i.postimg.cc/Vst9vkXF/raja-passphoto.png" alt="Rajasekhar Pallala" className="w-full h-full object-cover rounded-full" />
                  
                  {/* Floating Icons */}
                  <div className="absolute top-4 right-4 p-2 bg-orange-500 rounded-full animate-bounce">
                    <Star size={16} className="text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 p-2 bg-green-500 rounded-full animate-bounce" style={{
                  animationDelay: '0.5s'
                }}>
                    <Users size={16} className="text-white" />
                  </div>
                  <div className="absolute top-1/2 left-4 p-2 bg-purple-500 rounded-full animate-bounce" style={{
                  animationDelay: '1s'
                }}>
                    <Award size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 gradient-orange rounded-lg opacity-20 animate-pulse-custom"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 gradient-green rounded-full opacity-20 animate-float"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 rounded-full bg-blue-100">
            <ArrowDown className="text-blue-600" size={24} />
          </div>
        </div>
      </div>
    </section>;
};