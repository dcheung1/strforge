import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "STR Forge gave me a real operating foundation instead of guesswork. Everything was structured and executable.",
    author: "Former Tech Executive",
    context: "4-unit portfolio, launched Q3",
  },
  {
    quote: "I didn't have time to figure this out myself. They handled the build, I focused on my career, and now I own a functioning business.",
    author: "Healthcare Professional",
    context: "First-time operator",
  },
  {
    quote: "The handoff was smooth. Clear documentation, proven systems, and a portfolio that was already stabilized.",
    author: "Management Consultant",
    context: "5-unit portfolio",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <div className="accent-line mb-6" />
          <h2 className="text-foreground">Client Outcomes</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="card-elevated p-5 md:p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-5 right-5 md:top-6 md:right-6" />
              
              <blockquote className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground text-sm">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {testimonial.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
