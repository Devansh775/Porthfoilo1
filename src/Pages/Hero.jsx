import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import profileImg from './profile.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-12">
      {/* Left Text Content */}
      <motion.div 
        className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-2">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Available for work
          </span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold tracking-tight mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500">Devansh</span>
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-2xl lg:text-3xl text-slate-400 font-medium mb-6">
          Frontend Developer
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-slate-400 max-w-xl mb-10 text-lg leading-relaxed">
          I build exceptional and accessible digital experiences for the web. 
          Passionate about React, modern UI/UX design, and creating scalable frontend applications.
        </motion.p>

        {/* Actions */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com" icon={<FaGithub size={22} />} />
            <SocialLink href="https://linkedin.com" icon={<FaLinkedin size={22} />} />
            <SocialLink href="https://twitter.com" icon={<FaTwitter size={22} />} />
            <SocialLink href="mailto:[pateldevansh297@gmail.com]" icon={<FaEnvelope size={22} />} />
          </div>

          <div className="hidden sm:block w-px h-8 bg-slate-700"></div>

          {/* Resume Button */}
          <a 
            href="/Resume.pdf" 
            download="Devansh_Resume.pdf"
            className="group relative flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
          >
            <span>Download Resume</span>
            <FiDownload className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image Content */}
      <motion.div 
        className="flex-1 flex justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative w-72 h-72 lg:w-96 lg:h-96">
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
          {/* Image container */}
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
            <img 
              src={profileImg} 
              alt="Devansh" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 text-slate-400 transition-all rounded-full bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 hover:border-white/10"
  >
    {icon}
  </a>
);

export default Hero;
