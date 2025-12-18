import { motion } from "framer-motion";

const TempleBarCaseStudy = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-card shadow-2xl"
          style={{
            backgroundImage: 'url(/Photos/Temple.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="bg-black/60 backdrop-blur-sm p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Case Study
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white">
                The Temple Bar Pub: From Local to{" "}
                <span className="text-gradient">Limitless</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-white/90">
                See how we transformed The Temple Bar Pub's social media presence, driving massive growth in engagement and followers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">📈</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-2 text-white">Instagram Views</h3>
                <p className="text-white/90 mb-4">
                  Monthly views grew from <strong className="text-white">1.1 million</strong> to <strong className="text-white">5.4 million</strong>
                </p>
                <div className="text-primary font-semibold text-lg">
                  +390% Growth
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">👥</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-2 text-white">Instagram Followers</h3>
                <p className="text-white/90 mb-4">
                  Followers increased from <strong className="text-white">128,000</strong> to <strong className="text-white">178,000</strong> in just four months
                </p>
                <div className="text-primary font-semibold text-lg">
                  +39% Growth
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">🎵</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-2 text-white">TikTok Followers</h3>
                <p className="text-white/90 mb-4">
                  Followers grew from <strong className="text-white">33,000</strong> to <strong className="text-white">51,000</strong> in four months
                </p>
                <div className="text-primary font-semibold text-lg">
                  +55% Growth
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleBarCaseStudy;