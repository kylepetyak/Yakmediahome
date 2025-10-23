import { useEffect } from 'react';

export function PreloadResources() {
  useEffect(() => {
    // Preload critical images that are likely to be seen first
    const criticalImages = [
      // Add your hero/critical image URLs here if needed
      // Example: '/hero-image.jpg',
    ];

    criticalImages.forEach(src => {
      if (!document.querySelector(`link[href="${src}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      }
    });

    // Preload next likely routes
    const likelyRoutes = ['/services', '/blog', '/contact'];
    
    likelyRoutes.forEach(route => {
      if (!document.querySelector(`link[href="${route}"]`)) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      }
    });

    // Intersection Observer to preload images as they come into view
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src && !img.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.1
      });

      // Observe all lazy images after a short delay to ensure DOM is ready
      setTimeout(() => {
        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }, 100);
    }

    // Optimize existing images
    const existingImages = document.querySelectorAll('img:not([loading])');
    existingImages.forEach((img, index) => {
      const htmlImg = img as HTMLImageElement;
      // First few images load immediately (above fold)
      if (index < 3) {
        htmlImg.loading = 'eager';
        if ('fetchPriority' in htmlImg) {
          (htmlImg as any).fetchPriority = 'high';
        }
      } else {
        // Rest lazy load
        htmlImg.loading = 'lazy';
      }
    });

  }, []);

  return null;
}