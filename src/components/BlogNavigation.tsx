import { Button } from "./ui/button";

interface BlogNavigationProps {
  onLogoClick: () => void;
}

export function BlogNavigation({ onLogoClick }: BlogNavigationProps) {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={onLogoClick}
          className="flex items-center hover:opacity-80 transition-opacity"
          aria-label="Yak Media homepage"
        >
          <span className="text-xl font-bold text-black">YAK</span>
          <span className="text-xl font-light text-black">MEDIA</span>
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          <Button variant="ghost" className="text-gray-600 hover:text-black">
            CONNECT WITH US
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-black">
            SERVICES
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-black">
            OFFICES
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-black">
            INSIGHTS
          </Button>
          <Button variant="ghost" className="text-black font-medium border-b-2 border-purple-600 rounded-none">
            IN THE PRESS
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-black">
            CAREERS
          </Button>
        </div>
      </div>
    </nav>
  );
}