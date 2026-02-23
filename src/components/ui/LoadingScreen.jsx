import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-portfolio-light dark:bg-portfolio-dark transition-colors duration-300">
      <div className="w-full max-w-md px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto border-4 border-portfolio-accent border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Preparing Experience
        </motion.h2>
        
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full mt-6 overflow-hidden">
          <motion.div 
            className="h-full bg-portfolio-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm font-medium text-right">
          {Math.min(progress, 100)}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
