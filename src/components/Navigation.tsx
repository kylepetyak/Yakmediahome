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
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-4 bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={onLogoClick}
          className="flex items-center gap-1 hover:opacity-80 transition-opacity group"
          aria-label="Yak Media homepage"
        >
          <span className="text-2xl font-black bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">YAK</span>
          <span className="text-2xl font-light text-gray-900">MEDIA</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center text-gray-700 hover:text-orange-600 font-semibold px-3 py-2 transition-colors rounded-lg hover:bg-orange-50"
              aria-label="Services menu"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Services
              <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" aria-hidden="true" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-orange-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
              <div className="py-2">
                <button
                  onClick={() => onServicesClick('creative')}
                  className="block w-full text-left px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 font-medium transition-all duration-200 border-l-4 border-transparent hover:border-orange-500"
                >
                  🎨 Creative
                </button>
                <button
                  onClick={() => onServicesClick('media')}
                  className="block w-full text-left px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 font-medium transition-all duration-200 border-l-4 border-transparent hover:border-orange-500"
                >
                  📊 Media
                </button>
                <button
                  onClick={() => onServicesClick('strategy')}
                  className="block w-full text-left px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 font-medium transition-all duration-200 border-l-4 border-transparent hover:border-orange-500"
                >
                  🎯 Strategy
                </button>
                <button
                  onClick={() => onServicesClick('integrated')}
                  className="block w-full text-left px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 font-medium transition-all duration-200 border-l-4 border-transparent hover:border-orange-500"
                >
                  ⚡ Integrated
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={onBlogClick}
            className="text-gray-700 hover:text-orange-600 font-semibold px-3 py-2 transition-colors rounded-lg hover:bg-orange-50"
          >
            Blog
          </button>

          <Button
            onClick={onContactClick}
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-6 py-2 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 font-bold border-0"
          >
            Get Started →
          </Button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between flex-1 ml-6">
          {/* Centered Connect Button */}
          <div className="flex-1 flex justify-center">
            <Button
              onClick={onContactClick}
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-4 py-2 text-sm font-bold shadow-lg shadow-orange-500/30 border-0"
            >
              Get Started
            </Button>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-4 p-2 hover:bg-orange-50 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-orange-600" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-orange-600" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-orange-100 backdrop-blur-md"
        >
          <div className="py-4 px-4 space-y-2">
            {/* Services Section */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-left text-gray-700 font-semibold py-3 px-3 hover:text-orange-600 hover:bg-orange-50 transition-colors rounded-lg"
                aria-label="Services submenu"
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 ml-4 space-y-1 pb-2">
                  <button
                    onClick={() => handleServiceClick('creative')}
                    className="block w-full text-left py-2 px-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors rounded-lg"
                  >
                    🎨 Creative
                  </button>
                  <button
                    onClick={() => handleServiceClick('media')}
                    className="block w-full text-left py-2 px-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors rounded-lg"
                  >
                    📊 Media
                  </button>
                  <button
                    onClick={() => handleServiceClick('strategy')}
                    className="block w-full text-left py-2 px-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors rounded-lg"
                  >
                    🎯 Strategy
                  </button>
                  <button
                    onClick={() => handleServiceClick('integrated')}
                    className="block w-full text-left py-2 px-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors rounded-lg"
                  >
                    ⚡ Integrated
                  </button>
                </div>
              )}
            </div>

            {/* Blog */}
            <button
              onClick={handleBlogClick}
              className="block w-full text-left text-gray-700 font-semibold py-3 px-3 hover:text-orange-600 hover:bg-orange-50 transition-colors rounded-lg"
            >
              Blog
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}