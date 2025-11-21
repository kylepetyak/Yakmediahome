import { ReAgencyHero } from './ReAgencyHero';
import { ReAgencyValue } from './ReAgencyValue';
import { ReAgencyDifferentiation } from './ReAgencyDifferentiation';
import { ReAgencyProcess } from './ReAgencyProcess';
import { ReAgencyTargetAudience } from './ReAgencyTargetAudience';
import { ReAgencySocialProof } from './ReAgencySocialProof';
import { ReAgencyFinalCTA } from './ReAgencyFinalCTA';

interface ReAgencyHomePageProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
  onServicesClick?: () => void;
  onResultsClick?: () => void;
  onBookCall?: () => void;
  onEmailUs?: () => void;
}

export function ReAgencyHomePage({
  onGetStarted,
  onLearnMore,
  onServicesClick,
  onResultsClick,
  onBookCall,
  onEmailUs
}: ReAgencyHomePageProps) {
  return (
    <div className="min-h-screen bg-brand-black">
      <ReAgencyHero
        onGetStarted={onGetStarted}
        onLearnMore={onLearnMore}
      />
      <ReAgencyValue
        onServicesClick={onServicesClick}
        onResultsClick={onResultsClick}
      />
      <ReAgencyDifferentiation />
      <ReAgencyProcess />
      <ReAgencyTargetAudience />
      <ReAgencySocialProof />
      <ReAgencyFinalCTA
        onBookCall={onBookCall}
        onEmailUs={onEmailUs}
      />
    </div>
  );
}
