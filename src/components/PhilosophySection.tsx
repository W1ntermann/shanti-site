import { motion } from 'framer-motion';
import { Brain, Shield, Target, Heart } from 'lucide-react';

const philosophyPrinciples = [
  {
    icon: Shield,
    title: "Ethical Technology",
    desc: "Building responsible AI that serves humanity, not exploits it",
    color: "text-primary"
  },
  {
    icon: Target,
    title: "Transparency First", 
    desc: "Open-source algorithms, auditable strategies, verifiable results",
    color: "text-secondary"
  },
  {
    icon: Brain,
    title: "Research-Driven",
    desc: "Scientific approach to AI development and market analysis", 
    color: "text-accent"
  }
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/8 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-8"
          >
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-wider">
              Our Philosophy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-black text-gradient-primary text-glow-enhanced mb-8 uppercase tracking-tight"
          >
            Building The Future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed max-w-4xl mx-auto mb-6"
          >
            We believe in building <span className="text-secondary font-medium text-glow-magenta">ethical and transparent technology</span>. 
            ShantiAI is a research project – not a financial product.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground font-mono text-lg max-w-3xl mx-auto"
          >
            Our mission is to explore the boundaries of AI in finance, guided by responsibility, innovation, and openness.
          </motion.p>
        </div>

        {/* Philosophy principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {philosophyPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/60 border border-border backdrop-blur-sm p-8 clip-corner-br group hover:border-primary/50 transition-all duration-300 text-center relative"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 ${principle.color} relative z-10`}>
                <div className="w-full h-full bg-card border border-current/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_currentColor] transition-all duration-300">
                  <principle.icon className="w-8 h-8" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-xl font-display font-bold mb-4 ${principle.color} text-glow-cyan uppercase tracking-wider`}>
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 backdrop-blur-md p-12 clip-corner-tl-br text-center relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30 animate-pulse" />
          
          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/40 rounded-full mb-6"
            >
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-accent font-mono text-xs font-bold uppercase tracking-widest">
                Core Mission
              </span>
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 uppercase tracking-wide">
              Democratizing Financial Intelligence
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              We're not just building another trading bot. We're creating a movement towards 
              <span className="text-primary font-medium"> fair, transparent, and accessible</span> financial markets 
              powered by cutting-edge AI technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-primary">
                <Shield className="w-5 h-5" />
                <span className="font-mono text-sm font-bold">Not Financial Advice</span>
              </div>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <div className="flex items-center gap-2 text-secondary">
                <Brain className="w-5 h-5" />
                <span className="font-mono text-sm font-bold">Research Project</span>
              </div>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <div className="flex items-center gap-2 text-accent">
                <Target className="w-5 h-5" />
                <span className="font-mono text-sm font-bold">Open Source</span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-accent rounded-full animate-pulse opacity-60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}