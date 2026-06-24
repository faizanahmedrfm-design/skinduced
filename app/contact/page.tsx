import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { PageHeader } from "@/components/PageHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact SkinDuced aesthetic clinic for skin consultation bookings, treatment questions, appointment support, and clinic location details."
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Speak with SkinDuced before you book."
        text="Ask about treatment options, preparation, pricing, suitability, and appointment availability."
      />

      <section className="py-20 md:py-28">
        <div className="luxury-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionReveal className="grid gap-5 self-start">
            {[
              { Icon: MapPin, title: "Location", text: "Cameron Park, NSW" },
              { Icon: Phone, title: "Phone", text: "02 4081 0888" },
              { Icon: Mail, title: "Email", text: "hello@skinduced.com.au" },
              { Icon: Clock, title: "Hours", text: "Monday to Friday, 9:00 AM – 5:00 PM" }
            ].map(({ Icon, title, text }) => (
              <div key={title} className="glass-card rounded-[2rem] p-6">
                <Icon className="h-6 w-6 text-gold" />
                <h2 className="mt-4 font-serif text-3xl tracking-[-0.05em] text-espresso">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
              </div>
            ))}
          </SectionReveal>
          <div>
            <SectionTitle align="left" eyebrow="Send enquiry" title="Request a call from the clinic team." text="This form can connect to your CRM, email inbox, or booking software during development handover." />
            <div className="mt-10">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
