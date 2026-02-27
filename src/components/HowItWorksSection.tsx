"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const stepConnect = "/assets/step-connect.png";
const stepTrack = "/assets/step-track.png";
const stepAction = "/assets/step-action.png";

const steps = [
  {
    title: "Connect Your Product",
    desc: "Integrate in minutes with your existing stack—no engineering lift required.",
    image: stepConnect,
  },
  {
    title: "Track User Behavior",
    desc: "See what's used, what's dropped, and what keeps users engaged.",
    image: stepTrack,
  },
  {
    title: "Turn Insights Into Action",
    desc: "Get clear, actionable recommendations to boost retention and grow MRR.",
    image: stepAction,
  },
];

const HowItWorksSection = () => {
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
    <section className="section-padding bg-background border-t border-border">
      <div className="section-container">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4 px-4 py-1 bg-primary/10 rounded-full inline-block">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Get Clear Answers<br />In 3 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From data to clarity—uncover insights, take action, and grow smarter in three simple steps.
          </p>
        </div>

        <div className="relative group">
          {/* Mobile: Horizontal scroll | Desktop: Grid */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-8 md:pb-0 gap-6 md:grid md:grid-cols-3 md:gap-6 max-w-6xl mx-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-auto md:px-0"
          >
            {steps.map((s, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-0 snap-center group rounded-3xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all flex flex-col">
                <div className="relative aspect-video bg-muted/30 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 33vw, 350px"
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots for mobile */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className="w-4 h-4 flex items-center justify-center transition-all group"
                aria-label={`Go to step ${i + 1}`}
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

export default HowItWorksSection;
