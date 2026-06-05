import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";

const EMOJI_PATTERN =
  /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{27BF}]|[\u{1F000}-\u{1F02F}]|[\u{1F0A0}-\u{1F0FF}]|[\u{1F100}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1FA00}-\u{1FAFF}]|[\u{FE0F}]|[\u{200D}]/gu;

function stripEmojis(text: string): string {
  return text.replace(EMOJI_PATTERN, "").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n");
}

type CheckResponse = {
  businessName: string;
  city: string;
  responses: Array<{
    id: string;
    label: string;
    prompt: string;
    response: string;
  }>;
  score: {
    findability: number;
    servicesKnown: number;
    hoursAccuracy: number;
    actionability: number;
    recency: number;
  };
  scoreMax: Record<string, number>;
  total: number;
  totalMax: number;
  summary: string;
  category?: string;
  discoverability?: {
    appearedInReputation: boolean;
    appearedInIntent: boolean;
    appearedCount: number;
    placement: "absent" | "mentioned" | "recommended" | "top_pick";
    note: string;
  };
  usage?: {
    inputTokens: number;
    outputTokens: number;
    webSearches: number;
    estimatedCostUsd: number;
  };
  elapsedMs: number;
};

type View = "form" | "loading" | "results" | "error";

const API_BASE =
  (import.meta as unknown as { env: { VITE_CHECKER_API?: string } }).env.VITE_CHECKER_API ||
  "http://localhost:3001";

const PROGRESS_STEPS = [
  "Asking AI what it knows about your business",
  "Seeing what it can piece together about you",
  "Now searching like a new customer — without your name",
  "Checking whether you show up at all",
  "Scoring what AI got right and wrong"
];

function useGoogleFonts() {
  useEffect(() => {
    const id = "checker-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
}

const SERIF = "'Fraunces', Georgia, serif";
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const COLOR = {
  bg: "#faf8f3",
  surface: "#ffffff",
  text: "#1c1917",
  muted: "#57534e",
  subtle: "#a8a29e",
  border: "#e7e5e0",
  borderStrong: "#d6d3ce",
  accent: "#b45309",
  accentHover: "#92400e",
  accentSoft: "#fef3c7",
  accentInk: "#78350f"
} as const;

function ProgressSteps({ elapsedMs }: { elapsedMs: number }) {
  const activeIndex = useMemo(() => {
    if (elapsedMs < 15000) return 0;
    if (elapsedMs < 32000) return 1;
    if (elapsedMs < 48000) return 2;
    if (elapsedMs < 60000) return 3;
    return 4;
  }, [elapsedMs]);

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: SANS }}>
      {PROGRESS_STEPS.map((label, i) => {
        const done = i < activeIndex;
        const active = i === activeIndex;
        return (
          <li
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "10px 0",
              color: done ? COLOR.muted : active ? COLOR.text : COLOR.subtle,
              fontSize: 15,
              transition: "color .25s"
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                border: `2px solid ${done ? COLOR.accent : active ? COLOR.accent : COLOR.borderStrong}`,
                background: done ? COLOR.accent : "transparent",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                position: "relative"
              }}
            >
              {done && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
              {active && (
                <span
                  style={{
                    position: "absolute",
                    inset: -6,
                    borderRadius: "50%",
                    border: `2px solid ${COLOR.accent}`,
                    borderTopColor: "transparent",
                    animation: "checker-spin 0.9s linear infinite"
                  }}
                />
              )}
            </span>
            <span style={{ fontWeight: active ? 500 : 400 }}>{label}</span>
          </li>
        );
      })}
    </ul>
  );
}

