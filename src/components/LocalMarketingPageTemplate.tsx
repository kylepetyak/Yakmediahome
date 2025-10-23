import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Lightbulb, Target, BarChart3, Zap, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { LocalContactForm } from "./LocalContactForm";

export interface CityData {
  city: string;
  state: string;
  slug: string;
  heroImage: string;
  heroAlt: string;
  localCopyIntro: string;
  localRelevanceText: string;
  testimonial: {
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

interface LocalMarketingPageTemplateProps {
  cityData: CityData;
}

export function LocalMarketingPageTemplate({ cityData }: LocalMarketingPageTemplateProps) {
  const servicesData = [
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
      title: "Creative",
      description: "Content that captures attention. We produce short-form videos, long-form storytelling, photography, and branded content designed to perform on today's platforms.",
      image: "https://images.unsplash.com/photo-1532617754634-819393ff5106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1hcmtldGluZyUyMHN0cmF0ZWd5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU3OTkwMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/services/creative"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Media",
      description: "Paid ads that work. From Meta and Google to LinkedIn and TikTok, we manage media buying and optimization to get the most out of your budget.",
      image: "https://images.unsplash.com/photo-1754671675183-1acad2302f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWVkaWElMjBhZHZlcnRpc2luZyUyMHNjcmVlbnN8ZW58MXx8fHwxNzU3OTkwMzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/services/media"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "Strategy",
      description: `Growth roadmaps rooted in culture, behavior, and consumer attention. Our strategies are built for ${cityData.city} businesses that want both local relevance and scalable growth.`,
      image: cityData.heroImage,
      link: "/services/strategy"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Integrated",
      description: "When creative and media work together, results multiply. Our integrated model ensures campaigns aren't siloed but aligned from the first idea to the final ad buy.",
      image: "https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlZ3JhdGVkJTIwbWFya2V0aW5nJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU3OTkwMzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/services/integrated"
    }
  ];

  const faqData = [
    {
      question: `What makes Yak Media different from other ${cityData.city} marketing agencies?`,
      answer: "We combine content creation + paid ads under one roof, so creative and media aren't siloed. This integrated approach delivers faster, more measurable growth."
    },
    {
      question: `How much does marketing cost in ${cityData.city}?`,
      answer: "Budgets vary, but most local businesses see strong results investing $2,500–$5,000/month in combined creative + media management. We'll customize a plan that matches your goals."
    },
    {
      question: `Which platforms are best for ${cityData.city} businesses?`,
      answer: "For most local businesses, Meta (Facebook + Instagram), Google Search/Display, and TikTok deliver the best results. For B2B, we often layer in LinkedIn ads."
    },
    {
      question: "Do you only work with large companies?",
      answer: "No — we work with both local small businesses and growing regional brands. Whether you're a single-location restaurant or a multi-city startup, we'll build a plan that works for you."
    },
    {
      question: "How quickly can I expect results?",
      answer: `Most ${cityData.city} clients see momentum in the first 30–60 days with full ROI lift over 3–6 months, depending on spend and goals.`
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
                  Marketing Agency in {cityData.city}, AZ
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                  Yak Media helps {cityData.city} businesses grow with creative content, paid ads, and social-first strategies that drive measurable results.
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
                Work With Us
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

      {/* Introduction: Why Local Businesses Need Modern Marketing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-black mb-6">
              Why {cityData.city} Businesses Need Modern Marketing
            </h2>
          </div>
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              {cityData.city === 'Phoenix' && 
                "Phoenix is one of the fastest-growing metro areas in the country, home to a booming mix of restaurants, hospitality, healthcare, real estate, and startups. With competition heating up across every industry, standing out takes more than just good design — it takes marketing that performs."
              }
              {cityData.city === 'Scottsdale' && 
                "Scottsdale's luxury market demands marketing that matches its premium positioning. From high-end resorts and spas to exclusive dining and luxury retail, your brand needs to connect with sophisticated customers while maintaining the elegance they expect."
              }
              {cityData.city === 'Tempe' && 
                "Home to Arizona State University and a thriving tech scene, Tempe's young, educated demographic demands fresh, innovative marketing that speaks their language. With 80,000+ students and growing tech companies, the opportunities are endless for brands that get it right."
              }
              {cityData.city === 'Mesa' && 
                "As Arizona's third-largest city, Mesa's diverse communities and rapid growth create incredible opportunities. From established neighborhoods to emerging business districts, your marketing needs to speak to multiple audiences effectively."
              }
              {cityData.city === 'Chandler' && 
                "Chandler's tech corridor and business-friendly environment attract innovative companies and professionals. As Arizona's technology capital, hosting major companies like Intel and PayPal, this sophisticated market demands equally sophisticated marketing."
              }
              {cityData.city === 'Gilbert' && 
                "Gilbert's family-focused community and high quality of life attract successful professionals and growing families. Consistently ranked among America's safest cities, this discerning market values authenticity and quality above all."
              }
              {cityData.city === 'Glendale' && 
                "Home to major sports teams and entertainment venues, Glendale thrives on excitement and community energy. From sports bars to retail destinations, businesses here need marketing that captures attention and drives immediate action."
              }
            </p>
            <p>
              At Yak Media, we combine content creation, paid media, and strategic storytelling to help {cityData.city} businesses cut through the noise, connect with their audience, and scale faster.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Our Services: Built to Drive Growth in {cityData.city}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive marketing services designed for the competitive {cityData.city} market
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
                Why {cityData.city} Businesses Choose Yak Media
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {cityData.city} businesses choose Yak Media because we understand the local market while also bringing global advertising expertise. Whether you're a {cityData.city === 'Scottsdale' ? 'luxury resort' : cityData.city === 'Tempe' ? 'startup' : cityData.city === 'Mesa' ? 'healthcare brand' : cityData.city === 'Chandler' ? 'tech company' : cityData.city === 'Gilbert' ? 'family business' : cityData.city === 'Glendale' ? 'sports bar' : 'local restaurant'}, we know how to reach your audience and turn attention into growth.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-2xl text-blue-400">500+</div>
                  <div className="text-sm text-gray-400">Campaigns Launched</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl text-blue-400">15M+</div>
                  <div className="text-sm text-gray-400">Impressions Generated</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl text-blue-400">300%</div>
                  <div className="text-sm text-gray-400">Average ROI Increase</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl text-blue-400">98%</div>
                  <div className="text-sm text-gray-400">Client Retention Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlZ3JhdGVkJTIwbWFya2V0aW5nJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU3OTkwMzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Marketing team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-black mb-12">
            What {cityData.city} Businesses Are Saying
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="text-4xl text-blue-500">"</div>
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                {cityData.testimonial.quote}
              </blockquote>
              <div className="pt-6">
                <div className="text-black">{cityData.testimonial.author}</div>
                <div className="text-gray-600">{cityData.testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about marketing services in {cityData.city}
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200"
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Serving the Greater Phoenix Valley
            </h2>
            <p className="text-lg text-gray-600">
              Local expertise across Arizona's fastest-growing communities
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
                  Ready to Grow Your {cityData.city} Business?
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Let's create content and campaigns that actually move the needle.
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