import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read SkinDuced patient experience sections and review layouts for a premium aesthetic clinic website."
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="A calm, refined experience patients can trust."
        text="Use this page to publish verified patient feedback, review highlights, and social proof that supports premium clinic positioning."
      />

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <SectionTitle eyebrow="Featured story" title="Luxury service, clear guidance, and polished care." />
          <div className="mx-auto mt-14 max-w-5xl">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="luxury-container grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <SectionReveal key={item.name} delay={index * 0.05} className="glass-card rounded-[2rem] p-7">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-base leading-8 text-espresso">“{item.quote}”</p>
              <p className="mt-8 font-semibold text-espresso">{item.name}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
