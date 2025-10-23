import { blogPosts } from './blogData';

interface NewsInsightsSectionProps {
  onBlogClick?: () => void;
  onPostClick?: (postSlug: string) => void;
}

export function NewsInsightsSection({ onBlogClick, onPostClick }: NewsInsightsSectionProps) {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          From the Blog
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 5).map((article, index) => (
            <div 
              key={article.id}
              onClick={() => {
                if (onPostClick) {
                  // All posts go to their individual blog post page
                  onPostClick(article.slug);
                } else if (onBlogClick) {
                  // Fallback to blog page
                  onBlogClick();
                }
              }}
              className={`
                relative overflow-hidden rounded-lg cursor-pointer group transition-transform hover:scale-105
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                ${article.size === 'large' ? 'h-96 md:h-full' : article.size === 'medium' ? 'h-64' : 'h-48'}
                ${article.bgColor}
              `}
            >
              {/* Background Image */}
              {article.image && (
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover img-optimized"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(e) => {
                    // Hide the image if it fails to load, fallback to gradient background
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/10 transition-all">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className={`font-bold mb-2 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-lg'} drop-shadow-lg`}>
                    {article.title}
                  </h3>
                  <p className="text-gray-200 text-sm drop-shadow">
                    {article.date}
                  </p>
                </div>
              </div>
              
              {index === 0 && (
                <div className="absolute bottom-12 right-12 text-white">
                  <div className="text-6xl md:text-8xl font-bold opacity-20 drop-shadow-2xl">
                    YAK
                  </div>
                  <div className="text-4xl md:text-6xl font-bold bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                    BLOG
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}