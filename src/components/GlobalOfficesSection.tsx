import { Button } from "./ui/button";
import { MapPin } from "lucide-react";
import mapImage from 'figma:asset/e55a9874613d51e4d40a458e0749c0ea598cd236.png';

export function GlobalOfficesSection() {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8 lg:mb-0 max-w-2xl">
            With 15 offices (and counting), we're built for local relevance at a global scale.
          </h2>
          
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
            EXPLORE ALL OF VAYNERX
          </Button>
        </div>
        
        <div className="relative">
          <img 
            src={mapImage} 
            alt="World map showing VaynerMedia office locations" 
            className="w-full h-auto rounded-lg"
          />
          
          {/* Office location pins */}
          <div className="absolute inset-0">
            {/* North America pins */}
            <MapPin className="absolute w-8 h-8 text-purple-500 fill-purple-500" style={{top: '35%', left: '20%'}} />
            <MapPin className="absolute w-8 h-8 text-purple-500 fill-purple-500" style={{top: '30%', left: '25%'}} />
            <MapPin className="absolute w-8 h-8 text-purple-500 fill-purple-500" style={{top: '40%', left: '15%'}} />
            
            {/* Europe pins */}
            <MapPin className="absolute w-8 h-8 text-purple-500 fill-purple-500" style={{top: '25%', left: '50%'}} />
            <MapPin className="absolute w-8 h-8 text-purple-500 fill-purple-500" style={{top: '30%', left: '52%'}} />
            
            {/* Asia pins */}
            <MapPin className="absolute w-8 h-8 text-purple-500 fill-purple-500" style={{top: '35%', left: '75%'}} />
            <MapPin className="absolute w-8 h-8 text-purple-500 fill-purple-500" style={{top: '40%', left: '80%'}} />
          </div>
        </div>
      </div>
    </section>
  );
}