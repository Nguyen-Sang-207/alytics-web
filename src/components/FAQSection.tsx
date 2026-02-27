"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does your platform track feature usage?",
    a: "We automatically collect interaction data across your product and visualize which features are being used most — no manual tagging needed.",
  },
  {
    q: "Do I need technical skills to use Alytics?",
    a: "No, Alytics is designed to be intuitive. Anyone on your team can set up dashboards and start exploring insights without any coding knowledge.",
  },
  {
    q: "Can Alytics integrate with tools we already use?",
    a: "Yes! Alytics integrates seamlessly with popular tools like Slack, Jira, HubSpot, and many more through our built-in connectors.",
  },
  {
    q: "Is my data secure on Alytics?",
    a: "Absolutely. We use industry-standard encryption, SOC 2 compliance, and strict access controls to keep your data safe at all times.",
  },
  {
    q: "Can I try Alytics before committing?",
    a: "Yes, we offer a free plan with core features so you can explore the platform before upgrading to a paid plan.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-section-bg border-t border-border">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4 px-4 py-1 bg-primary/10 rounded-full inline-block">FAQ's</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Common Questions<br />With Clear Answers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Here are answers to the most common things people ask before getting started.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background border border-border rounded-xl px-5"
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
