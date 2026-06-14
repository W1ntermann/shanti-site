"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FaqSection() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = Array.from({ length: 6 }, (_, i) => ({
    q: t(`home.faq.items.${i}.question`),
    a: t(`home.faq.items.${i}.answer`),
  }));

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden faq-section">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/faq.jpg')", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-black/65" style={{ zIndex: 1 }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading centered>{t("home.faq.title")}</SectionHeading>
        <div className="space-y-4 mt-12">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#111115] border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-medium pr-4">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-gray-400 text-sm border-t border-white/10 pt-4">{item.a}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}