import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Sample blog posts data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "How Short Links Can Increase Your Shopify Store's Conversion Rate",
    excerpt: "Discover how branded short links can significantly boost your store's conversion rates and improve customer experience.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    date: "May 12, 2023",
    author: "Sarah Johnson",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    category: "Marketing",
    readTime: "5 min read",
    content: `
      <p class="text-lg mb-4">In today's competitive e-commerce landscape, every click matters. Shopify store owners are constantly looking for ways to optimize their customer journey and increase conversion rates. One often overlooked yet highly effective strategy is the use of branded short links.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Why Short Links Matter for E-commerce</h2>
      
      <p class="mb-4">When sharing links across various marketing channels—whether it's social media, email campaigns, or SMS marketing—long, complex URLs can appear unprofessional and suspicious to customers. Short links offer several advantages:</p>
      
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>They're easier to remember and type</li>
        <li>They look cleaner in marketing materials</li>
        <li>They inspire more trust than lengthy URLs with random characters</li>
        <li>They save valuable space in character-limited platforms</li>
        <li>They can be branded to reinforce your store's identity</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">How LinkLil Boosts Conversion Rates</h2>
      
      <p class="mb-4">LinkLil provides Shopify store owners with powerful link management tools specifically designed to increase conversion rates:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">1. Custom Branded Domains</h3>
      <p class="mb-4">Instead of generic short URLs, use your own brand name in links (e.g., yourbrand.link/summer-sale). This reinforces brand recognition and increases click-through rates by up to 34% compared to generic short links.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">2. Smart Redirects</h3>
      <p class="mb-4">Direct users to different landing pages based on their device, location, or time of day. For example, mobile users can be sent to your mobile-optimized pages automatically, reducing bounce rates by creating a smoother user experience.</p>
      
      <div class="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-500">
        <h4 class="font-bold text-lg mb-2">Case Study Highlight:</h4>
        <p>Fashion retailer BeautifulYou implemented LinkLil's smart redirects in their email campaigns, resulting in a 28% increase in mobile conversions within the first month.</p>
      </div>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">3. Retargeting Pixels Integration</h3>
      <p class="mb-4">Embed retargeting pixels directly into your short links to capture valuable user data even before they land on your site. This expands your retargeting audience and improves ad effectiveness.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">4. A/B Testing Capabilities</h3>
      <p class="mb-4">Test different landing pages, offers, or messaging by splitting traffic between variations through a single short link. This enables continuous optimization of your conversion funnel.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Best Practices for Using Short Links in Your Shopify Store</h2>
      
      <p class="mb-4">To maximize the effectiveness of short links for your Shopify business:</p>
      
      <ol class="list-decimal list-inside space-y-2 mb-6">
        <li>Use consistent branding across all your short links</li>
        <li>Create memorable slugs for important marketing campaigns</li>
        <li>Track performance data to identify high-converting channels</li>
        <li>Include short links in offline marketing materials with QR codes</li>
        <li>Utilize UTM parameters to track campaign effectiveness</li>
      </ol>
      
      <p class="mb-4">By implementing these strategies with LinkLil's powerful link management platform, Shopify store owners can create a more streamlined, professional customer experience that naturally leads to higher conversion rates.</p>
      
      <div class="bg-gray-100 p-6 rounded-lg my-8">
        <h4 class="font-bold text-lg mb-2">Ready to boost your conversion rates?</h4>
        <p class="mb-4">Try LinkLil for your Shopify store and start seeing results within days.</p>
        <a href="https://apps.shopify.com/linklil" class="text-primary font-semibold hover:underline">Install LinkLil on Shopify →</a>
      </div>
    `
  },
  {
    id: 2,
    title: "5 Tips for Optimizing Your Shopify Product URLs for SEO",
    excerpt: "Learn how to create SEO-friendly links that improve your store's visibility and attract more organic traffic.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    date: "April 28, 2023",
    author: "Michael Chen",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    category: "SEO",
    readTime: "8 min read",
    content: `<p>Content for this blog post would go here...</p>`
  }
];

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [relatedPosts, setRelatedPosts] = React.useState([]);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchPost = () => {
      setLoading(true);
      const foundPost = blogPosts.find(p => p.id === parseInt(id));
      
      // Simulate loading
      setTimeout(() => {
        setPost(foundPost);
        
        // Find related posts (from the same category)
        if (foundPost) {
          const related = blogPosts
            .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
            .slice(0, 3);
          setRelatedPosts(related);
        }
        
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
            <div className="animate-pulse space-y-8 w-full max-w-3xl">
              <div className="h-10 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
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
        {/* Hero Section */}
        <div className="w-full h-72 md:h-96 relative overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/1200x600?text=Blog+Image';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-center max-w-4xl">{post.title}</h1>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 mt-10">
            {/* Main Content */}
            <div className="md:w-2/3">
              {/* Author and Meta Info */}
              <div className="flex items-center space-x-4 mb-8 border-b border-gray-200 pb-6">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-12 h-12 rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=random`;
                  }}
                />
                <div>
                  <h3 className="font-medium">{post.author}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="ml-auto flex space-x-2">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Shopify</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">E-commerce</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{post.category}</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Digital Marketing</span>
              </div>

              {/* Share Buttons */}
              <div className="mt-10 border-t border-gray-200 pt-6">
                <h3 className="font-semibold mb-4">Share this article</h3>
                <div className="flex space-x-3">
                  <button className="p-2 rounded-full bg-[#1DA1F2] text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-[#1877F2] text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-[#0A66C2] text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-gray-800 text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.799 7.835v3.081h5.113c-.204 1.323-1.537 3.875-5.113 3.875-3.078 0-5.592-2.551-5.592-5.693 0-3.142 2.514-5.694 5.592-5.694 1.751 0 2.923.747 3.596 1.391l2.45-2.357c-1.573-1.471-3.614-2.361-6.046-2.361-4.991 0-9.035 4.044-9.035 9.021s4.044 9.021 9.035 9.021c5.213 0 8.666-3.669 8.666-8.835 0-.593-.064-1.047-.141-1.5h-8.525z"></path>
                      <path d="M23.76 7.835h-2.481v-2.482h-2.482v2.481h-2.481v2.482h2.481v2.482h2.482v-2.482h2.481z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3 mt-10 md:mt-0">
              {/* Author Bio */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-semibold mb-4">About the Author</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={post.authorImage}
                    alt={post.author}
                    className="w-16 h-16 rounded-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=random`;
                    }}
                  />
                  <div>
                    <h4 className="font-medium">{post.author}</h4>
                    <p className="text-sm text-gray-500">Content Strategist</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Expert in e-commerce marketing strategies with over 8 years of experience helping Shopify merchants grow their businesses.
                </p>
              </div>
              
              {/* Related Articles */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map(relatedPost => (
                      <Link 
                        key={relatedPost.id} 
                        to={`/blog/${relatedPost.id}`}
                        className="flex items-start space-x-4 group"
                      >
                        <div className="w-1/3">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-20 object-cover rounded"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://via.placeholder.com/100x100?text=Blog+Image';
                            }}
                          />
                        </div>
                        <div className="w-2/3">
                          <h4 className="font-medium group-hover:text-primary transition-colors">{relatedPost.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-gray-500">No related articles found</p>
                  )}
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest tips, insights and news about Shopify optimization delivered to your inbox.
                </p>
                <form className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button 
                    type="submit" 
                    className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage; 