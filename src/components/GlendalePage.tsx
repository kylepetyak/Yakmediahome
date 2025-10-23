import { LocalMarketingPageTemplate } from "./LocalMarketingPageTemplate";
import { glendaleData } from "./cityData";

export function GlendalePage() {
  return (
    <LocalMarketingPageTemplate 
      cityData={glendaleData} 
    />
  );
}