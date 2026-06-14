"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { CyberCard } from "@/components/CyberCard";
import { TrendingUp, Cpu, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export function TechnologySection() {
  const { t } = useTranslation();

  const features = [
    { icon: TrendingUp, title: t("home.technology.features.0.title"), desc: t("home.technology.features.0.desc"), color: "text-primary" },
    { icon: Cpu, title: t("home.technology.features.1.title"), desc: t("home.technology.features.1.desc"), color: "text-secondary" },
    { icon: Shield, title: t("home.technology.features.2.title"), desc: t("home.technology.features.2.desc"), color: "text-accent" },
  ];

  return (
    <section id="technology" className="py-24 bg-black relative overflow-hidden technology-section">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/technology.jpg)", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-black/65" style={{ zIndex: 1 }} />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ zIndex: 2 }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading centered>{t("home.technology.title")}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
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
  );
}