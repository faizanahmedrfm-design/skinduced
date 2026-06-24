"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";

export function FAQAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto max-w-4xl divide-y divide-gold/15 overflow-hidden rounded-[2rem] border border-gold/15 bg-white/70 backdrop-blur-xl">
      {faqs.map((item, index) => {
        const open = active === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-8"
              onClick={() => setActive(open ? -1 : index)}
              aria-expanded={open}
            >
              <span className="font-serif text-xl tracking-[-0.03em] text-espresso md:text-2xl">{item.q}</span>
              <Plus className={`h-5 w-5 shrink-0 text-bronze transition ${open ? "rotate-45" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-7 text-muted md:px-8 md:text-base">{item.a}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
