import { X, Check } from "lucide-react";

const otherTools = [
  "Data lives in too many places",
  "Reporting eats up hours",
  "Insights are too generic",
  "No smart guidance for decisions",
  "Hard to see what's really working",
];

const alyticsFeatures = [
  "All your metrics, one platform",
  "Reports generate instantly",
  "Insights tailored to your goals",
  "AI suggests your next move",
  "Clear path to consistent growth",
];

const ComparisonSection = () => {
  return (
    <section className="section-padding bg-background border-t border-border">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4 px-4 py-1 bg-primary/10 rounded-full inline-block">Why Alytics</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            A Smarter Way To<br />Grow With Data
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Turn complex metrics into clear insights that help you make better decisions, faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Other Tools */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Other Tools</h3>
            <ul className="space-y-3">
              {otherTools.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <X size={16} className="text-destructive shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Alytics */}
          <div className="rounded-2xl border-2 border-primary bg-background p-6">
            <div className="flex items-center gap-2 mb-4">
              {/* Logo removed */}
              <h3 className="text-lg font-semibold text-foreground">Alytics</h3>
            </div>
            <ul className="space-y-3">
              {alyticsFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <Check size={16} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
