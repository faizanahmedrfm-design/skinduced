import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarCheck,
  Gem,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  WandSparkles
} from "lucide-react";

export type Treatment = {
  title: string;
  slug: string;
  category: string;
  description: string;
  idealFor: string[];
  duration: string;
  image: string;
};

export type TrustBadge = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/before-after", label: "Results" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const heroImages = [
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1800&auto=format&fit=crop"
];

export const trustBadges: TrustBadge[] = [
  {
    title: "Clinical-Led Skin Plans",
    text: "Consultation-led recommendations with careful treatment matching.",
    icon: HeartPulse
  },
  {
    title: "Premium Technology",
    text: "Modern skin and aesthetic devices selected for comfort and precision.",
    icon: WandSparkles
  },
  {
    title: "Refined Patient Experience",
    text: "A calm, private clinic journey from consultation to aftercare.",
    icon: Gem
  },
  {
    title: "Safety-Focused Care",
    text: "Clear eligibility checks, aftercare guidance, and realistic expectations.",
    icon: ShieldCheck
  }
];

export const treatments: Treatment[] = [
  {
    title: "Hydro Dermabrasion",
    slug: "hydro-dermabrasion",
    category: "Hydration + Glow",
    description:
      "A polished facial treatment that helps cleanse, exfoliate, hydrate, and refine the look of dull or congested skin.",
    idealFor: ["Dull skin", "Dryness", "Congestion", "Event-ready glow"],
    duration: "45–60 min",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Skin Rejuvenation",
    slug: "skin-rejuvenation",
    category: "Tone + Radiance",
    description:
      "A refined option for clients wanting smoother-looking tone, brighter skin, and a more refreshed complexion.",
    idealFor: ["Uneven tone", "Fine texture", "Redness", "Radiance"],
    duration: "45–75 min",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Microneedling",
    slug: "microneedling",
    category: "Texture + Renewal",
    description:
      "A collagen-supporting treatment pathway for clients concerned with texture, visible pores, and skin firmness.",
    idealFor: ["Texture", "Pores", "Acne marks", "Firmness"],
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Chemical Peels",
    slug: "chemical-peels",
    category: "Resurfacing",
    description:
      "Custom peel options designed to support smoother, brighter-looking skin with selected strength and downtime guidance.",
    idealFor: ["Brightness", "Congestion", "Texture", "Pigmentation support"],
    duration: "30–45 min",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "LED Therapy",
    slug: "led-therapy",
    category: "Recovery + Calm",
    description:
      "A gentle light-based appointment used to complement skin plans and support a calm, radiant-looking complexion.",
    idealFor: ["Sensitivity", "Post-treatment care", "Redness", "Maintenance"],
    duration: "20–30 min",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Anti-Wrinkle Treatments",
    slug: "anti-wrinkle-treatments",
    category: "Expression Lines",
    description:
      "A consultation-based cosmetic treatment option for clients seeking a softened, refreshed appearance.",
    idealFor: ["Frown lines", "Forehead lines", "Crow’s feet", "Refinement"],
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Acne Treatments",
    slug: "acne-treatments",
    category: "Clarity Plans",
    description:
      "A personalised skin pathway for breakouts, congestion, redness, and post-acne texture concerns.",
    idealFor: ["Breakouts", "Congestion", "Oiliness", "Post-acne marks"],
    duration: "30–60 min",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Pigmentation Treatments",
    slug: "pigmentation-treatments",
    category: "Complexion Clarity",
    description:
      "A measured treatment plan for visible pigmentation concerns with careful skin assessment and maintenance guidance.",
    idealFor: ["Sun spots", "Uneven tone", "Melasma support", "Brightening"],
    duration: "45–75 min",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Skin Tightening",
    slug: "skin-tightening",
    category: "Firmness + Lift",
    description:
      "A non-surgical treatment direction for clients wanting a firmer-looking facial contour and smoother skin appearance.",
    idealFor: ["Firmness", "Jawline definition", "Skin laxity", "Collagen support"],
    duration: "45–90 min",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Facial Treatments",
    slug: "facial-treatments",
    category: "Personalised Skin Rituals",
    description:
      "Luxury facial experiences matched to the skin on the day, combining relaxation with visible glow-focused care.",
    idealFor: ["Maintenance", "Hydration", "Glow", "Relaxation"],
    duration: "45–90 min",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop"
  }
];

