"use client";

import { motion } from "framer-motion";

export function FloatingElements() {
  const items = [
    "top-[18%] left-[8%] h-28 w-28 bg-blush/40",
    "top-[24%] right-[10%] h-40 w-40 bg-champagne/20",
    "bottom-[16%] left-[18%] h-24 w-24 bg-sand/40",
    "bottom-[10%] right-[20%] h-32 w-32 bg-white/55"
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((classes, index) => (
        <motion.span
          key={classes}
          className={`absolute rounded-full blur-3xl ${classes}`}
          animate={{ y: [0, -22, 0], x: [0, index % 2 ? 16 : -16, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
