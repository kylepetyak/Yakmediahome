import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    question: "What makes Yak Media's creative different?",
    answer: "We create content specifically for today's attention economy. Every piece is designed to stop the scroll, drive engagement, and deliver business results. We don't just make pretty content—we make content that works in the real world where algorithms and audiences decide what succeeds."
  },
  {
    question: "How do you blend organic content with paid ads?",
    answer: "Our integrated approach means organic and paid work together from day one. We create content that can live natively on social platforms while also being optimized for paid amplification. This ensures consistent messaging and maximum reach across all touchpoints."
  },
  {
    question: "What platforms do you specialize in?",
    answer: "We focus on where your audience actually spends time: TikTok, Instagram, LinkedIn, YouTube, Meta, and Google. But we're platform-agnostic—we follow the attention, not the trends. If your audience moves, we move with them."
  },
  {
    question: "What results can I expect?",
    answer: "Results vary by industry and goals, but our clients typically see significant improvements in engagement rates, conversion metrics, and brand awareness within the first 90 days. We focus on metrics that matter to your business, not just vanity numbers."
  }
];

interface ServicesFAQProps {
  serviceType: 'services' | 'creative' | 'media' | 'strategy' | 'integrated';
}

export function ServicesFAQ({ serviceType }: ServicesFAQProps) {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with Yak Media.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6"
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