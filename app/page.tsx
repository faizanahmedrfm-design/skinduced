import type { Metadata } from "next";
import Image from "next/image";
import { Award, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { TreatmentCard } from "@/components/TreatmentCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { LuxuryButton } from "@/components/LuxuryButton";
import { GsapLuxuryScroll } from "@/components/GsapLuxuryScroll";
import { counters, results, treatments, trustBadges } from "@/lib/data";

export const metadata: Metadata = {
  title: "Luxury Aesthetic Clinic in Newcastle",
  description:
    "Book a premium SkinDuced consultation for skin rejuvenation, hydro dermabrasion, microneedling, peels, LED therapy, acne, pigmentation, and facial treatments."
};

export default function Home() {
  return (
    <>
      <Hero />

      <section className="relative overflow-hidden py-20 md:py-28">
        <GsapLuxuryScroll />
        <div className="luxury-container relative z-10">
          <div className="grid gap-5 md:grid-cols-4">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <SectionReveal key={badge.title} delay={index * 0.04} className="glass-card rounded-[2rem] p-6">
                  <Icon className="h-7 w-7 text-gold" />
                  <h2 className="mt-5 font-serif text-2xl tracking-[-0.04em] text-espresso">{badge.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{badge.text}</p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="luxury-container">
          <SectionTitle
            eyebrow="Featured treatments"
            title="High-touch skin experiences with a clinical foundation."
            text="Each appointment begins with your skin, goals, lifestyle, and suitability, then moves into a refined plan that feels calm and considered."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {treatments.slice(0, 6).map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <LuxuryButton href="/treatments" variant="secondary">Explore All Treatments</LuxuryButton>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 md:py-28">
        <div className="absolute inset-0 soft-grid opacity-50" aria-hidden="true" />
        <div className="luxury-container relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-bronze">Transformation showcase</p>
            <h2 className="font-serif text-5xl leading-[1.02] tracking-[-0.06em] text-espresso md:text-7xl">
              The result should feel polished, calm, and personal.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted md:text-lg">
              Before and after content must be used responsibly. This demo includes interactive comparison layouts, clear timeframes, and space for medical disclaimers.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {counters.map((counter) => (
                <AnimatedCounter key={counter.label} {...counter} />
              ))}
            </div>
          </SectionReveal>
          <BeforeAfterSlider {...results[0]} />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="luxury-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionReveal className="relative min-h-[620px] overflow-hidden rounded-[3rem] bg-cream luxury-shadow">
            <Image
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop"
              alt="SkinDuced luxury treatment detail"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/68 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/25 bg-white/60 p-6 backdrop-blur-2xl">
              <Award className="h-7 w-7 text-bronze" />
              <p className="mt-3 font-serif text-3xl tracking-[-0.05em] text-espresso">Premium from arrival to aftercare.</p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-bronze">The SkinDuced method</p>
            <h2 className="font-serif text-5xl leading-[1.03] tracking-[-0.06em] text-espresso md:text-7xl">
              A clinic journey made for confidence, not pressure.
            </h2>
            <div className="mt-8 grid gap-4">
              {[
                { Icon: Sparkles, text: "Aesthetic goals are discussed with calm, honest guidance." },
                { Icon: ShieldCheck, text: "Suitability, downtime, and aftercare are explained before treatment." },
                { Icon: ChevronRight, text: "Treatment plans can be staged for gradual, natural-looking refinement." }
              ].map(({ Icon, text }) => (
                <div key={text} className="flex gap-4 rounded-[1.5rem] border border-gold/15 bg-white/60 p-5">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <p className="leading-7 text-muted">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <LuxuryButton href="/about">About SkinDuced</LuxuryButton>
              <LuxuryButton href="/book-consultation" variant="secondary">Start Consultation</LuxuryButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="luxury-container">
          <SectionTitle eyebrow="Patient stories" title="A premium experience patients remember." text="Use this section for real reviews, verified feedback, and trust-building social proof." />
          <div className="mx-auto mt-14 max-w-5xl">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <SectionTitle eyebrow="Frequently asked questions" title="Clear answers before you book." />
          <div className="mt-12">
            <FAQAccordion />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="luxury-container">
          <SectionReveal className="relative overflow-hidden rounded-[3rem] bg-espresso p-8 text-white md:p-14">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Book your consultation</p>
                <h2 className="mt-4 font-serif text-5xl leading-[1.03] tracking-[-0.06em] md:text-7xl">Begin with a skin plan built around you.</h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 md:text-base">Speak with SkinDuced about your goals, treatment suitability, and the best next step for your skin.</p>
              </div>
              <LuxuryButton href="/book-consultation" variant="secondary" className="bg-white text-espresso hover:bg-cream">Book Now</LuxuryButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
