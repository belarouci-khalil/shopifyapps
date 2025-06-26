import React from 'react';
import Layout from '../components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        {/* Hero Section */}
        <div className="pt-20 pb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Aura
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-2">
              Empowering Shopify Merchants
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We're on a mission to help Shopify merchants create exceptional shopping experiences 
            through the power of AI-driven content.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Aura, we believe that every Shopify merchant deserves to have compelling 
                product descriptions that convert browsers into buyers. We've seen too many 
                great products fail to reach their potential due to generic, uninspiring copy.
              </p>
              <p className="text-lg text-gray-700">
                That's why we've built an AI-powered platform that understands your brand voice, 
                speaks your customers' language, and creates product descriptions that drive sales. 
                We're not just building software – we're transforming how merchants connect with 
                their customers.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Impact by Numbers</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-purple-600">10,000+</p>
                  <p className="text-gray-600">Happy Merchants</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-purple-600">1M+</p>
                  <p className="text-gray-600">Descriptions Generated</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-purple-600">30%</p>
                  <p className="text-gray-600">Average Conversion Increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-20 w-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We're constantly pushing the boundaries of what's possible with AI to deliver 
                  better results for our merchants.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Success</h3>
                <p className="text-gray-600">
                  Your success is our success. We're dedicated to helping every merchant achieve 
                  their business goals.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust & Quality</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of quality and security in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Chen</h3>
              <p className="text-gray-600 mb-4">CEO & Co-founder</p>
              <p className="text-gray-600">
                Former Shopify merchant turned tech entrepreneur, passionate about empowering 
                e-commerce businesses.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Alex Rodriguez</h3>
              <p className="text-gray-600 mb-4">CTO & Co-founder</p>
              <p className="text-gray-600">
                AI researcher and engineer with a decade of experience in natural language processing.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maya Patel</h3>
              <p className="text-gray-600 mb-4">Head of Customer Success</p>
              <p className="text-gray-600">
                E-commerce veteran dedicated to helping merchants maximize their potential.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Want to Learn More?
            </h2>
            <p className="text-xl text-white mb-8">
              We'd love to hear from you and show you how Aura can transform your Shopify store.
            </p>
            <button className="py-4 px-8 bg-white text-purple-600 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage; 