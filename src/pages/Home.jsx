import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import EngineeringSection from '../components/sections/EngineeringSection';
import GitHubSection from '../components/sections/GitHubSection';
import ResumeSection from '../components/sections/ResumeSection';
import ContactSection from '../components/sections/ContactSection';
import portfolioData from '../config/portfolio.json';

const Home = () => {
  useEffect(() => {
    document.title = `${portfolioData.hero.name} | ${portfolioData.hero.title}`;
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-light dark:bg-portfolio-dark transition-colors duration-300 flex flex-col selection:bg-portfolio-accent/30 selection:text-portfolio-accent-hover dark:selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EngineeringSection />
        <GitHubSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
