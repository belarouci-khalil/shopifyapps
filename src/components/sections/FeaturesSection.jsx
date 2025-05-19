import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles,
  Search, 
  BarChart3, 
  Layers, 
  Clock, 
  Globe 
} from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: "AI-Powered Descriptions",
    description: "Generate engaging, unique product descriptions with our advanced AI that captures your brand's voice and style."
  },
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: "SEO Optimization",
    description: "Get descriptions optimized for search engines with relevant keywords to help increase your product's visibility."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: "Performance Analytics",
    description: "Track how your product descriptions perform with detailed analytics to refine your approach."
  },
  {
    icon: <Layers className="w-10 h-10 text-primary" />,
    title: "Multiple Templates",
    description: "Choose from various description templates tailored for different product categories and marketing strategies."
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Bulk Generation",
    description: "Save time by generating descriptions for multiple products simultaneously with our batch processing tool."
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: "Multi-language Support",
    description: "Create descriptions in multiple languages to expand your reach to international customers."
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Powerful Features for Your Product Descriptions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up">
            Beauvapps provides everything you need to create compelling product descriptions that convert browsers into buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/features" 
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
          >
            Explore all features
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 