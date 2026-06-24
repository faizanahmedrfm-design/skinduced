import type { Metadata } from "next";
import { Check, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { LuxuryButton } from "@/components/LuxuryButton";
import { pricing } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "View SkinDuced pricing from selected treatment categories. Final treatment pricing depends on consultation, suitability, treatment area, and treatment plan."
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Clear premium pricing with consultation-led plans."
        text="Use this page to show starting prices, packages, and consultation-based treatments with enough clarity for premium patients to make the next step."
      />

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <SectionTitle eyebrow="Treatment pricing" title="Starting prices by treatment category." text="Prices below are placeholders and should be updated with final clinic-approved pricing before launch." />
          <SectionReveal className="mt-14 overflow-hidden rounded-[2.5rem] border border-gold/15 bg-white/80 shadow-2xl shadow-espresso/5">
            <div className="hidden grid-cols-[1.2fr_0.6fr_0.8fr] bg-espresso px-8 py-5 text-xs font-semibold uppercase tracking-[0.28em] text-champagne md:grid">
              <span>Treatment</span>
              <span>From</span>
              <span>Session Type</span>
            </div>
            <div className="divide-y divide-gold/12">
              {pricing.map((item) => (
                <div key={item.treatment} className="grid gap-3 px-6 py-6 md:grid-cols-[1.2fr_0.6fr_0.8fr] md:px-8 md:items-center">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-gold" />
                    <span className="font-serif text-2xl tracking-[-0.04em] text-espresso">{item.treatment}</span>
                  </div>
                  <span className="text-lg font-semibold text-bronze">{item.from}</span>
                  <span className="text-sm text-muted">{item.session}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="luxury-container grid gap-8 lg:grid-cols-3">
          {[
            ["Consultation first", "Treatment suitability, risks, downtime, and expected outcomes are discussed before treatment."],
            ["Packages available", "Package pricing can be added for courses, maintenance plans, and seasonal skin programs."],
            ["Premium aftercare", "Use this area to explain post-treatment instructions, follow-up support, and skin care guidance."]
          ].map(([title, text], index) => (
            <SectionReveal key={title} delay={index * 0.05} className="glass-card rounded-[2rem] p-7">
              <Check className="h-6 w-6 text-gold" />
              <h2 className="mt-5 font-serif text-3xl tracking-[-0.05em] text-espresso">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="luxury-container text-center">
          <SectionTitle eyebrow="Next step" title="Start with a consultation before choosing a treatment." />
          <div className="mt-10">
            <LuxuryButton href="/book-consultation">Book Consultation</LuxuryButton>
          </div>
        </div>
      </section>
    </>
  );
}
