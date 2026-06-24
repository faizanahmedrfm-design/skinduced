"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { treatments } from "@/lib/data";

export function InteractiveGallery() {
  const featured = treatments.slice(0, 5);
  const [active, setActive] = useState(featured[0]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
      <div className="grid gap-3">
        {featured.map((item) => (
          <button
            key={item.slug}
            type="button"
            onMouseEnter={() => setActive(item)}
            onFocus={() => setActive(item)}
            onClick={() => setActive(item)}
            className={`rounded-[1.5rem] border p-5 text-left transition ${active.slug === item.slug ? "border-gold bg-white shadow-2xl shadow-gold/10" : "border-gold/15 bg-white/50 hover:border-gold/40"}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bronze">{item.category}</p>
            <h3 className="mt-2 font-serif text-2xl tracking-[-0.04em] text-espresso">{item.title}</h3>
          </button>
        ))}
      </div>

      <motion.div layout className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-cream luxury-shadow">
        <Image src={active.image} alt={active.title} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/72 via-espresso/10 to-transparent" />
        <motion.div
          key={active.slug}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-champagne">Featured treatment</p>
          <h3 className="mt-3 font-serif text-5xl tracking-[-0.06em]">{active.title}</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/76">{active.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
