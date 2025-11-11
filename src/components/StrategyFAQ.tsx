import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    question: "How is Yak Media's strategy different?",
    answer: "We don't believe in one-time strategy decks. Our plans evolve in real time based on data, customer behavior, and what's actually working on the platforms your audience uses. Every strategy we deliver is connected directly to creative and media execution — no silos, no fluff, just results."
  },
  {
    question: "What if I already have a strategy?",
    answer: "Perfect. We'll plug in, pressure-test it, and make it perform better in the current attention economy. We'll refine your targeting, optimize your message, and align your media so it works across every platform."
  },
  {
    question: "Do I need strategy if I already run ads?",
    answer: "Yes — because ads without strategy are just expensive experiments. We make sure every campaign, post, and piece of creative fits into a clear growth plan designed to get measurable results."
  },
  {
    question: "What does the process look like?",
    answer: "Audit your brand, data, and current marketing. Analyze what's working (and what's not). Plan a step-by-step growth roadmap. Execute creative and ads tied directly to your goals. You'll know exactly where your marketing dollars go — and what they return."
  }
];

export function StrategyFAQ() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Yak Media's strategic approach.
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