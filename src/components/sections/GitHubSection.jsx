import React, { useEffect, useState } from 'react';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';
import portfolioData from '../../config/portfolio.json';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import Button from '../ui/Button';

const GitHubSection = () => {
  const { github } = portfolioData;
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you'd fetch from GitHub API.
    // For portfolio demo, we create mock data based on the config.
    // Replace this with actual fetch(`https://api.github.com/users/${github.username}/repos`) if needed.
    
    const mockRepos = github.pinnedRepos.map(repoName => ({
      id: repoName,
      name: repoName,
      description: `A sample description for ${repoName.replace(/-/g, ' ')}. It demonstrates clean architecture and best practices.`,
      html_url: `https://github.com/${github.username}/${repoName}`,
      stargazers_count: Math.floor(Math.random() * 100) + 10,
      forks_count: Math.floor(Math.random() * 30) + 5,
      language: ['TypeScript', 'Java', 'JavaScript', 'HTML'][Math.floor(Math.random() * 4)]
    }));

    setRepos(mockRepos);
    setLoading(false);
  }, [github.username, github.pinnedRepos]);

  return (
    <SectionWrapper id="github" title="Open Source & GitHub">
      <div className="mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          I actively contribute to open source and maintain several personal projects. Check out my pinned repositories below.
        </p>
        <a href={`https://github.com/${github.username}`} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            <Github className="w-5 h-5 mr-3" />
            Follow @{github.username}
          </Button>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading ? (
          [1, 2].map(i => (
             <div key={i} className="h-48 rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
          ))
        ) : (
          repos.map(repo => (
            <Card key={repo.id} className="p-6 flex flex-col h-full hover:border-portfolio-accent/50 group">
              <div className="flex justify-between items-start mb-4">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group-hover:text-portfolio-accent transition-colors">
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-portfolio-accent" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                    {repo.name}
                  </h3>
                </a>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-accent transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm">
                {repo.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-portfolio-accent"></span>
                  {repo.language || 'Unknown'}
                </div>
                <div className="flex items-center gap-1 hover:text-yellow-500 transition-colors">
                  <Star className="w-4 h-4" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                  <GitFork className="w-4 h-4" />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </SectionWrapper>
  );
};

export default GitHubSection;
