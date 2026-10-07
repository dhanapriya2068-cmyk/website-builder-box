import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, CalendarCheck, Clock, Phone, ShieldCheck, Siren, Stethoscope, Users } from "lucide-react";
import { DEPARTMENTS, HOSPITAL, SERVICES } from "@/lib/hospital-data";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediCare Hospital — Compassionate Care, Modern Medicine" },
      { name: "description", content: "MediCare Hospital offers 24/7 emergency care, nine specialist departments and online appointment booking. Your health, our priority." },
      { property: "og:title", content: "MediCare Hospital — Compassionate Care, Modern Medicine" },
      { property: "og:description", content: "24/7 emergency care, nine specialist departments and online appointment booking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { icon: Users, value: "120+", label: "Specialist Doctors" },
  { icon: Award, value: "20+", label: "Years of Service" },
  { icon: Stethoscope, value: "9", label: "Departments" },
  { icon: Clock, value: "24/7", label: "Emergency Care" },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Trusted healthcare since 2005
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              Welcome to <span className="text-primary">MediCare Hospital</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Compassionate, patient-centered care backed by modern medical facilities and a team of experienced specialists. Your health is our priority — every day, around the clock.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                <CalendarCheck className="h-4 w-4" /> Book an Appointment
              </Link>
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <Stethoscope className="h-4 w-4" /> Find a Doctor
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Doctor consulting a patient at MediCare Hospital"
              width={1600}
              height={1008}
              className="rounded-2xl border border-border object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <Siren className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">24/7 Emergency</p>
                <a href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`} className="text-sm font-bold text-foreground">
                  {HOSPITAL.emergency}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Departments preview */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Departments</h2>
            <p className="mt-2 text-muted-foreground">Specialised care across nine clinical departments.</p>
          </div>
          <Link to="/departments" className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.slice(0, 6).map((d) => (
            <Link
              key={d.name}
              to="/departments"
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                <d.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-card-foreground group-hover:text-primary">{d.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{d.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Services highlights */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Patient Services</h2>
          <p className="mt-2 text-muted-foreground">Everything you need for a smooth care journey.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 4).map((s) => (
              <div key={s.name} className="rounded-xl border border-border bg-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-card-foreground">{s.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="bg-destructive">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 text-destructive-foreground sm:flex-row">
          <div className="flex items-center gap-4">
            <Siren className="h-10 w-10" />
            <div>
              <h2 className="text-2xl font-bold">24/7 Emergency &amp; Ambulance Service</h2>
              <p className="text-sm opacity-90">Immediate medical help is one call away — day or night.</p>
            </div>
          </div>
          <a
            href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-bold text-destructive shadow-sm"
          >
            <Phone className="h-4 w-4" /> Call {HOSPITAL.emergency}
          </a>
        </div>
      </section>
    </div>
  );
}
