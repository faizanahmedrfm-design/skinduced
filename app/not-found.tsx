import { LuxuryButton } from "@/components/LuxuryButton";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-cream px-6 pt-28 text-center soft-grid">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-bronze">404</p>
        <h1 className="mt-4 font-serif text-6xl tracking-[-0.07em] text-espresso md:text-8xl">This page has stepped out for a glow-up.</h1>
        <p className="mt-6 text-base leading-8 text-muted">Return to the SkinDuced homepage or book a consultation.</p>
        <div className="mt-8 flex justify-center gap-4">
          <LuxuryButton href="/">Home</LuxuryButton>
          <LuxuryButton href="/book-consultation" variant="secondary">Book</LuxuryButton>
        </div>
      </div>
    </section>
  );
}
