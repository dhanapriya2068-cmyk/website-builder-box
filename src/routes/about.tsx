import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Eye, HeartHandshake, Target, UserRound } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — MediCare Hospital" },
      { name: "description", content: "Learn about MediCare Hospital's mission, vision, experienced doctors and modern medical facilities." },
      { property: "og:title", content: "About Us — MediCare Hospital" },
      { property: "og:description", content: "Our mission, vision, doctors and facilities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const PILLARS = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver compassionate, affordable and world-class healthcare to every patient, combining medical excellence with genuine human care.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the most trusted hospital in the region — known for clinical excellence, ethical practice and patient-centered innovation.",
  },
  {
    icon: UserRound,
    title: "Experienced Doctors",
    text: "Over 120 specialists and surgeons with decades of combined experience across nine clinical departments.",
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    text: "Advanced operation theatres, NABL-standard laboratories, digital imaging, ICU and a 24/7 pharmacy under one roof.",
  },
];

function AboutPage() {
  return (
    <div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">About MediCare Hospital</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Since 2005, MediCare Hospital has stood for one simple promise: treat every patient like family.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Who We Are</h2>
            <p className="mt-4 text-muted-foreground">
              MediCare Hospital is a multi-speciality hospital offering comprehensive care across cardiology, pediatrics, orthopedics, neurology, women's health and more. Our campus houses advanced operation theatres, a modern intensive care unit, a NABL-standard laboratory and a 24/7 pharmacy.
            </p>
            <p className="mt-4 text-muted-foreground">
              What sets us apart is our patient-centered approach: clear communication, transparent billing, minimal waiting times and care plans built around each patient's life — not just their diagnosis.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-accent p-4">
              <HeartHandshake className="h-8 w-8 text-primary" />
              <p className="text-sm text-accent-foreground">
                <span className="font-semibold">Patient-centered healthcare</span> — every decision we make starts with what is best for the patient.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-card-foreground">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-primary px-6 py-10 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold">Experience care that puts you first</h2>
          <p className="mt-2 text-sm opacity-90">Book a consultation with one of our specialists today.</p>
          <Link
            to="/appointments"
            className="mt-6 inline-flex rounded-lg bg-background px-6 py-3 text-sm font-semibold text-primary"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
