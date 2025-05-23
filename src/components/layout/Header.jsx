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
    </header>
  );
};

export default Header;
