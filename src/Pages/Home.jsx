import React from 'react';
import Hero from './Hero';
import Skills from './Skills';

export const Home = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <Hero />
      <Skills />
    </div>
  );
};

export default Home;
