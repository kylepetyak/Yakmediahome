import { useEffect } from 'react';

interface ResourcePreloaderProps {
  priority?: 'high' | 'medium' | 'low';
}

export function ResourcePreloader({ priority = 'medium' }: ResourcePreloaderProps) {
  useEffect(() => {
    // Preload critical resources based on priority
    const preloadResources = () => {
      if (priority === 'high') {
        // Preload critical above-the-fold resources
        const criticalResources = [
          // Add your most critical resources here
          { href: '/styles/globals.css', as: 'style' },
        ];

        criticalResources.forEach(resource => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource.href;
          link.as = resource.as;
          if (resource.as === 'style') {
            link.onload = () => {
              // Convert preload to stylesheet once loaded
              link.rel = 'stylesheet';
            };
          }
          document.head.appendChild(link);
        });
      }

      // Preload next likely pages
      if (priority === 'medium') {
        const likelyPages = [
          '/services',
          '/contact',
          '/blog'
        ];

        // Use Intersection Observer to preload when user scrolls
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              likelyPages.forEach(page => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = page;
                document.head.appendChild(link);
              });
              observer.disconnect();
            }
          });
        });

        // Start observing when user gets halfway down the page
        const trigger = document.createElement('div');
        trigger.style.position = 'absolute';
        trigger.style.top = '50vh';
        trigger.style.height = '1px';
        trigger.style.width = '1px';
        trigger.style.opacity = '0';
        trigger.style.pointerEvents = 'none';
        document.body.appendChild(trigger);
        observer.observe(trigger);
      }

      // Optimize for Core Web Vitals
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Preload non-critical resources during idle time
          const nonCriticalResources = [
            // Add non-critical resources here
          ];

          nonCriticalResources.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = src;
            document.head.appendChild(link);
          });
        });
      }
    };

    // DNS prefetch for external domains
    const prefetchDNS = () => {
      const externalDomains = [
        '//images.unsplash.com',
        '//fonts.googleapis.com',
        '//www.googletagmanager.com'
      ];

      externalDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    preloadResources();
    prefetchDNS();

    // Service Worker registration for caching (if available)
    if ('serviceWorker' in navigator && priority === 'high') {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, but that's okay
      });
    }

  }, [priority]);

  return null;
}