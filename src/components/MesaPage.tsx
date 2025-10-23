import { LocalMarketingPageTemplate } from "./LocalMarketingPageTemplate";
import { mesaData } from "./cityData";

export function MesaPage() {
  return (
    <LocalMarketingPageTemplate 
      cityData={mesaData} 
    />
  );
}