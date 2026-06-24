"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import type { Treatment } from "@/lib/data";

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-[2rem] border border-gold/15 bg-white shadow-[0_24px_70px_rgba(68,43,24,0.08)]"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={treatment.image}
          alt={`${treatment.title} treatment at SkinDuced`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-bronze backdrop-blur-xl">
          {treatment.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-3xl tracking-[-0.04em] text-espresso">{treatment.title}</h3>
          <Sparkles className="h-5 w-5 shrink-0 text-gold" />
        </div>
        <p className="mt-4 text-sm leading-7 text-muted">{treatment.description}</p>
        <div className="mt-5 flex items-center gap-2 text-sm text-bronze">
          <Clock className="h-4 w-4" /> {treatment.duration}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {treatment.idealFor.map((item) => (
            <span key={item} className="rounded-full border border-gold/20 bg-cream px-3 py-1 text-xs text-muted">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
