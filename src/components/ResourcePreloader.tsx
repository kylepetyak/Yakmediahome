import { useEffect } from 'react';

interface ResourcePreloaderProps {
  priority?: 'high' | 'medium' | 'low';
}

export function ResourcePreloader({ priority = 'medium' }: ResourcePreloaderProps) {
  useEffect(() => {
    // Track all created elements for cleanup
    const createdElements: HTMLElement[] = [];
    let observer: IntersectionObserver | null = null;
    let triggerElement: HTMLDivElement | null = null;

    // Preload critical resources based on priority
    const preloadResources = () => {
      if (priority === 'high') {
        // Preload critical above-the-fold resources
        const criticalResources = [
          // Add your most critical resources here (e.g., fonts, images)
          // Note: Tailwind CSS is bundled by Vite, no need for external CSS preload
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
          createdElements.push(link);
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
        observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              likelyPages.forEach(page => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = page;
                document.head.appendChild(link);
                createdElements.push(link);
              });
              if (observer) {
                observer.disconnect();
              }
            }
          });
        });

        // Start observing when user gets halfway down the page
        try {
          triggerElement = document.createElement('div');
          triggerElement.style.position = 'absolute';
          triggerElement.style.top = '50vh';
          triggerElement.style.height = '1px';
          triggerElement.style.width = '1px';
          triggerElement.style.opacity = '0';
          triggerElement.style.pointerEvents = 'none';
          document.body.appendChild(triggerElement);
          observer.observe(triggerElement);
        } catch (err) {
          // Silently fail if body not ready
          console.warn('ResourcePreloader: Could not attach trigger element', err);
        }
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
            createdElements.push(link);
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
        createdElements.push(link);
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

    // CLEANUP FUNCTION - Critical for navigation!
    return () => {
      // Disconnect observer
      if (observer) {
        observer.disconnect();
      }

      // Remove trigger element from body
      if (triggerElement && triggerElement.parentNode) {
        try {
          triggerElement.parentNode.removeChild(triggerElement);
        } catch (err) {
          // Already removed, that's okay
        }
      }

      // Remove all created link elements from head
      createdElements.forEach(element => {
        if (element && element.parentNode) {
          try {
            element.parentNode.removeChild(element);
          } catch (err) {
            // Already removed, that's okay
          }
        }
      });
    };

  }, [priority]);

  return null;
}
