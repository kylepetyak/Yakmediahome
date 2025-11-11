export function MediaHero() {
  return (
    <section className="relative bg-gray-900 py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <div className="inline-block bg-blue-500/20 text-blue-400 text-sm font-bold px-6 py-2 rounded-full mb-8 border border-blue-500/30">
          MEDIA
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Performance-First Advertising for Local Businesses
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
          We don&apos;t just run ads—we build systems that grow your business.
        </p>

        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
          Yak Media helps small businesses turn attention into revenue with smart, full-funnel advertising across Meta, Google, YouTube, TikTok, and more.
        </p>

        <p className="text-lg md:text-xl text-white font-semibold max-w-4xl mx-auto leading-relaxed">
          Every dollar is tracked. Every ad is optimized. Every campaign is designed to bring in more leads, calls, and customers.
        </p>
      </div>

      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
}
