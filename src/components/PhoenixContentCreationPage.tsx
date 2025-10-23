import { ContentCreationTemplate } from "./ContentCreationTemplate";
import { phoenixContentData } from "./contentCreationCityData";

export function PhoenixContentCreationPage() {
  return (
    <ContentCreationTemplate 
      cityData={phoenixContentData} 
    />
  );
}