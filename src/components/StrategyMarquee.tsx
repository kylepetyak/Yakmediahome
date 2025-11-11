export function StrategyMarquee() {
  return (
    <section className="bg-purple-600 py-12 overflow-hidden">
      <div className="relative flex">
        {/* First marquee track */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(12)].map((_, i) => (
            <span
              key={`first-${i}`}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mx-8"
            >
              Strategy That Ships. Built for Growth.
            </span>
          ))}
        </div>

        {/* Second marquee track (duplicate for seamless loop) */}
        <div className="flex animate-marquee whitespace-nowrap absolute top-0">
          {[...Array(12)].map((_, i) => (
            <span
              key={`second-${i}`}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mx-8"
            >
              Strategy That Ships. Built for Growth.
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
