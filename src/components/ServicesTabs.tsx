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
                  ? 'bg-blue-500 text-white'
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
              
              <p className="text-xl text-blue-500 mb-6">
                {activeTabData.subtitle}
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {activeTabData.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {activeTabData.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-24 h-24 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded"></div>
                </div>
                <p>Service Visualization</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}