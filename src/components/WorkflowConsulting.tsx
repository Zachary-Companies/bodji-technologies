import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { LINKS } from "../config/links";
import { methodSteps, offerCards } from "../data/siteContent";
import { ScrollReveal } from "./ScrollReveal";

export function WorkflowConsulting() {
  const [activeOfferIndex, setActiveOfferIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeOffer = offerCards[activeOfferIndex];
  const ActiveOfferIcon = activeOffer.icon;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (paused || query.matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveOfferIndex((current) => (current + 1) % offerCards.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [paused]);

  const offerControls = useMemo(
    () => ({
      next: () => {
        setPaused(true);
        setActiveOfferIndex((current) => (current + 1) % offerCards.length);
      },
      prev: () => {
        setPaused(true);
        setActiveOfferIndex((current) => (current - 1 + offerCards.length) % offerCards.length);
      },
      choose: (index: number) => {
        setPaused(true);
        setActiveOfferIndex(index);
      }
    }),
    []
  );

  return (
    <section className="section consulting-section" id="consulting" aria-labelledby="consulting-title">
      <ScrollReveal className="section-grid two-col" variant="right">
        <div>
          <p className="section-kicker">Bodji Consulting</p>
          <h2 id="consulting-title">Start with the workflow, not the model.</h2>
        </div>
        <div className="shift-copy">
          <p>
            Most companies look for AI ROI in the wrong place. We start by studying how work
            actually gets done, then identify where safe AI support can improve speed, consistency,
            or throughput.
          </p>
          <p>
            The first project should be practical: one workflow, one owner, clear inputs, clear
            outputs, and a way to measure whether the work improved.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="business-image-placeholder consulting-image-placeholder" variant="scale" y={24}>
        <span>Photo slot</span>
        <strong>Workflow mapping, team planning, or operations review</strong>
        <p>
          Use a clean, modern business image here: a team at a table, process notes, dashboards, or
          a practical whiteboard session.
        </p>
      </ScrollReveal>

      <div className="method-grid">
        {methodSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <ScrollReveal
              className="method-card"
              delay={index * 0.07}
              variant={index === 0 ? "left" : index === 2 ? "right" : "up"}
              y={18}
              key={step.title}
            >
              <Icon aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="offer-section" aria-labelledby="offers-title">
        <ScrollReveal className="section-heading compact" variant="fade">
          <p className="section-kicker">Offer ladder</p>
          <h3 id="offers-title">Pick the smallest useful step.</h3>
          <p>
            The Blueprint has value even if nothing gets built. The pilot earns trust before a
            production implementation.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale" y={24}>
          <div
            className="offer-rotator"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="offer-rotator-stage" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.article
                  className="offer-rotator-card"
                  key={activeOffer.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="offer-rotator-meta">
                    <span>{String(activeOfferIndex + 1).padStart(2, "0")}</span>
                    <span>Offer ladder</span>
                  </div>
                  <ActiveOfferIcon aria-hidden="true" />
                  <div className="offer-rotator-copy">
                    <h4>{activeOffer.title}</h4>
                    <p>{activeOffer.description}</p>
                    <strong>{activeOffer.output}</strong>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="offer-rotator-panel">
              <div className="offer-rotator-buttons">
                <button type="button" onClick={offerControls.prev} aria-label="Previous offer">
                  <ArrowLeft aria-hidden="true" />
                </button>
                <button type="button" onClick={offerControls.next} aria-label="Next offer">
                  <ArrowRight aria-hidden="true" />
                </button>
              </div>

              <div className="offer-rotator-tabs" aria-label="Choose offer ladder step">
                {offerCards.map((offer, index) => (
                  <button
                    type="button"
                    key={offer.title}
                    aria-current={index === activeOfferIndex}
                    onClick={() => offerControls.choose(index)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {offer.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className="consulting-cta" variant="right" y={18}>
        <p>Tell us where work gets stuck. We will help decide whether it is worth mapping, blueprinting, piloting, or leaving alone.</p>
        <a className="button button-dark" href={LINKS.contact}>
          Talk to Bodji
          <ArrowRight aria-hidden="true" />
        </a>
      </ScrollReveal>
    </section>
  );
}
