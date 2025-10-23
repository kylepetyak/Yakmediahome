import { Button } from "./ui/button";
import { Twitter, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

interface FooterProps {
  onPrivacyClick?: () => void;
  onCopyrightClick?: () => void;
  onTermsClick?: () => void;
}

export function Footer({ onPrivacyClick, onCopyrightClick, onTermsClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
            <Twitter className="w-6 h-6 text-white" />
          </a>
          <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
            <Facebook className="w-6 h-6 text-white" />
          </a>
          <a href="https://www.linkedin.com/company/yak-media/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
            <Youtube className="w-6 h-6 text-white" />
          </a>
          <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">T</span>
            </div>
          </a>
        </div>
        
        {/* Partner Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 justify-items-center mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">G</span>
            </div>
            <span className="text-white text-sm">Google Marketing Platform</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">M</span>
            </div>
            <span className="text-white text-sm">Meta Business Partners</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">A</span>
            </div>
            <span className="text-white text-sm">Apple Search Ads</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">T</span>
            </div>
            <span className="text-white text-sm">TikTok Marketing Partners</span>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-8">
          <button onClick={onPrivacyClick} className="text-white hover:text-gray-300 text-sm">Privacy Policy</button>
          <button onClick={onCopyrightClick} className="text-white hover:text-gray-300 text-sm">Copyright Policy</button>
          <button onClick={onTermsClick} className="text-white hover:text-gray-300 text-sm">Terms</button>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-400 text-xs leading-relaxed px-4">
          <div className="mb-2">
            © 2025 Yak Media LLC. Yak Media Limited, Yak Media Companies, INC.
          </div>
          <div>
            All trademarks are the property of their respective owners.
          </div>
        </div>
      </div>
    </footer>
  );
}