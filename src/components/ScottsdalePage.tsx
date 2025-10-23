import { LocalMarketingPageTemplate } from "./LocalMarketingPageTemplate";
import { scottsdaleData } from "./cityData";

export function ScottsdalePage() {
  return (
    <LocalMarketingPageTemplate 
      cityData={scottsdaleData} 
    />
  );
}