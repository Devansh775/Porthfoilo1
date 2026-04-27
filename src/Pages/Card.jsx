import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Card = () => {
  const projects = [
    {
      title: 'To Do List',
      path: '/todo',
      desc: 'A simple and intuitive task management application.',
    },
    {
      title: 'Currency Converter',
      path: '/currency',
      desc: 'Real-time currency exchange rate conversion tool.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          variants={cardVariants}
          className="group flex flex-col bg-slate-900 border border-white/10 rounded-3xl p-8 hover:bg-slate-800 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2"
        >
          {/* Content Container */}
          <div className="flex flex-col flex-1">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
            <p className="text-slate-400 mb-8 flex-1 leading-relaxed">{project.desc}</p>
            
            <Link to={project.path} className="w-full mt-auto">
              <button className="w-full py-3 px-4 bg-white/5 hover:bg-blue-600 text-white border border-white/10 hover:border-blue-500 rounded-xl font-medium transition-all duration-300 active:scale-95">
                View Project
              </button>
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Card;
