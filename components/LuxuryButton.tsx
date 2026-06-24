import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type LuxuryButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function LuxuryButton({ href, children, variant = "primary", className }: LuxuryButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium tracking-[0.18em] uppercase transition duration-300 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:ring-offset-2 focus:ring-offset-ivory",
        variant === "primary" &&
          "bg-espresso text-white shadow-[0_18px_48px_rgba(36,28,24,0.22)] hover:-translate-y-1 hover:bg-bronze",
        variant === "secondary" &&
          "border border-gold/40 bg-white/60 text-espresso backdrop-blur-xl hover:-translate-y-1 hover:border-gold hover:bg-white",
        variant === "ghost" && "px-0 text-bronze hover:text-espresso",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}
