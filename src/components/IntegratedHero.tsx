export function IntegratedHero() {
  return (
    <section className="relative bg-gray-900 py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-orange-900/20 to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <div className="inline-block bg-gradient-to-r from-purple-500/20 to-orange-500/20 text-purple-300 text-sm font-bold px-6 py-2 rounded-full mb-8 border border-purple-500/30">
          INTEGRATED
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Full-Stack Marketing for Local Businesses
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
          Most agencies silo their work—creative lives in one department, ads in another, strategy somewhere else. By the time everything gets aligned, you've wasted weeks and dollars.
        </p>

        <p className="text-xl md:text-2xl text-white font-semibold max-w-4xl mx-auto leading-relaxed mb-4">
          We do it differently.
        </p>

        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Yak Media brings creative, ads, and strategy under one roof—so your content, campaigns, and execution all work together from day one. No silos. No miscommunication. Just integrated marketing that actually drives growth.
        </p>
      </div>

      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
}
