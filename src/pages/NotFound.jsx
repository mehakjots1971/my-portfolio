import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-portfolio-light dark:bg-portfolio-dark transition-colors duration-300">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-portfolio-accent/10 rounded-full blur-[100px] -z-10"></div>
        
        <div>
          <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-portfolio-accent to-blue-500 mb-4 drop-shadow-sm">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Page not found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          
          <Link to="/">
            <Button variant="primary">
              <Home className="w-5 h-5 mr-2" /> Back to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
