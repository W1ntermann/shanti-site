import { motion } from 'framer-motion';
import { Zap, Gift, Clock, TrendingUp, Star, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CyberButton } from './CyberButton';

interface BetaLiveCardProps {
  betaNote?: string;
}

export function BetaLiveCard({ }: BetaLiveCardProps) {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Clock,
      title: t('betaLive.benefits.0.title'),
      desc: t('betaLive.benefits.0.desc'),
      color: "text-primary"
    },
    {
      icon: Gift,
      title: t('betaLive.benefits.1.title'),
      desc: t('betaLive.benefits.1.desc'),
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: t('betaLive.benefits.2.title'),
      desc: t('betaLive.benefits.2.desc'),
      color: "text-secondary"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-8 relative group"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-card/90 border border-primary/40 backdrop-blur-md p-8 clip-corner-tl-br overflow-hidden">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/50 group-hover:border-primary transition-colors duration-300" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/50 group-hover:border-accent transition-colors duration-300" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-cyber-grid opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <div>
              <h4 className="text-2xl font-display font-bold text-primary text-glow-cyan uppercase tracking-wider">
                {t('betaLive.title')}
              </h4>
              <p className="text-accent font-mono text-sm font-bold uppercase tracking-widest">
                {t('betaLive.subtitle')}
              </p>
            </div>
          </div>

          {/* Main message */}
          <div className="mb-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-foreground text-lg font-medium leading-relaxed mb-4">
              {t('betaLive.message')} <span className="text-accent font-bold">{t('betaLive.highlight')}</span>
            </p>
            <p className="text-muted-foreground text-sm font-mono">
              {t('betaLive.ticket')}
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/50 border border-border p-4 rounded-lg text-center group/benefit hover:border-primary/50 transition-all duration-300"
              >
                <benefit.icon className={`w-8 h-8 ${benefit.color} mx-auto mb-3 group-hover/benefit:scale-110 transition-transform duration-300`} />
                <h5 className="font-display font-bold text-foreground text-sm mb-2 uppercase">
                  {benefit.title}
                </h5>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://t.me/Star_Quantum_Bot" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <CyberButton className="w-full sm:w-auto px-8 py-3 text-sm">
                <Zap className="w-4 h-4 mr-2" />
                {t('betaLive.depositNow')}
              </CyberButton>
            </a>
            <CyberButton 
              variant="outline" 
              className="w-full sm:w-auto px-6 py-3 text-sm"
              onClick={() => {
                document.getElementById('token-utility')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Star className="w-4 h-4 mr-2" />
              {t('betaLive.learnTokenUtility')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </CyberButton>
          </div>

          {/* Animated elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse opacity-60" />
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-pulse opacity-40" />
        </div>
      </div>
    </motion.div>
  );
}