import { Zap, Youtube, Twitter, MessageCircle, MapPin, GraduationCap, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-display text-lg font-bold tracking-tight">
                OverClockingHeroes
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Pushing hardware to the limit, one benchmark at a time.
              Your university CS group for PC overclocking, benchmarking, and gaming performance.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-2 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-2 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-2 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                aria-label="Discord"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* About column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                <span>
                  Computer Science students at <strong className="text-foreground">Oregon State University</strong> — the alma mater of Jensen Huang, CEO of NVIDIA
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                <span>Corvallis, Oregon</span>
              </div>
            </div>
          </div>

          {/* Support column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Support
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every donation helps us buy hardware to test, benchmark, and push to the absolute limit.
            </p>
            <a
              href="https://ko-fi.com/overclockingheroes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-display text-sm font-bold text-accent-foreground transition-all hover:scale-105"
            >
              <Heart className="h-4 w-4" />
              Donate on Ko-fi
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} OverClockingHeroes. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-accent" /> at Oregon State University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
