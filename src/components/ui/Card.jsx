import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
        hover ? 'hover:shadow-glow-accent/20 hover:border-portfolio-accent/30 dark:hover:border-portfolio-accent/50' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
