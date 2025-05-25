import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BlogData from '../data/Blog.json';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortBy, setSortBy] = React.useState("latest"); // latest, oldest

  // Get unique categories from blog posts
  const categories = ["All", ...new Set(BlogData.posts.map(post => post.category))];

  // Format text with bold markers
  const formatText = (text) => {
    if (!text) return '';
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  // Filter and sort posts
  const filteredPosts = BlogData.posts
    .filter(post => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch = searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.intro.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortBy === "latest" ? dateB - dateA : dateA - dateB;
    });

  // Calculate read time estimate
  const getReadTimeEstimate = (content) => {
    const wordsPerMinute = 200;
    let totalWords = 0;
    
    // Count words in sections
    content.sections?.forEach(section => {
      totalWords += (section.content?.split(' ').length || 0);
      totalWords += (section.secondary_content?.split(' ').length || 0);
      section.key_points?.forEach(point => {
        totalWords += point.split(' ').length;
      });
    });

    // Add words from intro
    totalWords += (content.intro?.split(' ').length || 0);

    const minutes = Math.ceil(totalWords / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              The Latest from Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore insights, feature highlights, and updates designed to boost your Shopify store with AurApps.
            </p>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-gray-600">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-8">
            {filteredPosts.map((post, idx) => (
              <article
                key={post.id}
                className="rounded-2xl overflow-hidden flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link to={`/blog/${post.id}`} className="block h-full flex flex-col">
                  {/* Gradient with Image */}
                  <div
                    className={`relative p-6 flex-grow flex flex-col justify-end h-64 ${
                      idx % 2 === 0
                        ? "bg-gradient-to-tr from-blue-600 to-purple-500"
                        : "bg-gradient-to-tr from-purple-600 to-pink-500"
                    }`}
                  >
                    <img
                      src={`/blog${post.id}.png`}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="relative z-10 text-white">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          <span>{post.date}</span>
                          <span className="mx-2">·</span>
                          <span>{getReadTimeEstimate(post)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="bg-white p-6 flex flex-col flex-grow">
                    <div className="mb-3 flex gap-2">
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                        {post.category}
                      </span>
                      {post.sections && (
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                          {post.sections.length} sections
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h4>
                    {post.subtitle && (
                      <p className="text-gray-600 text-sm mb-3">{post.subtitle}</p>
                    )}
                    <div 
                      className="text-gray-700 text-base pr-4 flex-grow mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: formatText(post.intro) }}
                    />
                    <div className="flex justify-between items-center text-blue-600">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        <span>Read article</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
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
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
