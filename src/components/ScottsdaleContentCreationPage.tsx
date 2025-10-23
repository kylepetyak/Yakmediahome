import { ContentCreationTemplate } from "./ContentCreationTemplate";
import { scottsdaleContentData } from "./contentCreationCityData";

export function ScottsdaleContentCreationPage() {
  return (
    <ContentCreationTemplate 
      cityData={scottsdaleContentData} 
    />
  );
}