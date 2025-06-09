import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
<<<<<<< HEAD

const categories = [
  "All", "Marketing", "SEO", "Analytics", "E-commerce", "Case Studies"
];

const blogPosts = [
  {
    id: 1,
    title: "How Short Links Can Increase Your Shopify Store's Conversion Rate",
    excerpt: "Discover how branded short links can significantly boost your store's conversion rates and improve customer experience.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    date: "May 12, 2023",
    author: "Sarah Johnson",
    category: "Marketing",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "5 Tips for Optimizing Your Shopify Product URLs for SEO",
    excerpt: "Learn how to create SEO-friendly links that improve your store's visibility and attract more organic traffic.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    date: "April 28, 2023",
    author: "Michael Chen",
    category: "SEO",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Using A/B Testing with LinkLil to Optimize Your Shopify Marketing Campaigns",
    excerpt: "Explore how A/B testing your links can provide valuable insights to refine your marketing strategy for better results.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "April 15, 2023",
    author: "Lisa Wong",
    category: "Analytics",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "The Ultimate Guide to Link Management for Shopify Stores",
    excerpt: "Everything you need to know about effective link management to streamline your operations and enhance customer experience.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "April 3, 2023",
    author: "Mark Williams",
    category: "E-commerce",
    readTime: "10 min read"
  },
  {
    id: 5,
    title: "How LinkLil Helped XYZ Brand Increase Their Click-Through Rate by 45%",
    excerpt: "A detailed case study on how a fashion brand leveraged LinkLil's features to significantly improve their marketing performance.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    date: "March 22, 2023",
    author: "Rachel Kim",
    category: "Case Studies",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Tracking and Analyzing Customer Behavior Through Smart Links",
    excerpt: "Learn how to leverage LinkLil's analytics features to gain valuable insights into your customers' browsing and purchasing patterns.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "March 10, 2023",
    author: "Daniel Martinez",
    category: "Analytics",
    readTime: "9 min read"
  },
];
=======
import BlogData from '../data/Blog.json';
>>>>>>> ali

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");
<<<<<<< HEAD

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Latest insights, tips, and strategies for optimizing your Shopify store with LinkLil.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category 
                        ? 'bg-primary text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
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
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=random`} 
                        alt={post.author} 
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-sm text-gray-700">{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-primary hover:text-primary-dark transition-colors flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
=======
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
>>>>>>> ali
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
<<<<<<< HEAD
              <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
=======
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
>>>>>>> ali
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

<<<<<<< HEAD
export default BlogPage; 
=======
export default BlogPage;
>>>>>>> ali
