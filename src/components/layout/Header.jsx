<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center">
          <img src="/logo192.png" alt="Logo" className="h-8 mr-2" />
          Beauvapps
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/features" className="text-gray-600 hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link 
            to="https://apps.shopify.com/beauvapps-description-generator" 
            target="_blank"
            className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            Install Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link 
              to="https://apps.shopify.com/beauvapps-description-generator" 
              target="_blank"
              className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors inline-block"
            >
              Install Now
            </Link>
          </div>
        </div>
      )}
=======
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full bg-transparent backdrop-blur z-50">
      <div className="container mx-auto px-4 py-6 flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/auralogo.png" alt="Logo" className="h-14 mr-3" />
        </Link>
        <nav className="flex items-center space-x-8 ml-6 text-lg font-bold">
          <Link to="/apps" className="hover:text-blue-600 transition-colors">Apps</Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
        </nav>
      </div>
>>>>>>> ali
    </header>
  );
};

<<<<<<< HEAD
export default Header; 
=======
export default Header;
>>>>>>> ali
