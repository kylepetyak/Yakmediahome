import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Paid Social AOR',
    description: 'Complete social media advertising management—planning, buying, optimization, and reporting across Meta, TikTok, YouTube, LinkedIn, Snap, Pinterest, and Reddit. We handle the complexity so you can focus on growth.',
    features: ['Meta & Instagram Ads', 'TikTok Advertising', 'YouTube Campaigns', 'LinkedIn B2B', 'Snap & Pinterest', 'Reddit Targeting']
  },
  {
    title: 'Digital Media AOR',
    description: 'Google Search, Display, and YouTube campaigns designed to capture high-intent customers at the moment they\'re ready to buy. We turn search behavior into sustainable growth.',
    features: ['Google Search Ads', 'Display Networks', 'YouTube Advertising', 'Shopping Campaigns', 'App Promotion', 'Local Campaigns']
  },
  {
    title: 'Performance Media AOR',
    description: 'Full-funnel media strategy that aligns creative and media for maximum impact. We create integrated campaigns where every touchpoint works together to drive conversions.',
    features: ['Full-Funnel Strategy', 'Creative + Media Alignment', 'Cross-Platform Integration', 'Attribution Modeling', 'Audience Development', 'Performance Optimization']
  },
  {
    title: 'Paid Social Amplification',
    description: 'Strategic paid amplification of your top-performing organic content. We identify what\'s already working and scale it intelligently across platforms for maximum reach and engagement.',
    features: ['Organic Content Analysis', 'Performance Identification', 'Strategic Amplification', 'Platform Optimization', 'Audience Expansion', 'ROI Maximization']
  }
];

export function MediaServicesGrid() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 flex items-center gap-2 w-full justify-center">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}