import { FloatingElements } from "./FloatingElements";
import { SectionReveal } from "./SectionReveal";

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-40 soft-grid md:pb-28 md:pt-48">
      <FloatingElements />
      <div className="luxury-container relative z-10">
        <SectionReveal className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-bronze">{eyebrow}</p>
          <h1 className="font-serif text-6xl leading-[0.98] tracking-[-0.07em] text-espresso md:text-8xl">{title}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted md:text-lg">{text}</p>
        </SectionReveal>
      </div>
    </section>
  );
}
