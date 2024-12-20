import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const AiHeader = () => {
  return (
    <motion.header
      className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md p-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <motion.div
          className="text-3xl font-extrabold tracking-wide"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          AI Tools
        </motion.div>
        <ul className="flex space-x-6 text-lg">
          {[
            { path: '/cartoon-selfie', label: 'Cartoon Selfie' },
            { path: '/face-cutout', label: 'Face Cutout' },
            { path: '/remove-background', label: 'Remove Background' },
          ].map((link, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.4, ease: 'easeOut' }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-300 px-3 py-2 rounded-md hover:bg-white hover:text-indigo-700 ${
                    isActive ? 'bg-white text-indigo-700' : 'text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default AiHeader;
