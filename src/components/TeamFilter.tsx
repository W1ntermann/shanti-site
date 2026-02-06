import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Team', count: 16 },
  { id: 'leadership', label: 'Leadership', count: 3 },
  { id: 'engineering', label: 'Engineering', count: 7 },
  { id: 'ai-ml', label: 'AI & ML', count: 3 },
  { id: 'design-product', label: 'Design & Product', count: 3 }
];

interface TeamFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function TeamFilter({ activeFilter, onFilterChange }: TeamFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onFilterChange(category.id)}
          className={cn(
            "px-6 py-3 border backdrop-blur-sm font-mono text-sm uppercase tracking-wider transition-all duration-300 clip-corner-br group relative overflow-hidden",
            activeFilter === category.id
              ? "border-primary bg-primary/20 text-primary shadow-[0_0_20px_rgba(0,243,255,0.3)]"
              : "border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10"
          )}
        >
          {/* Animated background */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 transition-opacity duration-300",
            activeFilter === category.id ? "opacity-100" : "opacity-0 group-hover:opacity-50"
          )} />
          
          {/* Content */}
          <span className="relative z-10 flex items-center gap-2">
            {category.label}
            <span className={cn(
              "px-2 py-1 rounded-full text-xs font-bold",
              activeFilter === category.id
                ? "bg-primary/30 text-primary"
                : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
            )}>
              {category.count}
            </span>
          </span>
        </motion.button>
      ))}
    </div>
  );
}