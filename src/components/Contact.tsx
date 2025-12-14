import { Button } from "@/components/ui/button";
import { DISCOVERY_CALL_URL } from "@/lib/links";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 gradient-primary opacity-10" />
            <div className="absolute inset-0 glass" />
            
            <div className="relative p-8 md:p-16 text-center">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Ready to Go Limitless?
              </span>
              
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Let's Create Something{" "}
                <span className="text-gradient">Extraordinary</span>
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Whether you're launching a brand or scaling to millions, we're here to make your vision reality. Book a free strategy call today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button asChild variant="hero" size="xl">
                  <a href={DISCOVERY_CALL_URL} target="_blank" rel="noreferrer">
                    Get a free consultation
                    <ArrowRight className="ml-2" />
                  </a>
                </Button>
                <Button variant="glass" size="xl">
                  View Our Work
                </Button>
              </div>
              
              {/* Contact Info */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                {[
                  { icon: Mail, label: "Email", value: "hello@limitlesmedia.com" },
                  { icon: Phone, label: "Phone", value: "+353 1 234 5678" },
                  { icon: MapPin, label: "Location", value: "Dublin, Ireland" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
