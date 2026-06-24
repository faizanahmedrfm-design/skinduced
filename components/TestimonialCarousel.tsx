"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const next = () => setActive((value) => (value + 1) % testimonials.length);
  const previous = () => setActive((value) => (value - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-6 md:p-10">
      <Quote className="absolute right-8 top-8 h-20 w-20 text-gold/12" />
      <div className="mb-8 flex gap-1 text-gold" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-5 w-5 fill-current" />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          initial={{ opacity: 0, x: 22, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -22, filter: "blur(8px)" }}
          transition={{ duration: 0.45 }}
        >
          <p className="font-serif text-3xl leading-[1.2] tracking-[-0.04em] text-espresso md:text-5xl">“{current.quote}”</p>
          <div className="mt-8">
            <p className="font-semibold text-espresso">{current.name}</p>
            <p className="mt-1 text-sm text-muted">{current.detail}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${active === index ? "w-8 bg-gold" : "w-2.5 bg-gold/25"}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={previous} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-gold/20 bg-white/70 text-espresso transition hover:bg-cream">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={next} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-gold/20 bg-white/70 text-espresso transition hover:bg-cream">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
