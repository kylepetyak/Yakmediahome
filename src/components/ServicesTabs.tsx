import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';

const tabData = [
  {
    id: 'organic',
    title: 'Organic Content',
    subtitle: 'Daily relevance through social storytelling',
    description: 'We create content that feels native to each platform while building genuine connections with your audience. From TikTok trends to LinkedIn thought leadership, our organic content strategy drives engagement through authentic storytelling that resonates with real people.',
    features: ['Platform-native content', 'Authentic storytelling', 'Community building', 'Real-time engagement']
  },
  {
    id: 'paid',
    title: 'Paid Ads',
    subtitle: 'Performance-driven creative campaigns',
    description: 'Every ad we create is designed to perform. We combine compelling creative with data-driven targeting to ensure your message reaches the right audience at the right moment. Our paid campaigns are built for conversion, not just views.',
    features: ['Performance optimization', 'Advanced targeting', 'Creative testing', 'ROI-focused campaigns']
  },
  {
    id: 'funnel',
    title: 'Full Funnel',
    subtitle: 'Blending organic + paid for maximum reach',
    description: 'The magic happens when organic and paid work together. We create integrated campaigns where organic content builds trust and awareness while paid amplification drives targeted action. This holistic approach maximizes your reach and impact.',
    features: ['Integrated strategy', 'Cross-platform synergy', 'Amplified reach', 'Unified messaging']
  }
];

interface ServicesTabsProps {
  serviceType: 'services' | 'creative' | 'media' | 'strategy' | 'integrated';
}

export function ServicesTabs({ serviceType }: ServicesTabsProps) {
  const [activeTab, setActiveTab] = useState('organic');
  const activeTabData = tabData.find(tab => tab.id === activeTab)!;

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label={`View ${tab.title} content`}
              aria-pressed={activeTab === tab.id}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <Card className="p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {activeTabData.title}
              </h3>
              
              <p className="text-xl text-orange-500 font-semibold mb-6">
                {activeTabData.subtitle}
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {activeTabData.description}
              </p>

              <ul className="space-y-3 mb-8">
                {activeTabData.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="space-y-4">
                  <div className="bg-gray-700/50 rounded-xl p-6 border border-orange-500/20">
                    <div className="text-orange-400 text-xs font-semibold mb-1">ENGAGEMENT RATE</div>
                    <div className="text-white text-4xl font-black">+320%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700/50 rounded-lg p-4 border border-blue-500/20">
                      <div className="text-blue-400 text-xs font-semibold mb-1">REACH</div>
                      <div className="text-white text-2xl font-black">2.3M</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4 border border-green-500/20">
                      <div className="text-green-400 text-xs font-semibold mb-1">CONVERSIONS</div>
                      <div className="text-white text-2xl font-black">+180%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}