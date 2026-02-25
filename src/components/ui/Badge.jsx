import React from 'react';

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`px-4 py-1.5 text-xs font-bold rounded-full bg-portfolio-tertiary/10 dark:bg-portfolio-tertiary/20 text-portfolio-tertiary border border-portfolio-tertiary/20 backdrop-blur-sm transition-colors uppercase tracking-wider ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
