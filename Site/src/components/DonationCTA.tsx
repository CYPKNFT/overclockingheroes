import { Heart, Zap } from "lucide-react";

const DonationCTA = () => {
  return (
    <section className="relative py-10">
      <div className="container mx-auto px-6">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-card p-10 text-center">
          {/* Glow effect behind the card */}
          <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
          
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
            <Heart className="h-4 w-4 text-accent" />
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-primary">
              Support the Channel
            </span>
          </div>
          
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Help Us Keep <span className="text-primary">OverClocking</span>
          </h2>
          
          <p className="mb-8 text-muted-foreground">
            Your donations help us buy new hardware to test, benchmark, and push to the absolute limit. 
            Every contribution fuels the next video and keeps the community growing.
          </p>
          
          <a
            href="https://ko-fi.com/overclockingheroes"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-display text-base font-bold text-primary-foreground transition-all hover:scale-105 glow-primary hover:glow-primary-intense"
          >
            <Zap className="h-5 w-5 transition-transform group-hover:rotate-12" />
            Donate on Ko-fi
          </a>
          
          <p className="mt-4 text-xs text-muted-foreground">
            Every dollar goes directly to hardware & content creation
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationCTA;
