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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {isDesktop ? (
        <>
          {/* Floating geometric shapes (desktop only) */}
          <motion.div
            style={{ y: y1, opacity }}
            className="absolute top-20 left-10 w-20 h-20 border border-primary/20 clip-corner-br"
          />
          <motion.div
            style={{ y: y2, opacity }}
            className="absolute top-40 right-20 w-16 h-16 border border-secondary/20 rounded-full"
          />
          <motion.div
            style={{ y: y1, opacity }}
            className="absolute bottom-40 left-1/4 w-12 h-12 border border-accent/20"
          />
          <motion.div
            style={{ y: y2, opacity }}
            className="absolute bottom-20 right-1/3 w-24 h-24 border border-primary/10 clip-corner-tl-br"
          />
          {/* Animated lines (desktop) */}
          <motion.div
            style={{ y: y1, opacity }}
            className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          />
          <motion.div
            style={{ y: y2, opacity }}
            className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
          />
        </>
      ) : (
        <>
          {/* Simplified, optimized mobile background */}
          <div className="absolute inset-0 bg-mobile-hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
        </>
      )}
    </div>
  );
}