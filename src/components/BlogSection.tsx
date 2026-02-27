import Image from "next/image";

const blog1 = "/assets/blog-1.png";
const blog2 = "/assets/blog-2.png";
const blog3 = "/assets/blog-3.png";
const blog4 = "/assets/blog-4.png";

const blogs = [
  {
    category: "Operations",
    title: "Streamlining SaaS Without Adding Overhead",
    desc: "A clear look at how efficient operations help SaaS teams reduce friction, stay aligned, and scale without unnecessary complexity.",
    image: blog1,
    readTime: "5 min read",
    large: true,
  },
  {
    category: "Growth",
    title: "Growing a SaaS Without Breaking Systems",
    desc: "How sustainable growth comes from strong foundations, clear processes, and systems that scale as your product and team expand.",
    image: blog2,
  },
  {
    category: "Workflows",
    title: "Designing SaaS Workflows That Scale",
    desc: "A practical guide to building clear, reliable workflows that support growth without adding complexity or slowing teams down.",
    image: blog3,
  },
  {
    category: "Automation",
    title: "The Real Cost of Manual SaaS Work",
    desc: "A practical look at simplifying workflows, reducing manual work, and scaling efficiently with smart automation.",
    image: blog4,
  },
];

const BlogSection = () => {
  return (
    <section id="blogs" className="section-padding bg-background border-t border-border">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4 px-4 py-1 bg-primary/10 rounded-full inline-block">Blogs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Helpful Insights<br />To Help You Grow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our latest articles to help your SaaS product succeed and scale smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Large blog card */}
          <div className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all">
            <div className="relative aspect-[16/9] bg-muted/30 overflow-hidden">
              <Image
                src={blogs[0].image}
                alt={blogs[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">{blogs[0].category}</span>
              <h3 className="text-xl font-bold text-foreground mt-3 mb-2">{blogs[0].title}</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">{blogs[0].desc}</p>
              <span className="text-xs font-medium text-muted-foreground">{blogs[0].readTime}</span>
            </div>
          </div>

          {/* Smaller blog cards */}
          <div className="space-y-4">
            {blogs.slice(1).map((blog, i) => (
              <div key={i} className="group flex flex-col sm:flex-row gap-4 items-center rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all p-3">
                <div className="relative w-full sm:w-32 h-24 shrink-0 rounded-xl overflow-hidden bg-muted/30">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center py-1">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{blog.category}</span>
                  <h3 className="text-base font-bold text-foreground mt-1 mb-1 line-clamp-1">{blog.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{blog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="#blogs" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            View all →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
