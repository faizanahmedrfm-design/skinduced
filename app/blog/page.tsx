import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read SkinDuced skin education articles about treatment planning, skin hydration, glow, consultation questions, and aftercare."
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skin journal"
        title="Premium skin education for confident decisions."
        text="Use the blog to answer patient questions, support SEO, build clinic trust, and explain treatments with care before clients book."
      />

      <section className="py-20 md:py-28">
        <div className="luxury-container">
          <SectionTitle eyebrow="Latest articles" title="Helpful guidance before your next appointment." />
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <SectionReveal key={post.title} delay={index * 0.05} className="group overflow-hidden rounded-[2rem] border border-gold/15 bg-white shadow-2xl shadow-espresso/5">
                <div className="relative h-72 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/76 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-bronze backdrop-blur-xl">
                    {post.category}
                  </div>
                </div>
                <div className="p-7">
                  <h2 className="font-serif text-3xl leading-tight tracking-[-0.05em] text-espresso">{post.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted">{post.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bronze">
                    Read article <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="luxury-container">
          <SectionReveal className="mx-auto max-w-4xl rounded-[3rem] bg-espresso p-8 text-center text-white md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Editorial strategy</p>
            <h2 className="mt-4 font-serif text-5xl leading-[1.03] tracking-[-0.06em] md:text-7xl">Turn patient questions into clinic authority.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
              Add articles for hydro dermabrasion, microneedling aftercare, pigmentation support, acne plans, LED therapy, peels, and event skin timelines.
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
