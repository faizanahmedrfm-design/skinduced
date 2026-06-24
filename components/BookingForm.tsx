"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Clock, Send } from "lucide-react";
import { treatments } from "@/lib/data";

const times = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

export function BookingForm() {
  const [selectedTime, setSelectedTime] = useState(times[1]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const minimumDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Please check the required fields and try again.");
      }

      setSubmitted(true);
    } catch (bookingError) {
      setError(bookingError instanceof Error ? bookingError.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass-card rounded-[2.5rem] p-5 md:p-8"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {submitted ? (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="grid min-h-[460px] place-items-center text-center">
          <div>
            <CheckCircle2 className="mx-auto h-16 w-16 text-gold" />
            <h2 className="mt-6 font-serif text-4xl tracking-[-0.05em] text-espresso">Request received</h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted">
              Thank you. The SkinDuced team will confirm availability and treatment suitability before your appointment.
            </p>
            <button type="button" onClick={() => setSubmitted(false)} className="mt-8 rounded-full bg-espresso px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Submit another request
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-espresso">
              Full name
              <input required name="name" className="rounded-2xl border border-gold/20 bg-white/70 px-4 py-3 outline-none transition focus:border-gold" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-espresso">
              Phone number
              <input required name="phone" className="rounded-2xl border border-gold/20 bg-white/70 px-4 py-3 outline-none transition focus:border-gold" placeholder="04xx xxx xxx" />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-espresso">
              Email address
              <input required type="email" name="email" className="rounded-2xl border border-gold/20 bg-white/70 px-4 py-3 outline-none transition focus:border-gold" placeholder="you@email.com" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-espresso">
              Preferred treatment
              <select name="treatment" className="rounded-2xl border border-gold/20 bg-white/70 px-4 py-3 outline-none transition focus:border-gold">
                <option>Skin consultation</option>
                {treatments.map((treatment) => (
                  <option key={treatment.slug}>{treatment.title}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-espresso">
              <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-bronze" /> Preferred date</span>
              <input required type="date" name="date" min={minimumDate} className="rounded-2xl border border-gold/20 bg-white/70 px-4 py-3 outline-none transition focus:border-gold" />
            </label>
            <div className="grid gap-2 text-sm font-medium text-espresso">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-bronze" /> Preferred time</span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {times.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-2xl border px-3 py-3 text-sm transition ${selectedTime === time ? "border-gold bg-espresso text-white" : "border-gold/20 bg-white/70 text-muted hover:border-gold/50"}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <input type="hidden" name="time" value={selectedTime} />
            </div>
          </div>

          <label className="grid gap-2 text-sm font-medium text-espresso">
            Skin goals or concerns
            <textarea name="message" rows={5} className="resize-none rounded-3xl border border-gold/20 bg-white/70 px-4 py-3 outline-none transition focus:border-gold" placeholder="Tell us what you would like help with." />
          </label>

          <label className="flex items-start gap-3 rounded-3xl border border-gold/15 bg-cream/60 p-4 text-xs leading-6 text-muted">
            <input required type="checkbox" className="mt-1" />
            I understand this booking request does not guarantee treatment. Suitability, risks, downtime, and expected outcomes will be discussed during consultation.
          </label>

          {error ? <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-espresso px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-2xl shadow-espresso/15 transition hover:-translate-y-1 hover:bg-bronze disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Request Consultation"} <Send className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>
      )}
    </motion.form>
  );
}
