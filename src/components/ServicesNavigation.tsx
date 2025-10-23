import { Button } from "./ui/button";

interface ServicesNavigationProps {
  onLogoClick: () => void;
}

export function ServicesNavigation({ onLogoClick }: ServicesNavigationProps) {
  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between bg-white">
      <button 
        onClick={onLogoClick} 
        className="flex items-center hover:opacity-80 transition-opacity"
        aria-label="Yak Media homepage"
      >
        <span className="text-2xl font-bold text-gray-900">YAK</span>
        <span className="text-2xl font-light text-gray-900">MEDIA</span>
      </button>
      
      <div className="hidden md:flex items-center space-x-6 mr-4">
        <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6">
          CONNECT WITH US
        </Button>
        <a href="#" className="text-gray-900 hover:text-gray-700 font-medium px-2">SERVICES</a>
        <a href="#" className="text-gray-900 hover:text-gray-700 font-medium px-2">OFFICES</a>
        <a href="#" className="text-gray-900 hover:text-gray-700 font-medium px-2">INSIGHTS</a>
        <a href="#" className="text-gray-900 hover:text-gray-700 font-medium px-2">IN THE PRESS</a>
        <a href="#" className="text-gray-900 hover:text-gray-700 font-medium px-2">CAREERS</a>
      </div>
    </nav>
  );
}