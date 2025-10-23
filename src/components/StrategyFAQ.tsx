import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    question: "How is Yak Media's strategy different?",
    answer: "We don't create one big idea and hope it lasts—we build systems that adapt in real time based on data, culture, and consumer behavior. Our strategies are living, breathing frameworks that evolve with your audience and the platforms they use."
  },
  {
    question: "What if my brand already has a strategy?",
    answer: "Perfect. We'll plug in, stress test it, and layer in platform-first execution so it works in today's world. We're not here to tear down what's working—we're here to make it work better in the attention economy."
  },
  {
    question: "How do you make sure strategy connects to results?",
    answer: "Our plans are tied directly to creative and media execution. No silos—everything works together toward growth. Every strategic recommendation comes with clear success metrics and implementation steps that our teams can execute immediately."
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