import { LocalMarketingPageTemplate } from "./LocalMarketingPageTemplate";
import { phoenixData } from "./cityData";

export function PhoenixPage() {
  return (
    <LocalMarketingPageTemplate 
      cityData={phoenixData} 
    />
  );
}