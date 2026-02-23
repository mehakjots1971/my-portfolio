import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import portfolioData from '../../config/portfolio.json';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';

const ResumeSection = () => {
  const { resume } = portfolioData;

  return (
    <SectionWrapper id="resume" title="Resume" className="bg-gray-50/50 dark:bg-[#080808]">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-portfolio-dark-card border border-gray-100 dark:border-gray-800 rounded-3xl p-8 md:p-12 shadow-sm">
        
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-48 h-64 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex items-center justify-center relative overflow-hidden group">
            <FileText className="w-16 h-16 text-portfolio-accent/30 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <span className="text-white text-sm font-medium">CV Preview</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to see my full experience?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Download my complete resume to view my full work history, education, and professional certifications. Available in PDF format.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href={resume.url} download>
              <Button variant="primary">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
            </a>
            <a href={resume.url} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">
                <ExternalLink className="w-5 h-5 mr-2" />
                Open in Browser
              </Button>
            </a>
          </div>
        </div>
        
      </div>
    </SectionWrapper>
  );
};

export default ResumeSection;
