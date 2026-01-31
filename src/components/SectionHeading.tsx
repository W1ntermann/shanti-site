import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ children, className, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <motion.h2 
        initial={{ opacity: 0, x: centered ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-display font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50"
      >
        <span className="text-primary mr-2">/</span>
        {children}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={cn(
          "h-1 bg-gradient-to-r from-primary to-transparent mt-4",
          centered ? "mx-auto w-24" : "w-24"
        )} 
      />
    </div>
  );
}
