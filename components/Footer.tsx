import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-white">
      <div className="absolute inset-0 opacity-20 soft-grid" aria-hidden="true" />
      <div className="luxury-container relative z-10 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/skinduced-mark.svg" alt="SkinDuced mark" width={52} height={52} />
              <span>
                <span className="block font-serif text-3xl tracking-[-0.06em]">SkinDuced</span>
                <span className="block text-xs uppercase tracking-[0.34em] text-champagne">Aesthetic Clinic</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
              A premium skin and aesthetic clinic experience built around calm consultations, refined treatments, and clear aftercare.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-champagne">Menu</h3>
            <div className="mt-5 grid gap-3">
              {navItems.slice(0, 6).map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/68 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-champagne">Treatments</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/68">
              <span>Skin Rejuvenation</span>
              <span>Hydro Dermabrasion</span>
              <span>Microneedling</span>
              <span>Chemical Peels</span>
              <span>LED Therapy</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-champagne">Contact</h3>
            <div className="mt-5 grid gap-4 text-sm text-white/68">
              <span className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-champagne" /> Cameron Park, NSW</span>
              <a href="tel:0240810888" className="flex gap-3 transition hover:text-white"><Phone className="mt-0.5 h-4 w-4 text-champagne" /> 02 4081 0888</a>
              <a href="mailto:hello@skinduced.com.au" className="flex gap-3 transition hover:text-white"><Mail className="mt-0.5 h-4 w-4 text-champagne" /> hello@skinduced.com.au</a>
              <a href="https://instagram.com" className="flex gap-3 transition hover:text-white"><Instagram className="mt-0.5 h-4 w-4 text-champagne" /> Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-xs leading-6 text-white/46 md:flex md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SkinDuced. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Treatment suitability and outcomes vary. Consultation is required.</p>
        </div>
      </div>
    </footer>
  );
}
