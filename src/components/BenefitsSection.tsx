import { Activity, LayoutDashboard, TrendingUp, Shield, FileText, Zap } from "lucide-react";

const benefits = [
  { icon: Activity, title: "Real-Time Tracking", desc: "Monitor user activity instantly for smarter decision-making." },
  { icon: LayoutDashboard, title: "All-in-One View", desc: "Keep all your analytics in one place, without jumping between tools." },
  { icon: TrendingUp, title: "Actionable Insights", desc: "Track the metrics that matter most for sustainable business growth." },
  { icon: Shield, title: "Secure Data", desc: "Keep your analytics safe with advanced security and strong encryption." },
  { icon: FileText, title: "Custom Reports", desc: "Create tailored reports that fit your needs and highlight key insights." },
  { icon: Zap, title: "Simple to Use", desc: "Navigate easily—no steep learning curve, start making better decisions quickly." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-section-bg border-t border-border">
      <div className="section-container">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4 px-4 py-1 bg-primary/10 rounded-full inline-block">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Benefits That Truly<br />Matter To You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Monitor metrics as they happen, so you can respond quickly and keep your goals on track.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="group bg-background rounded-2xl border border-border p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <b.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
