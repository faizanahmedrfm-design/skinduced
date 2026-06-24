"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";
import { FloatingElements } from "./FloatingElements";
import { LuxuryButton } from "./LuxuryButton";
import { heroImages } from "@/lib/data";

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveImage((value) => (value + 1) % heroImages.length), 4700);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-ivory pt-28 soft-grid">
      <FloatingElements />
      <div className="luxury-container relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-10 py-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-bronze backdrop-blur-xl">
            <Sparkles className="h-4 w-4" /> Premium skin clinic
          </div>
          <h1 className="font-serif text-6xl leading-[0.95] tracking-[-0.075em] text-espresso md:text-8xl xl:text-9xl">
            Skin that feels <span className="gold-gradient-text">quietly radiant</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            SkinDuced blends luxury beauty care with modern aesthetic professionalism, giving every client a calm, polished, and consultation-led skin experience.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <LuxuryButton href="/book-consultation">Book Consultation</LuxuryButton>
            <LuxuryButton href="/treatments" variant="secondary">View Treatments</LuxuryButton>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { Icon: BadgeCheck, text: "Consultation-led care" },
              { Icon: ShieldCheck, text: "Safety-first approach" },
              { Icon: Sparkles, text: "Luxury treatment rooms" }
            ].map(({ Icon, text }) => (
              <div key={text} className="glass-card rounded-2xl p-4">
                <Icon className="mb-3 h-5 w-5 text-gold" />
                <p className="text-sm font-medium text-espresso">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] max-h-[760px] overflow-hidden rounded-[3rem] bg-cream luxury-shadow">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroImages[activeImage]}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1.1 }}
              >
                <Image src={heroImages[activeImage]} alt="Luxury SkinDuced skin treatment experience" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-white/10" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/28 bg-white/58 p-5 backdrop-blur-2xl md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze">Signature skin journey</p>
              <p className="mt-2 font-serif text-3xl tracking-[-0.05em] text-espresso">Consult. Treat. Glow.</p>
            </div>
          </div>
          <motion.div
            className="absolute -left-6 top-12 hidden rounded-[2rem] border border-gold/20 bg-white/74 p-5 shadow-2xl backdrop-blur-xl md:block"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs uppercase tracking-[0.24em] text-bronze">Skin plan</p>
            <p className="mt-1 font-serif text-3xl tracking-[-0.05em] text-espresso">Personalised</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
