import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
  schemaData?: any;
}

function getKeywordsForPath(path: string): string {
  const baseKeywords = "digital marketing agency, Phoenix marketing, Arizona advertising, creative services, media planning, strategy consulting, social media marketing, paid advertising, brand strategy, content creation";
  
  if (path.includes('/blog')) {
    return `${baseKeywords}, marketing agency blog, digital marketing tips, social media marketing tips, paid advertising strategies, tiktok marketing strategy, facebook ads tips, google ads optimization, creative advertising examples, marketing ROI, content marketing examples, B2B marketing strategies, performance marketing metrics`;
  }
  if (path.includes('/services')) {
    return `${baseKeywords}, marketing services, advertising services, creative agency, media agency`;
  }
  if (path.includes('/contact')) {
    return `${baseKeywords}, contact marketing agency, Phoenix marketing contact, hire marketing agency`;
  }
  if (path.includes('/phoenix')) {
    return `Phoenix marketing agency, Phoenix digital marketing, Phoenix advertising, Phoenix SEO, Phoenix social media marketing, Arizona marketing`;
  }
  if (path.includes('/scottsdale')) {
    return `Scottsdale marketing agency, Scottsdale digital marketing, Scottsdale advertising, luxury marketing Arizona`;
  }
  if (path.includes('/tempe')) {
    return `Tempe marketing agency, Tempe digital marketing, ASU marketing, university marketing Arizona`;
  }
  if (path.includes('/mesa')) {
    return `Mesa marketing agency, Mesa digital marketing, Mesa advertising, East Valley marketing Arizona`;
  }
  if (path.includes('/chandler')) {
    return `Chandler marketing agency, Chandler digital marketing, tech marketing Arizona, B2B marketing Chandler`;
  }
  if (path.includes('/gilbert')) {
    return `Gilbert marketing agency, Gilbert digital marketing, family business marketing Arizona`;
  }
  if (path.includes('/glendale')) {
    return `Glendale marketing agency, Glendale digital marketing, sports marketing Arizona, entertainment marketing`;
  }
  if (path.includes('content-creation')) {
    return `${baseKeywords}, content creation, video production, social media content, brand storytelling, creative content marketing`;
  }
  
  return baseKeywords;
}

export function SEOHead({ 
  title, 
  description, 
  path, 
  type = 'website', 
  image = '/yak-media-logo.png',
  schemaData 
}: SEOHeadProps) {
  const fullTitle = title === 'Yak Media' ? title : `${title} | Yak Media`;
  const url = `https://yak.media${path}`;
  
  useEffect(() => {
    // Critical SEO updates only
    document.title = fullTitle;
    updateMetaTag('description', description);
    
    // Defer non-critical SEO operations
    requestAnimationFrame(() => {
      // Open Graph tags
      updateMetaProperty('og:title', fullTitle);
      updateMetaProperty('og:description', description);
      updateMetaProperty('og:type', type);
      updateMetaProperty('og:url', url);
      updateMetaProperty('og:image', image);
      updateMetaProperty('og:site_name', 'Yak Media');
      
      // Twitter Card tags
      updateMetaName('twitter:card', 'summary_large_image');
      updateMetaName('twitter:title', fullTitle);
      updateMetaName('twitter:description', description);
      updateMetaName('twitter:image', image);
      
      // Additional SEO tags
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      updateMetaName('author', 'Yak Media');
      updateMetaName('theme-color', '#2563eb');
      
      // Add language and region tags
      updateMetaProperty('og:locale', 'en_US');
      updateMetaName('language', 'en');
      updateMetaName('geo.region', 'US-AZ');
      updateMetaName('geo.placename', 'Phoenix');
      updateMetaName('geo.position', '33.4484;-112.0740');
      updateMetaName('ICBM', '33.4484, -112.0740');
      
      // Add keywords
      const keywords = getKeywordsForPath(path);
      updateMetaName('keywords', keywords);
      
      // Add copyright and business info
      updateMetaName('copyright', 'Yak Media');
      updateMetaName('reply-to', 'legal@yak.media');
      updateMetaName('web_author', 'Yak Media');
      
      // Add additional Open Graph tags
      updateMetaProperty('og:locale:alternate', 'en_US');
      updateMetaProperty('fb:admins', 'YakMedia');
      
      // Add article tags for blog posts
      if (type === 'article') {
        updateMetaProperty('article:author', 'Yak Media');
        updateMetaProperty('article:section', 'Marketing');
        updateMetaProperty('article:tag', 'Digital Marketing, Strategy, Creative');
      }
      
      // Add resource hints for performance (deferred)
      setTimeout(() => {
        addResourceHints();
        
        // Ensure favicon is properly set
        updateFavicon();
        
        // Add schema.org structured data
        if (schemaData) {
          updateSchema(schemaData);
        }
        
        // Add canonical URL
        updateCanonical(url);
      }, 100);
    });
    
  }, [fullTitle, description, url, type, image, schemaData]);

  return null; // This component doesn't render anything
}

