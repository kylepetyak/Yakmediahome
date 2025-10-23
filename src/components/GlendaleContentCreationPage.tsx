import { ContentCreationTemplate } from "./ContentCreationTemplate";
import { glendaleContentData } from "./contentCreationCityData";

interface GlendaleContentCreationPageProps {
  onContactClick: () => void;
}

export function GlendaleContentCreationPage({ onContactClick }: GlendaleContentCreationPageProps) {
  return (
    <ContentCreationTemplate 
      cityData={glendaleContentData} 
      onContactClick={onContactClick} 
    />
  );
}