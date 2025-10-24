import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';

const tabsData = [
  {
    id: 'audience-insights',
    label: 'Audience & Insights',
    title: 'Our Secret Sauce',
    description: 'We start with people, not guesswork. Our approach digs into audience behavior, cultural shifts, and empathy so your brand connects with the right people, at the right time, in the right way.',
    services: [
      'Attention – Where is your audience spending time? What captures them? We map it.',
      'Culture – What\'s trending, shifting, and shaping consumer behavior today? We lean into it.',
      'Empathy – What do people actually care about? How do you show up with value? That\'s the key.'
    ]
  },
  {
    id: 'platforms-culture',
    label: 'Platforms & Culture',
    title: 'Move Fast(er) with PAC',
    description: 'Strategy doesn\'t live in a slide deck—it lives in the feed. We help you move at the speed of culture by aligning your brand with what\'s happening now.',
    services: [
      'Platforms – Real-time learnings from Meta, TikTok, YouTube, LinkedIn, and beyond to maximize reach.',
      'Culture – Social signals and conversations that your brand can tap into today.',
      'Connection – Showing up in ways that feel natural, not forced, so people actually engage.'
    ]
  }
];

interface StrategyTabsSectionProps {
  onContactClick?: () => void;
}

export function StrategyTabsSection({ onContactClick }: StrategyTabsSectionProps) {
  const [activeTab, setActiveTab] = useState('audience-insights');

  const activeTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            How we help brands succeed.
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-gray-800 p-2 rounded-full">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                aria-label={`View ${tab.label} strategy content`}
                aria-pressed={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="flex justify-center">
          <Card className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {activeTabData?.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {activeTabData?.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {activeTabData?.services.map((service, index) => (
                    <li key={index} className="text-gray-700 text-lg leading-relaxed">
                      {service}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={onContactClick}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-medium flex items-center gap-3"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Right Side - Real Strategy Results */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 flex items-center justify-center">
                <div className="w-full space-y-6">
                  {/* Strategy Impact */}
                  <div className="bg-gray-700/50 rounded-xl p-6 border border-orange-500/20">
                    <div className="text-orange-400 text-sm font-semibold mb-1">REVENUE GROWTH</div>
                    <div className="text-white text-5xl font-black">+250%</div>
                    <div className="text-gray-400 text-sm mt-2">Average client increase in 12 months</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700/50 rounded-xl p-4 border border-blue-500/20">
                      <div className="text-blue-400 text-xs font-semibold mb-1">FASTER LAUNCH</div>
                      <div className="text-white text-3xl font-black">3-5 Days</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-4 border border-green-500/20">
                      <div className="text-green-400 text-xs font-semibold mb-1">MARKET SHARE</div>
                      <div className="text-white text-3xl font-black">+38%</div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 rounded-xl p-4 border border-purple-500/20">
                    <div className="text-purple-400 text-xs font-semibold mb-1">CLIENT RETENTION</div>
                    <div className="text-white text-2xl font-black">94%</div>
                    <div className="text-gray-400 text-xs mt-1">Year-over-year</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}