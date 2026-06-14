"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { TeamSlider } from "@/components/TeamSlider";
import { useTranslation } from "react-i18next";

export function TeamSection() {
  const { t } = useTranslation();

  const names = ["Cipher", "Ghost", "Dr. Nandini 'Quant'", "Deepak", "Sanjeev", "Bomber", "Mad Max", "Yash", "Samaira", "Dr. Shell", "Mira", "Wolf", "Mary", "Tony", "Kira", "Marcus", "Lex"];
  const avatars = ["C", "G", "N", "D", "S", "B", "M", "Y", "S", "S", "M", "W", "M", "T", "K", "M", "L"];

  const teamMembers = Array.from({ length: 17 }, (_, i) => ({
    name: names[i],
    role: t(`home.team.members.${i}.role`),
    desc: t(`home.team.members.${i}.desc`),
    avatar: avatars[i],
  }));

  return (
    <section id="team" className="py-24 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/team.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      <ParallaxBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading centered>{t("home.team.title")}</SectionHeading>
        <p className="text-center text-muted-foreground mb-16 font-mono text-lg">{t("home.team.subtitle")}</p>
        <TeamSlider members={teamMembers} />
      </div>
    </section>
  );
}