import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Video, Camera, PenTool, Megaphone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { LocalContactForm } from "./LocalContactForm";

export interface ContentCreationCityData {
  city: string;
  state: string;
  slug: string;
  heroImage: string;
  heroAlt: string;
  localRelevanceText: string;
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
  geoCoordinates: {
    latitude: string;
    longitude: string;
  };
  serviceAreas: Array<{
    name: string;
    href: string;
  }>;
  metaDescription: string;
}

interface ContentCreationTemplateProps {
  cityData: ContentCreationCityData;
}

export function ContentCreationTemplate({ cityData }: ContentCreationTemplateProps) {
  const servicesData = [
    {
      icon: <Video className="w-8 h-8 text-blue-500" />,
      title: "Short-Form Video",
      description: "TikTok, Instagram Reels, and YouTube Shorts designed to stop the scroll and engage instantly.",
      image: "https://images.unsplash.com/photo-1745848413060-0827ec268cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbnRlbnQlMjBjcmVhdGlvbiUyMHN0dWRpb3xlbnwxfHx8fDE3NTc5OTE3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/services/creative"
    },
    {
      icon: <Video className="w-8 h-8 text-blue-500" />,
      title: "Long-Form Video",
      description: "Brand stories, interviews, and commercials that build authority and credibility.",
      image: "https://images.unsplash.com/photo-1572814392266-1620040c58be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NTc5MDQzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/services/creative"
    },
    {
      icon: <Camera className="w-8 h-8 text-blue-500" />,
      title: "Photography",
      description: "Product, lifestyle, and branded shoots that elevate your online presence.",
      image: "https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NTc5NjA1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/services/creative"
    },
    {
      icon: <PenTool className="w-8 h-8 text-blue-500" />,
      title: "Copywriting & Creative Direction",
      description: "From ad scripts to captions and campaign ideas — we provide the words and strategy behind the visuals.",
      image: "https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3B5d3JpdGluZyUyMGNyZWF0aXZlJTIwZGlyZWN0aW9ufGVufDF8fHx8MTc1Nzk5MTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/services/creative"
    }
  ];

  const faqData = [
    {
      question: "What types of content do you create?",
      answer: "We produce short-form videos, long-form storytelling, photography, and copywriting tailored to your business and audience."
    },
    {
      question: `How much does content creation cost in ${cityData.city}?`,
      answer: "Budgets vary, but most local businesses invest $2,000–$5,000/month in content creation to see consistent results."
    },
    {
      question: "Do you offer content for both organic and paid ads?",
      answer: "Yes. We design content that works organically on social media and scales effectively through paid campaigns."
    },
    {
      question: "How quickly can I see results?",
      answer: "Clients often see an uptick in engagement within the first 30 days, with significant business growth in 3–6 months when paired with ads."
    },
    {
      question: "Can you help with strategy too, or just production?",
      answer: "We do both. Yak Media not only creates content, but also provides distribution strategy and paid media support to maximize reach."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-black">
                  Content Creation in {cityData.city}, AZ
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                  Yak Media creates high-performing content for {cityData.city} businesses — from short-form video to branded storytelling — designed to capture attention and drive measurable growth.
                </p>
              </div>
              <a
                href="#contact-form"
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 group"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Creating
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={cityData.heroImage}
                  alt={cityData.heroAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full blur-xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full blur-xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction: Why Content Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-black mb-6">
              Why Content Matters in {cityData.city}
            </h2>
          </div>
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              In {cityData.city}, competition is fierce across restaurants, real estate, healthcare, hospitality, and startups. A great product or service isn't enough anymore — businesses need content that earns attention and builds trust.
            </p>
            <p>
              Yak Media specializes in creating content that's designed for today's platforms. From TikTok and Instagram Reels to YouTube, LinkedIn, and paid ads, we help {cityData.city} businesses create content that works where people actually spend their time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Our Content Creation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we create content that performs across all platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl text-black ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Relevance Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl">
                Why {cityData.city} Businesses Choose Yak Media for Content Creation
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our edge? We create content that isn't just creative — it's built for performance. Every video, photo, or campaign is designed with distribution in mind, so you're not just making content — you're making content that moves.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-2xl text-blue-400">1,000+</div>
                  <div className="text-sm text-gray-400">videos produced for brands and businesses</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl text-blue-400">Millions</div>
                  <div className="text-sm text-gray-400">of organic and paid impressions generated</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl text-blue-400">300%</div>
                  <div className="text-sm text-gray-400">average increase in social engagement after 90 days</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl text-blue-400">Experience</div>
                  <div className="text-sm text-gray-400">across restaurants, real estate, fitness, healthcare, and startups</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745848413060-0827ec268cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbnRlbnQlMjBjcmVhdGlvbiUyMHN0dWRpb3xlbnwxfHx8fDE3NTc5OTE3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Content creation studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-black mb-6">
              Local Focus: Content That Works in {cityData.city}
            </h2>
          </div>
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              {cityData.city === 'Phoenix' && 
                "Phoenix has one of the most diverse business landscapes in the U.S. — with vibrant nightlife in Scottsdale, tech and startups in Tempe, family-owned businesses in Mesa, and healthcare hubs in Chandler and Gilbert."
              }
              {cityData.city === 'Scottsdale' && 
                "Scottsdale's luxury market demands content that matches its premium positioning. From high-end resorts and spas to exclusive dining experiences, every piece of content must reflect sophistication and elegance."
              }
              {cityData.city === 'Tempe' && 
                "Tempe's unique blend of college energy and tech innovation creates exciting content opportunities. With ASU bringing fresh perspectives and growing tech companies, content here needs to be forward-thinking and engaging."
              }
              {cityData.city === 'Mesa' && 
                "Mesa's diverse communities and rapid growth create incredible content opportunities. From established neighborhoods to emerging business districts, content must speak to multiple audiences effectively."
              }
              {cityData.city === 'Chandler' && 
                "Chandler's tech corridor demands content that communicates complex ideas simply. From B2B companies to innovative startups, content here needs to be both sophisticated and accessible."
              }
              {cityData.city === 'Gilbert' && 
                "Gilbert's family-focused community values authentic content that reflects quality-of-life priorities. Content here emphasizes trust, community values, and genuine connections."
              }
              {cityData.city === 'Glendale' && 
                "Glendale's sports and entertainment hub demands high-energy content that captures excitement. From game-day energy to year-round engagement, content here needs to drive immediate action."
              }
            </p>
            <p>
              We create content tailored to each industry, making sure your brand's voice resonates with the right local audience.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-black mb-12">
            What {cityData.city} Businesses Are Saying
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="text-4xl text-blue-500">"</div>
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                Yak Media helped us create content that finally connected with our audience. Our videos went from a few hundred views to thousands — and we saw real customers walk in the door because of it.
              </blockquote>
              <div className="pt-6">
                <div className="text-black">Mark Johnson</div>
                <div className="text-gray-600">Owner, Phoenix Fit Co.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about content creation services in {cityData.city}
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg text-black">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Service Area Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Serving the Greater Phoenix Valley
            </h2>
            <p className="text-lg text-gray-600">
              We provide content creation services across Arizona's fastest-growing communities
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cityData.serviceAreas.map((area, index) => (
              <a
                key={index}
                href={area.href}
                className="bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-lg p-6 text-center transition-all duration-200 group"
              >
                <span className="text-lg text-black group-hover:text-blue-600 transition-colors">
                  {area.name}
                </span>
                <ArrowRight className="w-4 h-4 mt-2 mx-auto text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section with Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side: CTA content */}
            <div className="text-white">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl">
                  Ready to Create Content That Performs?
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Let's produce content that doesn't just look good — it drives results for your {cityData.city} business.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                  <a
                    href="tel:4802446470"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg transition-colors duration-200 group"
                  >
                    Call (480) 244-6470
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right side: Contact form */}
            <div>
              <LocalContactForm cityName={cityData.city} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}