function FormView({
  onSubmit,
  initialName,
  initialCity
}: {
  onSubmit: (name: string, city: string) => void;
  initialName: string;
  initialCity: string;
}) {
  const [name, setName] = useState(initialName);
  const [city, setCity] = useState(initialCity);
  const canSubmit = name.trim().length >= 2 && city.trim().length >= 2;

  return (
    <div style={{ maxWidth: 580, margin: "0 auto", fontFamily: SANS, padding: "0 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div
          style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: COLOR.accent,
            marginBottom: 18,
            padding: "4px 12px",
            background: COLOR.accentSoft,
            borderRadius: 999
          }}
        >
          AI Visibility Checker
        </div>
        <h1
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(2rem, 5vw, 2.75rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            margin: "0 0 18px",
            color: COLOR.text
          }}
        >
          How visible is your business to AI?
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.55,
            color: COLOR.muted,
            margin: "0 auto",
            maxWidth: 480
          }}
        >
          We'll ask Claude four real customer questions about your business — with live web search turned on, the same way ChatGPT and Claude.ai work. Then we score what AI actually finds. Takes about 30-45 seconds.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (canSubmit) onSubmit(name.trim(), city.trim());
        }}
        style={{
          background: COLOR.surface,
          border: `1px solid ${COLOR.border}`,
          borderRadius: 16,
          padding: 28,
          boxShadow: "0 1px 2px rgba(28,25,23,0.04), 0 1px 3px rgba(28,25,23,0.06)"
        }}
      >
        <label
          style={{
            display: "block",
            fontSize: 13,
            fontWeight: 600,
            color: COLOR.text,
            marginBottom: 8
          }}
        >
          Business name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Sarah's Coffee Roasters"
          style={{
            width: "100%",
            padding: "12px 14px",
            fontSize: 16,
            fontFamily: SANS,
            color: COLOR.text,
            background: COLOR.bg,
            border: `1px solid ${COLOR.borderStrong}`,
            borderRadius: 8,
            outline: "none",
            marginBottom: 20,
            boxSizing: "border-box"
          }}
          onFocus={(e) => (e.target.style.borderColor = COLOR.accent)}
          onBlur={(e) => (e.target.style.borderColor = COLOR.borderStrong)}
        />

        <label
          style={{
            display: "block",
            fontSize: 13,
            fontWeight: 600,
            color: COLOR.text,
            marginBottom: 8
          }}
        >
          City
        </label>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="e.g. Portland, OR"
          style={{
            width: "100%",
            padding: "12px 14px",
            fontSize: 16,
            fontFamily: SANS,
            color: COLOR.text,
            background: COLOR.bg,
            border: `1px solid ${COLOR.borderStrong}`,
            borderRadius: 8,
            outline: "none",
            marginBottom: 24,
            boxSizing: "border-box"
          }}
          onFocus={(e) => (e.target.style.borderColor = COLOR.accent)}
          onBlur={(e) => (e.target.style.borderColor = COLOR.borderStrong)}
        />

        <button
          type="submit"
          disabled={!canSubmit}
          style={{
            width: "100%",
            padding: "14px 20px",
            fontSize: 16,
            fontWeight: 600,
            fontFamily: SANS,
            color: "white",
            background: canSubmit ? COLOR.accent : COLOR.subtle,
            border: "none",
            borderRadius: 8,
            cursor: canSubmit ? "pointer" : "not-allowed",
            transition: "background .15s"
          }}
          onMouseOver={(e) => {
            if (canSubmit) (e.target as HTMLButtonElement).style.background = COLOR.accentHover;
          }}
          onMouseOut={(e) => {
            if (canSubmit) (e.target as HTMLButtonElement).style.background = COLOR.accent;
          }}
        >
          Check my visibility →
        </button>
      </form>

      <p
        style={{
          marginTop: 24,
          fontSize: 13,
          lineHeight: 1.55,
          color: COLOR.subtle,
          textAlign: "center"
        }}
      >
        Honest note: this runs Claude with live web search, so it reflects what an AI assistant can piece together from your website, Yelp, Google, and other public sources right now — not what's hidden in training data. Different AI assistants behave a little differently, but the pattern of what they find vs. miss is consistent.
      </p>
    </div>
  );
}

