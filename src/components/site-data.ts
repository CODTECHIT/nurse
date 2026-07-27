import courseGnm from "@/assets/course-gnm.jpg";
import courseBsc from "@/assets/course-bsc.jpg";
import courseMsc from "@/assets/course-msc.jpg";
import courseStaff from "@/assets/course-staff.jpg";
import courseNclex from "@/assets/course-nclex.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import {
  UserCheck, Stethoscope, BookOpen, Trophy, Building2,
  Monitor, FileCheck, PenTool, Briefcase, HelpCircle, Users,
  TrendingUp, BookMarked,
} from "lucide-react";

export const PHONE = "9052223330";
export const WHATSAPP = "9052223330";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Online Coaching", to: "/online-coaching" },
  { label: "Gallery", to: "/gallery" },
  { label: "Faculty", to: "/faculty" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export const whyChoose = [
  { icon: UserCheck, title: "Expert Faculty", desc: "Highly qualified & experienced faculty to guide you." },
  { icon: Stethoscope, title: "Practical Training", desc: "Hands-on clinical training in hospitals & labs." },
  { icon: BookOpen, title: "Updated Materials", desc: "Latest syllabus based study materials & notes." },
  { icon: Trophy, title: "High Success Rate", desc: "Proven track record of excellent results every year." },
];

export interface Course {
  slug: string;
  name: string;
  fullName?: string;
  category: "Main" | "Paramedical";
  duration: string;
  eligibility: string;
  gender: string;
  medium?: string;
  hostel: string;
  ageLimit: string;
  examType?: string;
  whatsappName: string;
  img?: string;
}

export interface CoachingProgram {
  slug: string;
  name: string;
  desc: string;
  img: string;
}

const PARAMEDICAL_SHARED = {
  category: "Paramedical" as const,
  duration: "2 Years",
  medium: "English Medium",
  gender: "Girls and Boys / Co-Education",
  hostel: "Free Hostel Available",
  eligibility: "Intermediate – Any Group / Vocational Intermediate – Any Group / Open Intermediate",
  ageLimit: "No Age Limit",
  examType: "Second Year Exams",
};

export const allCourses: Course[] = [
  {
    slug: "gnm",
    name: "GNM",
    fullName: "Staff Nurse Course",
    category: "Main",
    duration: "3 Years",
    eligibility: "Intermediate – Any Group Eligible",
    gender: "Girls and Boys",
    hostel: "Available",
    ageLimit: "No Age Limit",
    examType: "Annual Exams",
    whatsappName: "GNM Staff Nurse Course",
    img: courseGnm,
  },
  {
    slug: "bsc-nursing",
    name: "B.Sc Nursing",
    category: "Main",
    duration: "4 Years",
    eligibility: "Intermediate BiPC OR MPHW (F) with Bridge Course OR MLT with Bridge Course",
    gender: "Girls and Boys",
    hostel: "Available",
    ageLimit: "No Age Limit",
    examType: "Semester Exams",
    whatsappName: "B.Sc Nursing",
    img: courseBsc,
  },
  {
    slug: "post-bsc-nursing",
    name: "Post B.Sc Nursing",
    fullName: "Post Basic B.Sc Nursing",
    category: "Main",
    duration: "2 Years",
    eligibility: "GNM Pass with Registration",
    gender: "Girls and Boys",
    hostel: "Available",
    ageLimit: "No Age Limit",
    examType: "Annual Exams",
    whatsappName: "Post B.Sc Nursing Course",
    img: courseStaff,
  },
  {
    slug: "bsc-mlt",
    name: "B.Sc MLT",
    fullName: "Medical Laboratory Technology / Lab Technician Course",
    category: "Main",
    duration: "3 Years",
    eligibility: "Intermediate BiPC OR MLT with Bridge Course",
    gender: "Girls and Boys / Co-Education",
    hostel: "Free Hostel Available",
    ageLimit: "No Age Limit",
    examType: "Annual Exams",
    whatsappName: "B.Sc MLT Lab Technician Course",
    img: "/bsc mlt.png",
  },
  {
    slug: "bpt",
    name: "BPT",
    fullName: "Physiotherapy Course",
    category: "Main",
    duration: "4 Years",
    medium: "English Medium",
    eligibility: "Intermediate BiPC OR MLT with Bridge Course OR MPHW (F) with Bridge Course",
    gender: "Girls and Boys / Co-Education",
    hostel: "Free Hostel Available",
    ageLimit: "No Age Limit",
    examType: "Annual Exams",
    whatsappName: "BPT Physiotherapy Course",
    img: "/BPTphysiotherapy.png",
  },
  { ...PARAMEDICAL_SHARED, slug: "dmlt", name: "DMLT", fullName: "Lab Technician / Medical Laboratory Technology", whatsappName: "DMLT Lab Technician Course" },
  { ...PARAMEDICAL_SHARED, slug: "dmit", name: "DMIT", fullName: "Scanning / Medical Imaging Technician", whatsappName: "DMIT Medical Imaging Course" },
  { ...PARAMEDICAL_SHARED, slug: "drga", name: "DRGA", fullName: "X-Ray / Radiography Technician", whatsappName: "DRGA Radiography Course" },
  { ...PARAMEDICAL_SHARED, slug: "doa", name: "DOA", fullName: "Ophthalmic Assistant", whatsappName: "DOA Ophthalmic Assistant Course" },
  { ...PARAMEDICAL_SHARED, slug: "dom", name: "DOM", fullName: "Optometric / Optometry Technician", whatsappName: "DOM Optometry Course" },
  { ...PARAMEDICAL_SHARED, slug: "dmpha", name: "DMPHA (Male)", fullName: "Medical and Primary Health Assistant", gender: "Male Only", whatsappName: "DMPHA Medical Health Assistant Course" },
  { ...PARAMEDICAL_SHARED, slug: "dialysis", name: "Dialysis Technician", whatsappName: "Dialysis Technician Course" },
  { ...PARAMEDICAL_SHARED, slug: "cardiology", name: "Cardiology Technician", whatsappName: "Cardiology Technician Course" },
  { ...PARAMEDICAL_SHARED, slug: "dental", name: "Dental Technician", whatsappName: "Dental Technician Course" },
  { ...PARAMEDICAL_SHARED, slug: "ecg", name: "ECG Technician", whatsappName: "ECG Technician Course" },
  { ...PARAMEDICAL_SHARED, slug: "cath-lab", name: "Cath Lab Technician", whatsappName: "Cath Lab Technician Course" },
  { ...PARAMEDICAL_SHARED, slug: "anesthesia", name: "DAN'S", fullName: "Anesthesia Technician / Anesthesia Technology", whatsappName: "Anesthesia Technology Course" },
  { ...PARAMEDICAL_SHARED, slug: "dmst-ot", name: "DMST (OT)", fullName: "Operation Theatre Technology / Assistant", whatsappName: "Operation Theatre Technology Course" },
];

export const coachingPrograms: CoachingProgram[] = [
  { slug: "msc-nursing", name: "M.Sc Nursing", desc: "2 Years Programme", img: courseMsc },
  { slug: "staff-nurse-coaching", name: "Staff Nurse Coaching", desc: "Govt. Exam Preparation", img: courseStaff },
  { slug: "nclex-coaching", name: "NCLEX Coaching", desc: "USA Nursing Exam", img: courseNclex },
];

export const stats = [
  { icon: Users, num: "5000+", label: "Students" },
  { icon: TrendingUp, num: "95%", label: "Success Rate" },
  { icon: UserCheck, num: "15+", label: "Experienced Faculty" },
  { icon: BookMarked, num: "100+", label: "Clinical Sessions" },
];

export const facilities = [
  { icon: Monitor, label: "Smart Digital Classrooms" },
  { icon: FileCheck, label: "Daily Tests & Assignments" },
  { icon: PenTool, label: "Mock Exams" },
  { icon: Building2, label: "Hostel Guidance" },

  { icon: HelpCircle, label: "Doubt Clearing Sessions" },
];

export const faculty = [
  { name: "Dr. Ramesh Kumar", role: "Principal & Senior Faculty", exp: "20+ years", specialty: "Medical Surgical Nursing" },
  { name: "Mrs. Sunitha Reddy", role: "Senior Nursing Instructor", exp: "15+ years", specialty: "Community Health Nursing" },
  { name: "Mr. Vijay Prasad", role: "Clinical Coordinator", exp: "12+ years", specialty: "Critical Care & OT" },
  { name: "Ms. Lakshmi Devi", role: "Nursing Faculty", exp: "10+ years", specialty: "Child Health Nursing" },
  { name: "Dr. Naveen Chandra", role: "Visiting Professor", exp: "18+ years", specialty: "Pharmacology" },
  { name: "Mrs. Padma Rani", role: "NCLEX Coach", exp: "8+ years", specialty: "NCLEX-RN Preparation" },
];

export const testimonials = [
  {
    quote: "TEJA Nursing Academy helped me build confidence and crack my exam in the first attempt. The faculty is excellent and always supportive.",
    name: "Lakshmi Narayana Reddy",
    role: "GNM Graduate - NIMS Hyderabad",
  },
  {
    quote: "The practical training and mock exams gave me the edge I needed. I cleared my Staff Nurse exam thanks to TEJA.",
    name: "Priyanka Goud",
    role: "Staff Nurse - Yashoda Hospitals",
  },
  {
    quote: "Outstanding faculty and study materials. The NCLEX coaching prepared me for a career abroad.",
    name: "Anusha Chowdary",
    role: "NCLEX Aspirant - USA Registered Nurse",
  },
  {
    quote: "The paramedical diploma course opened up a great career for me. Highly recommend TEJA for practical training.",
    name: "Srinivas Rao",
    role: "DMLT Graduate - Apollo Diagnostics",
  },
];

export const galleryImgs = [gallery1, courseGnm, gallery3, courseMsc, courseStaff, gallery4, courseBsc, courseNclex, courseStaff];

export const admissionSteps = [
  { n: "01", title: "Enquire", desc: "Call or fill our online enquiry form. Our counsellors will reach out to you within 24 hours." },
  { n: "02", title: "Counselling", desc: "Meet our academic team to choose the right course based on your goals and eligibility." },
  { n: "03", title: "Register", desc: "Complete registration with documents. Scholarships evaluated at this stage for eligible students." },
  { n: "04", title: "Start Learning", desc: "Attend orientation, receive study kits, and begin your journey with Teja Nursing Academy." },
];

export const achievements = [
  { year: "2018", title: "Academy Founded", desc: "TEJA started with a mission to transform nursing education in Nalgonda." },
  { year: "2020", title: "1000+ Alumni", desc: "Crossed a thousand students placed across India's leading hospitals." },
  { year: "2022", title: "NCLEX Wing Launched", desc: "Dedicated NCLEX-RN coaching for students aspiring to work abroad." },
  { year: "2024", title: "State Ranking Toppers", desc: "Multiple students secured top ranks in Staff Nurse & GNM exams." },
  { year: "2026", title: "5000+ Trained", desc: "Reached a milestone of five thousand successful nursing professionals." },
];

export const faqs = [
  { q: "What courses does TEJA offer?", a: "GNM, B.Sc Nursing, B.Sc MLT, BPT, and 13+ paramedical diploma programmes covering lab, imaging, OT, dialysis and cardiology tech." },
  { q: "What is the eligibility for GNM?", a: "Intermediate – Any Group Eligible. Both boys and girls are eligible. There is no age limit." },
  { q: "Do you provide hostel facilities?", a: "Yes. We have tie-ups with safe, well-maintained hostels for both boys and girls near the campus with home-style meals. Free hostel is available for Paramedical, B.Sc MLT, and BPT courses." },
  { q: "Are scholarships available?", a: "Yes — merit-based and need-based scholarships up to 30% fee waiver are available for deserving students at the time of admission." },

  { q: "Are weekend / part-time batches available?", a: "Yes. Weekend batches are available for working professionals." },
];

export const hospitals = [
  "AIIMS", "Apollo Hospitals", "KIMS", "Yashoda", "Continental",
  "Care Hospitals", "Sunshine", "NIMS", "Rainbow", "Global Hospitals",
  "Star Hospitals", "Medicover",
];

export const perks = [
  { title: "24/7 Doubt Support", desc: "WhatsApp support group with faculty for instant doubt resolution." },
  { title: "Live Clinical Postings", desc: "Rotational postings in 6 partner hospitals across departments." },
  { title: "Recorded Lectures", desc: "Miss a class? Every session is recorded and shared on the student portal." },
  { title: "Career Counselling", desc: "One-on-one sessions to plan India/abroad career pathways." },
];

export const APP_LINK = "https://play.google.com/store/apps/details?id=com.iqfsaa.bnutkb";

export interface OnlineClassItem {
  title: string;
  badge: string;
  years: string[];
}

export const onlineClassesList: OnlineClassItem[] = [
  {
    title: "GNM ONLINE CLASSES",
    badge: "General Nursing & Midwifery",
    years: ["GNM 1ST YEAR", "GNM 2ND YEAR", "GNM 3RD YEAR"],
  },
  {
    title: "B.Sc NURSING ONLINE CLASSES",
    badge: "Degree Course",
    years: ["TOTAL 8 SEMESTERS ONLINE CLASSES AVAILABLE"],
  },
  {
    title: "POST B.Sc NURSING ONLINE CLASSES",
    badge: "Post Basic Degree",
    years: ["1ST YEAR", "2ND YEAR"],
  },
  {
    title: "DMLT ONLINE CLASSES",
    badge: "Diploma in Medical Lab Tech",
    years: ["1ST YEAR & 2ND YEAR ONLINE CLASSES"],
  },
  {
    title: "B.Sc MLT ONLINE CLASSES",
    badge: "Medical Lab Tech Degree",
    years: ["1ST YEAR", "2ND YEAR", "3RD YEAR"],
  },
];

export interface OnlineCoachingItem {
  title: string;
  badge: string;
  highlights: string[];
  color: string;
}

export const onlineCoachingList: OnlineCoachingItem[] = [
  {
    title: "STAFF NURSE / NURSING OFFICER'S",
    badge: "Government & AIIMS Jobs",
    highlights: ["TOTAL 20 SUBJECTS", "20 EXPERT FACULTY MEMBERS", "Complete Test Series & Notes"],
    color: "pink",
  },
  {
    title: "LAB TECHNICIAN JOB'S ONLINE COACHING",
    badge: "Lab Technicians / MLT Jobs",
    highlights: ["TOTAL 3 SUBJECT'S ONLINE COACHING", "MCQ Practice & Previous Papers", "Dedicated Expert Guidance"],
    color: "gold",
  },
  {
    title: "ANM ONLINE COACHING",
    badge: "Auxiliary Nurse Midwife Jobs",
    highlights: ["TOTAL 6 SUBJECTS ONLINE COACHING", "Comprehensive Syllabus Coverage", "Live & Recorded Sessions"],
    color: "pink",
  },
  {
    title: "DAN'S ANESTHESIA (DAT) COACHING",
    badge: "Anesthesia Technician Jobs",
    highlights: ["TOTAL 3 SUBJECTS", "EXPERT FACULTY MEMBERS", "Complete Test Series & Notes"],
    color: "gold",
  },
];