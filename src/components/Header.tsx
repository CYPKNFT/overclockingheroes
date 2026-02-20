import { Zap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-display text-lg font-bold tracking-tight">
            OverClockingHeroes
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://ko-fi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-4 py-2 font-display text-sm font-semibold text-primary-foreground transition-all hover:glow-primary hover:scale-105"
          >
            Donate
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
