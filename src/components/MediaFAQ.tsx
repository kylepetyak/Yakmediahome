import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    question: "Who runs Yak Media's ad strategy?",
    answer: "Our ad strategy is led by specialists who live inside the platforms daily. Each team member focuses on 1–2 channels max — so your Google expert is truly a Google expert, and your Meta buyer knows every setting that drives ROI."
  },
  {
    question: "What platforms do you run ads on?",
    answer: "We focus on the platforms that drive real business results: Meta (Facebook + Instagram), Google (Search, Display, YouTube), TikTok, LinkedIn, and Snapchat. We're not trend-chasers — we go where your customers are and meet them there."
  },
  {
    question: "How is Yak Media's approach different?",
    answer: "We don't optimize for clicks or likes — we optimize for calls, leads, and revenue. While others chase impressions, we focus on metrics that actually grow your business: cost per lead, return on ad spend, and lifetime value."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Most clients see 25–40% improvement in performance metrics within the first 90 days. We'll show you exactly how your ad spend translates into measurable business growth — and we'll document it all inside your live dashboard."
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