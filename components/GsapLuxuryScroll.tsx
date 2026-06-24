"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function GsapLuxuryScroll() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-orb",
        { yPercent: -18, rotate: 0 },
        {
          yPercent: 18,
          rotate: 18,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
          }
        }
      );
    },
    { scope }
  );

  return (
    <div ref={scope} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="gsap-orb absolute -right-24 top-24 h-72 w-72 rounded-full border border-gold/20 bg-[radial-gradient(circle,rgba(215,179,122,0.18),transparent_65%)]" />
      <div className="gsap-orb absolute -left-20 bottom-10 h-80 w-80 rounded-full border border-blush/50 bg-[radial-gradient(circle,rgba(239,216,211,0.24),transparent_66%)]" />
    </div>
  );
}