function updateMetaTag(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

function updateMetaProperty(property: string, content: string) {
  let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.content = content;
}

function updateMetaName(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

function updateCanonical(url: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }
  element.href = url;
}

function addResourceHints() {
  // Preconnect to external domains for faster loading
  const preconnectDomains = [
    'https://images.unsplash.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  preconnectDomains.forEach(domain => {
    if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  });

  // DNS prefetch for external resources
  const dnsPrefetchDomains = [
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com'
  ];

  dnsPrefetchDomains.forEach(domain => {
    if (!document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`)) {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    }
  });
}

function updateFavicon() {
  // Remove any existing favicons
  const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
  existingFavicons.forEach(favicon => {
    if (favicon.getAttribute('href')?.includes('vite.svg')) {
      favicon.remove();
    }
  });

  // Ensure Yak Media favicon is set
  if (!document.querySelector('link[rel="icon"][href="/favicon.svg"]')) {
    const svgFavicon = document.createElement('link');
    svgFavicon.rel = 'icon';
    svgFavicon.type = 'image/svg+xml';
    svgFavicon.href = '/favicon.svg';
    document.head.appendChild(svgFavicon);
  }

  if (!document.querySelector('link[rel="icon"][href="/favicon.ico"]')) {
    const icoFavicon = document.createElement('link');
    icoFavicon.rel = 'icon';
    icoFavicon.type = 'image/x-icon';
    icoFavicon.href = '/favicon.ico';
    document.head.appendChild(icoFavicon);
  }
}

function updateSchema(schemaData: any) {
  // Remove existing schema
  const existingSchema = document.querySelector('script[type="application/ld+json"]');
  if (existingSchema) {
    existingSchema.remove();
  }
  
  // Add new schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schemaData);
  document.head.appendChild(script);
}

// Helper Functions for SEO Optimization
export function convertToISODate(humanDate: string): string {
  // Convert "September 15, 2025" to "2025-09-15T09:00:00-07:00"
  const date = new Date(humanDate);
  if (isNaN(date.getTime())) {
    return new Date().toISOString();
  }
  return date.toISOString();
}

export function optimizeImageUrl(url: string): string {
  // Optimize Unsplash URLs for performance
  if (url.includes('images.unsplash.com')) {
    const hasParams = url.includes('?');
    const separator = hasParams ? '&' : '?';
    return `${url}${separator}w=1200&h=630&q=75&auto=format&fit=crop`;
  }
  return url;
}

export function calculateReadingTime(content: string): number {
  // Average reading speed: 200 words per minute
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
}

export function getWordCount(content: string): number {
  return content.trim().split(/\s+/).length;
}

// Breadcrumb schema for blog posts
export const getBreadcrumbSchema = (postTitle: string, postSlug: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://yak.media"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://yak.media/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": postTitle,
      "item": `https://yak.media/blog/${postSlug}`
    }
  ]
});

// Pre-defined schema data for different page types
export const getCompanySchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Yak Media",
  "description": "Digital marketing agency specializing in creative, media, and strategy services",
  "url": "https://yak.media",
  "logo": "https://yak.media/yak-media-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-480-244-6470",
    "contactType": "customer service",
    "email": "legal@yak.media"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/company/18280816"
  ],
  "services": [
    "Digital Marketing",
    "Creative Services", 
    "Media Planning",
    "Strategic Consulting",
    "Social Media Marketing"
  ]
});

export const getServiceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Yak Media",
    "url": "https://yak.media"
  },
  "areaServed": "US",
  "serviceType": "Digital Marketing"
});

