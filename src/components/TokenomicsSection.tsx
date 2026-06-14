"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { 
  BarChart3, Coins, CircleDollarSign, 
  Network, Lock, Users, Cog, 
  Megaphone, PiggyBank,
  Layers, Infinity
} from "lucide-react";

interface TokenomicsItem {
  label: string;
  percent: number;
  color: string;
  icon: React.ElementType;
  description: string;
  vesting?: string;
}

function DonutChart({ 
  data,
  size = 280,
  strokeWidth = 40,
  className,
  centerLabel
}: { 
  data: TokenomicsItem[];
  size?: number;
  strokeWidth?: number;
  className?: string;
  centerLabel: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true });
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercent = 0;

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={strokeWidth}
        />

        {/* Segments */}
        {data.map((item, i) => {
          const offset = accumulatedPercent;
          const percent = isInView ? item.percent : 0;
          const dashLength = (percent / 100) * circumference;
          const dashOffset = -(offset / 100) * circumference;
          
          accumulatedPercent += item.percent;

          return (
            <g key={i} className="group">
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="butt"
                className="transition-all duration-1000 ease-out"
                style={{
                  filter: `drop-shadow(0 0 6px ${item.color}40)`,
                  opacity: isInView ? 1 : 0,
                  transitionDelay: `${i * 150}ms`,
                }}
              />
              {/* Hover glow */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth={strokeWidth + 4}
                strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="butt"
                className="opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  transitionDelay: `${i * 150}ms`,
                }}
              />
            </g>
          );
        })}

        {/* Center dot grid decoration */}
        <circle cx={center} cy={center} r={12} fill="#00f3ff" opacity={0.3}>
          <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={center} cy={center} r={4} fill="#00f3ff">
          <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-3xl font-display font-black text-white">70%</span>
        <span className="text-[10px] font-mono text-primary uppercase tracking-widest mt-1">
          {centerLabel}
        </span>
      </div>
    </div>
  );
}

