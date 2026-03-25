import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes, 14 days free for the Software tier. Revenue Management and Remote Management tiers start after a discovery call.",
  },
  {
    q: "How do you track revenue for percentage-based pricing?",
    a: "We integrate with your Airbnb and Vrbo accounts to pull revenue data automatically. Fully transparent. You can see the calculation anytime.",
  },
  {
    q: "Do I need to use all the features?",
    a: "No. Start with the Software tier ($97-197/mo flat rate) and upgrade to Revenue Management or Remote Management when you're ready.",
  },
  {
    q: "What's the difference between 10% and 15% Remote Management?",
    a: "10% covers guest communication, listings, and reporting. 15% adds vendor coordination, meaning we manage your cleaners, maintenance, and supplies.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Software tier: cancel anytime. Revenue Management and Remote Management: 30-day notice.",
  },
  {
    q: "Do you require exclusivity?",
    a: "No. You keep full control. We're a partner, not a takeover.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className="accent-line mb-6" />
          <h2 className="text-foreground">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="card-elevated px-5 md:px-6 border-border"
              >
                <AccordionTrigger className="text-sm md:text-base font-medium text-foreground py-4 md:py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-text-secondary pb-4 md:pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
