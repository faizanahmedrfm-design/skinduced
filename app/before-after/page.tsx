import type { Metadata } from "next";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { LuxuryButton } from "@/components/LuxuryButton";
import { results } from "@/lib/data";

export const metadata: Metadata = {
  title: "Before & After Results",
  description:
    "View SkinDuced before and after result layouts with interactive comparison sliders, treatment context, timeframe notes, and responsible aesthetic disclaimers."
};

export default function BeforeAfterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Before & after"
        title="Interactive result galleries built for trust."
        text="Use these polished comparison sliders for approved patient imagery, clear treatment context, timeframes, and realistic result expectations."
      />

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <SectionTitle eyebrow="Transformation gallery" title="Slide to compare the treatment journey." />
          <div className="mt-14 grid gap-8">
            {results.map((result) => (
              <BeforeAfterSlider key={result.title} {...result} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="luxury-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-bronze">Responsible results</p>
            <h2 className="mt-4 font-serif text-5xl leading-[1.03] tracking-[-0.06em] text-espresso md:text-7xl">Results should be shown with context.</h2>
          </SectionReveal>
          <SectionReveal className="glass-card rounded-[2.5rem] p-7 md:p-10">
            <div className="grid gap-5 text-sm leading-7 text-muted md:text-base">
              <p>Every before and after case should include the treatment type, number of sessions, timeframe, lighting consistency where possible, and a clear note that individual outcomes vary.</p>
              <p>This demo is set up so the clinic can replace placeholder imagery with approved patient images while keeping a premium, compliant, and trustworthy presentation.</p>
              <p>Consultation remains important because suitability depends on skin type, treatment history, health factors, and the concern being addressed.</p>
            </div>
            <div className="mt-8">
              <LuxuryButton href="/book-consultation">Discuss Your Goals</LuxuryButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
