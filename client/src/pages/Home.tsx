import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CyberButton } from "@/components/CyberButton";
import { CyberCard } from "@/components/CyberCard";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Cpu, Activity, Shield, TrendingUp, ChevronRight, Zap } from "lucide-react";

export default function Home() {
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black font-body overflow-x-hidden">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-cyber-grid opacity-30 animate-pulse" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm"
          >
            <span className="text-primary font-mono text-xs tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              System Status: Online
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl font-display font-black uppercase tracking-tight mb-6"
          >
            AI FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary text-glow-cyan">Modern</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Finance</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 font-mono"
          >
            An autonomous AI engine that analyzes markets, detects opportunities, and executes strategies with precision – 24/7, free from emotion or fatigue.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="https://t.me/sshanti_bot" target="_blank" rel="noopener noreferrer">
              <CyberButton className="w-full sm:w-auto h-14 text-base px-10">
                Become a User
              </CyberButton>
            </a>
            <CyberButton 
              variant="secondary" 
              className="w-full sm:w-auto h-14 text-base px-10"
              onClick={scrollToAbout}
            >
              Explore ShantiAI
            </CyberButton>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading>About ShantiAI</SectionHeading>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                ShantiAI is an experimental research platform exploring how artificial intelligence can transform financial decision-making.
              </p>
              <p className="text-gray-400 font-mono text-sm leading-relaxed border-l-2 border-primary/50 pl-6">
                Our mission is to design advanced algorithms capable of analyzing massive datasets, identifying hidden patterns, and executing trading strategies with consistency and transparency.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-[100px] opacity-20" />
              <div className="relative border border-white/10 bg-black/50 backdrop-blur-xl p-8 clip-corner-tl-br">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Uptime", value: "99.9%" },
                    { label: "Accuracy", value: "94.2%" },
                    { label: "Latency", value: "<50ms" },
                    { label: "Markets", value: "Global" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 p-4 text-center">
                      <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs font-mono text-primary uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section id="technology" className="py-24 bg-[#050508] relative overflow-hidden">
        {/* Horizontal scan line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading centered>Our Technology</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                desc: "Advanced algorithms analyze market data to identify profitable opportunities with precision forecasting.",
                color: "text-primary"
              },
              {
                icon: Cpu,
                title: "Automated Analysis",
                desc: "24/7 market monitoring without human limitations or emotional bias, ensuring consistent performance.",
                color: "text-secondary"
              },
              {
                icon: Shield,
                title: "Transparent Execution",
                desc: "Clear, verifiable strategies with detailed performance reporting and full audit capabilities.",
                color: "text-accent"
              }
            ].map((feature, i) => (
              <CyberCard key={i} delay={i * 0.2} className="h-full">
                <div className={`mb-6 p-4 bg-white/5 inline-block rounded-sm border border-white/10 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4 uppercase">{feature.title}</h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">{feature.desc}</p>
              </CyberCard>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>What Clients Say</SectionHeading>
          <p className="text-gray-400 mb-12 max-w-2xl font-mono">
            Our users appreciate the seamless withdrawal process and quick transaction times. Plus, our referral program helps them earn even more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <CyberCard delay={0}>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-display font-bold text-primary">
                  V
                </div>
                <div>
                  <h4 className="font-bold text-white">Vikram D.</h4>
                  <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">Verified User</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The withdrawal process was incredibly smooth. My funds arrived within the promised 12-hour window. The status updates kept me informed..."
              </p>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="aspect-square bg-gray-800 rounded overflow-hidden border border-white/10 group">
                  <img src="https://shanti-ai.netlify.app/83ffd4af-e805-471a-9de0-b769f1be45fb.jpg" alt="Proof 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="aspect-square bg-gray-800 rounded overflow-hidden border border-white/10 group">
                  <img src="https://shanti-ai.netlify.app/10ce5257-0ba5-4714-9867-b4953c5678ce.jpg" alt="Proof 2" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="aspect-square bg-gray-800 rounded overflow-hidden border border-white/10 group">
                  <img src="https://shanti-ai.netlify.app/ef096ae0-3ad2-47b3-ab74-63d175142a18.jpg" alt="Proof 3" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </CyberCard>

            {/* Review 2 */}
            <CyberCard delay={0.2}>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center font-display font-bold text-secondary">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-white">Priya S.</h4>
                  <span className="text-xs text-secondary font-mono bg-secondary/10 px-2 py-1 rounded">Premium Member</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "I tried the referral program and honestly, I was pleasantly surprised. I invited a few friends and now I'm getting bonuses on my balance..."
              </p>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="aspect-video bg-gray-800 rounded overflow-hidden border border-white/10 group">
                  <img src="https://shanti-ai.netlify.app/edb66963-1817-4ac9-a311-c10e1b1130be.jpg" alt="Proof 4" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="aspect-video bg-gray-800 rounded overflow-hidden border border-white/10 group">
                  <img src="https://shanti-ai.netlify.app/ede899bf-e330-4215-9ca1-5dc9073a3d76.jpg" alt="Proof 5" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </CyberCard>

            {/* Review 3 */}
            <CyberCard delay={0.4}>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center font-display font-bold text-accent">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-white">Arjun P.</h4>
                  <span className="text-xs text-accent font-mono bg-accent/10 px-2 py-1 rounded">Active Investor</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "What impressed me most is the transparency and detailed tracking. I can see my estimated profits in real-time, monitor all my completed investments..."
              </p>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="aspect-video bg-gray-800 rounded overflow-hidden border border-white/10 group">
                  <img src="https://shanti-ai.netlify.app/f189a2eb-83c2-4cc5-8d77-dc248af40d35.jpg" alt="Proof 6" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="aspect-video bg-gray-800 rounded overflow-hidden border border-white/10 group">
                  <img src="https://shanti-ai.netlify.app/dbac7662-3e58-4118-95e6-31e648e7c145.jpg" alt="Proof 7" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </CyberCard>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-24 bg-[#050508] relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-b border-white/10 py-16"
          >
            <h2 className="text-4xl font-display font-black text-white mb-8">OUR PHILOSOPHY</h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
              We believe in building <span className="text-white font-medium">ethical and transparent technology</span>. ShantiAI is a research project – not a financial product.
            </p>
            <p className="text-gray-400 font-mono">
              Our mission is to explore the boundaries of AI in finance, guided by responsibility, innovation, and openness.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
