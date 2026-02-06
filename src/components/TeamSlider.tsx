import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMember {
  name: string;
  role: string;
  desc: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

interface TeamSliderProps {
  members: TeamMember[];
}

export function TeamSlider({ members }: TeamSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 }
      }
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
    setIsLoading(false);
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative">
      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}

      {/* Slider Container */}
      <div className={cn("overflow-hidden transition-opacity duration-500", isLoading ? "opacity-0" : "opacity-100")} ref={emblaRef}>
        <div className="flex">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/80 border border-border backdrop-blur-sm p-8 overflow-hidden clip-corner-br group hover:border-primary/50 team-card-hover h-full"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(0,243,255,0.5)] transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-secondary/30 group-hover:border-secondary group-hover:shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-all duration-300" />
                
                {/* Grid background overlay */}
                <div className="absolute inset-0 bg-cyber-grid opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                
                <div className="relative z-10 text-center h-full flex flex-col">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto box-glow-cyan group-hover:scale-110 avatar-pulse transition-transform duration-300">
                      <span className="text-3xl font-display font-bold text-primary-foreground">
                        {member.avatar}
                      </span>
                    </div>
                    {/* Animated ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 group-hover:scale-125 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 text-glow-cyan">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm mb-4 font-mono uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                      {member.desc}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 mt-auto">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(0,243,255,0.5)] transition-all duration-300 group/link"
                        >
                          <Linkedin className="w-4 h-4 text-muted-foreground group-hover/link:text-primary" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center hover:border-secondary hover:bg-secondary/20 hover:shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-all duration-300 group/link"
                        >
                          <Twitter className="w-4 h-4 text-muted-foreground group-hover/link:text-secondary" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center hover:border-accent hover:bg-accent/20 hover:shadow-[0_0_10px_rgba(255,234,0,0.5)] transition-all duration-300 group/link"
                        >
                          <Github className="w-4 h-4 text-muted-foreground group-hover/link:text-accent" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          className={cn(
            "w-12 h-12 border border-border bg-card/50 backdrop-blur-sm clip-corner-br flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(0,243,255,0.4)]",
            prevBtnDisabled && "opacity-50 cursor-not-allowed"
          )}
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "bg-primary shadow-[0_0_10px_rgba(0,243,255,0.8)] scale-125"
                  : "bg-border hover:bg-primary/50"
              )}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>

        <button
          className={cn(
            "w-12 h-12 border border-border bg-card/50 backdrop-blur-sm clip-corner-br flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(0,243,255,0.4)]",
            nextBtnDisabled && "opacity-50 cursor-not-allowed"
          )}
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-border/30 rounded-full mt-6 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 shadow-[0_0_10px_rgba(0,243,255,0.5)]"
          style={{ width: `${((selectedIndex + 1) / scrollSnaps.length) * 100}%` }}
        />
      </div>
    </div>
  );
}