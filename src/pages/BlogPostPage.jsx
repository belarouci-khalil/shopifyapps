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

  const formatText = (text) => {
    if (!text) return '';
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  const renderList = (items) => {
    if (!items) return null;
    return (
      <ul className="list-disc pl-6 space-y-2 mb-4">
        {items.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: formatText(item) }} />
        ))}
      </ul>
    );
  };

  return (
    <Layout>
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <nav className="mb-4">
              <Link to="/blog" className="text-blue-600 hover:underline">
                ← Back to Blog
              </Link>
            </nav>
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
              {post.subtitle && (
                <p className="text-xl text-gray-600 mb-2">{post.subtitle}</p>
              )}
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-8">
              <span>{post.date}</span>
              <span className="mx-2">·</span>
              <span>{post.readTime}</span>
            </div>
            <div 
              className="text-lg mb-8"
              dangerouslySetInnerHTML={{ __html: formatText(post.intro) }}
            />
          </header>

          {/* Main Content */}
          <div className="prose max-w-none">
            {post.sections?.map((section, index) => (
              <section key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                
                {section.content && (
                  <p className="mb-4" dangerouslySetInnerHTML={{ __html: formatText(section.content) }} />
                )}

                {section.secondary_content && (
                  <p className="mb-4" dangerouslySetInnerHTML={{ __html: formatText(section.secondary_content) }} />
                )}

                {section.subheading && (
                  <h3 className="text-xl font-semibold mb-3">{section.subheading}</h3>
                )}

                {section.key_points && renderList(section.key_points)}

                {section.example && (
                  <div className="bg-gray-50 p-4 rounded mb-4">
                    {section.example.intro && (
                      <p className="mb-2">{section.example.intro}</p>
                    )}
                    {section.example.before && (
                      <>
                        <p className="font-medium mb-2">Before:</p>
                        <p className="mb-2">{section.example.before}</p>
                      </>
                    )}
                    {section.example.after && (
                      <>
                        <p className="font-medium mb-2">After:</p>
                        <p dangerouslySetInnerHTML={{ __html: formatText(section.example.after) }} />
                      </>
                    )}
                    {section.example.text && (
                      <p dangerouslySetInnerHTML={{ __html: formatText(section.example.text) }} />
                    )}
                  </div>
                )}

                {section.tip && (
                  <div className="mb-4">
                    <p className="italic" dangerouslySetInnerHTML={{ __html: formatText(section.tip) }} />
                  </div>
                )}

                {section.conclusion && (
                  <p className="mb-4" dangerouslySetInnerHTML={{ __html: formatText(section.conclusion) }} />
                )}
              </section>
            ))}

            {/* Key Takeaways */}
            {post.key_takeaways && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
                {renderList(post.key_takeaways)}
              </section>
            )}

            {/* CTA */}
            {post.cta && (
              <div className="border-t pt-8 mt-8">
                <p className="text-lg" dangerouslySetInnerHTML={{ __html: formatText(post.cta) }} />
              </div>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage; 