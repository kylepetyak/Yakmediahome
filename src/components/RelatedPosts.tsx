import { ImageWithFallback } from "./figma/ImageWithFallback";
import { optimizeImageUrl, calculateReadingTime } from './SEOHead';
import { Clock } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  date: string;
  slug: string;
  image: string;
  excerpt: string;
  content?: string;
}

interface RelatedPostsProps {
  currentPost: Post;
  allPosts: Post[];
  onPostClick: (post: Post) => void;
  maxPosts?: number;
}

export function RelatedPosts({ currentPost, allPosts, onPostClick, maxPosts = 3 }: RelatedPostsProps) {
  // Simple algorithm: exclude current post and get the next most recent posts
  // In a real app, you'd match by tags, categories, or keywords
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPost.id)
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-16 px-6 -mx-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Related Articles
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onPostClick(post)}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <ImageWithFallback
                  src={optimizeImageUrl(post.image)}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.date}</span>
                  {post.content && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {calculateReadingTime(post.content)} min
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
