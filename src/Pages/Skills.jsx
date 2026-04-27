import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" />, color: 'hover:border-[#E34F26]/50 hover:shadow-[#E34F26]/20' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, color: 'hover:border-[#1572B6]/50 hover:shadow-[#1572B6]/20' },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" />, color: 'hover:border-[#F7DF1E]/50 hover:shadow-[#F7DF1E]/20' },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, color: 'hover:border-[#61DAFB]/50 hover:shadow-[#61DAFB]/20' },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, color: 'hover:border-[#339933]/50 hover:shadow-[#339933]/20' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, color: 'hover:border-[#06B6D4]/50 hover:shadow-[#06B6D4]/20' },
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-20 border-t border-white/5">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-slate-400">Technologies I work with to bring ideas to life.</p>
      </div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`flex flex-col items-center justify-center p-6 bg-white/5 border border-white/5 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${skill.color}`}
          >
            <div className="text-5xl mb-4">
              {skill.icon}
            </div>
            <span className="font-medium text-slate-300">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
