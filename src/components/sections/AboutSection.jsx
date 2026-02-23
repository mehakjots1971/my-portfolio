import React from 'react';
import portfolioData from '../../config/portfolio.json';
import SectionWrapper from '../ui/SectionWrapper';

const AboutSection = () => {
  const { about } = portfolioData;

  return (
    <SectionWrapper id="about" title="About Me" className="bg-gray-50/50 dark:bg-[#080808]">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-portfolio-dark-card p-6 md:p-10 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {about.content.split('\n').map((paragraph, idx) => (
            <p key={idx} className={idx > 0 ? "mt-6" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
