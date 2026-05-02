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
import { transitions } from '@/lib/animations';

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
      {/* Animated Timeline line */}
      <motion.div 
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-secondary to-accent opacity-60"
        style={{ transformOrigin: "top" }}
      />
      
      {/* Phases */}
      <div className="space-y-12">
        {phases.map((phase, index) => {
          const IconComponent = getPhaseIcon(index);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ ...transitions.smooth, delay: index * 0.15 }}
              whileHover={{ x: 10 }}
              className="relative pl-20"
            >
              {/* Phase icon with pulse animation */}
              <motion.div 
                className={cn(
                  "absolute left-0 top-2 w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300",
                  phase.completed 
                    ? "bg-primary/20 border-primary shadow-[0_0_20px_rgba(0,243,255,0.4)]" 
                    : "bg-card/50 border-border hover:border-primary/50"
                )}
                whileHover={{ scale: 1.15 }}
                animate={phase.completed ? {
                  boxShadow: [
                    "0 0 20px rgba(0, 243, 255, 0.4)",
                    "0 0 30px rgba(0, 243, 255, 0.6)",
                    "0 0 20px rgba(0, 243, 255, 0.4)",
                  ],
                } : {}}
                transition={phase.completed ? { duration: 2, repeat: Infinity } : {}}
              >
                <motion.div
                  animate={!phase.completed ? { rotate: 360 } : {}}
                  transition={!phase.completed ? { duration: 20, repeat: Infinity, ease: "linear" } : {}}
                >
                  <IconComponent className={cn(
                    "w-8 h-8 transition-colors duration-300",
                    phase.completed ? "text-primary" : "text-muted-foreground"
                  )} />
                </motion.div>
              </motion.div>

              {/* Phase content with enhanced animations */}
              <motion.div 
                className={cn(
                  "bg-card/80 border backdrop-blur-sm p-8 clip-corner-br transition-all duration-300 group hover:border-primary/50",
                  phase.completed ? "border-primary/30" : "border-border"
                )}
                whileHover={{ y: -5 }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated corner accents */}
                <motion.div 
                  className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                  className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-secondary/30 group-hover:border-secondary transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                />
                
                <div className="relative z-10">
                  {/* Quarter badge with animation */}
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.1 }}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-primary font-mono text-sm font-bold uppercase tracking-wider">
                      {phase.quarter}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-glow-cyan">
                    {phase.title}
                  </h3>

                  {/* Items with staggered animation */}
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
                          transition={{ delay: index * 0.15 + itemIndex * 0.08 }}
                          whileHover={{ x: 8 }}
                          className="flex items-start gap-3 group/item cursor-pointer"
                        >
                          {StatusIcon ? (
                            <motion.div 
                              className={cn(
                                "flex-shrink-0 w-5 h-5 mt-0.5 transition-transform duration-200 group-hover/item:scale-110",
                                statusColor
                              )}
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={transitions.fast}
                            >
                              <StatusIcon className="w-full h-full" />
                            </motion.div>
                          ) : (
                            <motion.div 
                              className="flex-shrink-0 w-2 h-2 rounded-full bg-primary/50 mt-2"
                              whileHover={{ scale: 1.5 }}
                            />
                          )}
                          
                          <motion.span 
                            className={cn(
                              "text-sm leading-relaxed transition-colors duration-200",
                              item.startsWith('New:') ? 'text-purple-300' : 'text-muted-foreground',
                              "group-hover/item:text-foreground"
                            )}
                            whileHover={{ x: 4 }}
                          >
                            {cleanItem}
                          </motion.span>
                        </motion.li>
                      );
                    })}
                  </ul>

                  {/* Progress indicator with smooth animation */}
                  {phase.completed && (
                    <motion.div 
                      className="mt-6 pt-4 border-t border-primary/20"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      <motion.div 
                        className="flex items-center gap-2 text-green-400"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-mono font-bold uppercase tracking-wider">
                          Phase Complete
                        </span>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Future indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...transitions.smooth, delay: phases.length * 0.15 }}
        className="relative pl-20 mt-12"
      >
        <motion.div 
          className="absolute left-0 top-2 w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 border-4 border-accent/50 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 20px rgba(255, 193, 7, 0.3)",
              "0 0 40px rgba(255, 193, 7, 0.6)",
              "0 0 20px rgba(255, 193, 7, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Rocket className="w-8 h-8 text-accent" />
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 backdrop-blur-sm p-6 clip-corner-br"
          whileHover={{ borderColor: "rgba(255, 193, 7, 0.5)" }}
        >
          <h4 className="text-xl font-display font-bold text-accent mb-2">
            Beyond 2027
          </h4>
          <p className="text-muted-foreground text-sm">
            Continuous innovation, global expansion, and the future of decentralized finance.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}