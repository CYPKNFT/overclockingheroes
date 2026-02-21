import { Zap } from "lucide-react";
import VideoEmbed from "./VideoEmbed";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-20 dark:opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-grid" />

      <div className="container mx-auto flex flex-col items-center gap-12 px-6 py-20 md:py-28">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <Zap className="h-3.5 w-3.5 text-primary" />
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
            YouTube • Overclocking • Gaming
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Push Your Hardware
            <br />
            <span className="text-primary text-glow">Beyond the Limit</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Welcome to <strong className="text-foreground">OverClockingHeroes</strong> — your university for PC overclocking, 
            benchmarking, and gaming performance. Subscribe and join the community.
          </p>
        </div>

        {/* Video */}
        <VideoEmbed />

        {/* CTA below video */}
        <a
          href="https://ko-fi.com/overclockingheroes"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-display text-base font-bold text-accent-foreground transition-all hover:scale-105 glow-accent animate-pulse-glow"
        >
          <Zap className="h-5 w-5 transition-transform group-hover:rotate-12" />
          Support Us on Ko-fi
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
