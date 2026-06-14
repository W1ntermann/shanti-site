"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import { useTranslation } from "react-i18next";

export function RoadmapSection() {
  const { t } = useTranslation();

  const roadmapData = Array.from({ length: 9 }, (_, i) => ({
    quarter: t(`home.roadmap.phases.${i}.quarter`),
    title: t(`home.roadmap.phases.${i}.title`),
    items: Array.from({ length: i < 3 ? 8 : i < 5 ? 4 : i < 5 ? 8 : i < 9 ? 8 : 4 }, (_, j) =>
      t(`home.roadmap.phases.${i}.items.${j}`),
    ),
    completed: i < 4,
  }));

  return (
    <section id="roadmap" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/cyber-clock.jpg)", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-black/65" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-cyber-grid opacity-20" style={{ zIndex: 2 }} />
      <ParallaxBackground />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading centered>{t("home.roadmap.title")}</SectionHeading>
        <p className="text-center text-muted-foreground mb-20 font-mono text-lg max-w-3xl mx-auto">
          {t("home.roadmap.subtitle")}
        </p>
        <RoadmapTimeline phases={roadmapData} />
      </div>
    </section>
  );
}