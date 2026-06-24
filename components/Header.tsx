"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { navItems } from "@/lib/data";
import { LuxuryButton } from "./LuxuryButton";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4">
      <motion.nav
        className={clsx(
          "luxury-container flex items-center justify-between rounded-full border px-4 py-3 transition duration-500 md:px-5",
          scrolled ? "border-gold/20 bg-white/76 shadow-2xl shadow-espresso/5 backdrop-blur-2xl" : "border-white/30 bg-white/35 backdrop-blur-xl"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/40">
          <Image src="/skinduced-mark.svg" alt="SkinDuced logo" width={42} height={42} priority />
          <span className="leading-none">
            <span className="block font-serif text-2xl tracking-[-0.06em] text-espresso">SkinDuced</span>
            <span className="hidden text-[10px] uppercase tracking-[0.28em] text-bronze sm:block">Aesthetic Clinic</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-medium transition hover:bg-cream hover:text-bronze focus:outline-none focus:ring-2 focus:ring-gold/30",
                pathname === item.href ? "bg-cream text-bronze" : "text-espresso/78"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <LuxuryButton href="/book-consultation" variant="primary" className="px-5 py-2.5 text-[11px]">
            Book
          </LuxuryButton>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-gold/20 bg-white/70 text-espresso lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="luxury-container mt-3 rounded-[2rem] border border-gold/20 bg-white/90 p-4 shadow-2xl shadow-espresso/10 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-medium text-espresso hover:bg-cream">
                  {item.label}
                </Link>
              ))}
              <LuxuryButton href="/book-consultation" className="mt-2 w-full">
                Book Consultation
              </LuxuryButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
