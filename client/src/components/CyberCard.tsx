import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function CyberCard({ children, className, delay = 0 }: CyberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative group bg-card/50 border border-white/5 backdrop-blur-sm p-6 overflow-hidden",
        className
      )}
    >
      {/* Hover glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/30 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30 group-hover:border-primary transition-colors" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,243,255,0.05)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
