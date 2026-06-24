import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal } from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Book Consultation",
  description:
    "Book a SkinDuced consultation for treatment suitability, skin goals, pricing, preparation, and appointment availability."
};

export default function BookConsultationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book consultation"
        title="Begin your SkinDuced skin journey."
        text="Choose your preferred date, time, and treatment interest. The team can confirm availability and discuss suitability before your appointment."
      />

      <section className="py-20 md:py-28">
        <div className="luxury-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionReveal className="sticky top-32 hidden rounded-[2.5rem] bg-espresso p-8 text-white lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">What happens next</p>
            <h2 className="mt-4 font-serif text-5xl leading-[1.03] tracking-[-0.06em]">Your consultation sets the plan.</h2>
            <div className="mt-8 grid gap-4 text-sm leading-7 text-white/68">
              <p>1. Share your goals, skin concerns, and treatment interest.</p>
              <p>2. The clinic confirms your appointment request.</p>
              <p>3. Suitability, downtime, preparation, and pricing are discussed before treatment.</p>
            </div>
          </SectionReveal>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
