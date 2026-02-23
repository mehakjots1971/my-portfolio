import React from 'react';

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full bg-portfolio-accent/10 dark:bg-portfolio-accent/20 text-portfolio-accent-hover dark:text-portfolio-accent border border-portfolio-accent/20 transition-colors ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
