interface ServicesIntroProps {
  serviceType: 'services' | 'creative' | 'media' | 'strategy' | 'integrated';
}

const introContent = {
  services: 'How we help brands grow.',
  creative: 'How we help brands grow.',
  media: 'How we amplify your reach.',
  strategy: 'How we drive your success.',
  integrated: 'How we connect the dots.'
};

export function ServicesIntro({ serviceType }: ServicesIntroProps) {
  const content = introContent[serviceType];
  
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 leading-tight">
          {content}
        </h2>
      </div>
    </section>
  );
}