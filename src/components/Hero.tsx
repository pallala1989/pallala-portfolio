
import React from 'react';
import { ArrowDown, Code } from 'lucide-react';

export const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl text-cyan-400">{'<'}</div>
        <div className="absolute top-40 right-20 text-4xl text-blue-400">{'{ }'}</div>
        <div className="absolute bottom-40 left-20 text-5xl text-cyan-400">{'>'}</div>
        <div className="absolute bottom-20 right-10 text-3xl text-blue-400">{'</>'}</div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <Code size={80} className="text-cyan-400" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-white">Rajasekhar</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Pallala
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fade-in">
          Lead Java Developer
        </h2>

        <p className="text-xl md:text-2xl text-cyan-400 mb-12 animate-fade-in">
          Innovative. Scalable. Reliable Java Solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button
            onClick={() => scrollTo('projects')}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Explore My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-cyan-400" size={32} />
        </div>
      </div>
    </section>
  );
};
