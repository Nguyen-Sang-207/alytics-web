import Image from "next/image";

const logoNuvio = "/assets/logo-nuvio.png";
const logoKlyra = "/assets/logo-klyra.png";
const logoKnot = "/assets/logo-knot.png";
const logoVeltix = "/assets/logo-veltix.png";

const integrations = [
  { name: "Nuvio", logo: logoNuvio },
  { name: "Klyra", logo: logoKlyra },
  { name: "Knot", logo: logoKnot },
  { name: "Veltix", logo: logoVeltix },
];

const IntegrationsSection = () => {
  const items = [...integrations, ...integrations, ...integrations, ...integrations];

  return (
    <section id="integrations" className="section-padding bg-section-bg border-t border-border">
      <div className="section-container text-center mb-10">
        <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4 px-4 py-1 bg-primary/10 rounded-full inline-block">Integrations</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          Seamless Integrations
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Connect Alytics with your favorite tools to streamline workflows and keep everything running smoothly.
        </p>
        <a
          href="#pricing"
          className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
        >
          Get Started Now
        </a>
      </div>

      <div className="overflow-hidden mt-12">
        <div className="flex animate-scroll-left items-center gap-8" style={{ width: "max-content" }}>
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-background border border-border rounded-xl px-5 py-3 shrink-0">
              <Image src={item.logo} alt={item.name} width={40} height={40} className="rounded-lg" />
              <span className="text-sm font-medium text-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
