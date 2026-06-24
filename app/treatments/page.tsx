import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TreatmentCard } from "@/components/TreatmentCard";
import { InteractiveGallery } from "@/components/InteractiveGallery";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { LuxuryButton } from "@/components/LuxuryButton";
import { treatments } from "@/lib/data";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "View SkinDuced treatments including hydro dermabrasion, skin rejuvenation, microneedling, chemical peels, LED therapy, acne, pigmentation, skin tightening, and facials."
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Treatments"
        title="Premium skin and aesthetic treatment menu."
        text="Choose from glow-focused facials, skin rejuvenation, resurfacing, acne support, pigmentation care, skin tightening, and consultation-based cosmetic treatments."
      />

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <SectionTitle
            eyebrow="Interactive gallery"
            title="Explore the feel of each SkinDuced experience."
            text="Hover or tap through signature treatments to see the visual direction, category, and skin goals each pathway may support."
          />
          <div className="mt-14">
            <InteractiveGallery />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="luxury-container">
          <SectionTitle eyebrow="Treatment directory" title="Every treatment starts with suitability and clear expectations." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <SectionReveal className="rounded-[3rem] bg-espresso p-8 text-white md:p-14 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Not sure what to book?</p>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.03] tracking-[-0.06em] md:text-7xl">Start with a SkinDuced consultation.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 md:text-base">The team can guide you through treatment options, preparation, downtime, and maintenance planning.</p>
            </div>
            <div className="mt-8 lg:mt-0">
              <LuxuryButton href="/book-consultation" variant="secondary" className="bg-white text-espresso hover:bg-cream">Book Consultation</LuxuryButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
