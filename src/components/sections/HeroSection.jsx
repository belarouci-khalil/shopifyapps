import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-6 animate-fade-in-up">
            <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Shopify App
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              AI-Powered Product Descriptions for Your Shopify Store
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Beauvapps helps Shopify merchants create engaging, SEO-friendly product descriptions in seconds, saving time and boosting sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="https://apps.shopify.com/beauvapps-description-generator" 
                target="_blank"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors shadow-md"
              >
                Install on Shopify
              </Link>
              <Link 
                to="/demo" 
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:border-primary hover:text-primary transition-colors"
              >
                Watch Demo
              </Link>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-5 h-5 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>4.8/5 rating on Shopify App Store (100+ reviews)</span>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 opacity-30 blur-xl rounded-lg animate-pulse-slow"></div>
            <div className="relative bg-white p-2 rounded-lg shadow-xl">
              <img 
                src="/screenshot.png" 
                alt="Beauvapps Description Generator Dashboard" 
                className="rounded-md w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x400?text=Beauvapps+Dashboard';
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg transform rotate-12 shadow-lg">
              New!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 