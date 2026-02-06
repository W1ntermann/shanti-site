import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  Zap, 
  Brain, 
  Rocket, 
  Globe, 
  Users,
  TrendingUp,
  Code
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoadmapPhase {
  quarter: string;
  title: string;
  items: string[];
  completed: boolean;
  icon?: any;
  color?: string;
}

interface RoadmapTimelineProps {
  phases: RoadmapPhase[];
}

const getPhaseIcon = (index: number) => {
  const icons = [Brain, Code, Rocket, Globe, TrendingUp, Users];
  const IconComponent = icons[index % icons.length];
  return IconComponent;
};

const getStatusIcon = (item: string) => {
  if (item.startsWith('✅')) return CheckCircle;
  if (item.startsWith('⏳')) return Clock;
  if (item.startsWith('🔄')) return Zap;
  return null;
};

const getStatusColor = (item: string) => {
  if (item.startsWith('✅')) return 'text-green-400';
  if (item.startsWith('⏳')) return 'text-yellow-400';
  if (item.startsWith('🔄')) return 'text-blue-400';
  if (item.startsWith('New:')) return 'text-purple-400';
  return 'text-muted-foreground';
};

export function RoadmapTimeline({ phases }: RoadmapTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-secondary to-accent opacity-60" />
      
      {/* Phases */}
      <div className="space-y-12">
        {phases.map((phase, index) => {
          const IconComponent = getPhaseIcon(index);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-20"
            >
              {/* Phase icon */}
              <div className={cn(
                "absolute left-0 top-2 w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300",
                phase.completed 
                  ? "bg-primary/20 border-primary shadow-[0_0_20px_rgba(0,243,255,0.4)]" 
                  : "bg-card/50 border-border hover:border-primary/50"
              )}>
                <IconComponent className={cn(
                  "w-8 h-8 transition-colors duration-300",
                  phase.completed ? "text-primary" : "text-muted-foreground"
                )} />
              </div>

              {/* Phase content */}
              <div className={cn(
                "bg-card/80 border backdrop-blur-sm p-8 clip-corner-br transition-all duration-300 group hover:border-primary/50",
                phase.completed ? "border-primary/30" : "border-border"
              )}>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-secondary/30 group-hover:border-secondary transition-colors duration-300" />
                
                <div className="relative z-10">
                  {/* Quarter badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-primary font-mono text-sm font-bold uppercase tracking-wider">
                      {phase.quarter}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-glow-cyan">
                    {phase.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => {
                      const StatusIcon = getStatusIcon(item);
                      const statusColor = getStatusColor(item);
                      const cleanItem = item.replace(/^(✅|⏳|🔄|New:)\s*/, '');
                      
                      return (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                          className="flex items-start gap-3 group/item"
                        >
                          {StatusIcon ? (
                            <div className={cn(
                              "flex-shrink-0 w-5 h-5 mt-0.5 transition-transform duration-200 group-hover/item:scale-110",
                              statusColor
                            )}>
                              <StatusIcon className="w-full h-full" />
                            </div>
                          ) : (
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary/50 mt-2" />
                          )}
                          
                          <span className={cn(
                            "text-sm leading-relaxed transition-colors duration-200",
                            item.startsWith('New:') ? 'text-purple-300' : 'text-muted-foreground',
                            "group-hover/item:text-foreground"
                          )}>
                            {cleanItem}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>

                  {/* Progress indicator */}
                  {phase.completed && (
                    <div className="mt-6 pt-4 border-t border-primary/20">
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-mono font-bold uppercase tracking-wider">
                          Phase Complete
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Future indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: phases.length * 0.2 }}
        className="relative pl-20 mt-12"
      >
        <div className="absolute left-0 top-2 w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 border-4 border-accent/50 flex items-center justify-center">
          <Rocket className="w-8 h-8 text-accent animate-pulse" />
        </div>
        
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 backdrop-blur-sm p-6 clip-corner-br">
          <h4 className="text-xl font-display font-bold text-accent mb-2">
            Beyond 2025
          </h4>
          <p className="text-muted-foreground text-sm">
            Continuous innovation, global expansion, and the future of decentralized finance.
          </p>
        </div>
      </motion.div>
    </div>
  );
}