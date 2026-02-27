import dynamic from "next/dynamic";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IntegrationsSection from "@/components/IntegrationsSection";

// Lazy load below-the-fold sections
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const PricingSection = dynamic(() => import("@/components/PricingSection"));
const ComparisonSection = dynamic(() => import("@/components/ComparisonSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsletterSection = dynamic(() => import("@/components/NewsletterSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
    return (
        <Providers>
            <div className="min-h-screen bg-background">
                <Navbar />
                <main>
                    <HeroSection />
                    <LogoBar />
                    <FeaturesSection />
                    <BenefitsSection />
                    <HowItWorksSection />
                    <IntegrationsSection />
                    <TestimonialsSection />
                    <PricingSection />
                    <ComparisonSection />
                    <FAQSection />
                    <BlogSection />
                    <NewsletterSection />
                </main>
                <Footer />
            </div>
        </Providers>
    );
}
