import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import portfolioData from '../../config/portfolio.json';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="flex flex-col h-full overflow-hidden" hover={false}>
      {/* Project Image */}
      <div className="h-48 md:h-64 overflow-hidden relative group">
        <img 
          src={project.screenshot} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=800&q=80"; // Tech fallback
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-portfolio-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-portfolio-accent transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map(tech => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Expandable Details */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-sm font-medium text-portfolio-accent hover:text-portfolio-accent-hover transition-colors"
          >
            {isExpanded ? 'Hide Architecture Details' : 'View Architecture Details'}
            {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
          </button>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-2 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-1">Challenges Solved</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.challenges}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-1">Architecture</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.architecture}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Card>
  );
};

const ProjectsSection = () => {
  const { projects } = portfolioData;

  return (
    <SectionWrapper id="projects" title="Featured Work" className="bg-gray-50/50 dark:bg-[#080808]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
