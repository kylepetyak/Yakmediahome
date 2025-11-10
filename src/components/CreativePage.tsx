import { CreativeHero } from './CreativeHero';
import { CreativeMarquee } from './CreativeMarquee';
import { CreativeServices } from './CreativeServices';
import { CreativeQuote } from './CreativeQuote';
import { CreativeFAQ } from './CreativeFAQ';
import { CreativeClosingCTA } from './CreativeClosingCTA';

interface CreativePageProps {
  onContactClick?: () => void;
}

export function CreativePage({ onContactClick }: CreativePageProps) {
  return (
    <div className="min-h-screen">
      <CreativeHero />
      <CreativeMarquee />
      <CreativeServices />
      <CreativeQuote />
      <CreativeFAQ />
      <CreativeClosingCTA onContactClick={onContactClick} />
    </div>
  );
}
