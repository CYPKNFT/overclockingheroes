import { Zap, Youtube, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-display text-base font-bold tracking-tight">
              OverClockingHeroes
            </span>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Pushing hardware to the limit, one benchmark at a time.
            Join us on our journey to overclock everything.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              aria-label="Discord"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} OverClockingHeroes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
