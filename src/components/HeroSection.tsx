"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CreditCard } from "lucide-react";
import Image from "next/image";

const heroDashboard = "/assets/hero-dashboard.png";
const profile1 = "/assets/profile-1.png";
const profile2 = "/assets/profile-2.png";
const profile3 = "/assets/profile-3.png";
const logoVeltix = "/assets/logo-veltix.png";
const logoKnot = "/assets/logo-knot.png";
const logoKlyra = "/assets/logo-klyra.png";
const logoNuvio = "/assets/logo-nuvio.png";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -15]);
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative pt-32 pb-16 overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5 to-transparent -z-10" />
      {/* Floating logos */}
      <div className="absolute left-[5%] top-[30%] hidden lg:block">
        <Image src={logoKnot} alt="Knot Logo" width={64} height={64} className="rounded-xl shadow-lg bg-background p-2" />
      </div>
      <div className="absolute left-[8%] top-[55%] hidden lg:block">
        <Image src={logoVeltix} alt="Veltix Logo" width={56} height={56} className="rounded-xl shadow-lg bg-background p-2" />
      </div>
      <div className="absolute right-[5%] top-[25%] hidden lg:block">
        <Image src={logoNuvio} alt="Nuvio Logo" width={64} height={64} className="rounded-xl shadow-lg bg-background p-2" />
      </div>
      <div className="absolute right-[8%] top-[55%] hidden lg:block">
        <Image src={logoKlyra} alt="Klyra Logo" width={56} height={56} className="rounded-xl shadow-lg bg-background p-2" />
      </div>

      <div className="section-container text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background mb-8">
          <div className="flex -space-x-2">
            <Image src={profile1} alt="User Profile 1" width={24} height={24} className="rounded-full object-cover ring-2 ring-background" />
            <Image src={profile2} alt="User Profile 2" width={24} height={24} className="rounded-full object-cover ring-2 ring-background" />
            <Image src={profile3} alt="User Profile 3" width={24} height={24} className="rounded-full object-cover ring-2 ring-background" />
          </div>
          <span className="text-sm font-medium text-foreground">Trusted by 1M+ users</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto">
          Turn Scattered Data<br /><span className="text-primary italic">Into Smart Decisions</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          One simple dashboard to track your SaaS growth, MRR, churn and user behavior—without the chaos of multiple tools.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="#pricing"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Get Started For Free
          </a>
          <a
            href="mailto:demo@alytics.com"
            className="inline-flex items-center px-8 py-4 bg-background border border-border text-foreground text-sm font-semibold rounded-xl hover:bg-muted transition-all"
          >
            Book a Demo
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-16">
          <CreditCard size={16} className="text-primary" />
          No credit card required
        </div>

        {/* Dashboard image */}
        <div className="max-w-5xl mx-auto relative mt-16 px-4" style={{ perspective: "1000px" }}>
          <motion.div
            style={{
              rotateX: springRotateX,
              transformStyle: "preserve-3d",
            }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-purple-500/10 blur-xl opacity-50 -z-10 rounded-2xl" />
            <Image
              src={heroDashboard}
              alt="Alytics Dashboard"
              width={1024}
              height={576}
              priority
              className="w-full h-auto rounded-2xl shadow-2xl border border-border/50 relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
