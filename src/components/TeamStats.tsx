import { motion } from 'framer-motion';
import { Users, Award, Code, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "16+",
    label: "Team Members",
    color: "text-primary"
  },
  {
    icon: Award,
    value: "50+",
    label: "Years Combined Experience",
    color: "text-secondary"
  },
  {
    icon: Code,
    value: "1M+",
    label: "Lines of Code Written",
    color: "text-accent"
  },
  {
    icon: TrendingUp,
    value: "$500M+",
    label: "Trading Volume Processed",
    color: "text-primary"
  }
];

export function TeamStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-card/50 border border-border backdrop-blur-sm p-6 text-center clip-corner-br group hover:border-primary/50 transition-all duration-300"
        >
          <div className="relative">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            
            {/* Icon */}
            <div className={`w-12 h-12 mx-auto mb-4 ${stat.color} relative z-10`}>
              <stat.icon className="w-full h-full" />
            </div>
            
            {/* Value */}
            <div className={`text-3xl font-display font-bold mb-2 ${stat.color} text-glow-cyan relative z-10`}>
              {stat.value}
            </div>
            
            {/* Label */}
            <div className="text-muted-foreground text-sm font-mono uppercase tracking-wider relative z-10">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}