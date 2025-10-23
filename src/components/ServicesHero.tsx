interface ServicesHeroProps {
  serviceType: 'services' | 'creative' | 'media' | 'strategy' | 'integrated';
}

const serviceContent = {
  services: {
    headline: 'Scroll-Stopping Creative',
    subhead: 'Content people actually want to watch.'
  },
  creative: {
    headline: 'Scroll-Stopping Creative',
    subhead: 'Content people actually want to watch.'
  },
  media: {
    headline: 'Performance-Driven Media',
    subhead: 'Advertising that delivers measurable results.'
  },
  strategy: {
    headline: 'Data-Informed Strategy',
    subhead: 'Strategic insights that drive growth.'
  },
  integrated: {
    headline: 'Integrated Solutions',
    subhead: 'Full-funnel campaigns that work together.'
  }
};

export function ServicesHero({ serviceType }: ServicesHeroProps) {
  const content = serviceContent[serviceType];
  
  return (
    <section className="relative h-[80vh] bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Video placeholder background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
      
      {/* Overlay content */}
      <div className="relative z-10 text-center text-white px-6">
        <div className="text-sm font-bold text-blue-400 mb-4 tracking-wider">
          SERVICES
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          {content.headline}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          {content.subhead}
        </p>
      </div>
      
      {/* Video overlay effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </section>
  );
}