import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full bg-transparent backdrop-blur z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/auralogo.png" alt="Logo" className="h-14 mr-3" />
        </Link>
        <nav className="flex items-center space-x-8 text-lg font-semibold">
          <Link to="/product" className="hover:text-purple-600 transition-colors">Product</Link>
          <Link to="/about" className="hover:text-purple-600 transition-colors">About</Link>
          <Link to="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
          <Link 
            to="/product" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
          >
            Try Free
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
