import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, CalendarDays, Clock, GraduationCap, UserRound } from "lucide-react";
import { DEPARTMENTS, DOCTORS } from "@/lib/hospital-data";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — MediCare Hospital" },
      { name: "description", content: "Meet MediCare Hospital's experienced specialists. View qualifications, experience, availability and book appointments." },
      { property: "og:title", content: "Our Doctors — MediCare Hospital" },
      { property: "og:description", content: "Experienced specialists across nine departments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const [filter, setFilter] = useState<string>("All");
  const doctors = filter === "All" ? DOCTORS : DOCTORS.filter((d) => d.department === filter);

  return (
    <div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Find a Doctor</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our team of experienced specialists is here to care for you and your family.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-wrap gap-2">
          {["All", ...DEPARTMENTS.map((d) => d.name)].map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === dept
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background text-muted-foreground hover:bg-accent"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc) => (
            <div key={doc.name} className="flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
                  <UserRound className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="font-semibold text-card-foreground">{doc.name}</h2>
                  <p className="text-sm text-primary">{doc.specialization}</p>
                </div>
              </div>
              <dl className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 shrink-0 text-primary" /> {doc.qualification}
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 shrink-0 text-primary" /> {doc.experience} experience · {doc.department}
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 shrink-0 text-primary" /> {doc.days}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-primary" /> {doc.timings}
                </div>
              </dl>
              <Link
                to="/appointments"
                search={{ doctor: doc.name, department: doc.department }}
                className="mt-5 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book Appointment
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
