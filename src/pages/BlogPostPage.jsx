import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BlogData from '../data/Blog.json';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = BlogData.posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-4">Sorry, we couldn't find the blog post you're looking for.</p>
            <Link to="/blog" className="text-blue-600 hover:underline">
              Return to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Format text with bold markers
  const formatText = (text) => {
    if (!text) return '';
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500">·</span>
              <time className="text-gray-500">{post.date}</time>
              <span className="text-gray-500">·</span>
              <span className="text-gray-500">{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            {post.subtitle && (
              <p className="text-xl text-gray-600 mb-6">{post.subtitle}</p>
            )}
          </header>

          {/* Featured Image or Title Banner */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl md:text-4xl font-bold p-8 text-center">
              {post.title}
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div 
              className="text-lg text-gray-700 mb-12 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatText(post.intro) }}
            />

            {/* Sections */}
            {post.sections?.map((section, index) => (
              <section key={index} className="mb-12">
                {section.heading && (
                  <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                )}
                
                {section.content && (
                  <div 
                    className="text-gray-700 mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatText(section.content) }}
                  />
                )}

                {section.key_points && (
                  <ul className="list-none space-y-4 mb-6">
                    {section.key_points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span 
                          className="text-gray-700"
                          dangerouslySetInnerHTML={{ __html: formatText(point) }}
                        />
                      </li>
                    ))}
                  </ul>
                )}

                {section.secondary_content && (
                  <div 
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatText(section.secondary_content) }}
                  />
                )}

                {section.example && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
                    {section.example.title && (
                      <h4 className="font-bold text-lg mb-4">{section.example.title}</h4>
                    )}
                    {section.example.text && (
                      <p 
                        className="text-gray-700"
                        dangerouslySetInnerHTML={{ __html: formatText(section.example.text) }}
                      />
                    )}
                    {section.example.before && section.example.after && (
                      <div className="space-y-4 mt-4">
                        <div>
                          <div className="font-medium text-gray-700 mb-2">Before:</div>
                          <div className="bg-white p-4 rounded border border-gray-200">
                            {section.example.before}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-700 mb-2">After:</div>
                          <div className="bg-white p-4 rounded border border-gray-200">
                            {section.example.after}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </section>
            ))}

            {/* Call to Action */}
            {post.bonus && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 my-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{post.bonus.heading}</h3>
                <div 
                  className="text-gray-700 mb-6"
                  dangerouslySetInnerHTML={{ __html: formatText(post.bonus.content) }}
                />
                {post.bonus.features && (
                  <ul className="list-none space-y-3 mb-6">
                    {post.bonus.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {post.bonus.pricing && (
                  <div className="mt-8">
                    <p className="text-gray-700 mb-4">{post.bonus.pricing.intro}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {post.bonus.pricing.plans.map((plan, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                          <h4 className="font-bold text-lg mb-2">{plan.name}</h4>
                          <div className="text-2xl font-bold text-blue-600 mb-2">{plan.price}</div>
                          <div className="text-gray-600">{plan.descriptions}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {post.bonus.cta && (
                  <div className="mt-8 text-center">
                    <p className="text-lg font-medium text-gray-900">{post.bonus.cta}</p>
                  </div>
                )}
              </div>
            )}

            {/* Tags */}
            {post.tags && (
              <div className="border-t border-gray-200 pt-8 mt-12">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {post.related_posts && post.related_posts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {post.related_posts.map((relatedPostId) => {
                const relatedPost = BlogData.posts.find(p => p.id === relatedPostId);
                if (!relatedPost) return null;
                
                return (
                  <article key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <Link to={`/blog/${relatedPost.id}`} className="block">
                      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold p-4 text-center">
                        {relatedPost.title}
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2">{relatedPost.title}</h3>
                        <div 
                          className="text-gray-600 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: formatText(relatedPost.intro) }}
                        />
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPostPage; 