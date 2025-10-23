import { Button } from './ui/button';

import { Button } from './ui/button';

interface MediaClosingCTAProps {
  onContactClick?: () => void;
}

export function MediaClosingCTA({ onContactClick }: MediaClosingCTAProps) {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Every impression should earn its keep.
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's build a media system that grows your business.
        </p>

        <Button 
          onClick={onContactClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 text-lg font-medium"
        >
          Work With Us
        </Button>
      </div>
    </section>
  );
}