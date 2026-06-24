"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider({
  before,
  after,
  title,
  concern,
  timeframe
}: {
  before: string;
  after: string;
  title: string;
  concern: string;
  timeframe: string;
}) {
  const [position, setPosition] = useState(52);

  return (
    <motion.article
      className="glass-card overflow-hidden rounded-[2.5rem]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[16/10]">
        <img src={after} alt={`${title} after result`} className="absolute inset-0 h-full w-full object-cover" />
        <img
          src={before}
          alt={`${title} before result`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />
        <div className="absolute left-4 top-4 rounded-full bg-espresso/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-xl">
          Before
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-white/76 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-espresso backdrop-blur-xl">
          After
        </div>
        <div className="absolute top-0 h-full w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" style={{ left: `${position}%` }}>
          <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-white/80 text-bronze shadow-2xl backdrop-blur-xl">
            <MoveHorizontal className="h-5 w-5" />
          </div>
        </div>
        <input
          type="range"
          min="18"
          max="82"
          value={position}
          aria-label={`Compare before and after for ${title}`}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <div className="p-6 md:flex md:items-end md:justify-between md:p-8">
        <div>
          <h3 className="font-serif text-3xl tracking-[-0.05em] text-espresso">{title}</h3>
          <p className="mt-2 text-sm text-muted">{concern}</p>
        </div>
        <p className="mt-4 rounded-full bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-bronze md:mt-0">
          {timeframe}
        </p>
      </div>
    </motion.article>
  );
}
