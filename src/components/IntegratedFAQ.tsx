import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    question: "What does 'integrated' actually mean?",
    answer: "It means your creative, media, and strategy teams aren't working in silos. Every campaign is built from the ground up with all three in sync—so your content is designed to perform in paid ads, your media buys align with your brand message, and your strategy connects everything into one cohesive system."
  },
  {
    question: "Why does it matter if everything is under one roof?",
    answer: "Speed, alignment, and cost. When creative, media, and strategy live in different agencies, you waste time in handoffs, lose clarity in communication, and pay more for less coordination. With everything integrated, we move faster, iterate smarter, and get better results."
  },
  {
    question: "Do I really need all three services?",
    answer: "Not necessarily. You can start with just one—but the real power comes when they work together. Creative without media is just content. Media without strategy is just spending. Strategy without execution is just a deck. Integration is what turns all three into revenue."
  },
  {
    question: "How is this different from hiring a 'full-service' agency?",
    answer: "Most full-service agencies have separate teams that barely talk to each other. We built Yak Media specifically to integrate creative, media, and strategy from day one—so every team member knows the full picture and works toward the same goals."
  }
];

export function IntegratedFAQ() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Yak Media&apos;s integrated approach.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-medium text-lg hover:text-purple-500 transition-colors">
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
