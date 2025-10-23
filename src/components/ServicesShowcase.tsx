interface ServicesShowcaseProps {
  serviceType: 'services' | 'creative' | 'media' | 'strategy' | 'integrated';
}

export function ServicesShowcase({ serviceType }: ServicesShowcaseProps) {
  const mockups = [
    {
      id: 1,
      title: 'Social Commerce Campaign',
      description: 'Increased conversion rate by 340%'
    },
    {
      id: 2,
      title: 'Brand Awareness Series',
      description: 'Reached 2.3M targeted users'
    },
    {
      id: 3,
      title: 'Product Launch Content',
      description: 'Generated 150K pre-orders'
    }
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How we help our clients.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real campaigns. See how our creative approach drives measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {mockups.map((mockup) => (
            <div key={mockup.id} className="text-center">
              {/* Phone Mockup */}
              <div className="relative mx-auto mb-6 w-64 h-96">
                <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] p-2">
                  <div className="w-full h-full bg-gray-100 rounded-[2rem] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-300 rounded w-24 mx-auto"></div>
                        <div className="h-3 bg-gray-300 rounded w-16 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Screen reflection */}
                <div className="absolute top-4 left-4 right-4 h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-[1.5rem] pointer-events-none"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {mockup.title}
              </h3>
              <p className="text-blue-500 font-medium">
                {mockup.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}