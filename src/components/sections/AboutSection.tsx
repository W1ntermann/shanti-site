"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useTranslation } from "react-i18next";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-24 md:py-48 bg-[#050508] relative overflow-hidden min-h-[600px] md:min-h-[800px]"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/about-pict.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <div className="absolute inset-0 bg-black/70" style={{ zIndex: 1 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading>{t("home.about.title")}</SectionHeading>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t("home.about.paragraph1")}
            </p>
            <p className="text-gray-400 font-mono text-sm leading-relaxed border-l-2 border-primary/50 pl-6">
              {t("home.about.paragraph2")}
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
                    <div className="text-2xl font-display font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-primary uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}