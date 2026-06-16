"use client";

import { X, MessageCircle as Telegram, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DIcons } from "dicons";

const Underline = "hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform";

export function Footer() {
  const { t } = useTranslation();

  const productLinks = [
    { name: t("footer.links.features"), href: "#technology" },
    { name: t("footer.links.demo"), href: "#how-it-works" },
    { name: t("footer.links.tokenomics"), href: "#tokenomics" },
    { name: t("footer.links.roadmap"), href: "#roadmap" }
  ];

  const resourceLinks = [
    { name: t("footer.links.documentation"), href: "#" },
    { name: t("footer.links.api"), href: "#" },
    { name: t("footer.links.whitepaper"), href: "#" },
    { name: t("footer.links.faq"), href: "#faq" }
  ];

  const legalLinks = [
    { name: t("footer.links.termsOfService"), href: "#" },
    { name: t("footer.links.privacyPolicy"), href: "#" },
    { name: t("footer.links.riskDisclaimer"), href: "#" }
  ];



  return (
    <footer className="relative mx-auto w-full border-t border-white/10 bg-black overflow-hidden">
      {/* Фонова картинка */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/footer-bg.jpg')",
          opacity: 0.15,
          zIndex: 1
        }}
      />
      
      {/* Легка градієнтна маска - лише знизу для читаності */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" style={{ zIndex: 2 }} />
      
      {/* Патерн сітки - світліший */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" style={{ zIndex: 2 }} />
      
      {/* Основний контент */}
      <div className="relative z-10 px-2">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Основний контент футера */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <a href="/" className="inline-block">
                <div className="flex items-center gap-3 mb-4">
                  {/* Логотип */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                    <div className="relative w-10 h-10 overflow-hidden rounded border border-primary/50 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                      <img 
                        src="/logo-for-site.jpg" 
                        alt="StarQuantum AI" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-xl tracking-tight">StarQuantum AI</span>
                    <span className="text-[10px] text-primary/60 tracking-wider uppercase">Artificial Intelligence</span>
                  </div>
                </div>
              </a>
              <p className="text-gray-400 text-sm mb-6 max-w-sm leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-primary font-display font-bold text-sm uppercase tracking-wider mb-4">
                {t('footer.product')}
              </h4>
              <ul className="space-y-3">
                {productLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center gap-2"
                      data-testid={`link-product-${i}`}
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-primary font-display font-bold text-sm uppercase tracking-wider mb-4">
                {t('footer.resources')}
              </h4>
              <ul className="space-y-3">
                {resourceLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center gap-2"
                      data-testid={`link-resource-${i}`}
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-primary font-display font-bold text-sm uppercase tracking-wider mb-4">
                {t('footer.legal')}
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm group flex items-center gap-2"
                      data-testid={`link-legal-${i}`}
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Професійний роздільник 1 */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-4 bg-transparent">
                <div className="w-2 h-2 rounded-full bg-primary/40"></div>
              </div>
            </div>
          </div>

          {/* Соціальні іконки */}
          <div className="flex flex-wrap justify-center gap-y-6 py-6">
            <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
              <a
                aria-label="Mail"
                href="mailto:contact@shantiai.com"
                rel="noreferrer"
                target="_blank"
                className={`${Underline} hover:border-primary/50 hover:bg-primary/5 backdrop-blur-sm`}
              >
                <DIcons.Mail strokeWidth={1.5} className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a
                aria-label="X (Twitter)"
                href="https://x.com/starquantum_io"
                rel="noreferrer"
                target="_blank"
                className={`${Underline} hover:border-primary/50 hover:bg-primary/5 backdrop-blur-sm`}
              >
                <DIcons.X className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/starquantum_ai/"
                rel="noreferrer"
                target="_blank"
                className={`${Underline} hover:border-primary/50 hover:bg-primary/5 backdrop-blur-sm`}
              >
                <DIcons.Instagram className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a
                aria-label="TikTok"
                href="#"
                rel="noreferrer"
                target="_blank"
                className={`${Underline} hover:border-primary/50 hover:bg-primary/5 backdrop-blur-sm`}
              >
                <svg className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Професійний роздільник 2 - градієнтний */}
          <div className="relative my-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs font-mono text-gray-500 hover:text-gray-400 transition-colors">
              {t('footer.copyright')}
            </div>
            <div className="flex flex-row items-center justify-center gap-1 text-xs text-gray-500">
              <span>©</span>
              <span>{new Date().getFullYear()}</span>
              <span>Made with</span>
              <DIcons.Heart className="text-red-500 mx-1 h-3 w-3 animate-pulse hover:scale-125 transition-transform" />
              <span>by</span>
              <span className="text-primary/80 hover:text-primary transition-colors cursor-pointer">
                StarQuantum AI Team
              </span>
            </div>
            <div className="text-xs font-mono text-gray-500 hover:text-gray-400 transition-colors">
              {t('footer.disclaimer')}
            </div>
          </div>

          {/* Декоративний нижній роздільник */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
}