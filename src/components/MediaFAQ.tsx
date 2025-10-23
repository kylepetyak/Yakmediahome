import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    question: "Who leads Yak Media's media strategy?",
    answer: "Our media strategy is led by platform specialists who manage campaigns hands-on every day. Each team member specializes in 1-2 platforms maximum, ensuring deep expertise rather than surface-level knowledge across many channels. Your Google Ads specialist lives in Google Ads, your Meta specialist knows every Facebook feature."
  },
  {
    question: "What platforms do you run ads on?",
    answer: "We focus on the platforms that drive real business results: Meta (Facebook & Instagram), Google (Search, Display, YouTube), TikTok, LinkedIn, Snapchat, Pinterest, and Reddit. We're platform-agnostic—we follow your audience, not the latest trend. If your customers are there, we can reach them effectively."
  },
  {
    question: "How is Yak Media's approach different?",
    answer: "We optimize for business outcomes, not vanity metrics. While others chase reach and impressions, we focus on metrics that actually matter to your bottom line: cost per acquisition, return on ad spend, lifetime value, and revenue growth. Every campaign is designed to deliver measurable business results."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Results vary by industry and starting point, but our clients typically see 25-40% improvement in key performance metrics within the first 90 days. We focus on sustainable, scalable growth rather than short-term spikes. Most importantly, we'll show you exactly how our media spend translates to business growth."
  }
];

export function MediaFAQ() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Yak Media's approach to performance marketing.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-500 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}