import { ChevronDown, MessageSquare } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/siteContent";
import { ScrollReveal } from "./ScrollReveal";

export function FAQ() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? "");

  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <ScrollReveal className="section-heading compact" variant="fade">
        <p className="icon-kicker">
          <MessageSquare aria-hidden="true" />
        </p>
        <h2 id="faq-title">Common questions</h2>
        <p>A few things business owners and operators usually ask before getting started.</p>
      </ScrollReveal>

      <ScrollReveal className="faq-list" y={22}>
        {faqs.map((faq) => {
          const isOpen = faq.id === openId;
          return (
            <article className="faq-item" key={faq.id}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? "" : faq.id)}
                aria-expanded={isOpen}
                aria-controls={`${faq.id}-answer`}
              >
                <span>{faq.question}</span>
                <ChevronDown aria-hidden="true" />
              </button>
              <div className="faq-answer" id={`${faq.id}-answer`} hidden={!isOpen}>
                <p>{faq.answer}</p>
              </div>
            </article>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
