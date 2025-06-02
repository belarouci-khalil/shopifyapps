import React from 'react';
import Layout from '../components/layout/Layout';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Logo in top left */}
      <a href="/" className="absolute top-6 left-6 z-20">
        <img src="/auralogo.png" alt="Logo" className="h-14" />
      </a>
      {/* Split background */}
      <div className="absolute inset-0 w-full h-1/2 bg-[#19B5FE]" style={{zIndex:0}}></div>
      <div className="absolute inset-x-0 bottom-0 w-full h-1/2 bg-[#0A2236]" style={{zIndex:0}}></div>
      <div className="w-full flex flex-col items-center justify-center py-20 flex-grow relative z-10">
        <div className="bg-[#f5f5f5] rounded-3xl px-8 py-12 w-full max-w-2xl flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
            <span className="bg-lime-200 px-2 rounded">Shopify apps</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-10 mt-2">
            that get you ahead.
          </h2>
          <div className="flex flex-col space-y-6 w-full">
            <a
              href="#"
              className="border-2 border-black rounded-lg px-8 py-6 bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-transform hover:translate-y-1 hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)]"
            >
              <div className="text-xl font-bold text-center">Aura Ai Description</div>
              <div className="text-gray-500 text-center text-base mt-1">The Best Description Generator</div>
            </a>
            <a
              href="/blog"
              className="border-2 border-black rounded-lg px-8 py-6 bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-transform hover:translate-y-1 hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)]"
            >
              <div className="text-xl font-bold text-center">Blogs</div>
              <div className="text-gray-500 text-center text-base mt-1">Tips, trends & tactics</div>
            </a>
            <a
              href="#"
              className="border-2 border-black rounded-lg px-8 py-6 bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-transform hover:translate-y-1 hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)]"
            >
              <div className="text-xl font-bold text-center">About</div>
              <div className="text-gray-500 text-center text-base mt-1">Why we build for Shopify sellers</div>
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center pb-8 pt-8 relative bg-transparent z-10">
        <img src="/auralogo.png" alt="Aura Logo" className="h-10 mb-2" />
        <div className="text-white text-center font-medium mb-2">Elevate Your Store's Aura with AI</div>
        <a href="/privacy-policy" className="underline text-white hover:text-primary text-sm mb-2 text-center block">Privacy Policy</a>
        <div className="absolute left-4 bottom-2 text-white text-xs">© 2025 AurApps®. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default HomePage; 