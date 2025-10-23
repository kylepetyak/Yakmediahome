import { MediaHero } from './MediaHero';
import { MediaTabsSection } from './MediaTabsSection';
import { MediaTeamSection } from './MediaTeamSection';
import { MediaFAQ } from './MediaFAQ';
import { MediaClosingCTA } from './MediaClosingCTA';

interface MediaPageProps {
  onContactClick?: () => void;
}

export function MediaPage({ onContactClick }: MediaPageProps) {
  return (
    <div className="min-h-screen">
      <MediaHero />
      <MediaTabsSection onContactClick={onContactClick} />
      <MediaTeamSection />
      <MediaFAQ />
      <MediaClosingCTA onContactClick={onContactClick} />
    </div>
  );
}