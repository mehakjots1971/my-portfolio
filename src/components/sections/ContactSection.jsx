import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';
import portfolioData from '../../config/portfolio.json';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ContactSection = () => {
  const { social } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let's talk about your project
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm currently open for new opportunities or freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="p-4 flex items-center gap-4 border-none shadow-none bg-gray-50 dark:bg-portfolio-dark-card" hover={false}>
              <div className="w-12 h-12 rounded-full bg-portfolio-accent/10 flex items-center justify-center flex-shrink-0 text-portfolio-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email Me</p>
                <a href={`mailto:${social.email}`} className="text-lg font-semibold text-gray-900 dark:text-white hover:text-portfolio-accent transition-colors">
                  {social.email}
                </a>
              </div>
            </Card>
            
            {(social.phone || social.whatsapp) && (
              <Card className="p-4 flex items-center gap-4 border-none shadow-none bg-gray-50 dark:bg-portfolio-dark-card" hover={false}>
                <div className="w-12 h-12 rounded-full bg-portfolio-accent/10 flex items-center justify-center flex-shrink-0 text-portfolio-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Call/WhatsApp</p>
                  <a href={`tel:${social.phone || social.whatsapp}`} className="text-lg font-semibold text-gray-900 dark:text-white hover:text-portfolio-accent transition-colors">
                    {social.phone || social.whatsapp}
                  </a>
                </div>
              </Card>
            )}
            
            <Card className="p-4 flex items-center gap-4 border-none shadow-none bg-gray-50 dark:bg-portfolio-dark-card" hover={false}>
              <div className="w-12 h-12 rounded-full bg-portfolio-accent/10 flex items-center justify-center flex-shrink-0 text-portfolio-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Remote / Global
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <Card className="p-8" hover={false}>
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-sm">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent transition-shadow duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent transition-shadow duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent transition-shadow duration-300 resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" className="w-full py-4 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
        
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
