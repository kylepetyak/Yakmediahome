import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance monitoring
const startTime = performance.now();

// Create root and render immediately
const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional performance logging
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  window.addEventListener('load', () => {
    const loadTime = performance.now() - startTime;
    console.log('🚀 App loaded in:', loadTime.toFixed(2), 'ms');
    
    // Core Web Vitals monitoring
    setTimeout(() => {
      if (performance.getEntriesByType) {
        const paintEntries = performance.getEntriesByType('paint');
        paintEntries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            console.log('⚡ FCP:', entry.startTime.toFixed(2), 'ms');
          }
        });
      }
    }, 100);
  });
}