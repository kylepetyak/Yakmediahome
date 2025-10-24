import { Button } from './ui/button';

import { Button } from './ui/button';

interface StrategyClosingCTAProps {
  onContactClick?: () => void;
}

export function StrategyClosingCTA({ onContactClick }: StrategyClosingCTAProps) {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Strategy isn't theory. It's action.
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Let's build a plan that connects your brand to the people who matter most.
        </p>

        <Button
          onClick={onContactClick}
          className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg font-medium"
        >
          Work With Us
        </Button>
      </div>
    </section>
  );
}