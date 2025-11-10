import { MediaHero } from './MediaHero';
import { MediaMarquee } from './MediaMarquee';
import { MediaServicesSection } from './MediaServicesSection';
import { MediaQuote } from './MediaQuote';
import { MediaFAQ } from './MediaFAQ';
import { MediaClosingCTA } from './MediaClosingCTA';

interface MediaPageProps {
  onContactClick?: () => void;
}

export function MediaPage({ onContactClick }: MediaPageProps) {
  return (
    <div className="min-h-screen">
      <MediaHero />
      <MediaMarquee />
      <MediaServicesSection />
      <MediaQuote />
      <MediaFAQ />
      <MediaClosingCTA onContactClick={onContactClick} />
    </div>
  );
}
