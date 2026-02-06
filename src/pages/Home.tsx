import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CyberButton } from "@/components/CyberButton";
import { CyberCard } from "@/components/CyberCard";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Cpu, Activity, Shield, TrendingUp, ChevronDown, Zap, 
  Key, DollarSign, Vote, 
  Link as LinkIcon, BarChart3, Twitter, Send
} from "lucide-react";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subscribeMutation = useCreateSubscriber();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeMutation.mutate({ email }, {
        onSuccess: () => {
          toast({ title: "Success!", description: "You've been added to the waitlist." });
          setEmail("");
        },
        onError: (error) => {
          toast({ title: "Error", description: error.message || "Failed to subscribe. Try again.", variant: "destructive" });
        }
      });
    }
  };
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTokenUtility = () => {
    document.getElementById('token-utility')?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroContent = {
    title: "AI FOR MODERN FINANCE",
    story: "From Forum Lurkers to Cartel Fighters\n\nIt all started in 2015 on obscure crypto forums. We were traders, developers, and dreamers—captivated by blockchain technology and the promise of decentralization. What began as curiosity turned into obsession during the 2017 bull run. We watched our portfolios 10x, then crash 90%. We made fortunes and lost them in days. But we learned.\n\nIn that chaos, our team formed organically—strangers united by a shared belief that crypto markets could be different. We spent years sharpening our edge: reading hundreds of news sources daily, tracking whale wallets, analyzing orderbook anomalies, spotting volume spikes before pumps and dumps. We learned to see what others missed—the invisible hand of market makers, coordinated liquidations, billions extracted from retail by exchanges and crypto cartels.\n\nOne question consumed us: What if we could level the playing field?\n\nBehind every candle on TradingView is a story—whale movements, exchange manipulation, narrative shifts. We learned to read it all. We identified future scenarios before they unfolded. We mastered entry points, stop-loss placement, exit strategies. But manual analysis had limits. We needed something more.\n\nThen came AI.\n\nWe realized we could automate what we'd spent years learning—pattern recognition, anomaly detection, on-chain data analysis, sentiment tracking. We could build a 'brain' that never sleeps, never misses a signal, and never trades on emotion. A system that detects manipulation before it happens.\n\nFor over 18 months, we've tested this AI on live markets. It works.\n\nNow we're ready to share it with the world. Our Telegram bot is live—you can deposit, test the system, and see verified trade history spanning over a year. Screenshots, stats, full transparency.\n\nBut this is just the beginning.\n\nWe're building a platform. We're launching a token.\n\nNot just any token—$SHANTI is the fuel that powers the entire ecosystem. It grants access to alpha signals, passive income through staking, and governance over the platform's future. And we're launching it the right way: fair launch on Pump.fun. No VCs. No private rounds. Everyone gets equal access.\n\nThis is our fight. This is our mission. Join us."
  };

  const howItWorksSteps = [
    { 
      num: 1, 
      title: "Connect Telegram", 
      desc: "Open our Telegram bot. No KYC, no personal data — just a wallet and a chat interface. Start in seconds." 
    },
    { 
      num: 2, 
      title: "DEPOSIT", 
      desc: "Fund your account with USDT directly through the bot. Your capital is deployed into our AI-powered trading engine, which monitors markets 24/7 and executes high-probability setups." 
    },
    { 
      num: 3, 
      title: "EARN & TRACK", 
      desc: "Receive real-time AI-powered market alerts and trading signals.",
      betaNote: "***BETA PHASE — EARLY ACCESS REWARDS\n\nThe platform is currently in closed beta testing.\nAll users who deposit liquidity during this phase will receive exclusive benefits:\n\n- Priority Access to the $SHANTI token sale on Pump.fun 1 min before the public launch\n- Airdrop Allocation — 10% of the total $SHANTI supply is reserved for beta participants\n- Higher Airdrop Multiplier — the earlier you deposit, the larger your share\n\nYour deposit = Your airdrop ticket.\n\n👉 Deposit USDT now via the telegram bot and secure your spot in the $SHANTI airdrop pool.\n📖 Learn more about token utility here."
    }
  ];

  const tokenUtilityFeatures = [
    { 
      icon: Key, 
      title: "Deflationary Buyback & Burn", 
      desc: "Profit-Driven: 20% of all trading profits generated by the AI engine are used to buy back $SHANTI from the market and burn it forever.", 
      color: "text-primary" 
    },
    { 
      icon: DollarSign, 
      title: "Tiered Alpha Access", 
      desc: "Tier 1 (5000 $SHANTI): Standard AI signals • Tier 2 (15000 $SHANTI): Whale Tracking + Liquidation Heatmaps • Tier 3 (50000 $SHANTI): 'Cartel Detection' alerts", 
      color: "text-green-400" 
    },
    { 
      icon: Zap, 
      title: "Staking & Real Yield Distribution", 
      desc: "Revenue Sharing: 50% of all platform commissions distributed to Staking Pool. Proportional rewards based on your stake.", 
      color: "text-orange-400" 
    },
    { 
      icon: Vote, 
      title: "Governance & Strategic Voting", 
      desc: "SHANTI Council voting on protocol direction, treasury management, and exclusive alpha access to new experimental algorithms.", 
      color: "text-yellow-400" 
    },
  ];

  const tokenomicsData = [
    { label: "Public (Pump.fun launch / public distribution)", percent: 70, color: "bg-primary" },
    { label: "Beta Airdrop Pool (based on deposits/points)", percent: 10, color: "bg-purple-500" },
    { label: "Treasury / Development / Security / Legal / Ops", percent: 10, color: "bg-blue-500" },
    { label: "Team (12-month cliff + 12-month linear vesting)", percent: 10, color: "bg-pink-500" }
  ];

  const roadmapData = [
    {
      quarter: "Q4 2024 – Q1 2025",
      title: "Foundation & R&D",
      items: [
        "✅ Test Telegram bot development",
        "✅ AI training pipeline initiated",
        "✅ On-chain monitoring (5 major CEXs)",
        "✅ Basic AI signal detection engine",
        "✅ Advanced order book analysis framework",
        "✅ First live trading tests (internal)",
        "✅ Risk management module v1.0",
        "✅ Data infrastructure setup (AWS/GCP)"
      ],
      completed: true
    },
    {
      quarter: "Q2 2025",
      title: "Intelligence Layer Expansion",
      items: [
        "✅ Whale wallet tracking system",
        "✅ Predictive ML models (LSTM + Transformer-based)",
        "✅ Custom alert builder for power users",
        "✅ API access for developers (closed beta)",
        "✅ Second round of live trading tests",
        "✅ Backtesting engine v1.0",
        "✅ First community alpha testers onboarded"
      ],
      completed: true
    },
    {
      quarter: "Q3 2025",
      title: "Product Refinement",
      items: [
        "✅ Premium analytics suite (heatmaps, flow analysis)",
        "✅ Telegram bot soft launch (invite-only)",
        "✅ Full system backtests (2017–2025 historical data)",
        "✅ Performance dashboard (win rate, Sharpe ratio, drawdowns)",
        "✅ Multi-timeframe signal optimization"
      ],
      completed: true
    },
    {
      quarter: "Q4 2025",
      title: "MVP Launch",
      items: [
        "✅ Telegram mini-app development begins",
        "Multi-chain monitoring support (EVM + Solana)",
        "✅ Referral system implementation",
        "✅ Security audit #1 (smart contracts + infrastructure)"
      ],
      completed: false
    },
    {
      quarter: "Q1 2026",
      title: "Platform Development",
      items: [
        "✅ Custom platform development initiated",
        "✅ Public AI model transparency reports",
        "✅ Trading signal customization in Telegram app",
        "✅ Waitlist campaign launch (10,000+ target)",
        "⏳ KOL partnerships secured (10–20 tier-1 influencers)",
        "⏳ Token smart contract audit (CertiK/Hacken)"
      ],
      completed: false
    },
    {
      quarter: "Q2 2026",
      title: "Token Launch & Ecosystem Activation",
      items: [
        "🔄 Fair Launch on Pump.fun",
        "🔄 Web dashboard launch (real-time analytics)",
        "🔄 Staking platform live (50% revenue share)",
        "🔄 Buyback & Burn mechanism activated",
        "🔄 Tier-based access system live (Tier 1/2/3)",
        "🔄 First DAO proposal framework published",
        "🔄 CEX listing applications submitted (Tier-2 exchanges)"
      ],
      completed: false
    },
    {
      quarter: "Q3 2026",
      title: "Expansion & Governance",
      items: [
        "🔄 Mobile app launch (iOS + Android)",
        "🔄 DAO governance live (Shanti Council voting)",
        "🔄 Copy-trading feature beta (AI strategy mirroring)",
        "🔄 NFT-based premium memberships (lifetime access)",
        "🔄 First CEX listing",
        "🔄 Cross-chain bridge integration ($SHANTI on ETH/BSC)",
        "🔄 Partnership with DeFi protocols (liquidity incentives)",
        "🔄 Community grants program ($100k fund)"
      ],
      completed: false
    },
    {
      quarter: "Q4 2026",
      title: "Institutional Grade",
      items: [
        "🔄 Institutional API tier (hedge funds, prop traders)",
        "🔄 White-label solution for partner projects",
        "New: AI model marketplace (community-built strategies)",
        "🔄 Advanced risk management tools (portfolio hedging)",
        "🔄 Second major CEX listing",
        "🔄 $SHANTI listed on CoinGecko & CoinMarketCap (Top 500 target)",
        "🔄 Security audit #2 (full platform penetration test)",
        "🔄 Year-end transparency report (revenue, burns, staking APY)"
      ],
      completed: false
    },
    {
      quarter: "2027",
      title: "GLOBAL DOMINATION: AI Sovereignty",
      items: [
        "🔄 Decentralized AI nodes: Community can run AI inference nodes, earn $SHANTI rewards",
        "🔄 On-chain AI proofs: Verifiable AI predictions stored on-chain (transparency++)",
        "🔄 Multi-language support: Platform available in 10+ languages",
        "🔄 Fiat on-ramp integration: Buy $SHANTI directly with credit card",
        "🔄 First institutional client onboarded (hedge fund/family office)"
      ],
      completed: false
    }
  ];

  const teamMembers = [
    { 
      name: "Cipher", 
      role: "Co-Founder & CEO", 
      desc: "Visionary. Survivor. Builder. 8 years in crypto. Ex-quantitative trader. Built and exited 2 DeFi protocols (combined $150M TVL). Survived 3 bear markets.", 
      avatar: "C" 
    },
    { 
      name: "Ghost", 
      role: "Co-Founder & CTO", 
      desc: "Code is law. Security is religion. Ex-Senior Engineer. Architected HFT infrastructure processing 1M+ transactions/day. 10+ years building scalable systems.", 
      avatar: "G" 
    },
    { 
      name: "Dr. Nandini 'Quant'", 
      role: "Head of AI & Chief Data Scientist", 
      desc: "PhD in Machine Learning. Ex-Data Scientist at Renaissance Technologies. Built ML systems. Making institutional-grade AI accessible to everyone.", 
      avatar: "N" 
    },
    { 
      name: "Deepak", 
      role: "Lead Backend Engineer", 
      desc: "The architect behind the engine. 10 years building real-time data systems. Designed API infrastructure. Loves Rust, hates downtime.", 
      avatar: "D" 
    },
    { 
      name: "Sanjeev", 
      role: "Senior Backend Engineer", 
      desc: "If it's fast, he made it faster. Ex-high-frequency trading engineer. Optimized latency. Built order execution systems for prop trading firm.", 
      avatar: "S" 
    },
    { 
      name: "Bomber", 
      role: "Blockchain Developer (Solana)", 
      desc: "Smart contracts are his native language. Built 5+ DeFi protocols on Solana. Audited by CertiK. Total TVL: $80M+.", 
      avatar: "B" 
    },
    { 
      name: "Mad Max", 
      role: "Blockchain Developer (EVM)", 
      desc: "Ethereum is his Playground. Shipped 10+ smart contracts (Uniswap forks, staking, governance). Ex-Aave contributor. Gas optimization wizard.", 
      avatar: "M" 
    },
    { 
      name: "Yash", 
      role: "Lead Frontend Engineer", 
      desc: "Beautiful UIs that actually work. Built trading dashboards used by 1M+ users. Obsessed with performance and pixel-perfect design.", 
      avatar: "Y" 
    },
    { 
      name: "Samaira", 
      role: "DevOps / Infrastructure Lead", 
      desc: "Uptime: 99.99%. Ex-AWS Solutions Architect. Managed infrastructure for apps. Kubernetes ninja. Monitoring obsessive.", 
      avatar: "S" 
    },
    { 
      name: "Dr. Shell", 
      role: "Senior ML Engineer", 
      desc: "Trains models that predict the future. PhD in AI. Built recommendation systems. Now building models that detect market manipulation.", 
      avatar: "S" 
    },
    { 
      name: "Mira", 
      role: "ML Engineer (NLP & Sentiment)", 
      desc: "She reads the market's emotions. Ex-Twitter ML team. Built sentiment analysis models processing 10M tweets/day.", 
      avatar: "M" 
    },
    { 
      name: "Wolf", 
      role: "Data Engineer", 
      desc: "Data pipelines are his art. Ex-Uber Data Team. Built ETL systems processing 1TB+/day. Loves clean data, hates missing values.", 
      avatar: "W" 
    },
    { 
      name: "Mary", 
      role: "Quantitative Analyst", 
      desc: "Numbers don't lie. She makes them talk. Ex-quant analyst at a $1B hedge fund. Built backtesting frameworks for 100+ trading strategies.", 
      avatar: "M" 
    },
    { 
      name: "Tony", 
      role: "Head of Product", 
      desc: "User obsessed. Feature ruthless. Ex-Product Manager at Binance. Shipped features used by 50M+ users.", 
      avatar: "T" 
    },
    { 
      name: "Kira", 
      role: "Lead UI/UX Designer", 
      desc: "Design is not decoration. It's strategy. Designed interfaces that made $100M+ in revenue. Dark mode evangelist.", 
      avatar: "K" 
    },
    { 
      name: "Marcus", 
      role: "Head of Marketing (CMO)", 
      desc: "If it trends, he made it trend. Launched 3 tokens into top 200 CMC. Master of narratives, memes, and KOL warfare.", 
      avatar: "M" 
    },
    { 
      name: "Lex", 
      role: "Blockchain & Security Advisor", 
      desc: "Security auditor. Audited 50+ smart contracts. Found critical bugs that saved $100M+. Paranoid in the best way.", 
      avatar: "L" 
    }
  ];

  const partners = [
    { name: "Chainlink", icon: LinkIcon },
    { name: "Dune Analytics", icon: BarChart3 },
    { name: "Nansen", icon: Activity },
    { name: "CoinGecko", icon: TrendingUp },
    { name: "Certik", icon: Shield },
    { name: "The Graph", icon: Zap }
  ];

  const faqItems = [
    { q: "How does ShantiAI detect manipulation?", a: "Our AI analyzes order book patterns, whale movements, and on-chain data to identify suspicious activity before it affects prices." },
    { q: "Do I need to hold tokens to use the platform?", a: "Basic alerts are free. Premium features like predictive models and whale tracking require staking $SHANTI tokens." },
    { q: "Is this financial advice?", a: "No. ShantiAI provides data and analytics tools for research purposes only. Always do your own research." },
    { q: "How accurate are the predictions?", a: "Our models have shown 85%+ accuracy in backtesting. However, past performance doesn't guarantee future results." },
    { q: "When is the token launch?", a: "Fair launch on Pump.fun is scheduled for Q1 2024. Follow our Telegram for updates." },
    { q: "Which exchanges do you monitor?", a: "We currently monitor Binance, Coinbase, Kraken, OKX, Bybit, and more. Premium tiers get access to 15+ exchanges." }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black font-body overflow-x-hidden">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-30 animate-pulse" />
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
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-black uppercase tracking-tight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary text-glow-cyan">
              {heroContent.title.split(' ')[0]}
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-5xl text-gray-300">
              {heroContent.title.split(' ').slice(1).join(' ')}
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 mb-10">
              <div className="text-primary font-mono text-sm uppercase tracking-wider mb-4">
                OUR STORY
              </div>
              <div className="text-gray-300 text-lg leading-relaxed font-light whitespace-pre-line">
                {heroContent.story}
              </div>
            </div>
            
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 font-mono">
              An autonomous AI engine that analyzes markets, detects opportunities, and executes strategies with precision – 24/7, free from emotion or fatigue.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="https://t.me/sshanti_bot" target="_blank" rel="noopener noreferrer">
              <CyberButton className="w-full sm:w-auto h-14 text-base px-10" data-testid="button-become-user">
                Become a User
              </CyberButton>
            </a>
            <CyberButton 
              variant="secondary" 
              className="w-full sm:w-auto h-14 text-base px-10"
              onClick={scrollToAbout}
              data-testid="button-explore"
            >
              Explore ShantiAI
            </CyberButton>
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
      <section id="how-it-works" className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered>How It Works</SectionHeading>
          <p className="text-center text-gray-400 mb-16 font-mono">
            Three simple steps to start trading with transparency
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
                
                {/* Додаємо BETA NOTE для третього кроку */}
                {step.betaNote && (
                  <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg text-left">
                    <div className="text-primary font-bold mb-2 text-sm">BETA IS LIVE</div>
                    <p className="text-white text-sm mb-4">
                      Deposit now → Get early access to $SHANTI sale + Airdrop. 10% supply reserved for early birds.
                    </p>
                    <div className="space-y-2 text-xs text-gray-300 whitespace-pre-line">
                      {step.betaNote.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className={idx === 0 ? 'font-bold' : ''}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <CyberButton 
                      onClick={scrollToTokenUtility}
                      className="w-full mt-4 h-12"
                      variant="secondary"
                    >
                      📖 Learn more about token utility
                    </CyberButton>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-[#050508] relative">
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
      <section id="technology" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading centered>Our Technology</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Predictive Analytics", desc: "Advanced algorithms analyze market data to identify profitable opportunities with precision forecasting.", color: "text-primary" },
              { icon: Cpu, title: "Automated Analysis", desc: "24/7 market monitoring without human limitations or emotional bias, ensuring consistent performance.", color: "text-secondary" },
              { icon: Shield, title: "Transparent Execution", desc: "Clear, verifiable strategies with detailed performance reporting and full audit capabilities.", color: "text-accent" }
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
      <section id="token-utility" className="py-24 bg-[#050508] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered>Token Utility</SectionHeading>
          <p className="text-center text-gray-400 mb-12 font-mono">
          $SHANTI is the fuel of the ecosystem. It is designed to create a constant supply crunch through real-world platform integration.
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
                  <div>
                    <h3 className={`text-lg font-display font-bold ${feature.color} mb-2`}>{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOKENOMICS SECTION */}
      <section id="tokenomics" className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered>Tokenomics</SectionHeading>
          <p className="text-center text-gray-400 mb-12 font-mono">
            Fair launch with transparent distribution
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-purple-900/30 border border-white/10 rounded-lg p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
              <span className="text-white font-display font-bold">Token Distribution Chart</span>
            </div>
            <p className="text-gray-400 text-sm font-mono">(Pie chart visualization)</p>
            
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
      <section id="roadmap" className="py-24 bg-[#050508] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered>Roadmap</SectionHeading>
          <p className="text-center text-gray-400 mb-16 font-mono">
            Our path to becoming the #1 anti-manipulation platform
          </p>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-gray-700" />
            
            <div className="space-y-8">
              {roadmapData.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12"
                  data-testid={`card-roadmap-${i}`}
                >
                  <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ${phase.completed ? 'bg-primary' : 'bg-gray-700'}`}>
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  
                  <div className="bg-[#111115] border border-white/10 rounded-lg p-6">
                    <div className="text-primary font-mono text-sm mb-2">{phase.quarter}</div>
                    <h3 className="text-xl font-display font-bold text-white mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                          {item.startsWith('✅') || item.startsWith('⏳') || item.startsWith('🔄') ? (
                            <span className={`${item.startsWith('✅') ? 'text-green-400' : item.startsWith('⏳') ? 'text-yellow-400' : 'text-blue-400'} font-bold mr-1`}>
                              {item.substring(0, 2)}
                            </span>
                          ) : item.startsWith('New:') ? (
                            <span className="text-purple-400 font-bold mr-1">New:</span>
                          ) : null}
                          <span className={item.startsWith('New:') ? 'text-purple-300' : ''}>
                            {item.startsWith('✅') || item.startsWith('⏳') || item.startsWith('🔄') ? item.substring(2).trim() : item.startsWith('New:') ? item.substring(5).trim() : item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered>Team</SectionHeading>
          <p className="text-center text-gray-400 mb-12 font-mono">
            Built by traders and engineers who've been rekt by market manipulation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#111115] border border-white/10 rounded-lg p-6 text-center"
                data-testid={`card-team-${i}`}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold text-white">{member.avatar}</span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section id="partners" className="py-24 bg-[#050508] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered>Partners & Integrations</SectionHeading>
          <p className="text-center text-gray-400 mb-12 font-mono">
            Trusted data sources and ecosystem partners
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
      <section id="faq" className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered>Frequently Asked Questions</SectionHeading>
          
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
      <section id="community" className="py-24 bg-[#050508] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading centered>Join The Community</SectionHeading>
          <p className="text-center text-gray-400 mb-12 font-mono">
            Connect with traders fighting against market manipulation
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
              <h3 className="text-xl font-display font-bold text-white mb-1">Twitter</h3>
              <p className="text-primary text-lg font-bold mb-4">12.5K</p>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <CyberButton variant="secondary" className="w-full" data-testid="button-twitter">
                  Follow Us
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
              <h3 className="text-xl font-display font-bold text-white mb-1">Telegram</h3>
              <p className="text-primary text-lg font-bold mb-4">8.3K</p>
              <a href="https://t.me/shantiAIwealth" target="_blank" rel="noopener noreferrer">
                <CyberButton variant="secondary" className="w-full" data-testid="button-telegram">
                  Join Chat
                </CyberButton>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WAITLIST SECTION */}
      <section id="waitlist" className="py-24 bg-black relative">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading centered>Join The Waitlist</SectionHeading>
          <p className="text-gray-400 mb-8 font-mono">
            Be among the first to test our platform and get early access to the token launch
          </p>
          
          <form onSubmit={handleSubscribe} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
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
              {subscribeMutation.isPending ? "Joining..." : "Join Waitlist"}
            </CyberButton>
          </form>
          
          <p className="mt-6 text-gray-500 text-sm flex items-center justify-center gap-2">
            <span className="text-lg">🎯</span>
            Selected members will receive exclusive early access to test the platform before public launch
          </p>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-[#050508] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>What Clients Say</SectionHeading>
          <p className="text-gray-400 mb-12 max-w-2xl font-mono">
            Our users appreciate the seamless withdrawal process and quick transaction times. Plus, our referral program helps them earn even more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section id="philosophy" className="py-24 bg-black relative">
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