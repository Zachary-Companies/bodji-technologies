import { ArrowRight, BookOpen, Search } from "lucide-react";
import logoDark from "../assets/bodji-logo-dark.png";
import { LINKS } from "../config/links";
import { ScrollReveal } from "./ScrollReveal";

export function Footer() {
  return (
    <footer className="site-footer">
      <ScrollReveal className="final-cta" variant="scale" aria-labelledby="final-cta-title">
        <p className="section-kicker">Start here</p>
        <h2 id="final-cta-title">Check the front door, then fix the workflow behind it.</h2>
        <p>
          Start with the visibility gap, the course, or a direct conversation about one workflow
          worth improving.
        </p>
        <div className="inline-actions">
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
        </div>
      </ScrollReveal>

      <ScrollReveal className="footer-bottom" delay={0.08} variant="fade" y={12}>
        <a className="footer-brand" href="#top" aria-label="Bodji Technologies home">
          <img src={logoDark} alt="" />
          <span>Bodji Technologies</span>
        </a>
        <p>Products and consulting systems for AI-driven business discovery and workflows.</p>
        <div className="footer-links" aria-label="Footer links">
          <a href={LINKS.checker}>AI Visibility Checker</a>
          <a href={LINKS.course}>AI visibility mini-course</a>
          <a href={LINKS.mcpPrimer}>What is an MCP?</a>
          <a href={LINKS.contact}>Contact</a>
        </div>
      </ScrollReveal>
    </footer>
  );
}
