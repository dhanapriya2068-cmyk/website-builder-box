import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DEPARTMENTS, DOCTORS, MANAGEMENT_SECTIONS, loadAppointments, updateAppointmentStatus, type Appointment } from "@/lib/hospital-data";

export const Route = createFileRoute("/management")({
  head: () => ({
    meta: [
      { title: "Hospital Management — MediCare Hospital" },
      { name: "description", content: "Staff dashboard for patient registration, appointments, doctors, departments, records, billing and pharmacy." },
      { property: "og:title", content: "Hospital Management — MediCare Hospital" },
      { property: "og:description", content: "Staff tools for managing hospital operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ManagementPage,
});

function ManagementPage() {
  const [appts, setAppts] = useState<Appointment[]>([]);
  useEffect(() => setAppts(loadAppointments()), []);

  const change = (id: string, status: Appointment["status"]) => {
    updateAppointmentStatus(id, status);
    setAppts(loadAppointments());
  };

  const stats = [
    { label: "Appointments", value: appts.length },
    { label: "Pending", value: appts.filter((a) => a.status === "Pending").length },
    { label: "Doctors", value: DOCTORS.length },
    { label: "Departments", value: DEPARTMENTS.length },
  ];

  return (
    <div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Hospital Management</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tools for staff to manage patients, appointments, doctors and hospital operations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className="mt-1 text-3xl font-bold text-primary">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MANAGEMENT_SECTIONS.map((m) => (
            <div key={m.name} className="rounded-xl border border-border bg-card p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                <m.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-3 font-semibold text-card-foreground">{m.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-2xl font-bold text-foreground">Appointment Management</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                {["Ref", "Patient", "Doctor", "Department", "Date & Time", "Phone", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {appts.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-muted-foreground">
                    No appointments yet. Bookings made on the Appointments page will appear here.
                  </td>
                </tr>
              ) : (
                appts.map((a) => (
                  <tr key={a.id} className="border-t border-border">
                    <td className="px-4 py-3 font-mono text-xs">{a.id}</td>
                    <td className="px-4 py-3">{a.patientName} ({a.age}, {a.gender})</td>
                    <td className="px-4 py-3">{a.doctor}</td>
                    <td className="px-4 py-3">{a.department}</td>
                    <td className="px-4 py-3">{a.date} · {a.time}</td>
                    <td className="px-4 py-3">{a.phone}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        a.status === "Confirmed" ? "bg-accent text-primary" : a.status === "Cancelled" ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"
                      }`}>{a.status}</span>
                    </td>
                    <td className="space-x-2 whitespace-nowrap px-4 py-3">
                      <button onClick={() => change(a.id, "Confirmed")} className="text-xs font-semibold text-primary hover:underline">Confirm</button>
                      <button onClick={() => change(a.id, "Cancelled")} className="text-xs font-semibold text-destructive hover:underline">Cancel</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Note: appointments are currently saved on this device only.</p>
      </section>
    </div>
  );
}
