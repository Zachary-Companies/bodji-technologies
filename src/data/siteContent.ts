import { BrainCircuit, BriefcaseBusiness, Compass, Eye, FileCheck2, Gauge, LineChart, Map, Route, Search, ShieldCheck, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProductTheme = "sage" | "rust" | "taupe";

export interface ProductSlide {
  id: "beacon" | "scout" | "consulting";
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  benefits: string[];
  theme: ProductTheme;
}

export interface OfferCard {
  title: string;
  description: string;
  output: string;
  icon: LucideIcon;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const productSlides: ProductSlide[] = [
  {
    id: "beacon",
    name: "Beacon",
    eyebrow: "AI visibility",
    tagline: "Make your business AI-readable and action-ready.",
    description:
      "Beacon publishes a tidy AI-readable profile and MCP endpoint for your business. Humans keep visiting your website like always; AI assistants read the structured profile so they can understand your services, ask questions, and route the right next step.",
    benefits: [
      "Host your basic business information on a Bodji MCP server",
      "Publish a separate AI-readable profile alongside your current website",
      "Help AI assistants understand services, reach out, book appointments, and more",
      "Approve what AI agents can see and do before anything goes live"
    ],
    theme: "sage"
  },
  {
    id: "scout",
    name: "Scout",
    eyebrow: "Opportunity intelligence",
    tagline: "Find and organize the markets worth pursuing.",
    description:
      "Scout gathers, normalizes, enriches, and classifies business data so teams can search, compare, map, and prioritize real opportunities.",
    benefits: [
      "Business discovery across categories, regions, and market patterns",
      "Enrichment and classification to turn raw lists into useful records",
      "Search, list, map, and export workflows for prospect intelligence",
      "A discovery engine that can feed Beacon, outreach, and consulting work"
    ],
    theme: "rust"
  },
  {
    id: "consulting",
    name: "Consulting",
    eyebrow: "Workflow implementation",
    tagline: "Find where work gets stuck. Fix one workflow. Measure the result.",
    description:
      "We follow the work, map the bottleneck, measure the cost, and help teams blueprint or pilot safe AI support where it can actually help.",
    benefits: [
      "Workflow mapping before model selection or automation",
      "Time, cost, frequency, error, and rework measurement",
      "Opportunity scoring by impact, feasibility, reliability, and measurability",
      "Blueprints and pilots that keep people in control of important decisions"
    ],
    theme: "taupe"
  }
];

export const methodSteps = [
  {
    title: "Follow the work",
    body: "Study how the workflow actually happens: who owns it, where information enters, what systems it touches, and where it breaks.",
    icon: Route
  },
  {
    title: "Measure the drag",
    body: "Use time, frequency, cost, error, and rework as the first units of ROI. The first business case should be visible before the first build.",
    icon: Gauge
  },
  {
    title: "Blueprint the first win",
    body: "Choose one workflow with clear inputs, decisions, outputs, and metrics. Build trust before trying to scale.",
    icon: FileCheck2
  }
];

export const offerCards: OfferCard[] = [
  {
    title: "Workflow Opportunity Review",
    description: "Find where AI might actually help before committing to a build.",
    output: "Workflow inventory, rough time/cost map, bottleneck list, and first opportunity matrix.",
    icon: Search
  },
  {
    title: "Workflow Blueprint",
    description: "Turn one workflow into a build-ready plan with clear boundaries.",
    output: "Current-state map, future-state design, data/system map, metrics, and implementation roadmap.",
    icon: Map
  },
  {
    title: "Workflow Pilot",
    description: "Build a narrow non-production proof so stakeholders can see and test the workflow.",
    output: "Prototype or pilot workspace, demo script, feedback loop, and measurement plan.",
    icon: BrainCircuit
  },
  {
    title: "Implementation Partner",
    description: "Deploy and improve production workflows when the pilot proves value.",
    output: "Scoped build cycles, adoption support, reporting cadence, and ongoing improvement path.",
    icon: Workflow
  }
];

export const proofPoints = [
  {
    title: "Working Beacon frontend",
    body: "We already have a live Beacon landing page, course, and visibility checker.",
    icon: Eye
  },
  {
    title: "Scout product work",
    body: "Scout is active product infrastructure for business discovery and opportunity intelligence.",
    icon: Compass
  },
  {
    title: "Practical consulting method",
    body: "Our consulting work starts with one workflow, measurable value, and human control.",
    icon: BriefcaseBusiness
  },
  {
    title: "Trust-first implementation",
    body: "We avoid fake proof and big-bang transformation claims. The first win earns the next step.",
    icon: ShieldCheck
  }
];

export const fitItems = [
  "You have a workflow people complain about.",
  "Work is stuck in email, spreadsheets, PDFs, portals, or manual handoffs.",
  "You can name the owner of the workflow.",
  "You want a practical plan before a big build.",
  "You care about time saved, throughput, errors, and adoption."
];

export const notFitItems = [
  "You want a vague AI brainstorm.",
  "You want to automate everything at once.",
  "You want a chatbot without fixing the underlying process.",
  "Nobody owns the workflow.",
  "You cannot measure whether the work improved."
];

export const faqs: FAQItem[] = [
  {
    id: "ai-visibility",
    question: "What is AI visibility?",
    answer:
      "AI visibility is whether systems like ChatGPT, Claude, Gemini, and Siri can find your business, understand what you do, trust the information they find, and give a customer a useful next step."
  },
  {
    id: "seo",
    question: "How is this different from SEO?",
    answer:
      "SEO helps humans find links in search engines. AI visibility helps assistants synthesize accurate answers and actions from structured information. The two overlap, but they are not the same job."
  },
  {
    id: "mcp",
    question: "What is MCP, in plain English?",
    answer:
      "Model Context Protocol is a standard way for AI systems to understand and use tools. For a business, it can become part of the action layer that tells AI what is available, what is safe to do, and how to request the next step."
  },
  {
    id: "website",
    question: "Do I need to replace my current website?",
    answer:
      "No. Your website can stay exactly as it is. Beacon publishes a separate AI-readable profile alongside it, so AI assistants get clean structure while humans keep visiting your normal site."
  },
  {
    id: "consulting-output",
    question: "What does the consulting work produce?",
    answer:
      "Depending on the engagement, you leave with a workflow map, opportunity matrix, blueprint, pilot workspace, implementation plan, or production workflow improvements."
  },
  {
    id: "agents",
    question: "Do you start by building AI agents?",
    answer:
      "No. We start by following the work. If AI is useful, the workflow map will show where it can improve speed, consistency, or throughput without taking control away from the people who own the decision."
  },
  {
    id: "measure",
    question: "How do you measure success?",
    answer:
      "The first metrics are usually time saved, cycle time, throughput, errors, rework, adoption, and business owner satisfaction. The point is to measure a real workflow, not a vague transformation story."
  },
  {
    id: "pilot",
    question: "Can the first pilot stay non-production?",
    answer:
      "Yes. Early pilots can be narrow, non-production, and designed for stakeholder review before anyone commits to a production system."
  }
];

export const metricCards = [
  {
    label: "AI visibility",
    value: "Findable",
    body: "Make the public facts about your business easier for AI systems to locate and summarize.",
    icon: Eye
  },
  {
    label: "Opportunity intelligence",
    value: "Prioritized",
    body: "Turn business lists and raw market data into opportunities your team can actually use.",
    icon: LineChart
  },
  {
    label: "Workflow consulting",
    value: "Measurable",
    body: "Start with time, bottlenecks, and one workflow that can prove the next step is worth it.",
    icon: Workflow
  }
];
