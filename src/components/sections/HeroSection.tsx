"use client";

import { motion } from "framer-motion";
import { CyberButton } from "@/components/CyberButton";
import { Activity, Cpu, Zap, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Fullscreen Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/hero.jpg"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/for-site.mp4" type="video/mp4" />
      </video>

      {/* Cinematic gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.20) 40%, rgba(0,0,0,0.20) 60%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      <div
        className="absolute inset-0 bg-cyber-grid opacity-30 animate-pulse"
        style={{ zIndex: 2 }}
      />

      {/* Glow blurs */}
      <div
        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-cyber-pulse"
        style={{ zIndex: 2 }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-cyber-pulse"
        style={{ zIndex: 2 }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-32 h-32 md:w-64 md:h-64 bg-accent/15 rounded-full blur-[60px] md:blur-[100px] pointer-events-none animate-pulse"
        style={{ zIndex: 2 }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-mono font-bold tracking-widest uppercase text-gray-400 mb-4">
            {t("home.hero.title")}
          </h1>
          <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto mb-6">
            {t("home.hero.description")}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://t.me/Star_Quantum_Bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CyberButton className="w-full sm:w-auto h-14 text-base px-10">
                {t("home.hero.becomeAUser")}
              </CyberButton>
            </a>
            <CyberButton
              variant="secondary"
              className="w-full sm:w-auto h-14 text-base px-10"
              onClick={scrollToAbout}
            >
              {t("home.hero.exploreStarQuantumAI")}
            </CyberButton>
            <a
              href="https://t.me/+ObGnIkpcUF5lNTc5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CyberButton
                variant="cyber"
                className="w-full sm:w-auto h-14 text-base px-10"
              >
                {t("home.hero.testNewStrategy")}
              </CyberButton>
            </a>
          </motion.div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="text-center">
            <div className="inline-block px-4 py-1 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm mb-4">
              <span className="text-accent font-mono text-xs tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(255,234,0,0.8)]" />
                {t("ourStory.sectionTitle")}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight leading-tight mb-6">
              {t("ourStory.fromForumLurkers")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                {t("ourStory.toCartelFighters")}
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <p
                key={n}
                className={`text-gray-300 text-lg leading-relaxed text-center ${n === 5 ? "font-medium" : ""}`}
              >
                {t(`ourStory.paragraph${n}`)}
              </p>
            ))}
          </div>

          {/* Key moments in 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-6"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    <span>{t("ourStory.journeyContinuesTitle")}</span>
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("ourStory.journeyContinuesText")}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-secondary" />
                    <span>{t("ourStory.aiBreakthroughTitle")}</span>
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("ourStory.aiBreakthroughText1")}
                  </p>
                  <p className="text-primary text-sm font-medium mt-3">
                    {t("ourStory.aiBreakthroughText2")}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-6"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    <span>{t("ourStory.proofProgressTitle")}</span>
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t("ourStory.proofProgressText1")}
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-gray-300 text-sm">
                        <span className="text-white font-medium">
                          {t("ourStory.proofProgressItem1")}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                      <p className="text-gray-300 text-sm">
                        <span className="text-white font-medium">
                          {t("ourStory.proofProgressItem2")}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span>{t("ourStory.futureStarQuantumTokenTitle")}</span>
                  </h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                            n === 1
                              ? "bg-accent"
                              : n === 2
                                ? "bg-green-400"
                                : "bg-purple-400"
                          }`}
                        />
                        <p className="text-gray-300 text-sm">
                          {t(`ourStory.futureStarQuantumTokenItem${n}`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <p className="text-primary font-bold text-sm mb-2">
                    {t("ourStory.ourMissionTitle")}
                  </p>
                  <p className="text-white text-sm font-medium">
                    {t("ourStory.ourMissionText1")}
                  </p>
                  <p className="text-gray-300 text-xs mt-1">
                    {t("ourStory.ourMissionText2")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
      </motion.div>
    </section>
  );
}