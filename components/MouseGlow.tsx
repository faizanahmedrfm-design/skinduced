"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseGlow() {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 24 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const handleMove = (event: PointerEvent) => {
      mouseX.set(event.clientX - 192);
      mouseY.set(event.clientY - 192);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-50 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(215,179,122,0.18),rgba(239,216,211,0.08)_42%,transparent_68%)]"
      style={{ x: springX, y: springY }}
    />
  );
}
