import { LocalMarketingPageTemplate } from "./LocalMarketingPageTemplate";
import { gilbertData } from "./cityData";

export function GilbertPage() {
  return (
    <LocalMarketingPageTemplate 
      cityData={gilbertData} 
    />
  );
}