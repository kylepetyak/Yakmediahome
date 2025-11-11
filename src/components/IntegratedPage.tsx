import { IntegratedHero } from './IntegratedHero';
import { IntegratedMarquee } from './IntegratedMarquee';
import { IntegratedServicesSection } from './IntegratedServicesSection';
import { IntegratedQuote } from './IntegratedQuote';
import { IntegratedFAQ } from './IntegratedFAQ';
import { IntegratedClosingCTA } from './IntegratedClosingCTA';

interface IntegratedPageProps {
  onContactClick?: () => void;
}

export function IntegratedPage({ onContactClick }: IntegratedPageProps) {
  return (
    <div className="min-h-screen">
      <IntegratedHero />
      <IntegratedMarquee />
      <IntegratedServicesSection />
      <IntegratedQuote />
      <IntegratedFAQ />
      <IntegratedClosingCTA onContactClick={onContactClick} />
    </div>
  );
}
