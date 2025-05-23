import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "How AI-Generated Descriptions Can Boost Your Shopify Store's Conversion Rate",
    excerpt: "Discover how Beauvapps' AI-powered product descriptions can significantly improve your store's conversion rates and customer experience.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    date: "May 12, 2023",
    author: "Sarah Johnson",
    category: "Marketing"
  },
  {
    id: 2,
    title: "5 Tips for Optimizing Your Product Descriptions for SEO",
    excerpt: "Learn how to leverage AI-generated descriptions that are optimized for search engines to improve your Shopify store's visibility.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    date: "April 28, 2023",
    author: "Michael Chen",
    category: "SEO"
  },
  {
    id: 3,
    title: "Using AI to Create Compelling Product Stories That Sell",
    excerpt: "Explore how Beauvapps' description generator creates narratives that connect with customers and drive purchasing decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "April 15, 2023",
    author: "Lisa Wong",
    category: "Content Strategy"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Latest from Our Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up">
            Stay up to date with the latest trends, tips, and strategies for creating compelling product descriptions for your Shopify store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x200?text=Blog+Image';
                  }}
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-2 mb-2">
                  <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=random`} 
                    alt={post.author} 
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-700">{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors shadow-md inline-block"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 