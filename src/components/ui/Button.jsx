import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 dark:focus:ring-offset-portfolio-dark";
  
  const variants = {
    primary: "bg-portfolio-accent hover:bg-portfolio-accent-hover text-white shadow-lg shadow-portfolio-accent/30 hover:shadow-glow-accent",
    secondary: "bg-gray-100 dark:bg-portfolio-dark-card text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 hover:border-portfolio-accent dark:hover:border-portfolio-accent",
    outline: "border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
