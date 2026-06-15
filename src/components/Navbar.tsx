"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { CyberButton } from "./CyberButton";
import { motion, AnimatePresence } from "framer-motion";
import { transitions } from "@/lib/animations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useTranslation } from "react-i18next";
import { SUPPORTED_LOCALES } from "@/lib/locales";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const pathname = usePathname();

  // Extract current locale from pathname
  const currentLocale = SUPPORTED_LOCALES.find((loc) => pathname.startsWith(`/${loc}`)) || "en";

  const getLocalizedPath = (lng: string) => {
    const segments = pathname.split("/").filter(Boolean);
    // Remove current locale if present
    if ((SUPPORTED_LOCALES as readonly string[]).includes(segments[0])) {
      segments.shift();
    }
    const basePath = segments.join("/");
    return lng === "en" ? `/${basePath}` : `/${lng}${basePath ? `/${basePath}` : ""}`;
  };

  const mainNavLinks = [
    { name: t("navbar.home"), href: "#hero" },
    { name: t("navbar.howItWorks"), href: "#how-it-works" },
    { name: t("navbar.tokenUtility"), href: "#token-utility" },
    { name: t("navbar.tokenomics"), href: "#tokenomics" },
    { name: t("navbar.roadmap"), href: "#roadmap" },
    { name: t("navbar.team"), href: "#team" },
  ];

  const secondaryNavLinks = [
    { name: t("navbar.partners"), href: "#partners" },
    { name: t("navbar.faq"), href: "#faq" },
    { name: t("navbar.community"), href: "#community" },
    { name: t("navbar.testimonials"), href: "#testimonials" },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const languageOptions = [
    { code: "en", name: t("navbar.languageOptions.en") },
    { code: "ru", name: t("navbar.languageOptions.ru") },
    { code: "hi", name: t("navbar.languageOptions.hi") },
    { code: "fa", name: t("navbar.languageOptions.fa") },
    { code: "ar", name: t("navbar.languageOptions.ar") },
    { code: "zh", name: t("navbar.languageOptions.zh") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={transitions.springSnappy}
          >
            <motion.div
              className="flex items-center gap-2.5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transitions.smooth}
            >
              <motion.div
                className="relative w-10 h-10 overflow-hidden rounded border border-primary/50 shadow-[0_0_10px_rgba(0,243,255,0.3)]"
                whileHover={{
                  boxShadow: "0 0 20px rgba(0, 243, 255, 0.6)",
                }}
              >
                <img src="/logo-for-site.jpg" alt="StarQuantum AI" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              </motion.div>
              <motion.span
                className="font-display font-bold text-lg tracking-wider text-white hidden sm:inline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...transitions.smooth, delay: 0.1 }}
              >
                STARQUANTUM<span className="text-primary">.AI</span>
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-12">
            <div className="flex items-center gap-1">
              {mainNavLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleScroll(link.href)}
                  className="px-3 py-2 font-mono text-xs text-gray-400 hover:text-primary transition-colors uppercase tracking-widest relative group rounded-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transitions.smooth, delay: index * 0.05 }}
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={transitions.fast}
                  />
                </motion.button>
              ))}

              {/* More dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    className="px-3 py-2 font-mono text-xs text-gray-400 hover:text-primary transition-colors uppercase tracking-widest group rounded-sm relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("navbar.more")}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={transitions.fast}
                    />
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-gray-950/95 border border-white/20 backdrop-blur-lg">
                  {secondaryNavLinks.map((link) => (
                    <motion.div key={link.name}>
                      <DropdownMenuItem
                        onClick={() => handleScroll(link.href)}
                        className="cursor-pointer text-gray-300 hover:text-primary focus:text-primary"
                      >
                        {link.name}
                      </DropdownMenuItem>
                    </motion.div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  className="p-2 rounded-sm hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-4 h-4 text-gray-400 hover:text-primary transition-colors" />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 bg-gray-950/95 border border-white/20 backdrop-blur-lg">
                {languageOptions.map(({ code, name }) => (
                  <DropdownMenuItem key={code} asChild>
                    <Link
                      href={getLocalizedPath(code)}
                      className={`cursor-pointer text-gray-300 hover:text-primary focus:text-primary ${code === currentLocale ? "text-primary font-medium" : ""}`}
                    >
                      {name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <motion.a
              href="https://t.me/Star_Quantum_Bot"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...transitions.smooth, delay: 0.2 }}
            >
              <CyberButton className="h-10 px-6 text-sm font-semibold whitespace-nowrap">
                {t("navbar.launchApp")}
              </CyberButton>
            </motion.a>
          </div>

          {/* Tablet Nav */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded-sm hover:bg-white/10 transition-colors">
                  <Globe className="w-4 h-4 text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 bg-gray-950/95 border border-white/20 backdrop-blur-lg">
                {languageOptions.map(({ code, name }) => (
                  <DropdownMenuItem key={code} asChild>
                    <Link
                      href={getLocalizedPath(code)}
                      className={`cursor-pointer text-gray-300 hover:text-primary focus:text-primary ${code === currentLocale ? "text-primary font-medium" : ""}`}
                    >
                      {name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="https://t.me/Star_Quantum_Bot" target="_blank" rel="noopener noreferrer">
              <CyberButton size="sm" className="h-9 px-4 text-xs font-semibold">
                {t("navbar.launch")}
              </CyberButton>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-primary p-2 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-1.5 rounded-sm hover:bg-white/10 transition-colors">
                  <Globe className="w-4 h-4 text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 bg-gray-950/95 border border-white/20 backdrop-blur-lg">
                {languageOptions.map(({ code, name }) => (
                  <DropdownMenuItem key={code} asChild>
                    <Link
                      href={getLocalizedPath(code)}
                      className={`cursor-pointer text-gray-300 hover:text-primary focus:text-primary ${code === currentLocale ? "text-primary font-medium" : ""}`}
                    >
                      {name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-primary p-1.5 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {[...mainNavLinks, ...secondaryNavLinks].map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-display font-medium text-gray-300 hover:text-primary hover:bg-white/5 border-l-2 border-transparent hover:border-primary transition-all rounded-r-sm"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-2 px-4">
                <a href="https://t.me/Star_Quantum_Bot" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <CyberButton className="w-full h-10 text-sm font-semibold">{t("navbar.launchApp")}</CyberButton>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}