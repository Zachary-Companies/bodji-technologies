import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { useEffect, useState } from "react";
import heroBusinessInventory from "../assets/hero-business-inventory.avif";
import heroBusinessMeeting from "../assets/hero-business-meeting.jpg";
import heroPlumbingService from "../assets/hero-plumbing-service.jpg";
import heroYogaStudio from "../assets/hero-yoga-studio.jpg";
import { LINKS } from "../config/links";
import { metricCards } from "../data/siteContent";
import { ScrollReveal } from "./ScrollReveal";

const heroBackgrounds = [
  {
    image: heroBusinessInventory,
    position: "center center",
  },
  {
    image: heroBusinessMeeting,
    position: "center center",
  },
  {
    image: heroYogaStudio,
    position: "52% center",
  },
  {
    image: heroPlumbingService,
    position: "58% center",
  },
];

const heroImageCycleMs = 5000;
const heroImageFadeSeconds = 2.1;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeBackground = heroBackgrounds[activeImageIndex];

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % heroBackgrounds.length);
    }, heroImageCycleMs);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <>
      <section className="hero-section" id="top" aria-labelledby="hero-title">
        <AnimatePresence initial={false}>
          <motion.div
            className="hero-background"
            key={activeBackground.image}
            style={{
              backgroundImage: `url(${activeBackground.image})`,
              backgroundPosition: activeBackground.position,
            }}
            initial={reduceMotion ? false : { opacity: 0, scale: 1.012 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 1.006 }}
            transition={{ duration: heroImageFadeSeconds, ease: [0.45, 0, 0.55, 1] }}
            aria-hidden="true"
          />
        </AnimatePresence>
        <div className="hero-inner">
          <div className="hero-content">
            <ScrollReveal delay={0} variant="fade" y={10}>
              <p className="eyebrow-pill">The agentic internet is here</p>
            </ScrollReveal>

            <ScrollReveal delay={0.08} variant="scale" y={14}>
              <h1 id="hero-title">
                Your business is about to get a <span>new kind of customer.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="hero-copy">
                AI systems like ChatGPT, Claude, Gemini, and Siri are starting to search, compare,
                and act on behalf of customers. Bodji Technologies helps businesses become findable,
                understandable, and action-ready for that shift.
              </p>
            </ScrollReveal>

            <ScrollReveal className="hero-actions" delay={0.24} y={16}>
              <a className="button button-dark" href={LINKS.checker}>
                <Search aria-hidden="true" />
                Check your AI visibility
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="button button-light" href={LINKS.course}>
                <BookOpen aria-hidden="true" />
                AI visibility mini-course
              </a>
              <a className="button button-ghost" href={LINKS.contact}>
                Talk to Bodji
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="hero-metrics-band" aria-label="Bodji focus areas">
        <div className="hero-metrics">
          {metricCards.map((card, index) => (
            <ScrollReveal
              className="metric-card"
              delay={index * 0.07}
              variant={index === 0 ? "left" : index === 2 ? "right" : "up"}
              y={14}
              key={card.label}
            >
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <p>{card.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
