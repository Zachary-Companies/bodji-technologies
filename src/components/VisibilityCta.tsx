import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, BookOpen, Search, ShieldCheck } from "lucide-react";
import { LINKS } from "../config/links";
import { ScrollReveal } from "./ScrollReveal";

const proofBars = ["Findability", "Service clarity", "Action readiness"];
const barEase = [0.16, 1, 0.3, 1] as const;

export function VisibilityCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section visibility-section" id="visibility" aria-labelledby="visibility-title">
      <ScrollReveal className="visibility-card" variant="scale" y={24}>
        <div className="visibility-content">
          <p className="eyebrow-pill small">
            <Search aria-hidden="true" />
            AI Visibility Checker
          </p>
          <h2 id="visibility-title">See what AI systems understand about your business today.</h2>
          <p>
            Beacon's real AI Visibility Checker gives you a quick read on whether AI systems can
            find, summarize, and act on your business information.
          </p>
          <div className="inline-actions">
            <a className="button button-rust" href={LINKS.checker}>
              Check your AI visibility
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button-light" href={LINKS.course}>
              <BookOpen aria-hidden="true" />
              AI visibility mini-course
            </a>
          </div>
        </div>

        <div className="checker-proof" aria-label="Checker routes to the live Beacon tool">
          <span>Live Beacon utility</span>
          <div className="proof-row">
            <ShieldCheck aria-hidden="true" />
            <p>Routes to the real checker, not a simulated form.</p>
          </div>
          <div className="proof-panel">
            {proofBars.map((bar, index) => (
              <div key={bar}>
                <strong>{bar}</strong>
                <motion.span
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  whileInView={reduceMotion ? undefined : { scaleX: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.72, delay: 0.18 + index * 0.08, ease: barEase }}
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
