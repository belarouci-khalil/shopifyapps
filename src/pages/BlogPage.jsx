import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BlogData from '../data/Blog.json';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  // Create an array of blog posts from the Blog.json data
  const blogPosts = [
    {
      id: 1,
      title: BlogData.title,
      excerpt: BlogData.sections[0].content,
      image: "/blog1.png", // Using existing image from public folder
      category: "Shopify Tips",
      date: "June 15, 2023",
      author: "Marketing Team",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  const categories = ["All", "Shopify Tips", "Product Updates", "Case Studies"];

  const filteredPosts = blogPosts.filter(post => {
    return activeCategory === "All" || post.category === activeCategory;
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
                  {/* Gradient with Image */}
                  <div
                    className={`relative p-6 flex-grow flex flex-col justify-end h-60 ${
                      idx % 2 === 0
                        ? "bg-gradient-to-tr from-purple-600 to-blue-500"
                        : "bg-gradient-to-tr from-pink-500 to-yellow-400"
                    }`}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="relative z-10 text-white"></div>
                  </div>

                  {/* Text Content */}
                  <div className="bg-white p-6 flex flex-col">
                    <h4 className="text-xl font-bold text-black mb-2">{post.title}</h4>
                    <p className="text-gray-700 text-base pr-4 flex-grow mb-4">{post.excerpt}</p>
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
