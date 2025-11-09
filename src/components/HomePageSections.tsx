// Homepage sections bundled together for efficient loading
import { LeadMagnetSection } from "./LeadMagnetSection";
import { SocialSection } from "./SocialSection";
import { CreativeSection } from "./CreativeSection";
import { MediaSection } from "./MediaSection";
import { StrategySection } from "./StrategySection";
import { IntegratedSection } from "./IntegratedSection";
import { NewsInsightsSection } from "./NewsInsightsSection";
import { LinkedInSection } from "./LinkedInSection";

interface HomePageSectionsProps {
  onBlogClick: () => void;
  onPostClick: (postSlug: string) => void;
  onServicesClick: (service?: string) => void;
}

export function HomePageSections({ onBlogClick, onPostClick, onServicesClick }: HomePageSectionsProps) {
  return (
    <>
      <LeadMagnetSection />
      <SocialSection />
      <CreativeSection onLearnMoreClick={() => onServicesClick('creative')} />
      <MediaSection onLearnMoreClick={() => onServicesClick('media')} />
      <StrategySection onLearnMoreClick={() => onServicesClick('strategy')} />
      <IntegratedSection onLearnMoreClick={() => onServicesClick('integrated')} />
      <NewsInsightsSection
        onBlogClick={onBlogClick}
        onPostClick={onPostClick}
      />
      <LinkedInSection />
    </>
  );
}