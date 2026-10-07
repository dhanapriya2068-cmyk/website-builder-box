import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { DEPARTMENTS, DOCTORS, saveAppointment, type Appointment } from "@/lib/hospital-data";

type Search = { doctor?: string; department?: string };

export const Route = createFileRoute("/appointments")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    doctor: typeof search["doctor"] === "string" ? (search["doctor"] as string) : undefined,
    department: typeof search["department"] === "string" ? (search["department"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book an Appointment — MediCare Hospital" },
      { name: "description", content: "Book an appointment online with MediCare Hospital specialists. Choose department, doctor, date and time." },
      { property: "og:title", content: "Book an Appointment — MediCare Hospital" },
      { property: "og:description", content: "Online appointment booking with our specialists." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AppointmentsPage,
});

const TIMES = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"];

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";
const labelCls = "mb-1.5 block text-sm font-medium text-foreground";

function AppointmentsPage() {
  const search = Route.useSearch();
  const empty = {
    patientName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    department: search.department ?? "",
    doctor: search.doctor ?? "",
    date: "",
    time: "",
    reason: "",
  };
  const [form, setForm] = useState(empty);
  const [confirmed, setConfirmed] = useState<Appointment | null>(null);

  const doctors = form.department ? DOCTORS.filter((d) => d.department === form.department) : DOCTORS;
  const today = new Date().toISOString().split("T")[0];

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setForm((f) => {
      const next = { ...f, [k]: value };
      if (k === "department") next.doctor = "";
      if (k === "doctor") {
        const doc = DOCTORS.find((d) => d.name === value);
        if (doc) next.department = doc.department;
      }
      return next;
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[0-9+\s-]{10,15}$/.test(form.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    const record = saveAppointment(form);
    setConfirmed(record);
    setForm({ ...empty, department: "", doctor: "" });
    toast.success("Appointment booked successfully!");
  };

  return (
    <div>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Book an Appointment</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Fill in the form below and our team will confirm your appointment shortly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        {confirmed && (
          <div className="mb-8 rounded-xl border border-primary/30 bg-accent p-6">
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle2 className="h-6 w-6" />
              <h2 className="text-lg font-semibold">Appointment Requested</h2>
            </div>
            <p className="mt-2 text-sm text-accent-foreground">
              Reference <span className="font-bold">{confirmed.id}</span> — {confirmed.patientName} with {confirmed.doctor} on{" "}
              {confirmed.date} at {confirmed.time}. We will call you on {confirmed.phone} to confirm.
            </p>
          </div>
        )}

        <form onSubmit={onSubmit} className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:grid-cols-2 sm:p-8">
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="patientName">Patient Name</label>
            <input id="patientName" required className={inputCls} value={form.patientName} onChange={set("patientName")} placeholder="Full name" />
          </div>
          <div>
            <label className={labelCls} htmlFor="age">Age</label>
            <input id="age" type="number" min={0} max={120} required className={inputCls} value={form.age} onChange={set("age")} />
          </div>
          <div>
            <label className={labelCls} htmlFor="gender">Gender</label>
            <select id="gender" required className={inputCls} value={form.gender} onChange={set("gender")}>
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" required className={inputCls} value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" />
          </div>
          <div>
            <label className={labelCls} htmlFor="email">Email</label>
            <input id="email" type="email" required className={inputCls} value={form.email} onChange={set("email")} placeholder="you@example.com" />
          </div>
          <div>
            <label className={labelCls} htmlFor="department">Department</label>
            <select id="department" required className={inputCls} value={form.department} onChange={set("department")}>
              <option value="">Select department</option>
              {DEPARTMENTS.map((d) => (
                <option key={d.name}>{d.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="doctor">Doctor</label>
            <select id="doctor" required className={inputCls} value={form.doctor} onChange={set("doctor")}>
              <option value="">Select doctor</option>
              {doctors.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.name} — {d.specialization}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="date">Preferred Date</label>
            <input id="date" type="date" min={today} required className={inputCls} value={form.date} onChange={set("date")} />
          </div>
          <div>
            <label className={labelCls} htmlFor="time">Preferred Time</label>
            <select id="time" required className={inputCls} value={form.time} onChange={set("time")}>
              <option value="">Select time</option>
              {TIMES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="reason">Reason for Visit</label>
            <textarea id="reason" rows={4} required className={inputCls} value={form.reason} onChange={set("reason")} placeholder="Briefly describe your symptoms or reason" />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <CalendarCheck className="h-4 w-4" /> Submit Appointment
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
