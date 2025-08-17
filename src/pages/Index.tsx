
import React from 'react';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { NeuralBackground } from '@/components/NeuralBackground';
import { LinkedInBadge } from '@/components/LinkedInBadge';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <NeuralBackground />
      <Navigation />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <LinkedInBadge />
    </div>
  );
};

export default Index;
