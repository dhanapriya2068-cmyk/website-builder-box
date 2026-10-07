import { Link } from "@tanstack/react-router";
import { Clock, HeartPulse, Mail, MapPin, Phone, Siren } from "lucide-react";
import { DEPARTMENTS, HOSPITAL } from "@/lib/hospital-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <HeartPulse className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold text-foreground">
              MediCare <span className="text-primary">Hospital</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Compassionate, patient-centered healthcare with modern facilities and experienced specialists — serving our community since 2005.
          </p>
          <a
            href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`}
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-destructive px-3 py-2 text-sm font-semibold text-destructive-foreground"
          >
            <Siren className="h-4 w-4" /> Emergency: {HOSPITAL.emergency}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/doctors", label: "Find a Doctor" },
              { to: "/appointments", label: "Book Appointment" },
              { to: "/services", label: "Patient Services" },
              { to: "/management", label: "Hospital Management" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Departments</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {DEPARTMENTS.slice(0, 7).map((d) => (
              <li key={d.name}>
                <Link to="/departments" className="hover:text-primary">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {HOSPITAL.address}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {HOSPITAL.phone}
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {HOSPITAL.email}
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {HOSPITAL.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} {HOSPITAL.name}. All rights reserved.</span>
          <span>Caring for your health, always.</span>
        </div>
      </div>
    </footer>
  );
}
