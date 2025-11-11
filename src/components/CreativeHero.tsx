export function CreativeHero() {
  return (
    <section className="relative bg-gray-900 py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-gray-900 to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <div className="inline-block bg-orange-500/20 text-orange-400 text-sm font-bold px-6 py-2 rounded-full mb-8 border border-orange-500/30">
          CREATIVE
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Modern marketing starts with great social media content.
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
          But most small businesses don&apos;t have the time, team, or strategy to make it work.
        </p>

        <p className="text-xl md:text-2xl text-white font-semibold max-w-4xl mx-auto leading-relaxed mb-4">
          That&apos;s where we come in.
        </p>

        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Yak Media is a creative and advertising agency built for local businesses — restaurants, clinics, gyms, service pros, and small brands that want to grow fast without wasting money. We create scroll-stopping videos, photos, and ads that make people actually care about your business — and more importantly, take action.
        </p>
      </div>

      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
}
