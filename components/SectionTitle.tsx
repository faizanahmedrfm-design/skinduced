import { SectionReveal } from "./SectionReveal";

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "center"
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <SectionReveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-bronze">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-espresso md:text-6xl">{title}</h2>
      {text ? <p className="mt-6 text-base leading-8 text-muted md:text-lg">{text}</p> : null}
    </SectionReveal>
  );
}
