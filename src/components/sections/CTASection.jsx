import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Ready to Transform Your Product Descriptions?
          </h2>
          <p className="text-lg text-white/90 mb-8 animate-fade-in-up">
            Join thousands of successful Shopify merchants who are using Beauvapps to create compelling product descriptions that drive sales.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up">
            <Link 
              to="https://apps.shopify.com/beauvapps-description-generator" 
              target="_blank"
              className="px-8 py-4 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors shadow-lg font-medium text-lg"
            >
              Install on Shopify
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border border-white text-white rounded-md hover:bg-white/10 transition-colors font-medium text-lg"
            >
              Contact Sales
            </Link>
          </div>
          
          <div className="mt-10 animate-fade-in-up">
            <p className="text-white/80 text-sm">No credit card required • Free plan available • Cancel anytime</p>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 h-16 -bottom-1 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)' }}></div>
    </section>
  );
};

export default CTASection; 