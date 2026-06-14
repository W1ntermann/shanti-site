"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, X } from "lucide-react";
import { useTranslation } from "react-i18next";

// ===== Types and Interfaces =====
export interface iTestimonial {
  name: string;
  designation: string;
  description: string;
  profileImage: string;
  proofImages?: string[];
}

interface iCarouselProps {
  items: React.ReactElement<{
    testimonial: iTestimonial;
    index: number;
    layout?: boolean;
    onCardClose: () => void;
  }>[];
  initialScroll?: number;
}

// ===== Helper function for className merging =====
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// ===== Custom Hooks =====
const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  onOutsideClick: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      onOutsideClick();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

// ===== Carousel Component =====
const Carousel = ({ items, initialScroll = 0 }: iCarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  };

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

return (
    <div className="relative w-full mt-6 sm:mt-8 lg:mt-10">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-4 sm:py-5 px-2 sm:px-4 lg:px-0 snap-x snap-mandatory"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div
          className={cn(
            "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
          )}
        />
        <div className="flex flex-row gap-2 sm:gap-3 lg:gap-4 px-1 sm:px-0">
          {items.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={`card-${index}`}
                className="last:pr-[5%] rounded-3xl flex-shrink-0 snap-center"
              >
                {React.cloneElement(item, {
                  onCardClose: () => {
                    return handleCardClose(index);
                  },
                })}
              </motion.div>
            );
          })}
        </div>
      </div>
<div className="flex justify-center sm:justify-end gap-2 mt-5 sm:mt-6 px-0 sm:px-4 lg:px-0">
        <button
          className="relative z-40 h-8 sm:h-9 lg:h-10 w-8 sm:w-9 lg:w-10 rounded-full bg-[#0a0a0f] border border-[#00f0ff]/30 flex items-center justify-center disabled:opacity-50 hover:bg-[#00f0ff]/10 transition-colors duration-200 active:scale-95"
          onClick={handleScrollLeft}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <ArrowLeft className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-[#00f0ff]" />
        </button>
        <button
          className="relative z-40 h-8 sm:h-9 lg:h-10 w-8 sm:w-9 lg:w-10 rounded-full bg-[#0a0a0f] border border-[#00f0ff]/30 flex items-center justify-center disabled:opacity-50 hover:bg-[#00f0ff]/10 transition-colors duration-200 active:scale-95"
          onClick={handleScrollRight}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <ArrowRight className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-[#00f0ff]" />
        </button>
      </div>
    </div>
  );
};