function LoadingView({ businessName, city }: { businessName: string; city: string }) {
  const [elapsedMs, setElapsedMs] = useState(0);
  useEffect(() => {
    const startedAt = Date.now();
    const interval = setInterval(() => setElapsedMs(Date.now() - startedAt), 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ maxWidth: 580, margin: "0 auto", fontFamily: SANS, padding: "0 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <h2
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
            fontWeight: 500,
            letterSpacing: "-0.015em",
            margin: "0 0 8px",
            color: COLOR.text
          }}
        >
          Checking {businessName}…
        </h2>
        <p style={{ fontSize: 15, color: COLOR.muted, margin: 0 }}>
          {city}
        </p>
      </div>
      <div
        style={{
          background: COLOR.surface,
          border: `1px solid ${COLOR.border}`,
          borderRadius: 16,
          padding: "28px 32px",
          boxShadow: "0 1px 2px rgba(28,25,23,0.04), 0 1px 3px rgba(28,25,23,0.06)"
        }}
      >
        <ProgressSteps elapsedMs={elapsedMs} />
      </div>
      <p
        style={{
          marginTop: 20,
          fontSize: 13,
          color: COLOR.subtle,
          textAlign: "center"
        }}
      >
        About 30-45 seconds. Claude is doing real web searches.
      </p>
    </div>
  );
}

function ErrorView({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center", fontFamily: SANS, padding: "0 24px" }}>
      <h2
        style={{
          fontFamily: SERIF,
          fontSize: "1.75rem",
          fontWeight: 500,
          margin: "0 0 12px",
          color: COLOR.text
        }}
      >
        Something went sideways.
      </h2>
      <p style={{ fontSize: 15, color: COLOR.muted, marginBottom: 20 }}>{message}</p>
      <button
        onClick={onRetry}
        style={{
          padding: "12px 24px",
          fontSize: 15,
          fontWeight: 600,
          color: "white",
          background: COLOR.accent,
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontFamily: SANS
        }}
      >
        Try again
      </button>
    </div>
  );
}

const DIMENSIONS: Array<{
  key: keyof CheckResponse["score"];
  label: string;
  describe: (score: number) => string;
}> = [
  {
    key: "findability",
    label: "Findability",
    describe: (s) =>
      s >= 16
        ? "AI knows your business in real detail."
        : s >= 8
          ? "AI has heard of you, but the picture is incomplete."
          : "AI is essentially guessing or making things up."
  },
  {
    key: "servicesKnown",
    label: "Services known",
    describe: (s) =>
      s >= 16
        ? "AI has a clear sense of what you offer."
        : s >= 8
          ? "AI knows some of your services, with notable gaps."
          : "AI doesn't really know what you do."
  },
  {
    key: "hoursAccuracy",
    label: "Hours accuracy",
    describe: (s) =>
      s >= 16
        ? "AI confidently knows your current hours."
        : s >= 8
          ? "AI hedges on hours. Close, but not committal."
          : "AI doesn't know your hours and tells customers to check elsewhere."
  },
  {
    key: "actionability",
    label: "Actionability",
    describe: (s) =>
      s >= 16
        ? "AI can actually take actions for customers."
        : s >= 8
          ? "AI helps a bit, but punts on the booking or order itself."
          : "AI can't do anything for the customer. They have to do all the work."
  },
  {
    key: "recency",
    label: "Recency",
    describe: (s) =>
      s >= 16
        ? "AI's info appears current."
        : s >= 8
          ? "Some info is current, some is stale or uncertain."
          : "AI warns its info is likely outdated."
  }
];

function tierLabel(total: number): { label: string; color: string } {
  if (total >= 76) return { label: "Strong AI presence", color: "#15803d" };
  if (total >= 51) return { label: "Mostly visible", color: COLOR.accent };
  if (total >= 26) return { label: "Partially visible", color: COLOR.accent };
  return { label: "Effectively invisible", color: "#b91c1c" };
}

