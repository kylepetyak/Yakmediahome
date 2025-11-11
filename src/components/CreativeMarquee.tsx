export function CreativeMarquee() {
  return (
    <>
      {/* Top banner marquee */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50">
        <div className="whitespace-nowrap py-3 text-sm font-medium tracking-wide animate-marquee-slow">
          <span className="mx-6">Build Brand Relevance. Drive Local Results.</span>
          <span className="mx-6">Build Brand Relevance. Drive Local Results.</span>
          <span className="mx-6">Build Brand Relevance. Drive Local Results.</span>
          <span className="mx-6">Build Brand Relevance. Drive Local Results.</span>
          <span className="mx-6">Build Brand Relevance. Drive Local Results.</span>
          <span className="mx-6">Build Brand Relevance. Drive Local Results.</span>
        </div>
        <style>{`
          @keyframes marquee-slow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-slow {
            animation: marquee-slow 20s linear infinite;
          }
        `}</style>
      </section>

      {/* Platforms + Social proof strip */}
      <section className="px-6 py-10 border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">We Build Brands Where People Actually Pay Attention</h2>
            <p className="mt-3 text-gray-700">Your customers live on their phones. We create content and campaigns built for the platforms where they spend time—and make decisions.</p>
            <p className="mt-3 text-sm text-gray-600">Instagram · Facebook · LinkedIn · YouTube</p>
          </div>
          <dl className="grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-gray-200 p-4 text-center md:text-left bg-white">
              <dt className="text-2xl font-bold text-gray-900">15M+</dt>
              <dd className="text-sm text-gray-600 mt-1">Impressions Generated</dd>
            </div>
            <div className="rounded-2xl border border-gray-200 p-4 text-center md:text-left bg-white">
              <dt className="text-2xl font-bold text-gray-900">500+</dt>
              <dd className="text-sm text-gray-600 mt-1">Campaigns Launched</dd>
            </div>
            <div className="rounded-2xl border border-gray-200 p-4 text-center md:text-left bg-white">
              <dt className="text-2xl font-bold text-gray-900">98%</dt>
              <dd className="text-sm text-gray-600 mt-1">Client Retention</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
