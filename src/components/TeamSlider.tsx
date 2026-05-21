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
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
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
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.06] hover:shadow-xl hover:shadow-black/20"
              >
                <div className="relative z-10 text-center h-full flex flex-col">
                  {/* Avatar */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-white/[0.08] border border-white/[0.08] flex items-center justify-center transition-all duration-300 group-hover:border-white/[0.15] group-hover:bg-white/[0.12]">
                        <span className="text-xl font-semibold text-white/80 tracking-tight">
                          {member.avatar}
                        </span>
                      </div>
                      {/* Subtle ring on hover */}
                      <div className="absolute -inset-[3px] rounded-full border border-transparent group-hover:border-white/[0.06] transition-all duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-1.5 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-white/40 uppercase tracking-[0.15em] mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed flex-1 mb-6">
                      {member.desc}
                    </p>

                    {/* Divider */}
                    <div className="w-8 h-px bg-white/[0.06] mx-auto mb-5 group-hover:w-16 group-hover:bg-white/[0.12] transition-all duration-300" />

                    {/* Social Links */}
                    <div className="flex justify-center gap-2 mt-auto">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full flex items-center justify-center text-white/30 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-200"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full flex items-center justify-center text-white/30 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all duration-200"
                          aria-label={`${member.name} Twitter`}
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all duration-200"
                          aria-label={`${member.name} GitHub`}
                        >
                          <Github className="w-4 h-4" />
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

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-5 mt-10">
        <button
          className={cn(
            "w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.06]",
            prevBtnDisabled && "opacity-30 cursor-not-allowed hover:border-white/[0.08] hover:bg-white/[0.02]"
          )}
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 text-white/60" />
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2.5">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "bg-white w-6"
                  : "bg-white/[0.15] hover:bg-white/[0.3]"
              )}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className={cn(
            "w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.06]",
            nextBtnDisabled && "opacity-30 cursor-not-allowed hover:border-white/[0.08] hover:bg-white/[0.02]"
          )}
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 text-white/60" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-0.5 bg-white/[0.04] rounded-full mt-8 overflow-hidden">
        <div 
          className="h-full bg-white/25 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((selectedIndex + 1) / scrollSnaps.length) * 100}%` }}
        />
      </div>
    </div>
  );
}