import { ArrowRight, BookOpen, HelpCircle, Search } from "lucide-react";
import logoMark from "../assets/bodji-logo-white.png";
import { LINKS } from "../config/links";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Consulting", href: "#consulting" },
  { label: "Common Qs", href: "#faq", icon: HelpCircle }
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="Bodji Technologies home">
        <span
          className="brand-mark"
          aria-hidden="true"
          style={{
            WebkitMask: `url(${logoMark}) center / contain no-repeat`,
            mask: `url(${logoMark}) center / contain no-repeat`,
          }}
        />
        <span className="brand-name">
          <strong>Bodji</strong>
          <span>Technologies</span>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a href={item.href} key={item.label}>
              {Icon ? <Icon aria-hidden="true" /> : null}
              {item.label}
            </a>
          );
        })}
        <a href={LINKS.checker}>
          <Search aria-hidden="true" />
          AI Visibility Checker
        </a>
        <a href={LINKS.course}>
          <BookOpen aria-hidden="true" />
          AI visibility mini-course
        </a>
      </nav>

      <a className="header-cta" href={LINKS.checker} aria-label="Check your AI visibility">
        <span className="header-cta-long">Check your AI visibility</span>
        <span className="header-cta-short">Check visibility</span>
        <ArrowRight aria-hidden="true" />
      </a>
    </header>
  );
}
