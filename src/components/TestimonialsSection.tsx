import Image from "next/image";
import { Star } from "lucide-react";

const avatarCarter = "/assets/avatar-carter.png";
const avatarElena = "/assets/avatar-elena.png";
const avatarJames = "/assets/avatar-james.png";
const avatarMarcus = "/assets/avatar-marcus.png";
const avatarSarah = "/assets/avatar-sarah.png";

const testimonials = [
  {
    text: "We used Alytics to track onboarding drop-off and spotted a friction point instantly. After one small UX tweak, our activation rate jumped by 23%.",
    name: "Carter June",
    avatar: avatarCarter,
  },
  {
    text: "I've tried nearly every analytics tool out there, and Alytics is by far the most intuitive. No need for devs to set things up—our marketing team was running insights independently in hours.",
    name: "Elena Park",
    avatar: avatarElena,
  },
  {
    text: "It's like product analytics finally caught up with design. We use Alytics not just for numbers—but to tell the story behind them. It's become our go-to tool for every launch.",
    name: "James Nair",
    avatar: avatarJames,
  },
  {
    text: "Alytics gave us visibility we didn't even know we were missing. Within the first week, we discovered which features were actually driving retention. It's clean and fast.",
    name: "Marcus Lee",
    avatar: avatarMarcus,
  },
  {
    text: "Since switching to Alytics, we finally understand how users interact with our product. The event tracking is super intuitive and actionable.",
    name: "Sarah Bond",
    avatar: avatarSarah,
  },
];

const TestimonialsSection = () => {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="section-padding bg-background border-t border-border">
      <div className="section-container text-center mb-16">
        <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4 px-4 py-1 bg-primary/10 rounded-full inline-block">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          Hear What Others<br />Say About Us
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          See what top teams say after switching to a smarter product analytics platform.
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-testimonial-scroll gap-6" style={{ width: "max-content" }}>
          {items.map((t, i) => (
            <div key={i} className="w-80 shrink-0 bg-card border border-border rounded-2xl p-6 flex flex-col">
              <p className="text-sm text-foreground mb-6 leading-relaxed flex-grow">{t.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="relative w-10 h-10 shrink-0 overflow-hidden rounded-full border border-border">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
