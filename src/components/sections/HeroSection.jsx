import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../../config/portfolio.json';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const HeroSection = () => {
  const { hero, social, resume } = portfolioData;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-portfolio-accent/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-portfolio-accent/10 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="text-portfolio-accent">{hero.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-300 mb-6">
                {hero.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                {hero.intro}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-10"
            >
              {hero.techBadges.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              {hero.buttons.projects && (
                <a href="#projects">
                  <Button variant="primary">
                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              )}
              {hero.buttons.resume && (
                <a href={resume.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Download className="mr-2 w-4 h-4" /> Resume
                  </Button>
                </a>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex items-center justify-center md:justify-start gap-6 text-gray-500 dark:text-gray-400"
            >
              {hero.buttons.github && (
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              )}
              {hero.buttons.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
              {hero.buttons.contact && (
                <a href="#contact" className="hover:text-portfolio-accent transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-sm md:max-w-md relative"
          >
            <div className="aspect-square rounded-full md:rounded-[2rem] overflow-hidden border-4 border-white dark:border-portfolio-dark-card shadow-2xl relative z-10">
              {/* Fallback image if asset is missing, using a placeholder logic or the config url */}
              <img 
                src={hero.profileImage} 
                alt={hero.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80";
                }}
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-accent to-blue-500 rounded-full md:rounded-[2rem] transform rotate-6 scale-105 -z-10 opacity-50 blur-sm"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
