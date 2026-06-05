import { CheckCircle2, XCircle } from "lucide-react";
import { fitItems, notFitItems, proofPoints } from "../data/siteContent";

export function ProofAndFit() {
  return (
    <section className="section proof-section" aria-labelledby="proof-title">
      <div className="section-heading">
        <p className="section-kicker">Honest proof</p>
        <h2 id="proof-title">Early, but real.</h2>
        <p>
          We are not going to pretend we have a wall of enterprise case studies. What we do have is
          working product infrastructure, a clear point of view, and a practical process for finding
          the first workflow worth improving.
        </p>
      </div>

      <div className="proof-grid">
        {proofPoints.map((point) => {
          const Icon = point.icon;
          return (
            <article className="proof-card" key={point.title}>
              <Icon aria-hidden="true" />
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          );
        })}
      </div>

      <div className="fit-grid">
        <article className="fit-card">
          <h3>Right fit</h3>
          <ul>
            {fitItems.map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="fit-card not-fit">
          <h3>Not right fit</h3>
          <ul>
            {notFitItems.map((item) => (
              <li key={item}>
                <XCircle aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
