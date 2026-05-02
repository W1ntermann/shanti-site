import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { transitions } from "@/lib/animations";

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "cyber" | "ghost";
  size?: "default" | "sm" | "icon";
  isLoading?: boolean;
}

export const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant = "primary", size = "default", isLoading, children, ...props }, ref) => {
    
    const variants = {
      primary: "bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]",
      secondary: "bg-secondary text-white hover:bg-secondary/90 hover:shadow-[0_0_20px_rgba(255,0,255,0.4)]",
      cyber: "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 hover:from-fuchsia-700 hover:via-purple-700 hover:to-violet-700 text-white border-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.6)] hover:shadow-[0_0_30px_rgba(217,70,239,0.8)] ring-2 ring-fuchsia-500/30",
      outline: "bg-transparent border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,243,255,0.2)]",
      ghost: "bg-transparent text-white hover:bg-white/10 hover:shadow-[0_0_10px_rgba(255,255,255,0.12)]"
    };

    const sizes = {
      default: "px-8 py-3 text-sm",
      sm: "px-4 py-2 text-xs",
      icon: "p-2"
    };

    // Filter out props that are incompatible with motion.button
    const {
      onDrag,
      onDragStart,
      onDragEnd,
      onDragOver,
      onDragEnter,
      onDragLeave,
      onDrop,
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      ...motionProps
    } = props;

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative font-display font-bold tracking-widest uppercase transition-all duration-300",
          "clip-corner-br focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading || motionProps.disabled}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={transitions.springSnappy}
        {...motionProps}
      >
        <motion.span 
          className="flex items-center justify-center gap-2"
          layout
        >
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loader2 className="w-4 h-4 animate-spin" />
            </motion.div>
          )}
          {children}
        </motion.span>
        
        {/* Animated decorator lines */}
        <motion.div 
          className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-current opacity-50"
          whileHover={{ scale: 1.3, opacity: 1 }}
          transition={transitions.fast}
        />
        <motion.div 
          className="absolute top-0 left-0 w-1 h-3 bg-current opacity-50"
          whileHover={{ height: "1.5rem", opacity: 1 }}
          transition={transitions.fast}
        />
      </motion.button>
    );
  }
);

CyberButton.displayName = "CyberButton";