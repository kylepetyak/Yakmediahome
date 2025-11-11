export function StrategyHero() {
  return (
    <section className="relative bg-gray-900 py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <div className="inline-block bg-purple-500/20 text-purple-400 text-sm font-bold px-6 py-2 rounded-full mb-8 border border-purple-500/30">
          STRATEGY
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Data-Driven Strategy That Turns Insights Into Action
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
          Most agencies sell &quot;strategy decks&quot; that sit on a shelf. We build plans that actually ship — rooted in how real customers behave, where they spend time online, and what makes them buy.
        </p>

        <p className="text-lg md:text-xl text-white font-semibold max-w-4xl mx-auto leading-relaxed">
          Our strategies are simple: understand your audience, create a clear roadmap, and execute relentlessly. Every plan is built to grow your business — not just look good in a presentation.
        </p>
      </div>

      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
}
