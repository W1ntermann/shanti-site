"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Key, DollarSign, Zap, Vote } from "lucide-react";
import { useTranslation } from "react-i18next";

export function TokenUtilitySection() {
  const { t } = useTranslation();

  const features = [
    { icon: Key, title: t("home.tokenUtility.features.0.title"), desc: t("home.tokenUtility.features.0.desc"), color: "text-primary" },
    { icon: DollarSign, title: t("home.tokenUtility.features.1.title"), desc: t("home.tokenUtility.features.1.desc"), color: "text-green-400" },
    { icon: Zap, title: t("home.tokenUtility.features.2.title"), desc: t("home.tokenUtility.features.2.desc"), color: "text-orange-400" },
    { icon: Vote, title: t("home.tokenUtility.features.3.title"), desc: t("home.tokenUtility.features.3.desc"), color: "text-yellow-400" },
  ];

  return (
    <section id="token-utility" className="py-24 bg-[#050508] relative overflow-hidden utility-section">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/utility.jpg')", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading centered>{t("home.tokenUtility.title")}</SectionHeading>
        <p className="text-center text-gray-400 mb-12 font-mono">{t("home.tokenUtility.subtitle")}</p>
        <div className="space-y-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111115] border border-white/10 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <feature.icon className={`w-6 h-6 ${feature.color} shrink-0 mt-1`} />
                <div className="flex-1">
                  <h3 className={`text-lg font-display font-bold ${feature.color} mb-2`}>{feature.title}</h3>
                  <div className="text-gray-400 text-sm">
                    {feature.desc.split("\n").map((line, index) => (
                      <p key={index} className={index < feature.desc.split("\n").length - 1 ? "mb-1" : ""}>
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
  );
}