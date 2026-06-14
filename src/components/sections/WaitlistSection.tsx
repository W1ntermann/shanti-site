"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { CyberButton } from "@/components/CyberButton";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export function WaitlistSection() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const { t } = useTranslation();
  const subscribeMutation = useCreateSubscriber();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeMutation.mutate(
        { email },
        {
          onSuccess: () => {
            toast({ title: t("home.waitlist.toast.successTitle"), description: t("home.waitlist.toast.successDescription") });
            setEmail("");
          },
          onError: (error) => {
            toast({ title: t("home.waitlist.toast.errorTitle"), description: error.message || t("home.waitlist.toast.errorDescription"), variant: "destructive" });
          },
        },
      );
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/join.jpg)", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-black/70" style={{ zIndex: 1 }} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <SectionHeading centered>{t("home.waitlist.title")}</SectionHeading>
        <p className="text-gray-400 mb-8 font-mono">{t("home.waitlist.subtitle")}</p>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("home.waitlist.placeholder")}
            className="w-full bg-[#111115] border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary"
            required
          />
          <CyberButton type="submit" className="w-full h-14" disabled={subscribeMutation.isPending}>
            {subscribeMutation.isPending ? t("home.waitlist.joining") : t("home.waitlist.button")}
          </CyberButton>
        </form>
        <p className="mt-6 text-gray-500 text-sm flex items-center justify-center gap-2">
          {t("home.waitlist.note")}
        </p>
      </div>
    </section>
  );
}