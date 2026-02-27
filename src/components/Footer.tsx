const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-foreground">Alytics</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2025 Alytics. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="#terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          <a href="mailto:support@alytics.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
