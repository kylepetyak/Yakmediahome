import { MediaPage } from './MediaPage';
import { StrategyPageComponent } from './StrategyPageComponent';
import { CreativePage } from './CreativePage';
import { ServicesHero } from './ServicesHero';
import { ServicesIntro } from './ServicesIntro';
import { ServicesTabs } from './ServicesTabs';
import { ServicesShowcase } from './ServicesShowcase';
import { ServicesFAQ } from './ServicesFAQ';
import { ServicesContact } from './ServicesContact';

interface ServicesPageProps {
  serviceType: 'services' | 'creative' | 'media' | 'strategy' | 'integrated';
  onContactClick?: () => void;
}

export function ServicesPage({ serviceType, onContactClick }: ServicesPageProps) {
  // Render dedicated creative page
  if (serviceType === 'creative') {
    return <CreativePage onContactClick={onContactClick} />;
  }

  // Render dedicated media page
  if (serviceType === 'media') {
    return <MediaPage onContactClick={onContactClick} />;
  }

  // Render dedicated strategy page
  if (serviceType === 'strategy') {
    return <StrategyPageComponent onContactClick={onContactClick} />;
  }
  
  // Render general services page for other service types
  return (
    <div className="min-h-screen">
      <ServicesHero serviceType={serviceType} />
      <ServicesIntro serviceType={serviceType} />
      <ServicesTabs serviceType={serviceType} />
      <ServicesShowcase serviceType={serviceType} />
      <ServicesFAQ serviceType={serviceType} />
      <ServicesContact />
    </div>
  );
}