export function MediaHero() {
  return (
    <section className="relative h-[80vh] bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Video/Image placeholder background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
      
      {/* Overlay content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Media that performs.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Not vanity metrics. Not empty reach. Just growth.
        </p>
      </div>
      
      {/* Video overlay effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </section>
  );
}