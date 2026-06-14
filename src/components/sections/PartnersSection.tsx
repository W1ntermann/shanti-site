"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Link as LinkIcon, Database, Eye, TrendingUp, Shield, Network, Satellite, LineChart, Gauge, Terminal, BarChart3, Brain } from "lucide-react";
import { useTranslation } from "react-i18next";

export function PartnersSection() {
  const { t } = useTranslation();

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
    { name: "Santiment", icon: Brain },
  ];

  return (
    <section id="partners" className="py-24 bg-[#050508] relative overflow-hidden partners-section">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/partners.jpg')", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-black/65" style={{ zIndex: 1 }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading centered>{t("home.partners.title")}</SectionHeading>
        <p className="text-center text-gray-400 mb-12 font-mono">{t("home.partners.subtitle")}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#111115] border border-white/10 rounded-lg p-6 flex items-center gap-3"
            >
              <partner.icon className="w-5 h-5 text-primary" />
              <span className="text-white font-medium">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}