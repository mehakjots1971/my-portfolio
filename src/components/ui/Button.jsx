import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 dark:focus:ring-offset-portfolio-dark font-sans tracking-wide text-sm uppercase";
  
  const variants = {
    primary: "bg-gradient-to-r from-portfolio-accent to-portfolio-secondary text-white shadow-lg shadow-portfolio-accent/30 hover:shadow-glow-accent hover:brightness-110 border border-transparent",
    secondary: "glass text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800/50 hover:border-portfolio-accent dark:hover:border-portfolio-accent shadow-sm",
    outline: "border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
