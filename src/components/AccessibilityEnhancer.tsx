import { useEffect } from 'react';

/**
 * AccessibilityEnhancer - A component that enhances accessibility across the application
 * This component handles global accessibility improvements and should be included in the root App
 */
export function AccessibilityEnhancer() {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg';
    skipLink.style.position = 'absolute';
    skipLink.style.left = '-9999px';
    skipLink.style.width = '1px';
    skipLink.style.height = '1px';
    skipLink.style.overflow = 'hidden';
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.position = 'fixed';
      skipLink.style.top = '16px';
      skipLink.style.left = '16px';
      skipLink.style.width = 'auto';
      skipLink.style.height = 'auto';
      skipLink.style.overflow = 'visible';
      skipLink.style.zIndex = '1000';
      skipLink.style.backgroundColor = '#2563eb';
      skipLink.style.color = 'white';
      skipLink.style.padding = '8px 16px';
      skipLink.style.borderRadius = '8px';
      skipLink.style.textDecoration = 'none';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.position = 'absolute';
      skipLink.style.left = '-9999px';
      skipLink.style.width = '1px';
      skipLink.style.height = '1px';
      skipLink.style.overflow = 'hidden';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark
    const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
    if (!mainContent) {
      const appContainer = document.getElementById('root');
      if (appContainer && !appContainer.querySelector('#main-content')) {
        const main = document.createElement('div');
        main.id = 'main-content';
        main.setAttribute('role', 'main');
        main.style.outline = 'none';
        
        // Wrap existing content
        while (appContainer.firstChild && appContainer.firstChild !== main) {
          main.appendChild(appContainer.firstChild);
        }
        appContainer.appendChild(main);
      }
    }
    
    // Enhance button accessibility for buttons without proper labels
    const enhanceButtons = () => {
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      
      buttons.forEach((button) => {
        const buttonElement = button as HTMLButtonElement;
        
        // Skip buttons that already have text content or proper labeling
        if (buttonElement.textContent?.trim() || 
            buttonElement.getAttribute('aria-label') || 
            buttonElement.getAttribute('aria-labelledby')) {
          return;
        }
        
        // Handle icon-only buttons
        const svg = buttonElement.querySelector('svg');
        const icon = buttonElement.querySelector('[class*="lucide"], [class*="icon"]');
        
        if (svg || icon) {
          // Try to determine button purpose from context
          const parentForm = buttonElement.closest('form');
          const isSubmit = buttonElement.type === 'submit' || buttonElement.getAttribute('type') === 'submit';
          const isMenu = buttonElement.closest('[role="navigation"]') || buttonElement.classList.contains('menu');
          
          if (isSubmit && parentForm) {
            buttonElement.setAttribute('aria-label', 'Submit form');
          } else if (isMenu) {
            buttonElement.setAttribute('aria-label', 'Toggle menu');
          } else if (svg && svg.querySelector('path[d*="M4 6h16"]')) {
            // Hamburger menu icon
            buttonElement.setAttribute('aria-label', 'Open menu');
          } else if (svg && svg.querySelector('path[d*="chevron"]')) {
            // Chevron icons
            const isLeft = svg.querySelector('path[d*="15 18l-6-6 6-6"]');
            const isRight = svg.querySelector('path[d*="9 18l6-6-6-6"]');
            if (isLeft) {
              buttonElement.setAttribute('aria-label', 'Previous');
            } else if (isRight) {
              buttonElement.setAttribute('aria-label', 'Next');
            }
          } else {
            // Generic fallback
            buttonElement.setAttribute('aria-label', 'Action button');
          }
        }
      });
    };
    
    // Initial enhancement
    enhanceButtons();
    
    // Re-enhance when DOM changes (for lazy loaded content)
    const observer = new MutationObserver(() => {
      enhanceButtons();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus outline styles for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
        
        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
        
        /* Hide outline for mouse users */
        button:focus:not(:focus-visible),
        a:focus:not(:focus-visible),
        input:focus:not(:focus-visible),
        select:focus:not(:focus-visible),
        textarea:focus:not(:focus-visible) {
          outline: none;
        }
      `;
      document.head.appendChild(style);
    };
    
    enhanceFocusManagement();
    
    // Cleanup function
    return () => {
      observer.disconnect();
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);
  
  return null; // This component doesn't render anything
}