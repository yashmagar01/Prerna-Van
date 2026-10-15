import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionHeading from "@/components/SectionHeading";
import PhilosophyPath from "@/components/PhilosophyPath";
import ExperienceSection from "@/components/ExperienceSection";
import ReelStorytellingSection from "@/components/ReelStorytellingSection";
import MantraSection from "@/components/MantraSection";
import ImageFigure from "@/components/ImageFigure";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { INSTAGRAM_URL } from "@/content/site";

// ponytail: single route, prototype section order, prototype copy verbatim.
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* HERO */}
        <section className="wrap grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center pt-16 pb-12" id="top" aria-labelledby="hero-title">
          <div>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-earth mb-3">
              Prerna Tirth · प्रेरणा तीर्थ · Maitri Hills, Maharashtra
            </p>
            {/* PROTOTYPE COPY: headline below is placeholder, not approved messaging */}
            <h1 id="hero-title">Come closer to nature. Come closer to yourself.</h1>
            <p className="text-[1.15rem] text-muted">
              Prerna Tirth is an open, community-driven initiative bringing
              people together through nature, shared experiences, reflection
              and learning — in the Sahyadri foothills near
              Kadus–Rajgurunagar, Pune district.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <PrimaryButton href="#story">Discover Prerna Tirth</PrimaryButton>
              <SecondaryButton href="#experiences">Explore experiences</SecondaryButton>
            </div>
          </div>
          <ImageFigure
            src="/images/dome-lake.jpg"
            alt="The pink lotus-shaped hall at Prerna Tirth reflected in the lake, surrounded by green trees"
            width={720}
            height={880}
            priority
            caption="Stills on this page are cropped from project reel footage — illustrative only, pending approved photography and consent review."
          />
        </section>

        {/* STORY */}
        <section className="py-16" id="story" aria-labelledby="story-title">
          <div className="wrap grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading eyebrow="Our story" title="A community movement, not a destination" titleId="story-title" />
              <p>
                Prerna Tirth brings people together through nature, shared
                experiences, reflection, learning and human connection. Its
                public expression is simple:
              </p>
              <p className="text-[1.3rem]">
                <strong>Inspire.</strong> <strong>Connect.</strong>{" "}
                <strong>Transform.</strong>
              </p>
              <p>
                Step away from the pressures of everyday urban life. Encounter
                new perspectives, spend time with people and place — and carry
                home reflection, learning or a renewed sense of direction.
              </p>
              <p className="text-[0.9rem] text-muted border-l-[3px] border-sage pl-3 max-w-[62ch]">
                Working narrative from project documentation; official mission
                wording awaits stakeholder confirmation.
              </p>
            </div>
            <ImageFigure
              src="/images/banyan-gathering.jpg"
              alt="Visitors gathered in the shade of a large banyan tree at the Prerna Tirth site"
              width={720}
              height={860}
              caption="Community moments under the old banyan — togetherness is the point."
            />
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="bg-white border-y border-border py-16" id="philosophy" aria-labelledby="phil-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Philosophy"
              title="Inspire → Connect → Transform"
              titleId="phil-title"
              sub="One connected journey, not three separate promises. Transformation is an invitation — never a guaranteed outcome."
            />
            <PhilosophyPath />
          </div>
        </section>

        <MantraSection />

        <ExperienceSection />

        <ReelStorytellingSection />

        {/* PLACE */}
        <section className="bg-white border-y border-border py-16" id="place" aria-labelledby="place-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="The place"
              title="Maitri Hills holds the experience. Prerna Tirth gives it meaning."
              titleId="place-title"
            />
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="border border-border rounded-card p-6 bg-ivory">
                <h3 className="mb-2">Prerna Tirth</h3>
                <p className="m-0">
                  The philosophy, the community, the learning and the shared
                  experiences — the <em>why</em>.
                </p>
              </div>
              <div className="border border-border rounded-card p-6 bg-ivory">
                <h3 className="mb-2">Maitri Hills</h3>
                <p className="m-0">
                  The physical setting near Kadus–Rajgurunagar, Pune district
                  — farmland, lake, halls and open ground in the Sahyadri
                  foothills — the <em>where</em>.
                </p>
              </div>
            </div>
            <p className="text-[0.9rem] text-muted border-l-[3px] border-sage pl-3 max-w-[62ch]">
              Two names, two roles — deliberately not interchangeable. Exact
              operational relationship to be confirmed with stakeholders. This
              is not a booking page: no prices, hours or reservations are
              published in this prototype.
            </p>
          </div>
        </section>

        {/* CONNECT */}
        <section className="py-16" id="connect" aria-labelledby="connect-title">
          <div className="wrap">
            <SectionHeading
              eyebrow="Join · Connect"
              title="Come see for yourself"
              titleId="connect-title"
              sub="The joining process is still being defined — so this prototype collects nothing and promises nothing. The one verified public channel is Instagram."
            />
            <p className="mt-6">
              <PrimaryButton href={INSTAGRAM_URL} target="_blank" rel="noopener">
                Follow @preranatirth
              </PrimaryButton>
            </p>
            <p className="text-[0.9rem] text-muted border-l-[3px] border-sage pl-3 max-w-[62ch]">
              Handle recorded in project documentation; confirm it is the
              official channel before launch. No contact details, forms or
              registration exist yet by design.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
