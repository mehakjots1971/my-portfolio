import React from 'react';
import portfolioData from '../../config/portfolio.json';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';

const SkillsSection = () => {
  const { skills } = portfolioData;
  
  const skillCategories = [
    { key: 'frontend', label: 'Frontend Development', icon: '🎨' },
    { key: 'backend', label: 'Backend Development', icon: '⚙️' },
    { key: 'database', label: 'Database & Caching', icon: '🗄️' },
    { key: 'advanced', label: 'Advanced Architecture', icon: '🚀' },
    { key: 'tools', label: 'Tools & DevOps', icon: '🛠️' }
  ];

  return (
    <SectionWrapper id="skills" title="Technical Arsenal">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          skills[category.key] && (
            <Card key={category.key} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                  {category.label}
                </h3>
              </div>
              <ul className="space-y-2">
                {skills[category.key].map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-portfolio-accent mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          )
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
