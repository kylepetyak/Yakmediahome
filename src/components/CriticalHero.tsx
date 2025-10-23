// Ultra-minimal hero for instant loading
export function CriticalHero() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}
    >
      {/* Minimal navigation bar */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/10 backdrop-blur-sm"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white text-xl font-medium">Yak Media</div>
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="/services" className="text-white/90 hover:text-white transition-colors">Services</a>
            <a href="/blog" className="text-white/90 hover:text-white transition-colors">Blog</a>
            <a href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
          We're Your Partner
          <br />
          <span className="text-blue-200">For Growth</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Digital marketing agency specializing in creative, media, and strategy services. 
          We help brands navigate the digital landscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Get Started
          </a>
          <a 
            href="/services" 
            className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-medium border border-white/20"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Loading indicator for progressive enhancement */}
      <div 
        id="progressive-loading" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm"
      >
        <div className="flex items-center space-x-2">
          <div className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white/60 rounded-full"></div>
          <span>Loading interactive content...</span>
        </div>
      </div>
    </div>
  );
}