"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-ivory"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.div
              className="mx-auto mb-6 h-20 w-20 rounded-full border border-gold/30 bg-white/70 p-4 shadow-2xl shadow-gold/10"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.8, ease: "linear" }}
            >
              <img src="/skinduced-mark.svg" alt="SkinDuced mark" className="h-full w-full" />
            </motion.div>
            <p className="font-serif text-3xl tracking-[-0.04em] text-espresso">SkinDuced</p>
            <p className="mt-2 text-xs uppercase tracking-[0.4em] text-bronze">Luxury skin clinic</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
