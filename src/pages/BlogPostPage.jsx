import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BlogData from '../data/Blog.json';

// Create blog posts data from Blog.json
const blogPosts = [
  {
    id: 1,
    title: BlogData.title,
    subtitle: "Did you know that 93% of shoppers consider product descriptions crucial in their buying decisions? Yet most Shopify stores still use boring, generic copy that sends potential customers running to competitors.",
    excerpt: BlogData.sections[0].content,
    image: "/blog1.png", // Using existing image from public folder
    category: "Shopify Tips",
    content: `
      <div>
        ${BlogData.sections.map(section => `
          <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">${section.heading}</h2>
            <p class="mb-4">${section.content}</p>
            ${section.key_points ? `
              <ul class="list-disc pl-5 mb-4">
                ${section.key_points.map(point => `<li>${point}</li>`).join('')}
              </ul>
            ` : ''}
            ${section.example ? `
              <div class="bg-gray-100 p-4 rounded-lg mb-4">
                <p class="text-red-500 mb-2">❌ ${section.example.bad}</p>
                <p class="text-green-500">✅ ${section.example.good}</p>
              </div>
            ` : ''}
            ${section.ai_features ? `
              <div class="bg-blue-50 p-4 rounded-lg mb-4">
                <h3 class="font-semibold mb-2">AI Features:</h3>
                <ul class="list-disc pl-5">
                  ${section.ai_features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </section>
        `).join('')}
      </div>
    `
  }
];

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchPost = () => {
      setLoading(true);
      const foundPost = blogPosts.find(p => p.id === parseInt(id));
      
      // Simulate loading
      setTimeout(() => {
        setPost(foundPost);
        setLoading(false);
      }, 500);
    };
    
    fetchPost();
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 min-h-screen">
          <div className="flex justify-center items-center">
            <div className="animate-pulse space-y-8 w-full max-w-4xl">
              <div className="h-10 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-full"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
              Return to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Title and Subtitle */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">{post.title}</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{post.subtitle}</p>
          </div>

          {/* Main Image */}
          <div className="w-full h-72 md:h-96 relative overflow-hidden rounded-lg mb-10">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/1200x600?text=Blog+Image';
              }}
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;