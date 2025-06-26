import React from 'react';
import Layout from '../components/layout/Layout';

const AuraAIDescription = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        {/* Hero Section */}
        <div className="pt-20 pb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your Shopify Product Descriptions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-2">
              With the Power of AI
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Create compelling, conversion-focused product descriptions in seconds. 
            Join over 10,000 successful Shopify stores using Aura AI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Customer-Focused Content
              </h3>
              <p className="text-gray-600">
                Our AI analyzes your customer data to create descriptions that speak directly 
                to your ideal buyers, using their language and addressing their needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Benefits-First Approach
              </h3>
              <p className="text-gray-600">
                Automatically transforms technical specifications into compelling benefits 
                that show customers how your products improve their lives.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                SEO Optimization
              </h3>
              <p className="text-gray-600">
                Built-in keyword research and natural integration helps your products 
                rank higher in search results while maintaining readability.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Scannable Format
              </h3>
              <p className="text-gray-600">
                Creates perfectly structured content with bullet points, short paragraphs, 
                and highlighted key points for maximum readability.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Multi-Language Support
              </h3>
              <p className="text-gray-600">
                Reach global customers with AI-powered descriptions in multiple languages, 
                maintaining your brand voice across markets.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Shopify Integration
              </h3>
              <p className="text-gray-600">
                Direct integration with your Shopify admin for seamless updates. 
                No copying and pasting required.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="border rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4">Basic</h3>
                <p className="text-4xl font-bold mb-6">$19<span className="text-lg text-gray-600">/month</span></p>
                <ul className="space-y-4 mb-8">
                  <li>✓ 50 descriptions per month</li>
                  <li>✓ Basic templates</li>
                  <li>✓ Shopify integration</li>
                </ul>
                <button className="w-full py-3 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Start Free Trial
                </button>
              </div>

              {/* Pro Plan */}
              <div className="border rounded-xl p-8 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4">Pro</h3>
                <p className="text-4xl font-bold mb-6">$49<span className="text-lg text-gray-600">/month</span></p>
                <ul className="space-y-4 mb-8">
                  <li>✓ 200 descriptions per month</li>
                  <li>✓ Advanced templates</li>
                  <li>✓ Multi-language support</li>
                  <li>✓ Priority support</li>
                </ul>
                <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="border rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                <p className="text-4xl font-bold mb-6">Custom</p>
                <ul className="space-y-4 mb-8">
                  <li>✓ Unlimited descriptions</li>
                  <li>✓ Custom templates</li>
                  <li>✓ API access</li>
                  <li>✓ Dedicated support</li>
                </ul>
                <button className="w-full py-3 px-6 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Transform Your Product Descriptions?
            </h2>
            <p className="text-xl text-white mb-8">
              Start your free trial today and get 5 AI-generated descriptions on us.
            </p>
            <button className="py-4 px-8 bg-white text-purple-600 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors">
              Install Aura AI Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuraAIDescription; 