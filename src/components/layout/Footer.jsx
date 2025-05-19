import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-primary flex items-center">
              <img src="/logo192.png" alt="Logo" className="h-6 mr-2" />
              Beauvapps
            </Link>
            <p className="mt-4 text-gray-600 max-w-xs">
              Enhance your Shopify store with our AI-powered product description generator app.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/documentation" className="text-gray-600 hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="/guides" className="text-gray-600 hover:text-primary transition-colors">Guides</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Beauvapps. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://twitter.com/beauvapps" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="https://facebook.com/beauvapps" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              Facebook
            </a>
            <a href="https://linkedin.com/company/beauvapps" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 