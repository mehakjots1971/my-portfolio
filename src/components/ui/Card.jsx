import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`bg-white dark:bg-portfolio-dark-card rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden transition-all duration-300 ${hover ? 'hover:shadow-xl hover:border-portfolio-accent/30 dark:hover:border-portfolio-accent/50' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
