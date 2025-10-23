// Minimal navigation for instant loading
export function MinimalNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-medium text-gray-900">
            Yak Media
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
              Blog
            </a>
            <a href="/contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact
            </a>
          </div>
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
            aria-label="Open mobile navigation menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
          <div className="flex flex-col space-y-3">
            <a href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
              Blog
            </a>
            <a href="/contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}