export const results = [
  {
    title: "Radiance Renewal",
    concern: "Dullness + uneven texture",
    timeframe: "8-week skin plan",
    before: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Refined Complexion",
    concern: "Congestion + visible pores",
    timeframe: "6-week personalised plan",
    before: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Calm + Glow",
    concern: "Sensitivity + redness support",
    timeframe: "Maintenance program",
    before: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
  }
];

export const testimonials = [
  {
    quote:
      "The clinic feels calm, polished, and very professional. My skin plan was explained clearly and never felt rushed.",
    name: "Amelia R.",
    detail: "Skin rejuvenation client"
  },
  {
    quote:
      "The experience felt premium from the first consultation. I loved the attention to detail and aftercare instructions.",
    name: "Sophia M.",
    detail: "Hydro dermabrasion client"
  },
  {
    quote:
      "I wanted a natural-looking refresh and the team guided me through the right options without pressure.",
    name: "Charlotte K.",
    detail: "Aesthetic consultation client"
  }
];

export const pricing = [
  { treatment: "Hydro Dermabrasion", from: "$149", session: "Single session" },
  { treatment: "Skin Rejuvenation", from: "$249", session: "Consultation-based" },
  { treatment: "Microneedling", from: "$299", session: "Single area" },
  { treatment: "Chemical Peels", from: "$129", session: "Selected peels" },
  { treatment: "LED Therapy", from: "$69", session: "Add-on or single" },
  { treatment: "Anti-Wrinkle Treatments", from: "Consult", session: "Assessment required" },
  { treatment: "Acne Treatment Plans", from: "$189", session: "Personalised program" },
  { treatment: "Pigmentation Treatments", from: "$249", session: "Consultation-based" },
  { treatment: "Skin Tightening", from: "$399", session: "Area-based" },
  { treatment: "Luxury Facial Treatments", from: "$159", session: "Single treatment" }
];

export const faqs = [
  {
    q: "Do I need a consultation before treatment?",
    a: "Yes. A consultation helps the team assess your skin, goals, suitability, expected downtime, and the most appropriate treatment pathway."
  },
  {
    q: "How soon can I see results?",
    a: "Some treatments can create an immediate glow, while collagen-focused treatments may develop gradually over several weeks. Individual results vary."
  },
  {
    q: "Are aesthetic treatments suitable for every skin type?",
    a: "Suitability depends on skin type, skin condition, medication history, pregnancy status, recent sun exposure, and treatment goals."
  },
  {
    q: "What should I do before my appointment?",
    a: "Avoid heavy sun exposure, active exfoliation, and strong at-home actives where advised. The clinic will provide treatment-specific preparation instructions."
  }
];

export const counters = [
  { value: 10, suffix: "+", label: "Premium treatment categories" },
  { value: 4, suffix: "-step", label: "Consultation-led skin planning" },
  { value: 5, suffix: "★", label: "Luxury patient experience focus" }
];

export const blogPosts = [
  {
    title: "How to Build a Skin Plan Before a Big Event",
    excerpt:
      "A practical timeline for glow-focused treatments, downtime planning, and maintenance appointments.",
    category: "Skin Planning",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "Hydration, Texture, and Glow: What Your Skin May Need",
    excerpt:
      "Learn the difference between dry skin, dehydrated skin, and uneven texture before booking your next facial.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1400&auto=format&fit=crop"
  },
  {
    title: "What to Ask During an Aesthetic Consultation",
    excerpt:
      "A simple guide to treatment safety, downtime, expected outcomes, and aftercare questions.",
    category: "Consultation",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1400&auto=format&fit=crop"
  }
];

export const clinicValues = [
  { title: "Measured", text: "Every plan begins with assessment, suitability, and realistic expectations.", icon: BadgeCheck },
  { title: "Refined", text: "The experience is quiet, polished, and intentionally calm.", icon: Star },
  { title: "Restorative", text: "Skin health, comfort, and confidence sit at the centre of care.", icon: Leaf },
  { title: "Seamless", text: "From booking to aftercare, each step feels simple and premium.", icon: CalendarCheck }
];
