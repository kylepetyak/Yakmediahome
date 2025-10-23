import { ContentCreationTemplate } from "./ContentCreationTemplate";
import { mesaContentData } from "./contentCreationCityData";

export function MesaContentCreationPage() {
  return (
    <ContentCreationTemplate 
      cityData={mesaContentData} 
    />
  );
}