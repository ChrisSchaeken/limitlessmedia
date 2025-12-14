import { Button } from "@/components/ui/button";
import { DISCOVERY_CALL_URL } from "@/lib/links";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Social Media & Content Creation Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Your Growth Is{" "}
            <span className="text-gradient">Limitless</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            We craft viral content strategies and build engaged communities that transform brands into cultural movements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild variant="hero" size="xl">
              <a href={DISCOVERY_CALL_URL} target="_blank" rel="noreferrer">
                Get a free consultation
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button variant="glass" size="xl">
              <Play className="mr-2" size={18} />
              Watch Our Reel
            </Button>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 gap-8 mt-20 animate-slide-up" style={{ animationDelay: "0.4s" }}> */}
          {/* <div className="" style={{ animationDelay: "0.4s" }}>
            {[
              // { value: "50M+", label: "Total Reach" },
              // { value: "200%", label: "Avg. Growth" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display font-bold text-3xl md:text-4xl text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
