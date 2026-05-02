import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from '../hooks/use-media-query';

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {isDesktop ? (
        <>
          {/* Floating geometric shapes with enhanced animations */}
          <motion.div
            style={{ y: y1, opacity, rotate: rotate1 }}
            className="absolute top-20 left-10 w-20 h-20 border border-primary/30 clip-corner-br shadow-[0_0_20px_rgba(0,243,255,0.2)]"
          />
          <motion.div
            style={{ y: y2, opacity, scale }}
            className="absolute top-40 right-20 w-16 h-16 border border-secondary/30 rounded-full shadow-[0_0_20px_rgba(255,0,255,0.2)]"
          />
          <motion.div
            style={{ y: y3, opacity, rotate: rotate2 }}
            className="absolute bottom-40 left-1/4 w-12 h-12 border border-accent/30 shadow-[0_0_15px_rgba(255,193,7,0.2)]"
          />
          <motion.div
            style={{ y: y2, opacity }}
            className="absolute bottom-20 right-1/3 w-24 h-24 border border-primary/20 clip-corner-tl-br shadow-[0_0_25px_rgba(0,243,255,0.15)]"
          />
          
          {/* Animated lines with gradient effects */}
          <motion.div
            style={{ y: y1, opacity }}
            className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent shadow-[0_0_10px_rgba(0,243,255,0.4)]"
          />
          <motion.div
            style={{ y: y2, opacity }}
            className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent shadow-[0_0_10px_rgba(255,0,255,0.4)]"
          />
          
          {/* Animated dots */}
          <motion.div
            style={{ y: y1 }}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-accent/40 shadow-[0_0_10px_rgba(255,193,7,0.6)]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-primary/30 shadow-[0_0_15px_rgba(0,243,255,0.5)]"
            animate={{
              scale: [1.5, 1, 1.5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
        </>
      ) : (
        <>
          {/* Simplified, optimized mobile background */}
          <div className="absolute inset-0 bg-mobile-hero" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </>
      )}
    </div>
  );
}