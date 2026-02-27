"use client";

import { useState, useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthly: 39,
    yearly: 390,
    desc: "Great for small teams getting started.",
    features: ["5,000 tracked users", "Core analytics", "Simple dashboards", "Email support", "Weekly reports"],
    popular: false,
  },
  {
    name: "Growth",
    monthly: 99,
    yearly: 990,
    desc: "For fast-growing teams who are scaling.",
    features: ["Everything in starter", "50,000 tracked users", "Funnel & drop-off analysis", "Custom dashboards", "Team collaboration tools"],
    popular: true,
  },
  {
    name: "Premium",
    monthly: 299,
    yearly: 2990,
    desc: "Great for enterprises to convert more.",
    features: ["All Growth features", "Unlimited tracked users", "Dedicated account manager", "SLA & compliance support", "Advanced integrations"],
    popular: false,
  },
];

const PricingSection = () => {
  const [yearly, setYearly] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveTab(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector("div")?.offsetWidth || 0;
      const gap = 24; // gap-6
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-section-bg border-t border-border">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4 px-4 py-1 bg-primary/10 rounded-full inline-block">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Choose The Best<br />Plan That Suits You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Flexible pricing built for every stage — from startup to scale, no hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full p-1.5 shadow-sm">
            <button
              className={`px-6 py-2 text-sm font-semibold rounded-full transition-all ${!yearly ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 text-sm font-semibold rounded-full transition-all ${yearly ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setYearly(true)}
            >
              Yearly
            </button>
            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full ml-2">
              Save 20%
            </span>
          </div>
        </div>

        {/* Mobile: Horizontal scroll | Desktop: Grid */}
        <div className="relative group">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pt-6 pb-8 md:py-8 md:overflow-visible gap-6 md:grid md:grid-cols-3 md:gap-6 max-w-5xl mx-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-auto md:px-0"
          >
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`h-full flex flex-col min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center rounded-3xl border p-6 relative transition-all duration-300 hover:shadow-2xl ${plan.popular ? "border-primary bg-background shadow-xl ring-4 ring-primary/5 md:scale-105 z-10" : "border-border bg-card hover:border-primary/30"}`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary/20">
                    Most Popular
                  </span>
                )}
                <p className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-bold text-foreground tracking-tight">
                    ${yearly ? Math.round(plan.yearly / 12) : plan.monthly}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{plan.desc}</p>

                <div className="h-px bg-border mb-8" />

                <p className="text-xs font-bold text-foreground mb-4 uppercase tracking-wider">What's included</p>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-1 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check size={10} className="text-primary font-bold" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#pricing"
                  className={`mt-auto block w-full text-center py-3.5 rounded-xl text-sm font-bold transition-all ${plan.popular
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90"
                    : "bg-foreground text-background hover:opacity-90"
                    }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* Pagination dots for mobile */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {plans.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all ${activeTab === i ? "bg-primary w-6" : "bg-primary/20"}`}
                aria-label={`Go to plan ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
