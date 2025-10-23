import { ContentCreationTemplate } from "./ContentCreationTemplate";
import { tempeContentData } from "./contentCreationCityData";

export function TempeContentCreationPage() {
  return (
    <ContentCreationTemplate 
      cityData={tempeContentData} 
    />
  );
}