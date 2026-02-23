import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
              {title}
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-portfolio-accent rounded"></div>
            </h2>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper;
