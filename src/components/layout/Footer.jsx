import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import portfolioData from '../../config/portfolio.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-[#050505] border-t border-gray-200 dark:border-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
              {portfolioData.hero.name.split(' ')[0]}<span className="text-portfolio-accent">.dev</span>
            </span>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm max-w-md">
              Building resilient, maintainable, and scalable digital experiences.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-accent transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-accent transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href={`mailto:${portfolioData.social.email}`} className="text-gray-400 hover:text-portfolio-accent transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            &copy; {currentYear} {portfolioData.hero.name}. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2 md:mt-0 flex items-center">
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
