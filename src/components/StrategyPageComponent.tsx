import { StrategyHero } from './StrategyHero';
import { StrategyTabsSection } from './StrategyTabsSection';
import { StrategyTeamSection } from './StrategyTeamSection';
import { StrategyFAQ } from './StrategyFAQ';
import { StrategyClosingCTA } from './StrategyClosingCTA';

interface StrategyPageComponentProps {
  onContactClick?: () => void;
}

export function StrategyPageComponent({ onContactClick }: StrategyPageComponentProps) {
  return (
    <div className="min-h-screen">
      <StrategyHero />
      <StrategyTabsSection onContactClick={onContactClick} />
      <StrategyTeamSection />
      <StrategyFAQ />
      <StrategyClosingCTA onContactClick={onContactClick} />
    </div>
  );
}