interface CreativeClosingCTAProps {
  onContactClick?: () => void;
}

export function CreativeClosingCTA({ onContactClick }: CreativeClosingCTAProps) {
  return (
    <section id="cta" className="px-6 py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto rounded-3xl border border-gray-200 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to grow your business?</h2>
        <p className="mt-3 text-gray-700">
          Let&apos;s make content that actually drives results. Book a free strategy call and we&apos;ll show you how to turn local attention into revenue.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="/contact"
            onClick={(e) => {
              if (onContactClick) {
                e.preventDefault();
                onContactClick();
              }
            }}
            className="inline-flex items-center rounded-2xl px-6 py-3 text-white bg-gray-900 hover:bg-gray-800 transition-colors font-semibold"
          >
            Book Your Free Strategy Call
          </a>
          <a href="#creative" className="inline-flex items-center rounded-2xl px-6 py-3 border-2 border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors font-semibold">
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