function DimensionBar({
  label,
  score,
  max,
  description
}: {
  label: string;
  score: number;
  max: number;
  description: string;
}) {
  const pct = Math.max(0, Math.min(100, (score / max) * 100));
  const tone = pct >= 75 ? "#15803d" : pct >= 40 ? COLOR.accent : "#b91c1c";
  return (
    <div style={{ marginBottom: 22 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 6
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: COLOR.text }}>{label}</span>
        <span style={{ fontSize: 14, color: COLOR.muted, fontVariantNumeric: "tabular-nums" }}>
          {score}/{max}
        </span>
      </div>
      <div
        style={{
          height: 8,
          background: COLOR.border,
          borderRadius: 999,
          overflow: "hidden",
          marginBottom: 8
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: tone,
            borderRadius: 999,
            transition: "width .6s ease-out"
          }}
        />
      </div>
      <p style={{ margin: 0, fontSize: 14, color: COLOR.muted, lineHeight: 1.5 }}>{description}</p>
    </div>
  );
}

function ResponseCard({
  label,
  prompt,
  response
}: {
  label: string;
  prompt: string;
  response: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: COLOR.surface,
        border: `1px solid ${COLOR.border}`,
        borderRadius: 12,
        marginBottom: 12,
        overflow: "hidden"
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          fontFamily: SANS
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 500, color: COLOR.text }}>{label}</span>
        <span
          style={{
            fontSize: 18,
            color: COLOR.subtle,
            transform: open ? "rotate(180deg)" : "rotate(0)",
            transition: "transform .2s",
            display: "inline-block"
          }}
        >
          ⌄
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 20px 20px" }}>
          <div
            style={{
              fontSize: 13,
              color: COLOR.subtle,
              padding: "10px 14px",
              background: COLOR.bg,
              borderRadius: 8,
              marginBottom: 14,
              fontStyle: "italic",
              lineHeight: 1.5
            }}
          >
            <span style={{ fontWeight: 600, fontStyle: "normal", color: COLOR.muted }}>
              Customer asked:{" "}
            </span>
            {prompt}
          </div>
          <div
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: COLOR.text
            }}
          >
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h4 style={{ fontFamily: SANS, fontSize: 15, fontWeight: 600, color: COLOR.text, margin: "16px 0 8px", textTransform: "none", letterSpacing: 0 }}>{children}</h4>
                ),
                h2: ({ children }) => (
                  <h4 style={{ fontFamily: SANS, fontSize: 15, fontWeight: 600, color: COLOR.text, margin: "16px 0 8px", textTransform: "none", letterSpacing: 0 }}>{children}</h4>
                ),
                h3: ({ children }) => (
                  <h4 style={{ fontFamily: SANS, fontSize: 14, fontWeight: 600, color: COLOR.text, margin: "14px 0 6px", textTransform: "none", letterSpacing: 0 }}>{children}</h4>
                ),
                h4: ({ children }) => (
                  <h5 style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: COLOR.text, margin: "12px 0 6px" }}>{children}</h5>
                ),
                p: ({ children }) => (
                  <p style={{ margin: "0 0 10px", lineHeight: 1.6, color: COLOR.text }}>{children}</p>
                ),
                ul: ({ children }) => (
                  <ul style={{ margin: "0 0 10px", paddingLeft: 22 }}>{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol style={{ margin: "0 0 10px", paddingLeft: 22 }}>{children}</ol>
                ),
                li: ({ children }) => (
                  <li style={{ marginBottom: 4, lineHeight: 1.55 }}>{children}</li>
                ),
                strong: ({ children }) => (
                  <strong style={{ fontWeight: 600, color: COLOR.text }}>{children}</strong>
                ),
                em: ({ children }) => <em style={{ color: COLOR.muted }}>{children}</em>,
                hr: () => (
                  <hr style={{ border: "none", borderTop: `1px solid ${COLOR.border}`, margin: "14px 0" }} />
                ),
                a: ({ children, href }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: COLOR.accent, textDecoration: "underline" }}>
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code style={{ background: COLOR.bg, padding: "1px 6px", borderRadius: 4, fontSize: 13, fontFamily: "ui-monospace, Menlo, monospace" }}>{children}</code>
                )
              }}
            >
              {stripEmojis(response)}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