function MetricCard({ 
  icon: Icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative group border rounded-lg p-4 bg-black/40 backdrop-blur-sm",
        "hover:bg-black/60 transition-all duration-300",
        color
      )}
    >
      {/* Scan line effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,243,255,0.03)_50%,transparent_100%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex items-center gap-3">
        <div className={cn(
          "p-2 rounded-lg bg-white/5 border border-white/10",
          "group-hover:scale-110 transition-transform duration-300"
        )}>
          <Icon className={cn("w-5 h-5", color.split(" ")[0])} />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{label}</p>
          <p className={cn(
            "text-sm font-display font-bold truncate",
            color.split(" ")[0]
          )}>
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function TokenomicsSection() {
  const { t } = useTranslation();

  const tokenDistribution: TokenomicsItem[] = [
    {
      label: t("home.tokenomics.distribution.0.label"),
      percent: 70,
      color: "#00f3ff",
      icon: Users,
      description: t("home.tokenomics.distribution.0.desc"),
      vesting: t("home.tokenomics.distribution.0.vesting")
    },
    {
      label: t("home.tokenomics.distribution.1.label"),
      percent: 10,
      color: "#a855f7",
      icon: Cog,
      description: t("home.tokenomics.distribution.1.desc"),
      vesting: t("home.tokenomics.distribution.1.vesting")
    },
    {
      label: t("home.tokenomics.distribution.2.label"),
      percent: 10,
      color: "#3b82f6",
      icon: Megaphone,
      description: t("home.tokenomics.distribution.2.desc"),
      vesting: t("home.tokenomics.distribution.2.vesting")
    },
    {
      label: t("home.tokenomics.distribution.3.label"),
      percent: 10,
      color: "#ec4899",
      icon: PiggyBank,
      description: t("home.tokenomics.distribution.3.desc"),
      vesting: t("home.tokenomics.distribution.3.vesting")
    }
  ];

  const keyMetrics = [
    { label: t("home.tokenomics.metrics.ticker"), value: "$StarQuantum", icon: Coins, color: "text-primary border-primary/30" },
    { label: t("home.tokenomics.metrics.totalSupply"), value: "1,000,000,000", icon: Layers, color: "text-purple-400 border-purple-500/30" },
    { label: t("home.tokenomics.metrics.blockchain"), value: "Solana", icon: Network, color: "text-blue-400 border-blue-500/30" },
    { label: t("home.tokenomics.metrics.tokenStandard"), value: "SPL", icon: CircleDollarSign, color: "text-pink-400 border-pink-500/30" },
  ];

  return (
    <section id="tokenomics" className="py-24 bg-black relative overflow-hidden tokenomics-section">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/tokenomics2.jpg')",
          backgroundAttachment: 'scroll',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" style={{ zIndex: 1 }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" style={{ zIndex: 2 }} />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" style={{ zIndex: 2 }} />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" style={{ zIndex: 2 }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ zIndex: 3 }}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Pill badge */}
          <div className="inline-block px-4 py-1 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm mb-4">
            <span className="text-primary font-mono text-xs tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
              {t("home.tokenomics.pillBadge")}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">
              {t("home.tokenomics.title")}
            </span>
          </h2>

          <p className="text-gray-400 font-mono text-sm mt-4 max-w-2xl mx-auto">
            {t("home.tokenomics.subtitle")}
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {keyMetrics.map((metric, i) => (
            <MetricCard key={i} {...metric} />
          ))}
        </div>

        {/* Main Tokenomics Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Donut Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Chart card */}
            <div className="relative border border-white/10 rounded-lg bg-black/40 backdrop-blur-sm p-6 md:p-8">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/40" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary/40" />
              
              <div className="flex flex-col items-center">
                <DonutChart data={tokenDistribution} size={260} strokeWidth={36} className="mb-4" centerLabel={t("home.tokenomics.donutCenter")} />
                
                {/* Total supply note */}
                <div className="text-center mt-2">
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                    {t("home.tokenomics.totalSupplyLabel")}
                  </p>
                  <p className="text-lg font-display font-bold text-white flex items-center justify-center gap-2">
                    <Infinity className="w-4 h-4 text-primary" />
                    1,000,000,000
                    <span className="text-primary text-sm">$StarQuantum</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Distribution Details */}
          <div className="space-y-3">
            {/* Distribution header */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 bg-primary/20 rounded-lg">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-white font-display font-bold text-lg">
                {t("home.tokenomics.distributionTitle")}
              </span>
            </motion.div>

            {tokenDistribution.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative border border-white/10 rounded-lg bg-black/30 backdrop-blur-sm overflow-hidden hover:bg-black/50 transition-all duration-300"
              >
                {/* Left color bar */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}60` }}
                />

                <div className="pl-5 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 min-w-0">
                      <div 
                        className="p-1.5 rounded-lg mt-0.5 shrink-0 border border-white/10"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <item.icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-display font-bold text-white">{item.label}</p>
                        <p className="text-xs text-gray-500 font-mono mt-0.5 leading-relaxed">{item.description}</p>
                        {item.vesting && (
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <Lock className="w-3 h-3 text-gray-600" />
                            <span className="text-[10px] font-mono text-gray-600">{item.vesting}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span 
                        className="text-lg font-display font-bold tabular-nums"
                        style={{ color: item.color }}
                      >
                        {item.percent}%
                      </span>
                      {/* Mini progress indicator */}
                      <svg width="40" height="40" viewBox="0 0 40 40" className="shrink-0">
                        <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                        <motion.circle
                          cx="20"
                          cy="20"
                          r="16"
                          fill="none"
                          stroke={item.color}
                          strokeWidth="4"
                          strokeDasharray={`${(item.percent / 100) * 100.53} 100.53`}
                          strokeDashoffset={25.13}
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 100.53" }}
                          whileInView={{ strokeDasharray: `${(item.percent / 100) * 100.53} 100.53` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          style={{ filter: `drop-shadow(0 0 3px ${item.color}40)` }}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Hover detail reveal */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-6 text-xs font-mono text-gray-500">
                        <span className="flex items-center gap-1">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          {t("home.tokenomics.share")} <span className="text-white font-bold">{item.percent}%</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Layers className="w-3 h-3" />
                          {t("home.tokenomics.amount")} <span className="text-white font-bold">{(item.percent / 100 * 1000000000).toLocaleString("en-US")}</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Bottom summary */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between p-4 border border-primary/20 rounded-lg bg-primary/5 backdrop-blur-sm mt-4"
            >
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono text-gray-400">
                  {t("home.tokenomics.vestingLockup")}
                </span>
              </div>
              <span className="text-xs font-mono text-primary">
                {t("home.tokenomics.vestingLockupDetail")}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}