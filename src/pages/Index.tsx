
import React from 'react';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
