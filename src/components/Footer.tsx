import { Twitter, MessageCircle as Telegram, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

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
    <footer id="contact" className="bg-black pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-display font-bold text-primary mb-4">ShantiAI</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              {t('footer.description')}
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                data-testid="link-footer-twitter"
              >
                <Twitter className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="https://t.me/shantiAIwealth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                data-testid="link-footer-telegram"
              >
                <Telegram className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                data-testid="link-footer-github"
              >
                <Github className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-primary font-display font-bold text-sm uppercase tracking-wider mb-4">{t('footer.product')}</h4>
            <ul className="space-y-3">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    data-testid={`link-product-${i}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-primary font-display font-bold text-sm uppercase tracking-wider mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    data-testid={`link-resource-${i}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-primary font-display font-bold text-sm uppercase tracking-wider mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    data-testid={`link-legal-${i}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-mono text-gray-600">
            {t('footer.copyright')}
          </div>
          <div className="text-xs font-mono text-gray-600">
            {t('footer.disclaimer')}
          </div>
        </div>
      </div>
    </footer>
  );
}
