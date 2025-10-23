export function StrategyHero() {
  return (
    <section className="relative h-[80vh] bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
      
      {/* Overlay content */}
      <div className="relative z-10 text-center text-white px-6">
        <div className="text-lg md:text-xl text-blue-400 font-medium mb-4 tracking-wider">
          STRATEGY
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Plans built for today's attention.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
          We don't do theory for theory's sake—we create strategies that move people and drive growth.
        </p>
      </div>
      
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </section>
  );
}