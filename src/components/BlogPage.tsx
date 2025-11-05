import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Search, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { blogPosts, recentlyPublished } from './blogData';
import { optimizeImageUrl, calculateReadingTime } from './SEOHead';
import { NewsletterGHLForm } from './GHLForm';

const categories = ["B2B", "Blog", "Brand"];

interface BlogPageProps {
  onContactClick?: () => void;
  postSlug?: string;
}

export function BlogPage({ onContactClick, postSlug }: BlogPageProps) {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Get featured post (latest post)
  const featuredPost = blogPosts[0];
  const latestPosts = blogPosts.slice(1, 4); // Next 3 posts after featured

  return (
    <div className="min-h-screen bg-white">
      {/* Featured Post Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Featured Post Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded mb-4">
                <span>FEATURED POST</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {featuredPost.title}
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-4 mb-6 text-gray-400">
                <span className="text-sm">{featuredPost.date}</span>
                {featuredPost.content && (
                  <span className="flex items-center gap-1 text-sm">
                    <Clock className="w-4 h-4" />
                    {calculateReadingTime(featuredPost.content)} min read
                  </span>
                )}
              </div>

              <Button
                onClick={() => navigate(`/blog/${featuredPost.slug}`)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
              >
                Read Article
              </Button>
            </div>

            {/* Featured Post Image */}
            <div className="order-1 lg:order-2">
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => navigate(`/blog/${featuredPost.slug}`)}
              >
                <ImageWithFallback
                  src={optimizeImageUrl(featuredPost.image)}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Preview */}
      <section className="bg-gray-50 py-12 px-4 md:px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <ImageWithFallback
                    src={optimizeImageUrl(post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{post.date}</span>
                      {post.content && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {calculateReadingTime(post.content)} min
                        </span>
                      )}
                    </div>
                    <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded">
                      BLOG
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white py-8 px-4 md:px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Filter Posts</h2>

            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              {/* Month Filter */}
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Months</SelectItem>
                  <SelectItem value="january">January</SelectItem>
                  <SelectItem value="february">February</SelectItem>
                  <SelectItem value="march">March</SelectItem>
                </SelectContent>
              </Select>

              {/* Year Filter */}
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>

              <Button
                className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6"
                onClick={() => {
                  setSelectedMonth("");
                  setSelectedYear("");
                  setSearchQuery("");
                }}
              >
                FILTER
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">All Posts</h2>

          {/* Mobile: Stack vertically, Desktop: Side by side */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Posts Grid */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="aspect-video bg-gray-200 relative overflow-hidden">
                      <ImageWithFallback
                        src={optimizeImageUrl(post.image)}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-4 md:p-6">
                      <h3 className="text-sm md:text-base font-bold text-gray-900 mb-3 leading-tight">
                        {post.title}
                      </h3>

                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                          <span>{post.date}</span>
                          {post.content && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {calculateReadingTime(post.content)} min
                            </span>
                          )}
                        </div>
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                          BLOG
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar - Show on top on mobile, sticky on desktop */}
            <div className="w-full lg:w-80 order-1 lg:order-2 space-y-6 lg:space-y-8 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
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
                  {recentlyPublished.slice(0, 3).map((article, index) => {
                    // Find the full post by matching title
                    const fullPost = blogPosts.find(p => p.title === article.title);

                    return (
                      <div
                        key={index}
                        className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded -m-2"
                        onClick={() => fullPost && navigate(`/blog/${fullPost.slug}`)}
                      >
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={optimizeImageUrl(article.image)}
                            alt={article.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs md:text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                            {article.title}
                          </h4>
                          <p className="text-xs text-gray-600">{article.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Newsletter Signup with GHL Integration */}
              <NewsletterGHLForm formId="89KqVS7tZXeamuRy9uMm" />

              {/* Categories */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="flex flex-wrap lg:flex-col gap-2 lg:gap-0 lg:space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="text-orange-500 hover:text-orange-600 font-medium text-sm md:text-base px-3 py-1 lg:px-0 lg:py-0 bg-orange-50 lg:bg-transparent rounded lg:rounded-none"
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
