import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';

const tabsData = [
  {
    id: 'paid-social',
    label: 'Paid Social',
    title: 'Paid Social',
    description: 'Complete social media advertising management—planning, buying, optimizing, and reporting across Meta, TikTok, YouTube, LinkedIn, Snap, Pinterest, and Reddit. We handle the complexity so you can focus on growth.',
    services: [
      'Meta & Instagram Ads',
      'TikTok Advertising', 
      'YouTube Campaigns',
      'LinkedIn B2B',
      'Snap & Pinterest',
      'Reddit Targeting'
    ]
  },
  {
    id: 'digital-media',
    label: 'Digital Media',
    title: 'Digital Media',
    description: 'Google Search, Display, and YouTube campaigns designed to capture high-intent customers at the moment they\'re ready to buy. We turn search behavior into sustainable growth.',
    services: [
      'Google Search Ads',
      'Display Networks',
      'YouTube Advertising',
      'Shopping Campaigns',
      'App Promotion',
      'Local Campaigns'
    ]
  },
  {
    id: 'performance-media',
    label: 'Performance Media',
    title: 'Performance Media',
    description: 'Full-funnel media strategy that aligns creative and media for maximum impact. We create integrated campaigns where every touchpoint works together to drive conversions.',
    services: [
      'Full-Funnel Strategy',
      'Creative + Media Alignment',
      'Cross-Platform Integration',
      'Attribution Modeling',
      'Audience Development',
      'Performance Optimization'
    ]
  },
  {
    id: 'paid-amplification',
    label: 'Paid Amplification',
    title: 'Paid Amplification',
    description: 'Strategic paid amplification of your top-performing organic content. We identify what\'s already working and scale it intelligently across platforms for maximum reach and engagement.',
    services: [
      'Organic Content Analysis',
      'Performance Identification',
      'Strategic Amplification',
      'Platform Optimization',
      'Audience Expansion',
      'ROI Maximization'
    ]
  }
];

interface MediaTabsSectionProps {
  onContactClick?: () => void;
}

export function MediaTabsSection({ onContactClick }: MediaTabsSectionProps) {
  const [activeTab, setActiveTab] = useState('paid-social');

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
                aria-label={`View ${tab.label} media services`}
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
                
                <ul className="space-y-3 mb-10">
                  {activeTabData?.services.map((service, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-lg">{service}</span>
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

              {/* Right Side - Real Performance Metrics */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 flex items-center justify-center">
                <div className="w-full space-y-6">
                  {/* Performance Stats */}
                  <div className="bg-gray-700/50 rounded-xl p-6 border border-orange-500/20">
                    <div className="text-orange-400 text-sm font-semibold mb-1">AVERAGE CLIENT ROI</div>
                    <div className="text-white text-5xl font-black">4.2x</div>
                    <div className="text-gray-400 text-sm mt-2">Across all paid channels</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700/50 rounded-xl p-4 border border-blue-500/20">
                      <div className="text-blue-400 text-xs font-semibold mb-1">CPA REDUCTION</div>
                      <div className="text-white text-3xl font-black">-42%</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-4 border border-green-500/20">
                      <div className="text-green-400 text-xs font-semibold mb-1">CTR INCREASE</div>
                      <div className="text-white text-3xl font-black">+180%</div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 rounded-xl p-4 border border-purple-500/20">
                    <div className="text-purple-400 text-xs font-semibold mb-1">AD SPEND MANAGED</div>
                    <div className="text-white text-2xl font-black">$2.3M+</div>
                    <div className="text-gray-400 text-xs mt-1">Last 12 months</div>
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