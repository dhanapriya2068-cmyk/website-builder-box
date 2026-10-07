import {
  Activity,
  Ambulance,
  Baby,
  Bone,
  Brain,
  CalendarCheck,
  ClipboardList,
  FileText,
  FlaskConical,
  HeartPulse,
  Pill,
  Sparkles,
  Stethoscope,
  UserRound,
  Users,
  Building2,
  Receipt,
  UserPlus,
  CalendarCog,
  type LucideIcon,
} from "lucide-react";

export const HOSPITAL = {
  name: "MediCare Hospital",
  phone: "+91 98765 43210",
  emergency: "+91 98765 00000",
  email: "care@medicarehospital.in",
  address: "42, Anna Salai, Guindy, Chennai, Tamil Nadu 600032",
  hours: "Mon–Sat: 8:00 AM – 8:00 PM · Sun: 9:00 AM – 2:00 PM",
};

export interface Department {
  name: string;
  icon: LucideIcon;
  description: string;
}

export const DEPARTMENTS: Department[] = [
  { name: "Cardiology", icon: HeartPulse, description: "Advanced heart care, ECG, echo, angiography and cardiac rehabilitation." },
  { name: "General Medicine", icon: Stethoscope, description: "Comprehensive diagnosis and treatment for everyday and chronic illnesses." },
  { name: "Pediatrics", icon: Baby, description: "Specialised care for infants, children and adolescents, including vaccinations." },
  { name: "Orthopedics", icon: Bone, description: "Bone, joint and spine care — fracture treatment, joint replacement and physiotherapy." },
  { name: "Dermatology", icon: Sparkles, description: "Skin, hair and nail treatments with modern dermatological procedures." },
  { name: "Gynecology", icon: UserRound, description: "Women's health, maternity care and minimally invasive gynaecological surgery." },
  { name: "Neurology", icon: Brain, description: "Care for brain, spine and nervous system disorders, stroke unit and EEG." },
  { name: "Dental Care", icon: Activity, description: "Complete dental care — cleaning, root canals, implants and orthodontics." },
  { name: "Emergency Care", icon: Ambulance, description: "24/7 emergency and trauma care with rapid response teams and ICU support." },
];

export interface Doctor {
  name: string;
  specialization: string;
  qualification: string;
  experience: string;
  department: string;
  days: string;
  timings: string;
}

export const DOCTORS: Doctor[] = [
  { name: "Dr. Anitha Ramesh", specialization: "Interventional Cardiologist", qualification: "MBBS, MD, DM (Cardiology)", experience: "18 years", department: "Cardiology", days: "Mon – Sat", timings: "9:00 AM – 1:00 PM" },
  { name: "Dr. Vikram Sundar", specialization: "General Physician", qualification: "MBBS, MD (General Medicine)", experience: "14 years", department: "General Medicine", days: "Mon – Sat", timings: "10:00 AM – 2:00 PM" },
  { name: "Dr. Priya Natarajan", specialization: "Pediatrician", qualification: "MBBS, DCH, MD (Pediatrics)", experience: "12 years", department: "Pediatrics", days: "Mon – Fri", timings: "9:30 AM – 12:30 PM" },
  { name: "Dr. Arun Prakash", specialization: "Orthopedic Surgeon", qualification: "MBBS, MS (Ortho)", experience: "16 years", department: "Orthopedics", days: "Tue – Sun", timings: "11:00 AM – 2:00 PM" },
  { name: "Dr. Divya Krishnan", specialization: "Dermatologist", qualification: "MBBS, MD (Dermatology)", experience: "10 years", department: "Dermatology", days: "Mon – Sat", timings: "3:00 PM – 6:00 PM" },
  { name: "Dr. Meera Lakshmi", specialization: "Gynecologist & Obstetrician", qualification: "MBBS, MS (OBG)", experience: "15 years", department: "Gynecology", days: "Mon – Sat", timings: "10:00 AM – 1:00 PM" },
  { name: "Dr. Sanjay Iyer", specialization: "Neurologist", qualification: "MBBS, MD, DM (Neurology)", experience: "17 years", department: "Neurology", days: "Wed – Sun", timings: "9:00 AM – 12:00 PM" },
  { name: "Dr. Kavitha Mohan", specialization: "Dental Surgeon", qualification: "BDS, MDS", experience: "9 years", department: "Dental Care", days: "Mon – Sat", timings: "4:00 PM – 7:00 PM" },
  { name: "Dr. Rajesh Kumar", specialization: "Emergency Medicine Specialist", qualification: "MBBS, MD (Emergency Medicine)", experience: "13 years", department: "Emergency Care", days: "24/7 Roster", timings: "Round the clock" },
];

export interface Service {
  name: string;
  icon: LucideIcon;
  description: string;
}

export const SERVICES: Service[] = [
  { name: "Online Appointment Booking", icon: CalendarCheck, description: "Book consultations with any specialist online in under a minute." },
  { name: "Doctor Consultation", icon: Stethoscope, description: "In-person and video consultations with experienced specialists." },
  { name: "Laboratory Services", icon: FlaskConical, description: "NABL-standard lab with same-day reports for most investigations." },
  { name: "Pharmacy", icon: Pill, description: "24/7 in-house pharmacy with genuine medicines and home delivery." },
  { name: "Emergency Services", icon: Ambulance, description: "24/7 emergency, trauma and critical care with rapid response." },
  { name: "Health Checkups", icon: ClipboardList, description: "Preventive full-body and corporate health checkup packages." },
  { name: "Ambulance Service", icon: Ambulance, description: "GPS-enabled ambulances with trained paramedics, available 24/7." },
  { name: "Medical Reports", icon: FileText, description: "Digital access to lab reports, discharge summaries and prescriptions." },
];

export interface ManagementSection {
  name: string;
  icon: LucideIcon;
  description: string;
}

export const MANAGEMENT_SECTIONS: ManagementSection[] = [
  { name: "Patient Registration", icon: UserPlus, description: "Quick registration of new patients with digital health IDs." },
  { name: "Appointment Management", icon: CalendarCog, description: "View, confirm and manage all booked appointments in one place." },
  { name: "Doctor Management", icon: Users, description: "Doctor profiles, specialisations, rosters and availability." },
  { name: "Department Management", icon: Building2, description: "Nine clinical departments with dedicated facilities and teams." },
  { name: "Patient Records", icon: ClipboardList, description: "Secure electronic medical records for every registered patient." },
  { name: "Medical Reports", icon: FileText, description: "Centralised lab and radiology reports with doctor sign-off." },
  { name: "Billing Information", icon: Receipt, description: "Transparent billing for consultations, procedures and pharmacy." },
  { name: "Pharmacy Management", icon: Pill, description: "Inventory, dispensing and prescription tracking for the pharmacy." },
];

export interface Appointment {
  id: string;
  patientName: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  reason: string;
  status: "Pending" | "Confirmed" | "Cancelled";
  createdAt: string;
}

const STORAGE_KEY = "medicare_appointments";

export function loadAppointments(): Appointment[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Appointment[]) : [];
  } catch {
    return [];
  }
}

export function saveAppointment(appt: Omit<Appointment, "id" | "status" | "createdAt">): Appointment {
  const record: Appointment = {
    ...appt,
    id: `APT-${Date.now().toString(36).toUpperCase()}`,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };
  const all = loadAppointments();
  all.push(record);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  return record;
}

export function updateAppointmentStatus(id: string, status: Appointment["status"]) {
  const all = loadAppointments().map((a) => (a.id === id ? { ...a, status } : a));
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}
