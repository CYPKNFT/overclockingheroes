import { useState } from "react";
import { Zap } from "lucide-react";
import VideoEmbed from "./VideoEmbed";
import heroBg from "@/assets/hero-bg.jpg";

const VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "Rick Astley – Never Gonna Give You Up" },
  { id: "9bZkp7q19f0", title: "PSY – Gangnam Style" },
  { id: "kJQP7kiw5Fk", title: "Luis Fonsi – Despacito" },
  { id: "RgKAFK5djSk", title: "Wiz Khalifa – See You Again" },
  { id: "JGwWNGJdvx8", title: "Ed Sheeran – Shape of You" },
  { id: "fJ9rUzIMcZQ", title: "Queen – Bohemian Rhapsody" },
  { id: "CevxZvSJLk8", title: "Katy Perry – Roar" },
  { id: "hT_nvWreIhg", title: "OneRepublic – Counting Stars" },
];

const HeroSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(VIDEOS[0].id);

  return (
    <section className="relative overflow-hidden pt-20">
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

      <div className="container mx-auto flex flex-col items-center gap-8 px-6 pt-10 pb-4 md:pt-14 md:pb-6">
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
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Welcome to <strong className="text-foreground">OverClockingHeroes</strong> — your university for PC overclocking,
            benchmarking, and gaming performance. Subscribe and join the community.
          </p>
        </div>

        {/* Video */}
        <VideoEmbed videoId={selectedVideo} />

        {/* Video selector bar */}
        <div className="w-full max-w-4xl overflow-x-auto scrollbar-thin">
          <div className="flex gap-2 pb-2">
            {VIDEOS.map((video, i) => (
              <button
                key={i}
                onClick={() => setSelectedVideo(video.id)}
                className={`group flex-shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                  selectedVideo === video.id && VIDEOS.findIndex(v => v.id === selectedVideo) === i
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-transparent hover:border-primary/40"
                }`}
              >
                <div className="relative w-28 md:w-36">
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="h-16 md:h-20 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />
                  <span className="absolute bottom-0.5 left-1 right-1 truncate text-[10px] font-medium text-white">
                    {video.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
