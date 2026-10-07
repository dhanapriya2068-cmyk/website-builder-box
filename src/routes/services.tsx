import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/hospital-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Patient Services — MediCare Hospital" },
      { name: "description", content: "Online booking, consultations, laboratory, pharmacy, health checkups, ambulance and medical reports at MediCare Hospital." },
      { property: "og:title", content: "Patient Services — MediCare Hospital" },
      { property: "og:description", content: "All the services you need for a smooth care journey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Patient Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Convenient, reliable services designed around you and your family.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.name} className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-semibold text-card-foreground">{s.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-accent p-8 sm:flex-row">
          <div>
            <h2 className="text-xl font-bold text-accent-foreground">For hospital staff</h2>
            <p className="text-sm text-muted-foreground">Registration, appointments, records, billing and pharmacy tools.</p>
          </div>
          <Link to="/management" className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            Hospital Management
          </Link>
        </div>
      </section>
    </div>
  );
}
