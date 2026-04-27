import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/about' },
  ];

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center justify-between px-6 py-3 rounded-full w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20">
        <div className="text-xl font-bold logo-text bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
          Devansh
        </div>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  location.pathname === link.path ? 'text-blue-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;