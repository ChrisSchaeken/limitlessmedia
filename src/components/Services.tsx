import { Camera, BarChart3, Users, Megaphone, Video, Sparkles } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Content Creation",
    description: "Scroll-stopping visuals and videos that capture attention and drive engagement.",
  },
  {
    icon: BarChart3,
    title: "Growth Strategy",
    description: "Data-driven campaigns designed to exponentially grow your audience and reach.",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Transform followers into loyal fans with authentic engagement strategies.",
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description: "Strategic partnerships that amplify your brand message to new audiences.",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "From TikToks to brand films, we produce content that resonates and converts.",
  },
  {
    icon: Sparkles,
    title: "Brand Identity",
    description: "Develop a distinctive voice and visual identity that stands out in feeds.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Services That <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Full-service solutions to dominate every platform and grow your digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-8 hover:bg-secondary/50 transition-all duration-500 hover:-translate-y-2 hover:glow"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