// ===== Testimonial Card Component =====
const TestimonialCard = ({
  testimonial,
  index,
  layout = false,
  onCardClose = () => {},
}: {
  testimonial: iTestimonial;
  index: number;
  layout?: boolean;
  onCardClose?: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const handleExpand = () => {
    return setIsExpanded(true);
  };
  const handleCollapse = () => {
    setIsExpanded(false);
    onCardClose();
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCollapse();
      }
    };

    if (isExpanded) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.dataset.scrollY = scrollY.toString();
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo({ top: scrollY, behavior: "instant" });
    }

    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      return window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isExpanded]);

  useOutsideClick(containerRef, handleCollapse);

  // Get color based on index
  const getColorTheme = () => {
    const colors = [
      { primary: "#00f0ff", secondary: "#0ff0ff20", status: "Verified Trader" },
      { primary: "#ff00f0", secondary: "#ff00f020", status: "Pro Trader" },
      { primary: "#ffcc00", secondary: "#ffcc0020", status: "Elite Member" },
    ];
    return colors[index % colors.length];
  };

  const theme = getColorTheme();

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 h-screen overflow-hidden z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/90 backdrop-blur-lg h-full w-full fixed inset-0"
              onClick={handleCollapse}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              ref={containerRef}
              layoutId={layout ? `card-${testimonial.name}` : undefined}
              className="max-w-4xl w-full mx-auto bg-gradient-to-br from-[#0a0a0f] to-[#12121a] border border-[#00f0ff]/20 z-[60] p-4 sm:p-6 md:p-8 lg:p-10 rounded-t-3xl sm:rounded-3xl relative overflow-y-auto max-h-[90vh] sm:max-h-screen shadow-2xl"
            >
              <button
                className="sticky top-0 h-8 w-8 ml-auto rounded-full flex items-center justify-center bg-[#1a1a2e] border border-[#00f0ff]/30 hover:bg-[#00f0ff]/20 transition-colors z-10 flex-shrink-0"
                onClick={handleCollapse}
                aria-label="Close"
              >
                <X className="h-4 w-4 text-[#00f0ff]" />
              </button>

              {/* Expanded view content */}
              <div className="mt-3 sm:mt-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8 pb-4 sm:pb-6 md:pb-8 border-b border-white/10">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-display font-bold text-lg sm:text-xl md:text-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] flex-shrink-0"
                    style={{
                      border: `1px solid ${theme.primary}40`,
                      color: theme.primary,
                    }}
                  >
                    {testimonial.profileImage ? (
                      <img 
                        src={testimonial.profileImage} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      testimonial.name.charAt(0)
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-white">{testimonial.name}</h4>
                    <span
                      className="text-xs sm:text-sm font-mono px-2.5 sm:px-3 py-1 rounded-full inline-block mt-1.5 sm:mt-2"
                      style={{
                        background: theme.secondary,
                        color: theme.primary,
                      }}
                    >
                      {testimonial.designation}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-7 md:leading-8 mb-4 sm:mb-6 md:mb-8 italic">
                  <Quote className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 inline mr-2 opacity-50" />
                  {testimonial.description}
                </p>

                {testimonial.proofImages && testimonial.proofImages.length > 0 && (
                  <div className="mt-6 sm:mt-8">
                    <h5 className="text-[#00f0ff] font-mono text-xs sm:text-sm mb-3 sm:mb-4">{t('navbar.proofOfResults')}</h5>
                    <div className={`grid gap-2 sm:gap-3 md:gap-4 ${
                      testimonial.proofImages.length === 3 
                        ? "grid-cols-1 sm:grid-cols-3" 
                        : testimonial.proofImages.length === 2 
                        ? "grid-cols-1 sm:grid-cols-2" 
                        : "grid-cols-1"
                    }`}>
                      {testimonial.proofImages.map((img, idx) => (
                        <div key={idx} className="rounded-lg overflow-hidden border border-white/20 hover:border-white/40 transition-colors">
                          <img src={img} alt={`Proof ${idx + 1}`} className="w-full h-auto max-h-64 sm:max-h-96 object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? `card-${testimonial.name}` : undefined}
        onClick={handleExpand}
        className="group text-left"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.98 }}
      >
<div
          className={`rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0a0a0f] to-[#12121a] border h-auto sm:h-[480px] lg:h-[550px] w-[85vw] sm:w-72 md:w-80 lg:w-96 max-w-[380px] overflow-hidden flex flex-col relative z-10 shadow-2xl transition-all duration-300 p-4 sm:p-5 lg:p-6 gap-3 sm:gap-0`}
          style={{
            borderColor: `${theme.primary}20`,
            boxShadow: `0 0 30px ${theme.primary}10`,
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 40%, ${theme.primary} 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
          </div>

          <div className="flex-1 flex flex-col sm:hidden">
            {/* Mobile Header */}
            <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3 pb-2 sm:pb-3 border-b border-white/10">
              <div
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full flex items-center justify-center font-display font-bold text-base sm:text-lg overflow-hidden flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}20, transparent)`,
                  border: `1px solid ${theme.primary}40`,
                  color: theme.primary,
                }}
              >
                {testimonial.profileImage ? (
                  <img 
                    src={testimonial.profileImage} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  testimonial.name.charAt(0)
                )}
              </div>
              <div className="text-left flex-1">
                <h4 className="font-bold text-white text-base leading-tight">{testimonial.name}</h4>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded inline-block mt-1"
                  style={{
                    background: theme.secondary,
                    color: theme.primary,
                  }}
                >
                  {testimonial.designation.length > 15 
                    ? `${testimonial.designation.slice(0, 15)}...`
                    : testimonial.designation}
                </span>
              </div>
            </div>

            {/* Mobile Quote */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 italic flex-1">
              <Quote className="h-2.5 w-2.5 sm:h-3 sm:w-3 inline mr-1 opacity-50" />
              {testimonial.description.length > 80
                ? `${testimonial.description.slice(0, 80)}...`
                : testimonial.description}
            </p>

            {/* Mobile proof images */}
            {testimonial.proofImages && testimonial.proofImages.length > 0 && (
              <div className={`grid gap-1.5 sm:gap-2 mt-1.5 sm:mt-2 ${
                testimonial.proofImages.length === 3 
                  ? "grid-cols-3" 
                  : testimonial.proofImages.length === 2 
                  ? "grid-cols-2" 
                  : "grid-cols-1"
              }`}>
                {testimonial.proofImages.slice(0, 3).map((img, idx) => (
                  <div key={idx} className="aspect-square bg-gray-800/50 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/20 transition-all">
                    <img src={img} alt={`Proof ${idx + 1}`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            )}

            {/* Mobile read more indicator */}
            <div className="mt-2 sm:mt-3 text-center">
              <span className="text-xs font-mono px-2 sm:px-3 py-0.5 sm:py-1 rounded-full inline-block text-[11px] sm:text-xs" style={{ background: `${theme.primary}20`, color: theme.primary }}>
                {t('navbar.tapToExpand')}
              </span>
            </div>
          </div>

          <div className="hidden sm:flex sm:flex-col sm:flex-1">
            {/* Desktop Header */}
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-white/10">
              <div
                className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center font-display font-bold text-base sm:text-xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary}20, transparent)`,
                  border: `1px solid ${theme.primary}40`,
                  color: theme.primary,
                }}
              >
                {testimonial.profileImage ? (
                  <img 
                    src={testimonial.profileImage} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  testimonial.name.charAt(0)
                )}
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white text-base sm:text-lg">{testimonial.name}</h4>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded inline-block mt-1 text-[11px] sm:text-xs"
                  style={{
                    background: theme.secondary,
                    color: theme.primary,
                  }}
                >
                  {testimonial.designation.length > 18 
                    ? `${testimonial.designation.slice(0, 18)}...`
                    : testimonial.designation}
                </span>
              </div>
            </div>

            {/* Desktop Quote */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 italic flex-1">
              <Quote className="h-2.5 w-2.5 sm:h-3 sm:w-3 inline mr-1 opacity-50" />
              {testimonial.description.length > 100
                ? `${testimonial.description.slice(0, 100)}...`
                : testimonial.description}
            </p>

            {/* Desktop proof images grid */}
            {testimonial.proofImages && testimonial.proofImages.length > 0 && (
              <div className={`grid gap-1.5 sm:gap-2 mt-2 ${
                testimonial.proofImages.length === 3 
                  ? "grid-cols-3" 
                  : testimonial.proofImages.length === 2 
                  ? "grid-cols-2" 
                  : "grid-cols-1"
              }`}>
                {testimonial.proofImages.slice(0, 3).map((img, idx) => (
                  <div key={idx} className="aspect-square bg-gray-800/50 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/20 transition-all">
                    <img src={img} alt={`Proof ${idx + 1}`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            )}

            {/* Desktop read more indicator */}
            <div className="mt-3 text-right">
              <span className="text-xs font-mono" style={{ color: theme.primary }}>
                {t('navbar.clickToExpand')}
              </span>
            </div>
          </div>

          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${theme.primary}10, transparent 70%)`,
            }}
          />
        </div>
      </motion.button>
    </>
  );
};

// ===== Static image assets (not translatable) =====
const profileImages = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/men/67.jpg",
  "https://randomuser.me/api/portraits/women/42.jpg",
  "https://randomuser.me/api/portraits/men/55.jpg",
];

const proofImagesList = [
  [
    "https://shanti-ai.netlify.app/83ffd4af-e805-471a-9de0-b769f1be45fb.jpg",
    "https://shanti-ai.netlify.app/10ce5257-0ba5-4714-9867-b4953c5678ce.jpg",
    "https://shanti-ai.netlify.app/ef096ae0-3ad2-47b3-ab74-63d175142a18.jpg",
  ],
  [
    "https://shanti-ai.netlify.app/edb66963-1817-4ac9-a311-c10e1b1130be.jpg",
    "https://shanti-ai.netlify.app/ede899bf-e330-4215-9ca1-5dc9073a3d76.jpg",
  ],
  [
    "https://shanti-ai.netlify.app/f189a2eb-83c2-4cc5-8d77-dc248af40d35.jpg",
    "https://shanti-ai.netlify.app/dbac7662-3e58-4118-95e6-31e648e7c145.jpg",
  ],
  [
    "https://shanti-ai.netlify.app/83ffd4af-e805-471a-9de0-b769f1be45fb.jpg",
    "https://shanti-ai.netlify.app/10ce5257-0ba5-4714-9867-b4953c5678ce.jpg",
  ],
  [
    "https://shanti-ai.netlify.app/edb66963-1817-4ac9-a311-c10e1b1130be.jpg",
    "https://shanti-ai.netlify.app/ede899bf-e330-4215-9ca1-5dc9073a3d76.jpg",
    "https://shanti-ai.netlify.app/ef096ae0-3ad2-47b3-ab74-63d175142a18.jpg",
  ],
];

// ===== Main Component =====
const TestimonialsSection = () => {
  const { t } = useTranslation();

  // Get translated cards data
  const translatedCards = t('home.testimonials.cards', { returnObjects: true }) as Array<{
    name: string;
    designation: string;
    description: string;
  }>;

  // Build testimonial data from translations + static images
  const testimonialData = translatedCards.map((card, index) => ({
    id: String(index + 1),
    name: card.name,
    designation: card.designation,
    description: card.description,
    profileImage: profileImages[index] || "",
    proofImages: proofImagesList[index] || [],
  }));

  const cards = testimonialData.map((testimonial, index) => (
    <TestimonialCard
      key={testimonial.id}
      testimonial={testimonial}
      index={index}
    />
  ));

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#050508] relative overflow-hidden" id="testimonials">
      {/* Background image - use a placeholder if image doesn't exist */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/traders-saying.jpg')",
          backgroundAttachment: 'scroll',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="w-full px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#00f0ff] via-[#ff00f0] to-[#ffcc00] bg-clip-text text-transparent mb-2 sm:mb-3 lg:mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400 max-w-2xl mx-auto font-mono px-2">
              {t('home.testimonials.subtitle')}
            </p>
          </motion.div>

          {/* Carousel */}
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
};

// Експорт компонентів
export { TestimonialsSection, Carousel, TestimonialCard };
export default TestimonialsSection;