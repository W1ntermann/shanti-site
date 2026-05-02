import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CyberButton } from "@/components/CyberButton";
import { CyberCard } from "@/components/CyberCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamSlider } from "@/components/TeamSlider";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import { BetaLiveCard } from "@/components/BetaLiveCard";
import { PhilosophySection } from "@/components/PhilosophySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  Cpu, Activity, Shield, TrendingUp, ChevronDown, Zap, 
  Key, DollarSign, Vote, 
  Link as LinkIcon, BarChart3, Twitter, Send,
  Database, Eye, LineChart, Terminal, Brain,
  Satellite, Gauge, Network,
} from "lucide-react";

import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useTranslation();

  const subscribeMutation = useCreateSubscriber();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeMutation.mutate({ email }, {
        onSuccess: () => {
          toast({ title: t('home.waitlist.toast.successTitle'), description: t('home.waitlist.toast.successDescription') });
          setEmail("");
        },
        onError: (error) => {
          toast({ title: t('home.waitlist.toast.errorTitle'), description: error.message || t('home.waitlist.toast.errorDescription'), variant: "destructive" });
        }
      });
    }
  };
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const howItWorksSteps = [
    {
      num: 1,
      title: t('home.howItWorks.steps.0.title'),
      desc: t('home.howItWorks.steps.0.desc')
    },
    {
      num: 2,
      title: t('home.howItWorks.steps.1.title'),
      desc: t('home.howItWorks.steps.1.desc')
    },
    {
      num: 3,
      title: t('home.howItWorks.steps.2.title'),
      desc: t('home.howItWorks.steps.2.desc'),
      betaNote: t('home.howItWorks.steps.2.betaNote')
    }
  ];

  const tokenUtilityFeatures = [
    {
      icon: Key,
      title: t('home.tokenUtility.features.0.title'),
      desc: t('home.tokenUtility.features.0.desc'),
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: t('home.tokenUtility.features.1.title'),
      desc: t('home.tokenUtility.features.1.desc'),
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: t('home.tokenUtility.features.2.title'),
      desc: t('home.tokenUtility.features.2.desc'),
      color: "text-orange-400"
    },
    {
      icon: Vote,
      title: t('home.tokenUtility.features.3.title'),
      desc: t('home.tokenUtility.features.3.desc'),
      color: "text-yellow-400"
    },
  ];

  const tokenomicsData = [
    { label: t('home.tokenomics.distribution.0.label'), percent: 70, color: "bg-primary" },
    { label: t('home.tokenomics.distribution.1.label'), percent: 10, color: "bg-purple-500" },
    { label: t('home.tokenomics.distribution.2.label'), percent: 10, color: "bg-blue-500" },
    { label: t('home.tokenomics.distribution.3.label'), percent: 10, color: "bg-pink-500" }
  ];

  const roadmapData = [
    {
      quarter: t('home.roadmap.phases.0.quarter'),
      title: t('home.roadmap.phases.0.title'),
      items: [
        t('home.roadmap.phases.0.items.0'),
        t('home.roadmap.phases.0.items.1'),
        t('home.roadmap.phases.0.items.2'),
        t('home.roadmap.phases.0.items.3'),
        t('home.roadmap.phases.0.items.4'),
        t('home.roadmap.phases.0.items.5'),
        t('home.roadmap.phases.0.items.6'),
        t('home.roadmap.phases.0.items.7')
      ],
      completed: true
    },
    {
      quarter: t('home.roadmap.phases.1.quarter'),
      title: t('home.roadmap.phases.1.title'),
      items: [
        t('home.roadmap.phases.1.items.0'),
        t('home.roadmap.phases.1.items.1'),
        t('home.roadmap.phases.1.items.2'),
        t('home.roadmap.phases.1.items.3'),
        t('home.roadmap.phases.1.items.4'),
        t('home.roadmap.phases.1.items.5'),
        t('home.roadmap.phases.1.items.6')
      ],
      completed: true
    },
    {
      quarter: t('home.roadmap.phases.2.quarter'),
      title: t('home.roadmap.phases.2.title'),
      items: [
        t('home.roadmap.phases.2.items.0'),
        t('home.roadmap.phases.2.items.1'),
        t('home.roadmap.phases.2.items.2'),
        t('home.roadmap.phases.2.items.3'),
        t('home.roadmap.phases.2.items.4')
      ],
      completed: true
    },
    {
      quarter: t('home.roadmap.phases.3.quarter'),
      title: t('home.roadmap.phases.3.title'),
      items: [
        t('home.roadmap.phases.3.items.0'),
        t('home.roadmap.phases.3.items.1'),
        t('home.roadmap.phases.3.items.2'),
        t('home.roadmap.phases.3.items.3')
      ],
      completed: true
    },
    {
      quarter: t('home.roadmap.phases.4.quarter'),
      title: t('home.roadmap.phases.4.title'),
      items: [
        t('home.roadmap.phases.4.items.0'),
        t('home.roadmap.phases.4.items.1'),
        t('home.roadmap.phases.4.items.2'),
        t('home.roadmap.phases.4.items.3')
      ],
      completed: false
    },
    {
      quarter: t('home.roadmap.phases.5.quarter'),
      title: t('home.roadmap.phases.5.title'),
      items: [
        t('home.roadmap.phases.5.items.0'),
        t('home.roadmap.phases.5.items.1'),
        t('home.roadmap.phases.5.items.2'),
        t('home.roadmap.phases.5.items.3'),
        t('home.roadmap.phases.5.items.4'),
        t('home.roadmap.phases.5.items.5'),
        t('home.roadmap.phases.5.items.6'),
        t('home.roadmap.phases.5.items.7')
      ],
      completed: false
    },
    {
      quarter: t('home.roadmap.phases.6.quarter'),
      title: t('home.roadmap.phases.6.title'),
      items: [
        t('home.roadmap.phases.6.items.0'),
        t('home.roadmap.phases.6.items.1'),
        t('home.roadmap.phases.6.items.2'),
        t('home.roadmap.phases.6.items.3'),
        t('home.roadmap.phases.6.items.4'),
        t('home.roadmap.phases.6.items.5'),
        t('home.roadmap.phases.6.items.6'),
        t('home.roadmap.phases.6.items.7')
      ],
      completed: false
    },
    {
      quarter: t('home.roadmap.phases.7.quarter'),
      title: t('home.roadmap.phases.7.title'),
      items: [
        t('home.roadmap.phases.7.items.0'),
        t('home.roadmap.phases.7.items.1'),
        t('home.roadmap.phases.7.items.2'),
        t('home.roadmap.phases.7.items.3'),
        t('home.roadmap.phases.7.items.4'),
        t('home.roadmap.phases.7.items.5'),
        t('home.roadmap.phases.7.items.6'),
        t('home.roadmap.phases.7.items.7')
      ],
      completed: false
    },
    {
      quarter: t('home.roadmap.phases.8.quarter'),
      title: t('home.roadmap.phases.8.title'),
      items: [
        t('home.roadmap.phases.8.items.0'),
        t('home.roadmap.phases.8.items.1'),
        t('home.roadmap.phases.8.items.2'),
        t('home.roadmap.phases.8.items.3'),
        t('home.roadmap.phases.8.items.4')
      ],
      completed: false
    }
  ];

  const teamMembers = [
    {
      name: "Cipher",
      role: t('home.team.members.0.role'),
      desc: t('home.team.members.0.desc'),
      avatar: "C"
    },
    {
      name: "Ghost",
      role: t('home.team.members.1.role'),
      desc: t('home.team.members.1.desc'),
      avatar: "G"
    },
    {
      name: "Dr. Nandini 'Quant'",
      role: t('home.team.members.2.role'),
      desc: t('home.team.members.2.desc'),
      avatar: "N"
    },
    {
      name: "Deepak",
      role: t('home.team.members.3.role'),
      desc: t('home.team.members.3.desc'),
      avatar: "D"
    },
    {
      name: "Sanjeev",
      role: t('home.team.members.4.role'),
      desc: t('home.team.members.4.desc'),
      avatar: "S"
    },
    {
      name: "Bomber",
      role: t('home.team.members.5.role'),
      desc: t('home.team.members.5.desc'),
      avatar: "B"
    },
    {
      name: "Mad Max",
      role: t('home.team.members.6.role'),
      desc: t('home.team.members.6.desc'),
      avatar: "M"
    },
    {
      name: "Yash",
      role: t('home.team.members.7.role'),
      desc: t('home.team.members.7.desc'),
      avatar: "Y"
    },
    {
      name: "Samaira",
      role: t('home.team.members.8.role'),
      desc: t('home.team.members.8.desc'),
      avatar: "S"
    },
    {
      name: "Dr. Shell",
      role: t('home.team.members.9.role'),
      desc: t('home.team.members.9.desc'),
      avatar: "S"
    },
    {
      name: "Mira",
      role: t('home.team.members.10.role'),
      desc: t('home.team.members.10.desc'),
      avatar: "M"
    },
    {
      name: "Wolf",
      role: t('home.team.members.11.role'),
      desc: t('home.team.members.11.desc'),
      avatar: "W"
    },
    {
      name: "Mary",
      role: t('home.team.members.12.role'),
      desc: t('home.team.members.12.desc'),
      avatar: "M"
    },
    {
      name: "Tony",
      role: t('home.team.members.13.role'),
      desc: t('home.team.members.13.desc'),
      avatar: "T"
    },
    {
      name: "Kira",
      role: t('home.team.members.14.role'),
      desc: t('home.team.members.14.desc'),
      avatar: "K"
    },
    {
      name: "Marcus",
      role: t('home.team.members.15.role'),
      desc: t('home.team.members.15.desc'),
      avatar: "M"
    },
    {
      name: "Lex",
      role: t('home.team.members.16.role'),
      desc: t('home.team.members.16.desc'),
      avatar: "L"
    }
  ];

  const partners = [
    { name: "Chainlink", icon: LinkIcon },
    { name: "Dune Analytics", icon: Database },
    { name: "Nansen", icon: Eye },
    { name: "CoinGecko", icon: TrendingUp },
    { name: "Certik", icon: Shield },
    { name: "The Graph", icon: Network },
    { name: "Arkham", icon: Satellite },
    { name: "Lookonchain", icon: LineChart },
    { name: "Glassnode", icon: Gauge },
    { name: "DexCheck", icon: Terminal },
    { name: "DexScreener", icon: BarChart3 },
    { name: "Santiment", icon: Brain }
  ];

  const faqItems = [
    { q: t('home.faq.items.0.question'), a: t('home.faq.items.0.answer') },
    { q: t('home.faq.items.1.question'), a: t('home.faq.items.1.answer') },
    { q: t('home.faq.items.2.question'), a: t('home.faq.items.2.answer') },
    { q: t('home.faq.items.3.question'), a: t('home.faq.items.3.answer') },
    { q: t('home.faq.items.4.question'), a: t('home.faq.items.4.answer') },
    { q: t('home.faq.items.5.question'), a: t('home.faq.items.5.answer') }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black font-body overflow-x-hidden">
      <Navbar />
      
      {/* HERO SECTION */}


      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Desktop Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        style={{ zIndex: 0 }}
      >
        <source src="/dynamic-hero.mp4" type="video/mp4" />
      </video>
      
      {/* Mobile Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }} />
      
  <div className="absolute inset-0 bg-cyber-grid opacity-30 animate-pulse" style={{ zIndex: 2 }} />
  {/* Large blur elements - optimized for mobile */}
  <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-cyber-pulse" style={{ zIndex: 2 }} />
  <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-cyber-pulse" style={{ zIndex: 2 }} />
  <div className="absolute top-1/2 right-1/3 w-32 h-32 md:w-64 md:h-64 bg-accent/15 rounded-full blur-[60px] md:blur-[100px] pointer-events-none animate-pulse" style={{ zIndex: 2 }} />
  
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Заголовок AI FOR MODERN FINANCE по центру */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl font-mono font-bold tracking-widest uppercase text-gray-400 mb-4">
        {t('home.hero.title')}
      </h1>
      <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto mb-6">
        {t('home.hero.description')}
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
      >
        <a href="https://t.me/sshanti_bot" target="_blank" rel="noopener noreferrer">
          <CyberButton className="w-full sm:w-auto h-14 text-base px-10" data-testid="button-become-user">
            {t('home.hero.becomeAUser')}
          </CyberButton>
        </a>
        <CyberButton 
          variant="secondary" 
          className="w-full sm:w-auto h-14 text-base px-10"
          onClick={scrollToAbout}
          data-testid="button-explore"
        >
          {t('home.hero.exploreShantiAI')}
        </CyberButton>
        <a href="https://t.me/shantiAIwealth" target="_blank" rel="noopener noreferrer">
          <CyberButton 
            variant="cyber" 
            className="w-full sm:w-auto h-14 text-base px-10"
            data-testid="button-new-strategy"
          >
            {t('home.hero.testNewStrategy')}
          </CyberButton>
        </a>
      </motion.div>
    </motion.div>
    {/* Історія */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="space-y-8"
    >
      {/* Заголовок історії */}
      <div className="text-center">
        <div className="inline-block px-4 py-1 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm mb-4">
          <span className="text-accent font-mono text-xs tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(255,234,0,0.8)]" />
            {t('ourStory.sectionTitle')}
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight leading-tight mb-6">
          {t('ourStory.fromForumLurkers')}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            {t('ourStory.toCartelFighters')}
          </span>
        </h2>
      </div>

      {/* Текст історії */}
      <div className="space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          {t('ourStory.paragraph1')}
        </p>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          {t('ourStory.paragraph2')}
        </p>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          {t('ourStory.paragraph3')}
        </p>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          {t('ourStory.paragraph4')}
        </p>
        <p className="text-gray-300 text-lg leading-relaxed text-center font-medium">
          {t('ourStory.paragraph5')}
        </p>
      </div>

      {/* Ключові моменти в 2 колонки */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Ліва колонка - Продовження історії */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-6"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                <span>The Journey Continues</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Behind every candle on TradingView is a story—whale movements, exchange manipulation, narrative shifts. We learned to read it all. We identified future scenarios before they unfolded. We mastered entry points, stop-loss placement, exit strategies. But manual analysis had limits. We needed something more.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-secondary" />
                <span>The AI Breakthrough</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Then came AI. We realized we could automate what we'd spent years learning—pattern recognition, anomaly detection, on-chain data analysis, sentiment tracking. We could build a "brain" that never sleeps, never misses a signal, and never trades on emotion.
              </p>
              <p className="text-primary text-sm font-medium mt-3">
                A system that detects manipulation before it happens.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Права колонка - Докази та майбутнє */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-6"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span>The Proof & Progress</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                For over 18 months, we've tested this AI on live markets. It works. Now we're ready to share it with the world. Our Telegram bot is live—you can deposit, test the system, and see verified trade history spanning over a year.
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <p className="text-gray-300 text-sm">
                    <span className="text-white font-medium">18+ months</span> of live market testing
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0"></div>
                  <p className="text-gray-300 text-sm">
                    <span className="text-white font-medium">Telegram bot live</span> — test with verified trade history
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>The Future: $SHANTI Token</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div>
                  <p className="text-gray-300 text-sm">
                    Not just any token—<span className="text-white font-medium">$SHANTI</span> is the fuel that powers the entire ecosystem
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0"></div>
                  <p className="text-gray-300 text-sm">
                    Grants access to alpha signals, passive income through staking, and governance over the platform's future
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                  <p className="text-gray-300 text-sm">
                    Fair launch on Pump.fun. <span className="text-white font-medium">No VCs. No private rounds.</span> Everyone gets equal access
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <p className="text-primary font-bold text-sm mb-2">Our Mission</p>
              <p className="text-white text-sm font-medium">
                This is our fight. This is our mission.
              </p>
              <p className="text-gray-300 text-xs mt-1">
                Join us in leveling the playing field against crypto cartels.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
  
  <motion.div 
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2"
  >
    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
  </motion.div>
</section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
        {/* Background Image - Optimized for all devices */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/working-system.jpg)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            zIndex: 0
          }}
        />
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70" style={{ zIndex: 1 }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading centered>{t('home.howItWorks.title')}</SectionHeading>
          <p className="text-center text-gray-400 mb-16 font-mono">
            {t('home.howItWorks.subtitle')}
          </p>
          
          <div className="space-y-6">
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#111115] border border-white/10 rounded-lg p-6 text-center"
                data-testid={`card-step-${step.num}`}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-display font-bold text-white">{step.num}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 font-mono text-sm mb-4">{step.desc}</p>
                
                {/* Beta Live Card */}
                {step.betaNote && (
                  <BetaLiveCard betaNote={step.betaNote} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-48 bg-[#050508] relative overflow-hidden min-h-[600px] md:min-h-[800px]">
        {/* Background Image - Optimized for all devices */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/about-pict.jpg)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70" style={{ zIndex: 1 }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading>{t('home.about.title')}</SectionHeading>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t('home.about.paragraph1')}
              </p>
              <p className="text-gray-400 font-mono text-sm leading-relaxed border-l-2 border-primary/50 pl-6">
                {t('home.about.paragraph2')}
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
      <section id="technology" className="py-24 bg-black relative overflow-hidden technology-section">
        {/* Background Image - Optimized for all devices */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/technology.jpg)',
            backgroundSize: 'cover',
            backgroundAttachment: 'scroll',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/65" style={{ zIndex: 1 }} />
        
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ zIndex: 2 }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading centered>{t('home.technology.title')}</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: t('home.technology.features.0.title'), desc: t('home.technology.features.0.desc'), color: "text-primary" },
              { icon: Cpu, title: t('home.technology.features.1.title'), desc: t('home.technology.features.1.desc'), color: "text-secondary" },
              { icon: Shield, title: t('home.technology.features.2.title'), desc: t('home.technology.features.2.desc'), color: "text-accent" }
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

      {/* TOKEN UTILITY SECTION */}
      <section id="token-utility" className="py-24 bg-[#050508] relative overflow-hidden utility-section">
        {/* Background image for token utility section */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/utility.jpg')",
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/65" style={{ zIndex: 1 }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <SectionHeading centered>{t('home.tokenUtility.title')}</SectionHeading>
    <p className="text-center text-gray-400 mb-12 font-mono">
      {t('home.tokenUtility.subtitle')}
    </p>
    
    <div className="space-y-4">
      {tokenUtilityFeatures.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-[#111115] border border-white/10 rounded-lg p-6"
          data-testid={`card-utility-${i}`}
        >
          <div className="flex items-start gap-4">
            <feature.icon className={`w-6 h-6 ${feature.color} shrink-0 mt-1`} />
            <div className="flex-1">
              <h3 className={`text-lg font-display font-bold ${feature.color} mb-2`}>{feature.title}</h3>
              
              <div className="text-gray-400 text-sm">
                {feature.desc.split('\n').map((line, index) => (
                  <p key={index} className={index < feature.desc.split('\n').length - 1 ? 'mb-1' : ''}>
                    {line.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* TOKENOMICS SECTION */}
      <section id="tokenomics" className="py-24 bg-black relative overflow-hidden tokenomics-section">
        {/* Background image for tokenomics section */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/tokenomics.jpg')",
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/65" style={{ zIndex: 1 }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading centered>{t('home.tokenomics.title')}</SectionHeading>
          <p className="text-center text-gray-400 mb-12 font-mono">
            {t('home.tokenomics.subtitle')}
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="tokenomics-card bg-cover bg-center relative overflow-hidden border border-white/10 rounded-lg p-8 mb-8"
          >
            {/* Background overlay for readability */}
            <div className="absolute inset-0 bg-black/55 sm:bg-black/45 pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
              <span className="text-white font-display font-bold">{t('home.tokenomics.chartLabel')}</span>
            </div>
            
            <div className="mt-6 flex gap-2 h-4 rounded-full overflow-hidden">
              {tokenomicsData.map((item, i) => (
                <div key={i} className={`${item.color}`} style={{ width: `${item.percent}%` }} />
              ))}
            </div>
          </motion.div>
          
          <div className="space-y-4">
            {tokenomicsData.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-300">{item.label}</span>
                <span className="text-primary font-display font-bold">{item.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section id="roadmap" className="py-24 md:py-32 bg-background relative overflow-hidden">
        {/* Background Image - Optimized for all devices */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/cyber-clock.jpg)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/65" style={{ zIndex: 1 }} />
        
        <div className="absolute inset-0 bg-cyber-grid opacity-20" style={{ zIndex: 2 }} />
        <ParallaxBackground />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading centered>{t('home.roadmap.title')}</SectionHeading>
          <p className="text-center text-muted-foreground mb-20 font-mono text-lg max-w-3xl mx-auto">
            {t('home.roadmap.subtitle')}
          </p>
          
          <RoadmapTimeline phases={roadmapData} />
        </div>
      </section>

      {/* TEAM SECTION */}
      <section 
        id="team" 
        className="py-24 bg-background relative overflow-hidden"
      >
        {/* Background Image - Optimized for all devices */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/team.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            zIndex: 0
          }}
        />
        
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-cyber-grid opacity-20" />
        <ParallaxBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading centered>{t('home.team.title')}</SectionHeading>
          <p className="text-center text-muted-foreground mb-16 font-mono text-lg">
            {t('home.team.subtitle')}
          </p>
          <TeamSlider members={teamMembers} />
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* PARTNERS SECTION */}
      <section id="partners" className="py-24 bg-[#050508] relative overflow-hidden partners-section">
        {/* Background image for partners section */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/partners.jpg')",
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/65" style={{ zIndex: 1 }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading centered>{t('home.partners.title')}</SectionHeading>
          <p className="text-center text-gray-400 mb-12 font-mono">
            {t('home.partners.subtitle')}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#111115] border border-white/10 rounded-lg p-6 flex items-center gap-3"
                data-testid={`card-partner-${i}`}
              >
                <partner.icon className="w-5 h-5 text-primary" />
                <span className="text-white font-medium">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-black relative overflow-hidden faq-section">
        {/* Background image for FAQ section */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/faq.jpg')",
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/65" style={{ zIndex: 1 }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading centered>{t('home.faq.title')}</SectionHeading>
          
          <div className="space-y-4 mt-12">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#111115] border border-white/10 rounded-lg overflow-hidden"
                data-testid={`faq-item-${i}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  data-testid={`button-faq-${i}`}
                >
                  <span className="text-white font-medium pr-4">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-400 text-sm border-t border-white/10 pt-4">
                    {item.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section id="community" className="py-24 bg-[#050508] relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/second-join.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading centered>{t('home.community.title')}</SectionHeading>
          <p className="text-center text-gray-400 mb-12 font-mono">
            {t('home.community.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111115] border border-white/10 rounded-lg p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center mx-auto mb-4">
                <Twitter className="w-8 h-8 text-[#1DA1F2]" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1">{t('home.community.twitter')}</h3>
              <p className="text-primary text-lg font-bold mb-4">{t('home.community.twitterFollowers')}</p>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <CyberButton variant="secondary" className="w-full" data-testid="button-twitter">
                  {t('home.community.followUs')}
                </CyberButton>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#111115] border border-white/10 rounded-lg p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#0088cc]/20 flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-[#0088cc]" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1">{t('home.community.telegram')}</h3>
              <p className="text-primary text-lg font-bold mb-4">{t('home.community.telegramFollowers')}</p>
              <a href="https://t.me/shantiAIwealth" target="_blank" rel="noopener noreferrer">
                <CyberButton variant="secondary" className="w-full" data-testid="button-telegram">
                  {t('home.community.joinChat')}
                </CyberButton>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WAITLIST SECTION */}
      <section id="waitlist" className="py-24 bg-black relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/join.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70" style={{ zIndex: 1 }} />
        
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading centered>{t('home.waitlist.title')}</SectionHeading>
          <p className="text-gray-400 mb-8 font-mono">
            {t('home.waitlist.subtitle')}
          </p>
          
          <form onSubmit={handleSubscribe} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('home.waitlist.placeholder')}
              className="w-full bg-[#111115] border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary"
              required
              data-testid="input-email"
            />
            <CyberButton 
              type="submit" 
              className="w-full h-14"
              disabled={subscribeMutation.isPending}
              data-testid="button-waitlist"
            >
              {subscribeMutation.isPending ? t('home.waitlist.joining') : t('home.waitlist.button')}
            </CyberButton>
          </form>
          
          <p className="mt-6 text-gray-500 text-sm flex items-center justify-center gap-2">
            {t('home.waitlist.note')}
          </p>
        </div>
      </section>

      <PhilosophySection />

      <Footer />
    </div>
  );
}