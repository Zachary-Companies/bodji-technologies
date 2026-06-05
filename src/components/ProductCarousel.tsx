import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { productSlides, type ProductSlide, type ProductTheme } from "../data/siteContent";
import { ScrollReveal } from "./ScrollReveal";

const themeConfig: Record<ProductTheme, { className: string }> = {
  sage: { className: "theme-sage" },
  rust: { className: "theme-rust" },
  taupe: { className: "theme-taupe" }
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const activeSlide = productSlides[activeIndex];
  const activeTheme = themeConfig[activeSlide.theme];

  useEffect(() => {
    if (paused || reducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % productSlides.length);
    }, 8500);

    return () => window.clearInterval(interval);
  }, [paused, reducedMotion]);

  const controls = useMemo(
    () => ({
      next: () => {
        setPaused(true);
        setActiveIndex((current) => (current + 1) % productSlides.length);
      },
      prev: () => {
        setPaused(true);
        setActiveIndex((current) => (current - 1 + productSlides.length) % productSlides.length);
      },
      choose: (index: number) => {
        setPaused(true);
        setActiveIndex(index);
      }
    }),
    []
  );

  return (
    <section className="section products-section" id="products" aria-labelledby="products-title">
      <ScrollReveal className="section-heading-row" variant="left">
        <div>
          <p className="section-kicker">Products and services</p>
          <h2 id="products-title">Three connected pieces for the AI-driven market.</h2>
        </div>
        <div className="carousel-controls">
          <button type="button" onClick={controls.prev} aria-label="Previous product">
            <ArrowLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={controls.next} aria-label="Next product">
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="scale" y={24}>
        <div
          className={`product-stage ${activeTheme.className}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
        >
          <AnimatePresence mode="wait">
            <motion.article
              key={activeSlide.id}
              initial={reducedMotion ? false : { opacity: 0, x: 40 }}
              animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="product-slide"
            >
              <SlideContent slide={activeSlide} />
            </motion.article>
          </AnimatePresence>
        </div>
      </ScrollReveal>

      <ScrollReveal
        className="carousel-dots"
        delay={0.08}
        variant="fade"
        y={10}
        aria-label="Choose product slide"
      >
        {productSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Show ${slide.name}`}
            aria-current={index === activeIndex}
            onClick={() => controls.choose(index)}
          />
        ))}
      </ScrollReveal>
    </section>
  );
}

function SlideContent({ slide }: { slide: ProductSlide }) {
  return (
    <>
      <div className="product-copy">
        <span className="product-badge">{slide.name}</span>
        <p className="product-eyebrow">{slide.eyebrow}</p>
        <h3>{slide.tagline}</h3>
        <p>{slide.description}</p>
        <ul>
          {slide.benefits.map((benefit) => (
            <li key={benefit}>
              <CheckCircle2 aria-hidden="true" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <ProductMock slide={slide} />
    </>
  );
}

function ProductMock({ slide }: { slide: ProductSlide }) {
  return (
    <div className="product-mock" aria-label={`${slide.name} interface preview`}>
      <div className="mock-topline">
        <span>Live system view</span>
        <ArrowUpRight aria-hidden="true" />
      </div>

      {slide.id === "beacon" ? (
        <div className="mock-code">
          <strong>GET /mcp/business-profile</strong>
          <pre>{`{
  "type": "LocalBusiness",
  "verified": true,
  "services": "AI-readable",
  "allowedActions": ["question", "booking", "intake"]
}`}</pre>
          <p>A structured companion profile that AI assistants can actually understand.</p>
        </div>
      ) : null}

      {slide.id === "scout" ? (
        <div className="mock-list">
          <div className="business-image-placeholder product-image-placeholder">
            <span>Photo slot</span>
            <strong>Market research or operator review</strong>
          </div>
          <div>
            <span>1. Specialty dental practices</span>
            <strong>98 match</strong>
          </div>
          <div>
            <span>2. Regional home services</span>
            <strong>91 match</strong>
          </div>
          <div>
            <span>3. Regulated service teams</span>
            <strong>84 match</strong>
          </div>
          <p>Search, enrich, classify, map, and prioritize business opportunities.</p>
        </div>
      ) : null}

      {slide.id === "consulting" ? (
        <div className="mock-bars">
          <div>
            <span>Manual handoff drag</span>
            <strong>18.4 hrs/wk</strong>
            <i style={{ width: "82%" }} />
          </div>
          <div>
            <span>Review queue delay</span>
            <strong>12.5 hrs/wk</strong>
            <i style={{ width: "66%" }} />
          </div>
          <div>
            <span>Rework loop</span>
            <strong>7.8 hrs/wk</strong>
            <i style={{ width: "48%" }} />
          </div>
          <p>Find the measurable workflow before choosing what to build.</p>
        </div>
      ) : null}
    </div>
  );
}
