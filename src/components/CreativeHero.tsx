export function CreativeHero() {
  return (
    <section className="relative bg-white py-20 md:py-24 px-6 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">Phoenix&apos;s Small-Business Creative Partner</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-black leading-tight text-gray-900">
              Creative for Local Businesses{' '}
              <span className="block">That Actually Works</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
              Modern marketing starts with great social media content. Yak Media makes scroll-stopping videos, photos, and ads for
              restaurants, clinics, gyms, service pros, and small brands—built to drive calls, messages, bookings, and foot traffic.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#cta" className="inline-flex items-center rounded-2xl px-6 py-3 text-white bg-gray-900 hover:bg-gray-800 transition-colors font-semibold">
                Get a Free Strategy Call
              </a>
              <a href="#creative" className="inline-flex items-center rounded-2xl px-6 py-3 border-2 border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors font-semibold">
                See Recent Work
              </a>
            </div>

            {/* Proof bar */}
            <dl className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-gray-200 p-4 text-center md:text-left">
                <dt className="text-2xl font-bold text-gray-900">250%</dt>
                <dd className="text-sm text-gray-600 mt-1">Avg. Revenue Growth</dd>
              </div>
              <div className="rounded-2xl border border-gray-200 p-4 text-center md:text-left">
                <dt className="text-2xl font-bold text-gray-900">150+</dt>
                <dd className="text-sm text-gray-600 mt-1">Local Businesses Served</dd>
              </div>
              <div className="rounded-2xl border border-gray-200 p-4 text-center md:text-left">
                <dt className="text-2xl font-bold text-gray-900">4.9★</dt>
                <dd className="text-sm text-gray-600 mt-1">Client Rating</dd>
              </div>
            </dl>
          </div>

          <div className="aspect-video rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
            <span className="text-sm">Hero media placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
