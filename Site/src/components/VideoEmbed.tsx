interface VideoEmbedProps {
  videoId: string;
}

const VideoEmbed = ({ videoId }: VideoEmbedProps) => {
  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-border shadow-2xl">
      <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-2xl" />
      <div className="aspect-video w-full bg-secondary">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="OverClockingHeroes - Latest Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoEmbed;
