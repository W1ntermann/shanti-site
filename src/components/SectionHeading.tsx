import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { transitions } from "@/lib/animations";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ children, className, centered = false }: SectionHeadingProps) {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        variants={textVariants}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-glow-cyan"
        >
          <motion.span 
            className="text-secondary mr-2 inline-block"
            animate={{
              opacity: [0.5, 1, 0.5],
              textShadow: [
                "0 0 10px rgba(255, 0, 255, 0.3)",
                "0 0 20px rgba(255, 0, 255, 0.6)",
                "0 0 10px rgba(255, 0, 255, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            /
          </motion.span>
          {children}
        </motion.h2>
      </motion.div>
      
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ ...transitions.smooth, delay: 0.2 }}
        className={cn(
          "h-1 bg-gradient-to-r from-primary via-secondary to-accent mt-4 shadow-[0_0_10px_rgba(10,189,198,0.5)]",
          centered ? "mx-auto w-24" : "w-24"
        )}
        style={{ transformOrigin: centered ? "center" : "left" }}
      />
      
      {/* Animated accent dots */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ delay: 0.4 }}
        className={cn(
          "flex gap-2 mt-3",
          centered && "justify-center"
        )}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/40"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
