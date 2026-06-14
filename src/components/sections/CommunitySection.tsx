"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { CyberButton } from "@/components/CyberButton";
import { Twitter, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CommunitySection() {
  const { t } = useTranslation();

  return (
    <section id="community" className="py-24 bg-[#050508] relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/second-join.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading centered>{t("home.community.title")}</SectionHeading>
        <p className="text-center text-gray-400 mb-12 font-mono">{t("home.community.subtitle")}</p>
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
            <h3 className="text-xl font-display font-bold text-white mb-1">{t("home.community.twitter")}</h3>
            <p className="text-primary text-lg font-bold mb-4">{t("home.community.twitterFollowers")}</p>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <CyberButton variant="secondary" className="w-full">{t("home.community.followUs")}</CyberButton>
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
            <h3 className="text-xl font-display font-bold text-white mb-1">{t("home.community.telegram")}</h3>
            <p className="text-primary text-lg font-bold mb-4">{t("home.community.telegramFollowers")}</p>
            <a href="https://t.me/+ObGnIkpcUF5lNTc5" target="_blank" rel="noopener noreferrer">
              <CyberButton variant="secondary" className="w-full">{t("home.community.joinChat")}</CyberButton>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}