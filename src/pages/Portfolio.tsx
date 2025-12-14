import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, TrendingUp, Users, Eye, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DISCOVERY_CALL_URL } from "@/lib/links";

const categories = ["All", "Hospitality", "E-commerce", "Tech", "Lifestyle", "Food & Beverage"];

const caseStudies = [
  {
    id: 1,
    client: "The Temple Bar",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1514362453360-8f94243c9996?w=800&auto=format&fit=crop",
    description: "Transforming Dublin's iconic pub into a viral social media sensation",
    metrics: { followers: "+340%", views: "2.4M", engagement: "+290%", revenue: "+85%" },
    color: "from-primary to-accent",
  },
  {
    id: 2,
    client: "Urban Threads",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
    description: "Scaling a streetwear brand from local to international recognition",
    metrics: { followers: "+520%", views: "4.1M", engagement: "+380%", revenue: "+210%" },
    color: "from-accent to-primary",
  },
  {
    id: 3,
    client: "TechFlow AI",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    description: "Building thought leadership for a cutting-edge AI startup",
    metrics: { followers: "+280%", views: "1.8M", engagement: "+190%", revenue: "+120%" },
    color: "from-primary via-accent to-primary",
  },
  {
    id: 4,
    client: "Zen Wellness",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop",
    description: "Creating a mindful community around holistic health practices",
    metrics: { followers: "+450%", views: "3.2M", engagement: "+320%", revenue: "+175%" },
    color: "from-accent to-primary",
  },
  {
    id: 5,
    client: "Savory Bites",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop",
    description: "Making a local restaurant chain go viral with mouthwatering content",
    metrics: { followers: "+620%", views: "5.7M", engagement: "+410%", revenue: "+250%" },
    color: "from-primary to-accent",
  },
  {
    id: 6,
    client: "NovaTech Solutions",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
    description: "Positioning a B2B SaaS company as an industry leader",
    metrics: { followers: "+180%", views: "980K", engagement: "+150%", revenue: "+95%" },
    color: "from-accent via-primary to-accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter((study) => study.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], scale: [1.1, 1, 1.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Our Work</span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">
              Success{" "}
              <span className="text-gradient">Stories</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we've helped brands break through the noise and achieve extraordinary growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "gradient-primary text-primary-foreground shadow-glow"
                    : "glass text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredStudies.map((study) => (
              <motion.article
                key={study.id}
                variants={itemVariants}
                layout
                className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-40`} />
                  <div className="absolute top-4 right-4">
                    <span className="glass px-3 py-1 rounded-full text-xs font-medium text-foreground">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-gradient transition-all duration-300">
                      {study.client}
                    </h3>
                    <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors duration-300" size={20} />
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">{study.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="text-primary" size={16} />
                      <span className="text-sm">
                        <span className="text-foreground font-semibold">{study.metrics.followers}</span>
                        <span className="text-muted-foreground"> Followers</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="text-accent" size={16} />
                      <span className="text-sm">
                        <span className="text-foreground font-semibold">{study.metrics.views}</span>
                        <span className="text-muted-foreground"> Views</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="text-primary" size={16} />
                      <span className="text-sm">
                        <span className="text-foreground font-semibold">{study.metrics.engagement}</span>
                        <span className="text-muted-foreground"> Engage</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="text-accent" size={16} />
                      <span className="text-sm">
                        <span className="text-foreground font-semibold">{study.metrics.revenue}</span>
                        <span className="text-muted-foreground"> Revenue</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                Ready to Be Our Next{" "}
                <span className="text-gradient">Success Story?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Join the brands that have achieved extraordinary growth with Limitless Media.
              </p>
              <Button asChild variant="hero" size="xl">
                <a href={DISCOVERY_CALL_URL} target="_blank" rel="noreferrer">
                  Get a free consultation
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
