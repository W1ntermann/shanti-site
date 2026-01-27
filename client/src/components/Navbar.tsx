import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { CyberButton } from "./CyberButton";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Technology", href: "#technology" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Philosophy", href: "#philosophy" },
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
            <a href="https://t.me/sshanti_bot" target="_blank" rel="noopener noreferrer">
              <CyberButton variant="outline" className="h-10 px-6 text-xs">
                Launch App
              </CyberButton>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
