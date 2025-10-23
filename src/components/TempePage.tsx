import { LocalMarketingPageTemplate } from "./LocalMarketingPageTemplate";
import { tempeData } from "./cityData";

export function TempePage() {
  return (
    <LocalMarketingPageTemplate 
      cityData={tempeData} 
    />
  );
}