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

              {/* Right Side - Graphic/Illustration */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Abstract Illustration Placeholder */}
                  <div className="relative w-64 h-64">
                    {/* Main Circle */}
                    <div className="absolute inset-0 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Orbiting Elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-blue-300 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-1/2 left-0 w-6 h-6 bg-blue-600 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute top-1/2 right-0 w-10 h-10 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
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