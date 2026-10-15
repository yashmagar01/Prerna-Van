import { PHILOSOPHY_STEPS } from "@/content/site";

// Connected narrative path (not cards) — arrows drawn in globals.css `.phil-path`.
export default function PhilosophyPath() {
  return (
    <ol className="phil-path">
      {PHILOSOPHY_STEPS.map((step) => (
        <li key={step.title}>
          <span className="font-mr text-[2rem] text-sage leading-none" aria-hidden="true">
            {step.numeral}
          </span>
          <div>
            <h3>
              {step.title}{" "}
              <span className="font-mr font-normal" lang="mr">
                · {step.marathi}
              </span>
            </h3>
            <p>{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
