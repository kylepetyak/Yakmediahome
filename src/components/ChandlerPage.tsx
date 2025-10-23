import { LocalMarketingPageTemplate } from "./LocalMarketingPageTemplate";
import { chandlerData } from "./cityData";

export function ChandlerPage() {
  return (
    <LocalMarketingPageTemplate 
      cityData={chandlerData} 
    />
  );
}