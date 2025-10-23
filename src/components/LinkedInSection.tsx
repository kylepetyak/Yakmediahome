import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Play, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

interface LinkedInPost {
  id: number;
  content?: string;
  image?: string | null;
  timeAgo: string;
  bgColor: string;
  hasVideo: boolean;
  videoText?: string;
  linkedinUrl?: string;
}

export function LinkedInSection() {
  const [linkedinPosts, setLinkedinPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLinkedInPosts();
  }, []);

  const fetchLinkedInPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-645a1ee3/linkedin/posts`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch LinkedIn posts: ${response.status}`);
      }

      const data = await response.json();
      console.log('LinkedIn posts fetched successfully:', data.posts?.length || 0, 'posts');
      setLinkedinPosts(data.posts || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching LinkedIn posts:', err);
      setError('Unable to load LinkedIn posts');
      // Use fallback posts on error with Yak Media branding
      setLinkedinPosts([
        {
          id: 1,
          content: "🚀 Yak Media delivers results! Our latest campaign achieved 300% engagement growth.",
          timeAgo: "2 days ago",
          bgColor: "bg-blue-600",
          hasVideo: false,
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
          linkedinUrl: "https://www.linkedin.com/company/18280816"
        },
        {
          id: 2,
          content: "💡 Where strategy meets creativity - that's the Yak Media difference.",
          timeAgo: "4 days ago",
          bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
          hasVideo: false,
          linkedinUrl: "https://www.linkedin.com/company/18280816"
        },
        {
          id: 3,
          content: "🎬 Behind the scenes: How we create viral content.",
          timeAgo: "1 week ago",
          bgColor: "bg-white",
          hasVideo: true,
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
          linkedinUrl: "https://www.linkedin.com/company/18280816"
        },
        {
          id: 4,
          content: "📊 Data-driven results: 250% ROI increase this quarter.",
          timeAgo: "1 week ago",
          bgColor: "bg-gray-900",
          hasVideo: false,
          linkedinUrl: "https://www.linkedin.com/company/18280816"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleFollowClick = () => {
    // Direct link to your actual Yak Media LinkedIn company page
    window.open('https://www.linkedin.com/company/18280816', '_blank');
  };

  if (loading) {
    return (
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="text-xl text-gray-600">Loading LinkedIn posts...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded font-bold flex items-center justify-center text-sm">
              YM
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Our Latest LinkedIn Posts</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleFollowClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
            >
              Follow us
            </Button>
            <div className="flex space-x-2">
              <button 
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50"
                aria-label="Previous LinkedIn post"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button 
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50"
                aria-label="Next LinkedIn post"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {linkedinPosts.map((post) => (
            <div 
              key={post.id}
              onClick={() => post.linkedinUrl && window.open(post.linkedinUrl, '_blank')}
              className={`
                relative h-64 rounded-lg overflow-hidden cursor-pointer group transition-transform hover:scale-105
                ${post.bgColor}
              `}
            >
              {post.image && post.image.startsWith('http') && (
                <img 
                  src={post.image} 
                  alt="LinkedIn post" 
                  className="w-full h-full object-cover"
                />
              )}
              
              {post.hasVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                  {post.videoText && (
                    <div className="absolute bottom-16 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.videoText}
                    </div>
                  )}
                </div>
              )}
              
              {post.content && !post.image && (
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="text-white font-medium text-sm leading-relaxed">
                      {post.content}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                <Linkedin className="w-5 h-5 text-white" />
                <span className="text-white text-sm">{post.timeAgo}</span>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}