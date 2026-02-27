"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const featureUnified = "/assets/feature-unified.png";
const featureAi = "/assets/feature-ai.png";
const featureTracking = "/assets/feature-tracking.png";
const featureImpact = "/assets/feature-impact.png";

const features = [
  {
    title: "Unified Metrics",
    desc: "See your MRR and active users in one clean, unified view — no more switching tabs.",
    image: featureUnified,
  },
  {
    title: "AI Growth Insights",
    desc: "Actionable suggestions from your data, without digging into spreadsheets or dashboards.",
    image: featureAi,
  },
  {
    title: "Product Usage Tracking",
    desc: "Track how users engage with your app live to uncover patterns and optimize features.",
    image: featureTracking,
  },
  {
    title: "Feature Impact Analysis",
    desc: "Know exactly which features drive long-term retention—and which ones don't contribute.",
    image: featureImpact,
  },
];

const FeaturesSection = () => {
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
      const gap = 32; // gap-8
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="features" className="section-padding bg-background border-t border-border">
      <div className="section-container">
        <div className="max-w-3xl mb-20 text-center md:text-left mx-auto md:mx-0">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4 px-4 py-1 bg-primary/10 rounded-full inline-block">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Make Your Platform<br />Work Harder For You
          </h2>
          <p className="text-lg text-muted-foreground">
            Streamline your business with unified metrics and AI-powered analytics—all in one place.
          </p>
        </div>

        <div className="relative group">
          {/* Mobile: Horizontal scroll | Desktop: Grid */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-8 md:pb-0 gap-4 md:grid md:grid-cols-4 md:gap-4 lg:gap-6 max-w-6xl mx-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-auto md:px-0"
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="min-w-[85vw] md:min-w-0 snap-center rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 group"
              >
                <div className="relative overflow-hidden bg-muted/20 aspect-video">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 25vw, 250px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots for mobile */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-4 h-4 flex items-center justify-center transition-all group`}
                aria-label={`Go to feature ${i + 1}`}
              >
                <span className={`rounded-full transition-all ${activeTab === i ? "bg-primary w-6 h-2" : "bg-primary/20 w-2 h-2 group-hover:bg-primary/40"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
