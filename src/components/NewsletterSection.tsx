import Image from "next/image";

const envelope = "/assets/envelope.png";

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="section-padding border-t border-border">
      <div className="section-container">
        <div className="relative rounded-3xl bg-primary overflow-hidden px-8 py-16 text-center">
          {/* Decorative envelopes */}
          <div className="absolute -left-10 -top-10 w-40 h-40 opacity-20 rotate-[-20deg]">
            <Image
              src={envelope}
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 opacity-20 rotate-[20deg]">
            <Image
              src={envelope}
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 relative z-10 leading-tight">
            Subscribe to the<br />Alytics Newsletter!
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto mb-10 relative z-10 leading-relaxed">
            Get expert tips, updates, and smart analytics insights delivered straight to your inbox.
          </p>
          <a
            href="#newsletter"
            className="relative z-10 inline-flex items-center px-8 py-4 bg-background text-foreground text-sm font-bold rounded-xl hover:opacity-90 transition-all shadow-xl"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
