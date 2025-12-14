import { TrendingUp, Users, Heart, Eye, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const metrics = [
  {
    icon: Users,
    value: 45000,
    suffix: "+",
    label: "New Followers",
    growth: "+340%",
    color: "primary",
  },
  {
    icon: Eye,
    value: 2.4,
    suffix: "M",
    label: "Monthly Views",
    growth: "+520%",
    color: "accent",
  },
  {
    icon: Heart,
    value: 180,
    suffix: "K",
    label: "Engagements",
    growth: "+290%",
    color: "primary",
  },
  {
    icon: TrendingUp,
    value: 85,
    suffix: "%",
    label: "Revenue Increase",
    growth: "YoY",
    color: "accent",
  },
];

const monthlyData = [
  { month: "Jan", followers: 12000, engagement: 2.1 },
  { month: "Feb", followers: 18000, engagement: 3.2 },
  { month: "Mar", followers: 25000, engagement: 4.1 },
  { month: "Apr", followers: 32000, engagement: 5.3 },
  { month: "May", followers: 41000, engagement: 6.8 },
  { month: "Jun", followers: 45000, engagement: 7.2 },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const formatValue = (val: number) => {
    if (suffix === "M") return val.toFixed(1);
    if (suffix === "K") return Math.round(val);
    return Math.round(val);
  };

  return (
    <span ref={ref}>
      {formatValue(displayValue)}{suffix}
    </span>
  );
};

const CaseStudy = () => {
  const maxFollowers = Math.max(...monthlyData.map(d => d.followers));

  return (
    <section id="case-study" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Featured Case Study
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            The <span className="text-gradient-accent">Temple Bar</span> Success Story
          </h2>
          <p className="text-muted-foreground text-lg">
            How we transformed Dublin's iconic pub into a social media phenomenon, driving record engagement and foot traffic.
          </p>
        </div>

        {/* Main Case Study Card */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Story */}
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-accent font-medium">6-Month Campaign</span>
              </div>
              
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-6">
                From Local Landmark to Global Destination
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Temple Bar came to us with a challenge: maintain their authentic Irish pub charm while reaching a younger, global audience. We crafted a content strategy that celebrated their heritage while creating viral moments.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Authentic storytelling showcasing 180+ years of history",
                  "User-generated content campaigns with international visitors",
                  "Behind-the-scenes series with staff and musicians",
                  "Strategic TikTok and Instagram Reels optimization",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full gradient-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowUpRight className="w-3 h-3 text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Growth Chart */}
            <div className="bg-card/50 rounded-2xl p-6 border border-border">
              <h4 className="font-display font-semibold text-lg mb-6">Follower Growth Over 6 Months</h4>
              
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground w-8">{data.month}</span>
                    <div className="flex-1 h-8 bg-secondary rounded-lg overflow-hidden relative">
                      <div 
                        className="h-full gradient-primary rounded-lg transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${(data.followers / maxFollowers) * 100}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold w-16 text-right">
                      {(data.followers / 1000).toFixed(0)}K
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Growth</span>
                <span className="text-2xl font-display font-bold text-gradient">+275%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${metric.color === 'primary' ? 'gradient-primary' : 'gradient-accent'}`}>
                <metric.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <div className={`font-display font-bold text-3xl mb-1 ${metric.color === 'primary' ? 'text-gradient' : 'text-gradient-accent'}`}>
                <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              </div>
              
              <div className="text-muted-foreground text-sm mb-2">{metric.label}</div>
              
              <div className={`inline-flex items-center gap-1 text-xs font-semibold ${metric.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                <TrendingUp className="w-3 h-3" />
                {metric.growth}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
