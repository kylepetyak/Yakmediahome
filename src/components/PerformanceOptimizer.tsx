import { useEffect } from 'react';

export function PerformanceOptimizer() {
  useEffect(() => {
    // Track created elements for cleanup
    const createdElements: HTMLElement[] = [];

    // Preload critical resources
    const preloadCritical = () => {
      // Preload critical fonts (add your font URLs here)
      const criticalFonts = [
        // Example: '/fonts/your-font.woff2'
        // Add your critical font files here
      ];

      criticalFonts.forEach(fontUrl => {
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.as = 'font';
        fontLink.type = 'font/woff2';
        fontLink.crossOrigin = 'anonymous';
        fontLink.href = fontUrl;
        document.head.appendChild(fontLink);
        createdElements.push(fontLink);
      });

      // Preload critical images (you can add your key images here)
      const criticalImages = [
        // Add your critical above-the-fold images here
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
        createdElements.push(link);
      });
    };

    // Optimize images for better loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // Remove unused CSS (simplified version)
    const optimizeCSS = () => {
      // Add critical CSS optimizations here if needed
      document.documentElement.style.setProperty('--font-display', 'swap');
    };

    // Progressive enhancement for performance
    const enhancePerformance = () => {
      // Add performance hints
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection && connection.effectiveType === '4g') {
          // Preload more resources on fast connections
          document.documentElement.classList.add('fast-connection');
        }
      }

      // Optimize for reduced motion users
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduce-motion');
      }
    };

    // Run optimizations
    preloadCritical();
    optimizeImages();
    optimizeCSS();
    enhancePerformance();

    // Cleanup on unmount
    return () => {
      // Remove all created link elements
      createdElements.forEach(element => {
        if (element && element.parentNode) {
          try {
            element.parentNode.removeChild(element);
          } catch (err) {
            // Already removed, that's okay
          }
        }
      });

      // Remove added CSS properties
      document.documentElement.style.removeProperty('--font-display');

      // Remove added classes
      document.documentElement.classList.remove('fast-connection', 'reduce-motion');
    };
  }, []);

  return null; // This component doesn't render anything
}
