import { createFileRoute, Link } from "@tanstack/react-router";
import { DEPARTMENTS, DOCTORS } from "@/lib/hospital-data";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — MediCare Hospital" },
      { name: "description", content: "Explore MediCare Hospital's nine clinical departments: Cardiology, Pediatrics, Orthopedics, Neurology and more." },
      { property: "og:title", content: "Departments — MediCare Hospital" },
      { property: "og:description", content: "Nine clinical departments with dedicated specialists and modern facilities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DepartmentsPage,
});

function DepartmentsPage() {
  return (
    <div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Our Departments</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Nine specialised departments, each with dedicated facilities and experienced medical teams.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map((d) => {
            const doctors = DOCTORS.filter((doc) => doc.department === d.name);
            return (
              <div key={d.name} className="flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
                  <d.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-card-foreground">{d.name}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{d.description}</p>
                {doctors.length > 0 && (
                  <p className="mt-3 text-xs font-medium text-primary">
                    {doctors.map((doc) => doc.name).join(" · ")}
                  </p>
                )}
                <Link
                  to="/appointments"
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book Appointment
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
