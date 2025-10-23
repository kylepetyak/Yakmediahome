import { ContentCreationTemplate } from "./ContentCreationTemplate";
import { chandlerContentData } from "./contentCreationCityData";

export function ChandlerContentCreationPage() {
  return (
    <ContentCreationTemplate 
      cityData={chandlerContentData} 
    />
  );
}