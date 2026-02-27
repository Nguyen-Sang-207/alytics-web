import Image from "next/image";

const partner1 = "/assets/partner-1.png";
const partner2 = "/assets/partner-2.png";
const partner3 = "/assets/partner-3.png";
const partner4 = "/assets/partner-4.png";
const partner5 = "/assets/partner-5.png";
const partner6 = "/assets/partner-6.png";

const logos = [partner1, partner2, partner3, partner4, partner5, partner6];

const LogoBar = () => {
  return (
    <section className="py-12 border-t border-border">
      <div className="section-container">
        <p className="text-xs font-bold text-muted-foreground tracking-[0.2em] uppercase text-center mb-10">
          Trusted by leading companies worldwide
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-marquee items-center gap-16" style={{ width: "max-content" }}>
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="relative h-8 md:h-10 w-24 md:w-32 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                <Image
                  src={logo}
                  alt="Partner logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
