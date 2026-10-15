import { EXPERIENCES } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import ImageFigure from "@/components/ImageFigure";

export default function ExperienceSection() {
  return (
    <section className="py-16" id="experiences" aria-labelledby="exp-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="Experiences"
          title="What happens here"
          titleId="exp-title"
          sub={
            <>
              Activities documented in the project&apos;s working papers.
              Availability, schedules and access conditions are{" "}
              <strong>not yet confirmed</strong> — treat this as a preview, not
              a catalogue.
            </>
          }
        />
        <div className="grid md:grid-cols-2 gap-x-12">
          {EXPERIENCES.map((exp) => (
            <article key={exp.title} className="border-t border-border py-4">
              <h3 className="mb-2">{exp.title}</h3>
              <p>{exp.body}</p>
            </article>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
          <ImageFigure
            src="/images/swing.jpg"
            alt="A young visitor on a rope swing beneath dense green canopy"
            width={720}
            height={860}
            caption="Recreation and laughter are legitimate parts of community life."
          />
          <div>
            <h3>
              Reflection <em>and</em> joy
            </h3>
            <p>
              Prerna Tirth holds two things at once: quiet learning and candid,
              playful community moments. The site is neither a solemn retreat
              nor a commercial resort — it is a place where both belong.
            </p>
            <p>
              Past gatherings on record include{" "}
              <span lang="mr">“सोच”</span>, a youth camp held at Maitri Hills
              in May 2025 (as described in working documentation — names,
              partners and figures pending confirmation).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
