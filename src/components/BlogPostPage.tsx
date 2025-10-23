import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { blogPosts } from './blogData';

interface BlogPostPageProps {
  onContactClick?: () => void;
}

export function BlogPostPage({ onContactClick }: BlogPostPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      // Redirect to blog page if post not found
      navigate('/blog', { replace: true });
    }
  }, [post, navigate]);

  if (!post) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Post Detail */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => navigate('/blog')}
            className="text-blue-500 hover:text-blue-600 mb-8 flex items-center gap-2"
            aria-label="Go back to blog post list"
          >
            ← Back to Blog
          </button>
          
          <div className="mb-8">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded">
                BLOG
              </span>
              <span className="text-gray-600">{post.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>
          
          {post.content && (
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph: string, index: number) => {
                if (paragraph.trim() === '') return <br key={index} />;
                
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6">{paragraph.replace('## ', '')}</h2>;
                }
                
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
                }
                
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index} className="font-bold text-gray-900 mb-4">{paragraph.replace(/\*\*/g, '')}</p>;
                }
                
                if (paragraph.startsWith('- ')) {
                  return <li key={index} className="text-gray-700 mb-2 ml-6">{paragraph.replace('- ', '')}</li>;
                }
                
                // Handle the "let's talk" paragraph with button
                if (paragraph.includes("let's talk")) {
                  const beforeText = paragraph.substring(0, paragraph.indexOf("let's talk"));
                  const afterText = paragraph.substring(paragraph.indexOf("let's talk") + "let's talk".length);
                  
                  return (
                    <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                      {beforeText}
                      <Button 
                        onClick={onContactClick}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg ml-1 mr-1 inline-flex items-center"
                      >
                        let's talk
                      </Button>
                      {afterText}
                    </p>
                  );
                }
                
                if (paragraph.includes('**')) {
                  const parts = paragraph.split('**');
                  return (
                    <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                      {parts.map((part, partIndex) => 
                        partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part
                      )}
                    </p>
                  );
                }
                
                return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}