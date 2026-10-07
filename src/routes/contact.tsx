import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Ambulance, Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import { toast } from "sonner";
import { HOSPITAL } from "@/lib/hospital-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MediCare Hospital" },
      { name: "description", content: "Contact MediCare Hospital: address, phone, email, working hours, map location and 24/7 emergency number." },
      { property: "og:title", content: "Contact Us — MediCare Hospital" },
      { property: "og:description", content: "Reach us by phone, email or visit — emergency care 24/7." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const tel = HOSPITAL.emergency.replace(/\s/g, "");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Thank you, ${form.name}! We'll get back to you within 24 hours.`);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const info = [
    { icon: MapPin, title: "Address", text: HOSPITAL.address },
    { icon: Phone, title: "Phone", text: HOSPITAL.phone },
    { icon: Mail, title: "Email", text: HOSPITAL.email },
    { icon: Clock, title: "Working Hours", text: HOSPITAL.hours },
  ];

  return (
    <div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">We're here to help. Reach out any time.</p>
        </div>
      </section>

      {/* Emergency section */}
      <section className="mx-auto max-w-7xl px-4 pt-12">
        <div className="grid gap-4 rounded-2xl bg-destructive p-6 text-destructive-foreground sm:grid-cols-3 sm:items-center sm:p-8">
          <div className="flex items-center gap-3">
            <Siren className="h-9 w-9" />
            <div>
              <h2 className="text-lg font-bold">24/7 Emergency Care</h2>
              <p className="text-sm opacity-90">Trauma &amp; critical care always open</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Ambulance className="h-9 w-9" />
            <div>
              <h2 className="text-lg font-bold">Ambulance Service</h2>
              <p className="text-sm opacity-90">GPS ambulances with paramedics</p>
            </div>
          </div>
          <a href={`tel:${tel}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-bold text-destructive">
            <Phone className="h-4 w-4" /> Emergency: {HOSPITAL.emergency}
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {info.map((i) => (
              <div key={i.title} className="rounded-xl border border-border bg-card p-5">
                <i.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-2 font-semibold text-card-foreground">{i.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{i.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <iframe
              title="MediCare Hospital location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(HOSPITAL.address)}&output=embed`}
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-card-foreground">Send us a message</h2>
          <input required placeholder="Your name" className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required type="email" placeholder="Email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="tel" placeholder="Phone (optional)" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <textarea required rows={5} placeholder="How can we help?" className={inputCls} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