function ResultsView({ data, onReset }: { data: CheckResponse; onReset: () => void }) {
  const tier = tierLabel(data.total);
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", fontFamily: SANS, padding: "0 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <p
          style={{
            fontSize: 11,
            color: COLOR.subtle,
            margin: "0 0 12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 600
          }}
        >
          Results for
        </p>
        <h2
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.6rem, 3.8vw, 2.25rem)",
            fontWeight: 500,
            letterSpacing: "-0.015em",
            margin: "0 0 4px",
            color: COLOR.text
          }}
        >
          {data.businessName}
        </h2>
        <p style={{ fontSize: 15, color: COLOR.muted, margin: 0 }}>{data.city}</p>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "36px 24px",
          background: COLOR.surface,
          border: `1px solid ${COLOR.border}`,
          borderRadius: 20,
          marginBottom: 32,
          boxShadow: "0 1px 2px rgba(28,25,23,0.04), 0 1px 3px rgba(28,25,23,0.06)"
        }}
      >
        <div
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(4rem, 12vw, 6rem)",
            fontWeight: 600,
            color: tier.color,
            lineHeight: 1
          }}
        >
          {data.total}
          <span style={{ fontSize: "0.4em", color: COLOR.subtle, fontWeight: 400 }}>/100</span>
        </div>
        <div
          style={{
            marginTop: 10,
            fontSize: 12,
            color: COLOR.subtle,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600
          }}
        >
          AI Visibility Score
        </div>
        <div
          style={{
            marginTop: 14,
            display: "inline-block",
            padding: "5px 14px",
            background: COLOR.accentSoft,
            color: COLOR.accentInk,
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 500
          }}
        >
          {tier.label}
        </div>
      </div>

      {data.discoverability &&
        (() => {
          const d = data.discoverability!;
          const meta = {
            top_pick: { label: "Top pick", color: "#15803d", soft: "#dcfce7" },
            recommended: { label: "Recommended", color: "#15803d", soft: "#dcfce7" },
            mentioned: { label: "Mentioned in passing", color: COLOR.accentInk, soft: COLOR.accentSoft },
            absent: { label: "Didn't show up", color: "#b91c1c", soft: "#fee2e2" }
          }[d.placement] || { label: "Didn't show up", color: "#b91c1c", soft: "#fee2e2" };
          return (
            <div
              style={{
                padding: "22px 24px",
                background: COLOR.surface,
                border: `1px solid ${COLOR.border}`,
                borderRadius: 16,
                marginBottom: 32
              }}
            >
              <h3
                style={{
                  fontFamily: SANS,
                  fontSize: 13,
                  fontWeight: 600,
                  color: COLOR.muted,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  margin: "0 0 4px"
                }}
              >
                Can new customers find you?
              </h3>
              <p style={{ fontSize: 13, color: COLOR.subtle, margin: "0 0 4px", lineHeight: 1.5 }}>
                When someone asks AI to recommend a {data.category ?? "business"} in {data.city} —{" "}
                <strong style={{ color: COLOR.muted }}>without naming you</strong> — here's whether you came up.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 16, flexWrap: "wrap" }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(2.4rem, 8vw, 3.2rem)", fontWeight: 600, color: meta.color, lineHeight: 1 }}>
                  {d.appearedCount}
                  <span style={{ fontSize: "0.42em", color: COLOR.subtle, fontWeight: 400 }}>/2</span>
                </div>
                <div style={{ flex: "1 1 180px" }}>
                  <div style={{ fontSize: 11, color: COLOR.subtle, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600, marginBottom: 8 }}>
                    blind searches you appeared in
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "5px 14px",
                      background: meta.soft,
                      color: meta.color,
                      borderRadius: 999,
                      fontSize: 13,
                      fontWeight: 600
                    }}
                  >
                    {meta.label}
                  </span>
                </div>
              </div>
              {d.note && (
                <p style={{ fontSize: 13, color: COLOR.muted, fontStyle: "italic", margin: "16px 0 0", lineHeight: 1.5 }}>{d.note}</p>
              )}
            </div>
          );
        })()}

      {data.usage && (
        <div
          style={{
            padding: "22px 24px",
            background: COLOR.surface,
            border: `1px solid ${COLOR.border}`,
            borderRadius: 16,
            marginBottom: 36
          }}
        >
          <h3
            style={{
              fontFamily: SANS,
              fontSize: 13,
              fontWeight: 600,
              color: COLOR.muted,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: "0 0 4px"
            }}
          >
            What it cost AI to answer
          </h3>
          <p style={{ fontSize: 13, color: COLOR.subtle, margin: "0 0 18px", lineHeight: 1.5 }}>
            To answer four basic customer questions, an AI assistant had to read the live web —
            here's what that took.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { v: (data.usage.inputTokens + data.usage.outputTokens).toLocaleString(), l: "tokens read" },
              { v: String(data.usage.webSearches), l: "live web searches" },
              { v: `${Math.round(data.elapsedMs / 1000)}s`, l: "time taken" },
              { v: `$${data.usage.estimatedCostUsd.toFixed(2)}`, l: "estimated cost" }
            ].map((s) => (
              <div
                key={s.l}
                style={{
                  flex: "1 1 120px",
                  textAlign: "center",
                  padding: "14px 10px",
                  background: COLOR.bg,
                  border: `1px solid ${COLOR.border}`,
                  borderRadius: 12
                }}
              >
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(1.5rem, 5vw, 2rem)",
                    fontWeight: 600,
                    color: COLOR.text,
                    lineHeight: 1
                  }}
                >
                  {s.v}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 11,
                    color: COLOR.subtle,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontWeight: 600
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: COLOR.subtle, fontStyle: "italic", margin: "16px 0 0" }}>
            Coming soon: how much cheaper this is when AI reads your Bodji Beacon profile instead.
          </p>
        </div>
      )}

      <div style={{ marginBottom: 36 }}>
        <h3
          style={{
            fontFamily: SANS,
            fontSize: 13,
            fontWeight: 600,
            color: COLOR.muted,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            margin: "0 0 12px"
          }}
        >
          What this means for you
        </h3>
        <div
          style={{
            padding: "20px 24px",
            background: COLOR.accentSoft,
            border: "1px solid #fde68a",
            borderRadius: 14
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.6,
              color: COLOR.accentInk,
              fontFamily: SERIF,
              fontStyle: "italic"
            }}
          >
            {data.summary}
          </p>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3
          style={{
            fontFamily: SANS,
            fontSize: 13,
            fontWeight: 600,
            color: COLOR.muted,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            margin: "0 0 18px"
          }}
        >
          The breakdown
        </h3>
        {DIMENSIONS.map((d) => {
          const score = data.score[d.key];
          const max = data.scoreMax[d.key] ?? 20;
          return (
            <DimensionBar
              key={d.key}
              label={d.label}
              score={score}
              max={max}
              description={d.describe(score)}
            />
          );
        })}
      </div>

      <div style={{ marginBottom: 40 }}>
        <h3
          style={{
            fontFamily: SANS,
            fontSize: 13,
            fontWeight: 600,
            color: COLOR.muted,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            margin: "0 0 18px"
          }}
        >
          See what AI actually said
        </h3>
        {data.responses.map((r) => (
          <ResponseCard key={r.id} label={r.label} prompt={r.prompt} response={r.response} />
        ))}
      </div>

      <div
        style={{
          padding: "32px 28px",
          background: COLOR.text,
          color: COLOR.bg,
          borderRadius: 20,
          textAlign: "center",
          marginBottom: 24
        }}
      >
        <h3
          style={{
            fontFamily: SERIF,
            fontSize: "1.5rem",
            fontWeight: 500,
            letterSpacing: "-0.015em",
            margin: "0 0 12px",
            color: COLOR.bg
          }}
        >
          This is exactly what Bodji Beacon fixes.
        </h3>
        <p
          style={{
            fontSize: 15,
            color: "rgba(250,248,243,0.75)",
            lineHeight: 1.55,
            margin: "0 0 20px"
          }}
        >
          We turn your business into an AI-readable profile and a controlled action layer, so AI assistants can find you, recommend you, and book with you, while you stay in charge of everything.
        </p>
        <a
          href="#demo"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: COLOR.accent,
            color: "white",
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 600,
            textDecoration: "none"
          }}
        >
          Book a 5-minute demo
        </a>
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={onReset}
          style={{
            padding: "10px 20px",
            fontSize: 14,
            fontWeight: 500,
            color: COLOR.muted,
            background: "transparent",
            border: `1px solid ${COLOR.border}`,
            borderRadius: 8,
            cursor: "pointer",
            fontFamily: SANS
          }}
        >
          ← Check another business
        </button>
      </div>
    </div>
  );
}

