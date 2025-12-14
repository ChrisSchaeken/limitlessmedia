import { motion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

const fallbackVideos = [
  "/videos/Video-149.mp4",
  "/videos/Video-199.mp4",
  "/videos/Video-631.mp4",
  "/videos/Video-880.mp4",
  "/videos/Video-923.mp4",
];

const CaseStudy = () => {
  const videos = useMemo(() => {
    const globVideos = import.meta.glob("/videos/*.{mp4,webm}", {
      eager: true,
      as: "url",
    });
    const discovered = Object.values(globVideos) as string[];
    return discovered.length ? discovered : fallbackVideos;
  }, []);

  const trackVideos = useMemo(() => {
    // Duplicate the list enough times to keep the marquee seamless even with few files.
    const loopFactor = Math.max(3, Math.ceil(12 / videos.length));
    return Array(loopFactor)
      .fill(videos)
      .flat();
  }, [videos]);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              /* ignore play errors (e.g., browser policies) */
            });
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      },
    );

    videoRefs.current.forEach((video) => video && observer.observe(video));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="case-study" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Content Preview
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            An Example of Our Work
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of viral videos we've created to drive growth and engagement.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/90 to-transparent" />

          <div ref={containerRef} className="overflow-hidden rounded-3xl glass p-6">
            <motion.div
              className="flex gap-6 min-w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {trackVideos.map((src, index) => (
                <motion.div
                  key={index}
                  className="h-[200px] aspect-[9/16] rounded-2xl border border-border bg-secondary/40 shadow-lg overflow-hidden flex-none"
                  whileHover={{ scale: 1.02 }}
                >
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                    }}
                    src={src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
