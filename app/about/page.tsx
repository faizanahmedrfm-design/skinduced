import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { LuxuryButton } from "@/components/LuxuryButton";
import { clinicValues } from "@/lib/data";

export const metadata: Metadata = {
  title: "About SkinDuced",
  description:
    "Learn about the SkinDuced aesthetic clinic experience, built around refined skin care, consultation-led treatment planning, and premium patient comfort."
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About SkinDuced"
        title="Luxury skin care with modern clinical calm."
        text="SkinDuced is built for clients who want polished aesthetic care, quiet privacy, clear guidance, and a premium skin journey from consultation to aftercare."
      />

      <section className="py-20 md:py-28">
        <div className="luxury-container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-bronze">Our philosophy</p>
            <h2 className="mt-4 font-serif text-5xl leading-[1.03] tracking-[-0.06em] text-espresso md:text-7xl">
              Subtle refinement should feel calm, considered, and never rushed.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted">
              The SkinDuced experience starts with listening. Your skin history, concerns, lifestyle, expectations, and comfort level shape the treatment direction. The goal is to support skin confidence through thoughtful care and honest planning.
            </p>
            <p className="mt-5 text-base leading-8 text-muted">
              The clinic blends luxury interiors, modern devices, professional treatment protocols, and simple aftercare guidance so every step feels elevated and easy to understand.
            </p>
            <div className="mt-9">
              <LuxuryButton href="/book-consultation">Book Consultation</LuxuryButton>
            </div>
          </SectionReveal>
          <SectionReveal className="relative min-h-[620px] overflow-hidden rounded-[3rem] bg-cream luxury-shadow">
            <Image
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1400&auto=format&fit=crop"
              alt="SkinDuced consultation environment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </SectionReveal>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="luxury-container">
          <SectionTitle eyebrow="Clinic values" title="A premium standard behind every appointment." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {clinicValues.map((item, index) => {
              const Icon = item.icon;
              return (
                <SectionReveal key={item.title} delay={index * 0.05} className="glass-card rounded-[2rem] p-6">
                  <Icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-6 font-serif text-3xl tracking-[-0.05em] text-espresso">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