export const getBlogSchema = (title: string, description: string, publishDate: string, image?: string, wordCount?: number) => {
  // Convert human-readable date to ISO format
  const isoDate = convertToISODate(publishDate);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title.substring(0, 110), // Google truncates at 110 chars
    "description": description,
    "image": image ? [optimizeImageUrl(image)] : ["https://yak.media/yak-media-logo.png"],
    "datePublished": isoDate,
    "dateModified": isoDate,
    "author": {
      "@type": "Organization",
      "name": "Yak Media",
      "url": "https://yak.media"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Yak Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yak.media/yak-media-logo.png",
        "width": 600,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yak.media/blog/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
    },
    "keywords": "digital marketing, marketing agency, paid advertising, social media marketing, content creation, Phoenix marketing",
    "wordCount": wordCount || 1500,
    "inLanguage": "en-US",
    "articleSection": "Marketing",
    "about": {
      "@type": "Thing",
      "name": "Digital Marketing"
    }
  };
};

export const getLocalBusinessSchema = (city: string, state: string, geoCoordinates?: { latitude: string; longitude: string }) => {
  // City-specific coordinates
  const coords = geoCoordinates || {
    latitude: city === "Phoenix" ? "33.4484" :
              city === "Scottsdale" ? "33.4942" :
              city === "Tempe" ? "33.4255" :
              city === "Mesa" ? "33.4152" :
              city === "Chandler" ? "33.3062" :
              city === "Gilbert" ? "33.3528" :
              city === "Glendale" ? "33.5387" : "33.4484",
    longitude: city === "Phoenix" ? "-112.0740" :
               city === "Scottsdale" ? "-111.9261" :
               city === "Tempe" ? "-111.9400" :
               city === "Mesa" ? "-111.8315" :
               city === "Chandler" ? "-111.8413" :
               city === "Gilbert" ? "-111.7890" :
               city === "Glendale" ? "-112.1860" : "-112.0740"
  };

  return {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MarketingAgency", "AdvertisingAgency"],
  "name": `Yak Media - ${city} Marketing Agency`,
  "description": `Top-rated digital marketing agency serving ${city}, ${state}. Specializing in creative content, paid advertising, social media marketing, and strategic marketing solutions for local businesses.`,
  "url": `https://yak.media/${city.toLowerCase()}`,
  "logo": "https://yak.media/yak-media-logo.png",
  "image": "https://yak.media/yak-media-logo.png",
  "telephone": "+1-480-244-6470",
  "email": "kyle@yak.media",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": city,
    "addressRegion": state,
    "addressCountry": "US",
    "postalCode": city === "Phoenix" ? "85001" :
                   city === "Scottsdale" ? "85251" :
                   city === "Tempe" ? "85281" :
                   city === "Mesa" ? "85201" :
                   city === "Chandler" ? "85224" :
                   city === "Gilbert" ? "85233" :
                   city === "Glendale" ? "85301" : "85001"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": coords.latitude,
    "longitude": coords.longitude
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Martinez"
      },
      "reviewBody": "Yak Media transformed our digital presence completely. Their team understood our local market and created campaigns that actually drove customers through our doors."
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": state
      }
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": coords.latitude,
      "longitude": coords.longitude
    },
    "geoRadius": "80000"
  },
  "priceRange": "$$-$$$",
  "openingHours": "Mo-Fr 09:00-18:00",
  "paymentAccepted": "Cash, Credit Card, Debit Card, Wire Transfer",
  "currenciesAccepted": "USD",
  "sameAs": [
    "https://www.linkedin.com/company/18280816"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Digital Marketing Services",
        "description": "Creative content, paid advertising, and strategic marketing solutions"
      }
    },
    {
      "@type": "Offer", 
      "itemOffered": {
        "@type": "Service",
        "name": "Creative Services",
        "description": "Content creation, design, and brand development"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service", 
        "name": "Media Planning & Buying",
        "description": "Paid advertising across Meta, Google, LinkedIn, and TikTok"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Strategic Consulting",
        "description": "Marketing strategy and digital transformation consulting"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Marketing",
          "description": "Facebook, Instagram, TikTok, LinkedIn advertising"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Search Engine Marketing",
          "description": "Google Ads, Google Display, YouTube advertising"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Creation",
          "description": "Video production, photography, graphic design, copywriting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Strategy",
          "description": "Brand positioning, messaging, and market research"
        }
      }
    ]
  },
  "knowsAbout": [
    "Digital Marketing",
    "Social Media Advertising",
    "Content Marketing",
    "Brand Strategy",
    "Paid Advertising",
    "SEO",
    "Marketing Analytics",
    "Creative Services",
    "Video Production"
  ]
  };
};