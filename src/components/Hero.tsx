
import React from 'react';
import { ArrowDown, Code2, Sparkles } from 'lucide-react';

export const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-6xl text-blue-400 animate-float" style={{ animationDelay: '0s' }}>{'<'}</div>
        <div className="absolute top-40 right-20 text-4xl text-cyan-400 animate-float" style={{ animationDelay: '1s' }}>{'{ }'}</div>
        <div className="absolute bottom-40 left-20 text-5xl text-blue-400 animate-float" style={{ animationDelay: '2s' }}>{'>'}</div>
        <div className="absolute bottom-20 right-10 text-3xl text-cyan-400 animate-float" style={{ animationDelay: '0.5s' }}>{'</>'}</div>
        <div className="absolute top-1/2 left-1/4 text-2xl text-indigo-400 animate-float" style={{ animationDelay: '1.5s' }}>{'[]'}</div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
        {/* Profile Image */}
        <div className="mb-12 animate-fade-in-up">
          <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
              <Code2 size={100} className="text-cyan-400 relative z-10" />
              <Sparkles className="absolute top-6 right-6 text-yellow-400 animate-pulse" size={20} />
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="text-white">Rajasekhar</span>
            <br />
            <span className="gradient-text">Pallala</span>
          </h1>

          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
            <h2 className="text-2xl md:text-4xl text-gray-300 font-light">
              Lead Java Developer
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
          </div>

          <p className="text-xl md:text-2xl text-cyan-400 mb-12 font-light tracking-wide">
            Innovative. Scalable. Reliable Java Solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollTo('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-medium text-lg"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Explore My Work</span>
              <Code2 className="group-hover:rotate-12 transition-transform duration-300" size={20} />
            </span>
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 font-medium text-lg backdrop-blur-sm"
          >
            Contact Me
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 rounded-full bg-blue-500/20 backdrop-blur-sm">
            <ArrowDown className="text-cyan-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};
