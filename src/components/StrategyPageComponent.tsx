import { StrategyHero } from './StrategyHero';
import { StrategyMarquee } from './StrategyMarquee';
import { StrategyServicesSection } from './StrategyServicesSection';
import { StrategyQuote } from './StrategyQuote';
import { StrategyFAQ } from './StrategyFAQ';
import { StrategyClosingCTA } from './StrategyClosingCTA';

interface StrategyPageComponentProps {
  onContactClick?: () => void;
}

export function StrategyPageComponent({ onContactClick }: StrategyPageComponentProps) {
  return (
    <div className="min-h-screen">
      <StrategyHero />
      <StrategyMarquee />
      <StrategyServicesSection />
      <StrategyQuote />
      <StrategyFAQ />
      <StrategyClosingCTA onContactClick={onContactClick} />
    </div>
  );
}
