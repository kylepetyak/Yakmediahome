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
    return `${baseKeywords}, marketing blog, digital marketing insights, industry news, marketing trends`;
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

export const getBlogSchema = (title: string, description: string, publishDate: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Organization",
    "name": "Yak Media"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Yak Media",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yak.media/yak-media-logo.png"
    }
  },
  "datePublished": publishDate,
  "dateModified": publishDate
});

export const getLocalBusinessSchema = (city: string, state: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Yak Media - ${city} Marketing Agency`,
  "description": `Digital marketing agency serving ${city}, ${state}. Specializing in creative content, paid advertising, and strategic marketing solutions.`,
  "url": `https://yak.media/${city.toLowerCase()}`,
  "logo": "https://yak.media/yak-media-logo.png",
  "telephone": "+1-480-244-6470",
  "email": "legal@yak.media",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": city,
    "addressRegion": state,
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": city === "Phoenix" ? "33.4484" : "33.4484",
    "longitude": city === "Phoenix" ? "-112.0740" : "-112.0740"
  },
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
      "latitude": "33.4484",
      "longitude": "-112.0740"
    },
    "geoRadius": "50000"
  },
  "priceRange": "$",
  "openingHours": "Mo-Fr 09:00-17:00",
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
  ]
});