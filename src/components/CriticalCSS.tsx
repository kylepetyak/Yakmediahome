import { useEffect } from 'react';

// Critical CSS that should be inlined for immediate rendering
const criticalCSS = `
  /* Critical above-the-fold styles */
  .nav-critical {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    height: 80px;
  }
  
  .hero-critical {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .content-critical {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  /* Font loading optimization */
  .font-display-swap {
    font-display: swap;
  }
  
  /* Prevent layout shift */
  .aspect-ratio-16-9 {
    aspect-ratio: 16 / 9;
  }
  
  /* Critical loading states */
  .loading-skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  /* Optimize first paint */
  .first-paint-optimized {
    contain: layout style paint;
  }
`;

export function CriticalCSS() {
  useEffect(() => {
    // Inject critical CSS immediately
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);

    // Preconnect to external domains
    const preconnectDomains = [
      'https://images.unsplash.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup critical CSS if component unmounts
      const criticalStyle = document.querySelector('style[data-critical="true"]');
      if (criticalStyle) {
        criticalStyle.remove();
      }
    };
  }, []);

  return null;
}