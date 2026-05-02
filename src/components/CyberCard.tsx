import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { animationVariants, transitions } from "@/lib/animations";

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  interactive?: boolean;
}

export function CyberCard({ children, className, delay = 0, interactive = true }: CyberCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={animationVariants.fadeInUp}
      transition={{ ...transitions.smooth, delay }}
      whileHover={interactive ? { y: -8, transition: transitions.springSnappy } : undefined}
      className={cn(
        "relative group bg-card/50 border border-white/5 backdrop-blur-sm p-6 overflow-hidden",
        interactive && "hover:border-white/20 hover:bg-card/80 cursor-pointer",
        className
      )}
    >
      {/* Hover glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Corner accents with smooth animation */}
      <motion.div 
        className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/30 group-hover:border-primary transition-colors duration-300"
        whileHover={{ scaleX: 1.2, scaleY: 1.2, transition: transitions.fast }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30 group-hover:border-primary transition-colors duration-300"
        whileHover={{ scaleX: 1.2, scaleY: 1.2, transition: transitions.fast }}
      />
      
      {/* Scanline effect with smooth fade */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,243,255,0.05)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          backgroundPosition: ["0% 0%", "0% 100%"],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