export function VisibilityChecker() {
  useGoogleFonts();
  const [view, setView] = useState<View>("form");
  const [businessName, setBusinessName] = useState("");
  const [city, setCity] = useState("");
  const [data, setData] = useState<CheckResponse | null>(null);
  const [error, setError] = useState<string>("");

  async function runCheck(name: string, town: string) {
    setBusinessName(name);
    setCity(town);
    setView("loading");
    setError("");
    try {
      // 1. Start the check — returns a job id almost immediately.
      const startRes = await fetch(`${API_BASE}/api/check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ businessName: name, city: town })
      });
      if (!startRes.ok) {
        const errBody = await startRes.json().catch(() => ({ error: `HTTP ${startRes.status}` }));
        throw new Error(errBody.error || `Request failed (${startRes.status})`);
      }
      const { jobId } = (await startRes.json()) as { jobId?: string };
      if (!jobId) throw new Error("No job id returned");

      // 2. Poll for the result (~2s) while the loading animation runs. Give up after ~2 min.
      const deadline = Date.now() + 120000;
      while (Date.now() < deadline) {
        await new Promise((r) => setTimeout(r, 2000));
        const pollRes = await fetch(`${API_BASE}/api/check/${jobId}`);
        if (pollRes.status === 404) continue; // job row not visible yet
        if (!pollRes.ok) {
          const errBody = await pollRes.json().catch(() => ({ error: `HTTP ${pollRes.status}` }));
          throw new Error(errBody.error || `Request failed (${pollRes.status})`);
        }
        const job = (await pollRes.json()) as { status: string; result?: CheckResponse; error?: string };
        if (job.status === "done" && job.result) {
          setData(job.result);
          setView("results");
          return;
        }
        if (job.status === "error") {
          throw new Error(job.error || "The check failed. Please try again.");
        }
      }
      throw new Error("This check took longer than expected. Please try again.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setView("error");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLOR.bg,
        color: COLOR.text,
        padding: "80px 0",
        fontFamily: SANS
      }}
    >
      <style>{`@keyframes checker-spin { to { transform: rotate(360deg); } }`}</style>

      {view === "form" && (
        <FormView onSubmit={runCheck} initialName={businessName} initialCity={city} />
      )}
      {view === "loading" && <LoadingView businessName={businessName} city={city} />}
      {view === "results" && data && (
        <ResultsView data={data} onReset={() => setView("form")} />
      )}
      {view === "error" && (
        <ErrorView message={error} onRetry={() => setView("form")} />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   INTEGRATION SNIPPET FOR THE LANDING PAGE (when ready):

   import { VisibilityChecker } from "./VisibilityChecker";
   // In App.tsx, replace <LandingPage /> with a tiny router:
   const [showChecker, setShowChecker] = useState(false);
   return showChecker
     ? <VisibilityChecker />
     : <LandingPage onCheckerClick={() => setShowChecker(true)} />;
   // Then wire the "Check your AI visibility" CTA in LandingPage.tsx
   // to call onCheckerClick.
   ───────────────────────────────────────────────────────────────── */
