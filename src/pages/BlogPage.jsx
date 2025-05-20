import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const categories = [
  "All", "News & Updates", "Case Studies", "Apps & Tools", "Growth & Sales"
];

const blogPosts = [
  {
    id: 1,
    title: "Write Shopify Descriptions in Seconds: Your AI-Powered Guide",
    excerpt: "Boost your Shopify sales with AI-powered product descriptions that speak your customer's language—crafted in seconds, optimized for conversion.",
    image: "/blog1.png",
    category: "Marketing", 
  },
  // {
  //   id: 2,
  //   title: "5 Tips for Optimizing Your Shopify Product URLs for SEO",
  //   excerpt: "Learn how to create SEO-friendly links that improve your store's visibility and attract more organic traffic.",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
  //   date: "April 28, 2023",
  //   author: "Michael Chen",
  //   category: "SEO",
  //   readTime: "8 min read"
  // },
  // {
  //   id: 3,
  //   title: "Using A/B Testing with LinkLil to Optimize Your Shopify Marketing Campaigns",
  //   excerpt: "Explore how A/B testing your links can provide valuable insights to refine your marketing strategy for better results.",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //   date: "April 15, 2023",
  //   author: "Lisa Wong",
  //   category: "Analytics",
  //   readTime: "6 min read"
  // },
  // {
  //   id: 4,
  //   title: "The Ultimate Guide to Link Management for Shopify Stores",
  //   excerpt: "Everything you need to know about effective link management to streamline your operations and enhance customer experience.",
  //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //   date: "April 3, 2023",
  //   author: "Mark Williams",
  //   category: "E-commerce",
  //   readTime: "10 min read"
  // },
  // {
  //   id: 5,
  //   title: "How LinkLil Helped XYZ Brand Increase Their Click-Through Rate by 45%",
  //   excerpt: "A detailed case study on how a fashion brand leveraged LinkLil's features to significantly improve their marketing performance.",
  //   image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  //   date: "March 22, 2023",
  //   author: "Rachel Kim",
  //   category: "Case Studies",
  //   readTime: "7 min read"
  // },
  // {
  //   id: 6,
  //   title: "Tracking and Analyzing Customer Behavior Through Smart Links",
  //   excerpt: "Learn how to leverage LinkLil's analytics features to gain valuable insights into your customers' browsing and purchasing patterns.",
  //   image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //   date: "March 10, 2023",
  //   author: "Daniel Martinez",
  //   category: "Analytics",
  //   readTime: "9 min read"
  // },
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesCategory;
  });

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            The Latest from Our Team
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Explore insights, feature highlights, and updates designed to boost your Shopify store with AurApps.
            </p>
          </div>
          {/* Category Tabs */}
          <div className="flex justify-center gap-8 border-b mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`py-3 text-lg font-semibold transition-colors ${
                  activeCategory === category
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-8 pb-16">
            {filteredPosts.map((post, idx) => (
              <article
                key={post.id}
                className="rounded-2xl shadow overflow-hidden flex flex-col"
              >
                <Link to={`/blog/${post.id}`} className="block h-full flex flex-col">
                  {/* Top Section with Gradient, Title, and Image */}
                  <div className={`relative p-6 flex-grow flex flex-col justify-end h-60 ${
                    idx % 2 === 0
                      ? "bg-gradient-to-tr from-purple-600 to-blue-500"
                      : "bg-gradient-to-tr from-pink-500 to-yellow-400"
                  }`}>
                    {/* Background Image within the gradient div */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    {/* Content overlaying the gradient and image */}
                    <div className="relative z-10 text-white">
                      {/* Logo - Assuming it's needed here based on screenshot */}
                      {/* Add your logo component or image here if desired */}
                    </div>
                  </div>

                  {/* Bottom Section with Secondary Title, Excerpt, and Arrow */}
                  <div className="bg-white p-6 flex flex-col">
                    {/* Secondary Title (bold, black text) */}
                    <h4 className="text-xl font-bold text-black mb-2">{post.title}</h4>

                    <p className="text-gray-700 text-base pr-4 flex-grow mb-4">{post.excerpt}</p>

                    {/* Arrow Icon */}
                    <div className="flex justify-end">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage; 