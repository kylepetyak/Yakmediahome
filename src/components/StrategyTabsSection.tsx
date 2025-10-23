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

              {/* Right Side - Abstract Strategy Illustration */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Strategy Network Illustration */}
                  <div className="relative w-64 h-64">
                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Connected Nodes */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-300 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-10 h-10 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
                    
                    {/* Connection Lines */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-32 h-0.5 bg-blue-200 absolute -top-0.25 -left-16 rotate-45"></div>
                      <div className="w-32 h-0.5 bg-blue-200 absolute -top-0.25 -left-16 -rotate-45"></div>
                      <div className="w-32 h-0.5 bg-blue-200 absolute -top-0.25 -left-16"></div>
                      <div className="w-32 h-0.5 bg-blue-200 absolute -top-0.25 -left-16 rotate-90"></div>
                    </div>
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