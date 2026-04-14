import { useState } from "react";
import { Menu, X, Globe } from "lucide-react"; // Додаємо іконку Globe для перемикача мов
import { CyberButton } from "./CyberButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Імпортуємо DropdownMenu компоненти

import { useTranslation } from "react-i18next"; // Імпортуємо useTranslation hook

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation(); // Використовуємо useTranslation hook

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t('navbar.home'), href: "#hero" },
    { name: t('navbar.howItWorks'), href: "#how-it-works" },
    { name: t('navbar.tokenUtility'), href: "#token-utility" },
    { name: t('navbar.tokenomics'), href: "#tokenomics" },
    { name: t('navbar.roadmap'), href: "#roadmap" },
    { name: t('navbar.team'), href: "#team" },
    { name: t('navbar.partners'), href: "#partners" },
    { name: t('navbar.faq'), href: "#faq" },
    { name: t('navbar.community'), href: "#community" },
    { name: t('navbar.waitlist'), href: "#waitlist" },
    { name: t('navbar.testimonials'), href: "#testimonials" },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-sm border border-primary/50 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                <img 
                  src="https://shanti-ai.netlify.app/shanti_logo.jpg" 
                  alt="Shanti AI" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-white">
                SHANTI<span className="text-primary">.AI</span>
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className="font-mono text-sm text-gray-400 hover:text-primary transition-colors uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <CyberButton variant="outline" size="sm" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {t('navbar.language')}
                </CyberButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 bg-gray-900 border border-white/20">
                <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer">
                  {t('navbar.languageOptions.en')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ru')} className="cursor-pointer">
                  {t('navbar.languageOptions.ru')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('hi')} className="cursor-pointer">
                  {t('navbar.languageOptions.hi')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('fa')} className="cursor-pointer">
                  {t('navbar.languageOptions.fa')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ar')} className="cursor-pointer">
                  {t('navbar.languageOptions.ar')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('zh')} className="cursor-pointer">
                  {t('navbar.languageOptions.zh')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* End Language Switcher */}
            <a href="https://t.me/sshanti_bot" target="_blank" rel="noopener noreferrer">
              <CyberButton variant="outline" className="h-10 px-6 text-xs">
                Launch App
              </CyberButton>
            </a>
          </div>

          {/* Mobile menu button and Language Switcher for Mobile */}
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <CyberButton variant="ghost" size="icon" className="text-gray-300 mr-2">
                  <Globe className="w-5 h-5" />
                </CyberButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 bg-gray-900 border border-white/20">
                <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer">
                  {t('navbar.languageOptions.en')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ru')} className="cursor-pointer">
                  {t('navbar.languageOptions.ru')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('hi')} className="cursor-pointer">
                  {t('navbar.languageOptions.hi')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('fa')} className="cursor-pointer">
                  {t('navbar.languageOptions.fa')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ar')} className="cursor-pointer">
                  {t('navbar.languageOptions.ar')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('zh')} className="cursor-pointer">
                  {t('navbar.languageOptions.zh')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
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
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.href)}
                  className="block w-full text-left px-3 py-4 text-base font-display font-medium text-gray-300 hover:text-primary hover:bg-white/5 border-l-2 border-transparent hover:border-primary transition-all"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 px-3">
                <a href="https://t.me/sshanti_bot" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <CyberButton className="w-full">Launch App</CyberButton>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
