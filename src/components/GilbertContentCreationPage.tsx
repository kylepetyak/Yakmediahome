import { ContentCreationTemplate } from "./ContentCreationTemplate";
import { gilbertContentData } from "./contentCreationCityData";

export function GilbertContentCreationPage() {
  return (
    <ContentCreationTemplate 
      cityData={gilbertContentData} 
    />
  );
}