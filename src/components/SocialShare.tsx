/**
 * Social Share Buttons Component
 *
 * Allows readers to share blog posts on social media platforms.
 * Increases reach and drives organic traffic.
 */

import { Facebook, Twitter, Linkedin, Link, Mail } from 'lucide-react';
import { useState } from 'react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
  layout?: 'horizontal' | 'vertical';
}

export function SocialShare({
  url,
  title,
  description = '',
  className = '',
  layout = 'horizontal'
}: SocialShareProps) {

  const [copied, setCopied] = useState(false);

  const fullUrl = url.startsWith('http') ? url : `https://yak.media${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleShare = (platform: string, link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer,width=600,height=600');

    // Track share event (will work when GHL tracking is set up)
    if (typeof window !== 'undefined' && (window as any).leadConnectorSDK) {
      (window as any).leadConnectorSDK.trackEvent('social_share', {
        platform: platform,
        post_title: title,
        post_url: url
      });
    }
  };

  const buttonClass = layout === 'horizontal'
    ? 'flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105'
    : 'flex flex-col items-center justify-center gap-1 p-3 rounded-lg transition-all duration-200 hover:scale-105';

  return (
    <div className={`${className}`}>
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Share this article:</h3>

      <div className={`flex ${layout === 'horizontal' ? 'flex-wrap gap-3' : 'flex-col gap-2'}`}>

        {/* Twitter */}
        <button
          onClick={() => handleShare('Twitter', shareLinks.twitter)}
          className={`${buttonClass} bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white`}
          aria-label="Share on Twitter"
        >
          <Twitter className="w-5 h-5" />
          {layout === 'horizontal' && <span className="text-sm font-medium">Twitter</span>}
        </button>

        {/* LinkedIn */}
        <button
          onClick={() => handleShare('LinkedIn', shareLinks.linkedin)}
          className={`${buttonClass} bg-[#0A66C2] hover:bg-[#004182] text-white`}
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
          {layout === 'horizontal' && <span className="text-sm font-medium">LinkedIn</span>}
        </button>

        {/* Facebook */}
        <button
          onClick={() => handleShare('Facebook', shareLinks.facebook)}
          className={`${buttonClass} bg-[#1877F2] hover:bg-[#0c63d4] text-white`}
          aria-label="Share on Facebook"
        >
          <Facebook className="w-5 h-5" />
          {layout === 'horizontal' && <span className="text-sm font-medium">Facebook</span>}
        </button>

        {/* Email */}
        <a
          href={shareLinks.email}
          className={`${buttonClass} bg-gray-700 hover:bg-gray-800 text-white`}
          aria-label="Share via Email"
        >
          <Mail className="w-5 h-5" />
          {layout === 'horizontal' && <span className="text-sm font-medium">Email</span>}
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className={`${buttonClass} ${
            copied
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-orange-500 hover:bg-orange-600'
          } text-white`}
          aria-label="Copy link to clipboard"
        >
          <Link className="w-5 h-5" />
          {layout === 'horizontal' && (
            <span className="text-sm font-medium">
              {copied ? 'Copied!' : 'Copy Link'}
            </span>
          )}
        </button>

      </div>
    </div>
  );
}

/**
 * Sticky Social Share Component
 * Floats on the side of blog posts for easy access while reading
 */

export function StickySocialShare({ url, title, description }: SocialShareProps) {
  return (
    <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-10">
      <SocialShare
        url={url}
        title={title}
        description={description}
        layout="vertical"
        className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200"
      />
    </div>
  );
}
