import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { SLIDES } from "./agentShowcase/slidesData";
import ContentAgentSlide from "./agentShowcase/ContentAgentSlide";
import LeadGeneratorSlide from "./agentShowcase/LeadGeneratorSlide";
import LeadMagnetBuilderSlide from "./agentShowcase/LeadMagnetBuilderSlide";
import ProposalGeneratorSlide from "./agentShowcase/ProposalGeneratorSlide";
import AnalyticsDashboardSlide from "./agentShowcase/AnalyticsDashboardSlide";
import type { SlideComponentProps } from "./agentShowcase/types";

const SLIDE_COMPONENTS: Record<string, React.ComponentType<SlideComponentProps>> = {
  "content-agent": ContentAgentSlide,
  "lead-generator": LeadGeneratorSlide,
  "lead-magnet-builder": LeadMagnetBuilderSlide,
  "proposal-generator": ProposalGeneratorSlide,
  "analytics-dashboard": AnalyticsDashboardSlide,
};

const SWIPE_CONFIDENCE_THRESHOLD = 10000;

export default function AgentShowcaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const total = SLIDES.length;
  const active = SLIDES[activeIndex];
  const ActiveSlide = SLIDE_COMPONENTS[active.id];

  function goTo(index: number) {
    const next = (index + total) % total;
    const forward =
      next > activeIndex || (activeIndex === total - 1 && next === 0);
    const backward =
      next < activeIndex || (activeIndex === 0 && next === total - 1);
    setDirection(forward && !backward ? 1 : -1);
    setActiveIndex(next);
  }

  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  function handleDragEnd(_event: unknown, info: PanInfo) {
    const swipePower = Math.abs(info.offset.x) * info.velocity.x;
    if (info.offset.x < -80 || swipePower < -SWIPE_CONFIDENCE_THRESHOLD) {
      next();
    } else if (info.offset.x > 80 || swipePower > SWIPE_CONFIDENCE_THRESHOLD) {
      prev();
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowRight") next();
    if (event.key === "ArrowLeft") prev();
  }

  const slideVariants = prefersReducedMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: (dir: 1 | -1) => ({ x: dir * 60, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: 1 | -1) => ({ x: dir * -60, opacity: 0 }),
      };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Agent product demo showcase"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="mx-auto mt-10 max-w-3xl outline-none"
    >
      <p className="mb-3 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-lime">
        {active.tag}
      </p>

      <div className="relative overflow-hidden rounded-2xl border border-neon-purple/40 bg-navy-dark/70 shadow-[0_0_60px_-10px_rgba(143,92,255,0.5)] backdrop-blur-sm">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-electric-pink/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-neon-blue/80" />
        </div>

        <motion.div
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="relative"
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={active.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${activeIndex + 1} of ${total}: ${active.label}`}
            >
              <ActiveSlide isActive={true} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white-soft transition-colors hover:border-lime hover:text-lime"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === activeIndex ? "true" : undefined}
              className="flex h-8 w-8 items-center justify-center"
            >
              <span
                className={`block rounded-full transition-all ${
                  i === activeIndex ? "h-2 w-5 bg-lime" : "h-2 w-2 bg-white-soft/30"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white-soft transition-colors hover:border-lime hover:text-lime"
        >
          →
        </button>
      </div>

      <span className="sr-only" aria-live="polite">
        Showing slide {activeIndex + 1} of {total}: {active.label}
      </span>
    </div>
  );
}
