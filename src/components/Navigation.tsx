import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onBlogClick: () => void;
  onServicesClick: (service: string) => void;
  onLogoClick?: () => void;
  onContactClick?: () => void;
}

export function Navigation({ onBlogClick, onServicesClick, onLogoClick, onContactClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleServiceClick = (service: string) => {
    onServicesClick(service);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleBlogClick = () => {
    onBlogClick();
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-4 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={onLogoClick}
          className="flex items-center hover:opacity-80 transition-opacity"
          aria-label="Yak Media homepage"
        >
          <span className="text-2xl font-bold text-gray-900">YAK</span>
          <span className="text-2xl font-light text-gray-900">MEDIA</span>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            onClick={onContactClick}
            variant="outline" 
            className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6"
          >
            CONNECT WITH US
          </Button>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-gray-900 hover:text-blue-500 font-medium px-2 transition-colors"
              aria-label="Services menu"
              aria-expanded="false"
              aria-haspopup="true"
            >
              SERVICES
              <ChevronDown className="w-4 h-4 ml-1" aria-hidden="true" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <button
                  onClick={() => onServicesClick('creative')}
                  className="block w-full text-left px-4 py-3 text-gray-900 hover:bg-blue-500 hover:text-white font-medium transition-colors"
                >
                  Creative
                </button>
                <button
                  onClick={() => onServicesClick('media')}
                  className="block w-full text-left px-4 py-3 text-gray-900 hover:bg-blue-500 hover:text-white font-medium transition-colors"
                >
                  Media
                </button>
                <button
                  onClick={() => onServicesClick('strategy')}
                  className="block w-full text-left px-4 py-3 text-gray-900 hover:bg-blue-500 hover:text-white font-medium transition-colors"
                >
                  Strategy
                </button>
                <button
                  onClick={() => onServicesClick('integrated')}
                  className="block w-full text-left px-4 py-3 text-gray-900 hover:bg-blue-500 hover:text-white font-medium transition-colors"
                >
                  Integrated
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={onBlogClick}
            className="text-gray-900 hover:text-blue-500 font-medium px-2 transition-colors"
          >
            BLOG
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between flex-1 ml-6">
          {/* Centered Connect Button */}
          <div className="flex-1 flex justify-center">
            <Button 
              onClick={onContactClick}
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-4 text-sm"
            >
              CONNECT WITH US
            </Button>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200"
        >
          <div className="py-4 px-4 space-y-4">
            {/* Services Section */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-left text-gray-900 font-medium py-2 hover:text-blue-500 transition-colors"
                aria-label="Services submenu"
                aria-expanded={mobileServicesOpen}
              >
                SERVICES
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              
              {mobileServicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <button
                    onClick={() => handleServiceClick('creative')}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    Creative
                  </button>
                  <button
                    onClick={() => handleServiceClick('media')}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    Media
                  </button>
                  <button
                    onClick={() => handleServiceClick('strategy')}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    Strategy
                  </button>
                  <button
                    onClick={() => handleServiceClick('integrated')}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    Integrated
                  </button>
                </div>
              )}
            </div>

            {/* Blog */}
            <button 
              onClick={handleBlogClick}
              className="block w-full text-left text-gray-900 font-medium py-2 hover:text-blue-500 transition-colors"
            >
              BLOG
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}