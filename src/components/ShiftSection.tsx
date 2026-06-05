import { CalendarCheck, FileSearch, MessagesSquare, ServerCog } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const profileSteps = [
  {
    step: "01",
    label: "Mirror website data",
    title: "Turn the current site into structured facts.",
    body: "We organize the public details your website already has: services, locations, hours, FAQs, menus, policies, and booking paths.",
    icon: FileSearch,
    tone: "tone-dark",
  },
  {
    step: "02",
    label: "Host business information",
    title: "Publish the profile on a Bodji MCP server.",
    body: "Your approved business information gets a clean AI-readable home so assistants can read it directly instead of guessing from page text.",
    icon: ServerCog,
    tone: "tone-sage",
  },
  {
    step: "03",
    label: "Open the contact path",
    title: "Let customer AI assistants reach your business.",
    body: "We add a contact form and controlled handoff so an assistant can send the right context, question, or request to your team.",
    icon: MessagesSquare,
    tone: "tone-paper",
  },
  {
    step: "04",
    label: "Add useful actions",
    title: "Book meetings, order food, and more.",
    body: "Once the profile is trusted, we can connect safe next steps like appointments, intake, quote requests, ordering, and other workflows.",
    icon: CalendarCheck,
    tone: "tone-rust",
  },
];

export function ShiftSection() {
  return (
    <section className="section shift-section" aria-labelledby="shift-title">
      <ScrollReveal className="section-grid two-col" variant="left">
        <div>
          <p className="section-kicker">The shift</p>
          <h2 id="shift-title">When people ask AI, your business needs a clear answer.</h2>
        </div>
        <div className="shift-copy">
          <p>
            People are starting to ask ChatGPT, Claude, Gemini, Siri, and other assistants to find
            businesses, compare options, explain services, and decide what to do next. Those systems
            need clean facts, not just a nice-looking page.
          </p>
          <p>
            We help businesses publish that missing layer: what you do, who you serve, how to contact
            you, what should happen next, and which workflows can safely support the handoff.
          </p>
        </div>
      </ScrollReveal>

      <div className="shift-flow" aria-label="Four steps Bodji uses to build an AI-readable profile">
        {profileSteps.map(({ step, label, title, body, icon: Icon, tone }, index) => (
          <ScrollReveal
            className="profile-step-cell"
            delay={index * 0.07}
            variant={index % 2 === 0 ? "up" : "scale"}
            y={22}
            key={step}
          >
            <div className="profile-step-label">
              <span>{step}</span>
              <span>{label}</span>
            </div>
            <article className={`profile-step-card ${tone}`}>
              <Icon className="profile-step-icon" aria-hidden="true" />
              <div className="profile-step-copy">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="business-image-placeholder shift-image-placeholder" variant="scale" y={24}>
        <span>Photo slot</span>
        <strong>Customer-facing business moment</strong>
        <p>
          Use a crisp, neutral image of a front desk, dining counter, service team, or operator
          helping a customer.
        </p>
      </ScrollReveal>
    </section>
  );
}
