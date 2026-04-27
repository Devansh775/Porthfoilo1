import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="w-full flex flex-col gap-8 min-h-[80vh] py-12">
      <div className="text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg"
        >
          Here are a few projects I've worked on recently.
        </motion.p>
      </div>

      <div className="w-full flex justify-center">
        <Card />
      </div>
    </div>
  );
};

export default About;