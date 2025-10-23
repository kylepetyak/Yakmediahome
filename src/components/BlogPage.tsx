import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { blogPosts, recentlyPublished } from './blogData';

const categories = ["B2B", "Blog", "Brand"];

interface BlogPageProps {
  onContactClick?: () => void;
  postSlug?: string;
}

export function BlogPage({ onContactClick, postSlug }: BlogPageProps) {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<any>(null);

  // Find post by slug if provided
  useEffect(() => {
    if (postSlug) {
      const post = blogPosts.find(p => p.slug === postSlug);
      setSelectedPost(post || null);
    }
  }, [postSlug]);

  // If a post is selected, show the blog post detail view
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        {/* Blog Post Detail */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setSelectedPost(null)}
              className="text-blue-500 hover:text-blue-600 mb-8 flex items-center gap-2"
              aria-label="Go back to blog post list"
            >
              ← Back to Blog
            </button>
            
            <div className="mb-8">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                <ImageWithFallback
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded">
                  BLOG
                </span>
                <span className="text-gray-600">{selectedPost.date}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {selectedPost.title}
              </h1>
              
              {selectedPost.excerpt && (
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {selectedPost.excerpt}
                </p>
              )}
            </div>
            
            {selectedPost.content && (
              <div className="prose prose-lg max-w-none">
                {selectedPost.content.split('\n').map((paragraph: string, index: number) => {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
            Blog
          </h1>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 md:gap-4">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-full sm:w-40 md:w-48 bg-transparent border-white text-white">
                <SelectValue placeholder="Select Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="january">January</SelectItem>
                <SelectItem value="february">February</SelectItem>
                <SelectItem value="march">March</SelectItem>
                <SelectItem value="april">April</SelectItem>
                <SelectItem value="may">May</SelectItem>
                <SelectItem value="june">June</SelectItem>
                <SelectItem value="july">July</SelectItem>
                <SelectItem value="august">August</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full sm:w-40 md:w-48 bg-transparent border-white text-white">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-2 w-full sm:w-auto">
              FILTER
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Stack vertically, Desktop: Side by side */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Posts Grid */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {blogPosts.map((post) => (
                  <article 
                    key={post.id} 
                    onClick={() => setSelectedPost(post)}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="aspect-video bg-gray-200 relative overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-4 md:p-6">
                      <h3 className="text-sm md:text-base font-bold text-gray-900 mb-3 leading-tight">
                        {post.title}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm text-gray-600">{post.date}</span>
                        <div className="flex space-x-2">
                          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                            BLOG
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar - Show on top on mobile, side on desktop */}
            <div className="w-full lg:w-80 order-1 lg:order-2 space-y-6 lg:space-y-8">
              {/* Search */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10"
                    aria-label="Search blog posts"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                </div>
              </div>

              {/* Recently Published */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Recently Published</h3>
                <div className="space-y-4">
                  {recentlyPublished.slice(0, 3).map((article, index) => (
                    <div key={index} className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded -m-2">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs md:text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        <p className="text-xs text-gray-600">{article.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="flex flex-wrap lg:flex-col gap-2 lg:gap-0 lg:space-y-2">
                  {categories.map((category) => (
                    <button 
                      key={category} 
                      className="text-blue-500 hover:text-blue-600 font-medium text-sm md:text-base px-3 py-1 lg:px-0 lg:py-0 bg-blue-50 lg:bg-transparent rounded lg:rounded-none"
                      aria-label={`Filter blog posts by ${category} category`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}