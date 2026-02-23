import React from 'react';
import { Lightbulb } from 'lucide-react';
import portfolioData from '../../config/portfolio.json';
import SectionWrapper from '../ui/SectionWrapper';

const EngineeringSection = () => {
  const { engineering } = portfolioData;

  if (!engineering.show) return null;

  return (
    <SectionWrapper id="engineering" title="Engineering Philosophy">
      <div className="bg-gradient-to-br from-portfolio-accent/10 to-transparent dark:from-portfolio-accent/5 dark:to-transparent border border-portfolio-accent/20 dark:border-portfolio-accent/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-portfolio-accent/20 rounded-full blur-[50px] pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex-shrink-0 p-4 bg-white dark:bg-portfolio-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <Lightbulb className="w-12 h-12 text-portfolio-accent" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Building for Scale & Maintainability
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic border-l-4 border-portfolio-accent pl-6 py-2">
              "{engineering.philosophy}"
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EngineeringSection;
