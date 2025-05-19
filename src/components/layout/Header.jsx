import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed w-full bg-transparent backdrop-blur z-50">
      <div className="container mx-auto px-4 py-6 flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/auralogo.png" alt="Logo" className="h-14 mr-3" style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(98%) saturate(747%) hue-rotate(170deg) brightness(102%) contrast(101%)' }} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
