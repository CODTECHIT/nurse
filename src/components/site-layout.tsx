import { Link } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import { Phone, MessageCircle, MapPin, Clock, Menu, X, Stethoscope, ArrowRight, Trophy } from "lucide-react";
import { PHONE, WHATSAPP, navLinks } from "./site-data";

export function SectionTitle({ overline, centered = false }: { overline: string; centered?: boolean }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">{overline}</h2>
      <div className={`mt-2 h-1 w-16 rounded-full bg-[var(--gold)] ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src="/logo.jpeg" alt="TEJA Nursing Academy Logo" className="h-16 sm:h-[4.5rem] w-auto object-contain rounded-md scale-110 origin-left" />
          <div className="leading-tight hidden sm:flex flex-col justify-center">
            <div className="font-black text-primary text-xl sm:text-2xl tracking-wider uppercase">TEJA</div>
            <div className="text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-wider mt-0.5">Nursing Academy<br />& Coaching Centre</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 mx-auto text-base font-medium">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/80" }}
              className="hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a href={`tel:${PHONE}`} className="hidden sm:inline-flex ml-auto items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground text-sm font-semibold shadow-[var(--shadow-soft)] hover:bg-primary-dark transition-colors">
          <Phone className="h-4 w-4" /> {PHONE}
        </a>
        <button aria-label="Menu" onClick={() => setMenuOpen((v) => !v)} className="lg:hidden ml-auto grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} className="text-foreground/80 hover:text-primary font-medium">
                {l.label}
              </Link>
            ))}
            <a href={`tel:${PHONE}`} className="sm:hidden inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground text-sm font-semibold w-fit">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function ApplyNowModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const course = formData.get("course") as string;
    const qualification = formData.get("qualification") as string;
    const message = formData.get("message") as string;

    const text = `Hello TEJA Nursing Academy, I would like to apply for admission!\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Course Interested:* ${course}\n${qualification ? `*Qualification:* ${qualification}\n` : ""}${message ? `*Message:* ${message}\n` : ""}\nPlease send me fee details and admission guidance.`;

    const url = `https://wa.me/91${WHATSAPP}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-border/80 animate-in zoom-in-95 duration-200 text-foreground max-h-[90vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          type="button"
          className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-full bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary shrink-0">
            <Trophy className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-foreground tracking-tight">Apply for Admission</h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">Fill details below & continue on WhatsApp</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Full Name <span className="text-primary">*</span></label>
            <input required name="name" type="text" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Priya Sharma" />
          </div>

          <div>
            <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Phone / WhatsApp Number <span className="text-primary">*</span></label>
            <input required name="phone" type="tel" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. 9876543210" />
          </div>

          <div>
            <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Course Interested In <span className="text-primary">*</span></label>
            <select required name="course" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium">
              <option value="GNM (Staff Nurse Course)">GNM (Staff Nurse Course - 3 Years)</option>
              <option value="B.Sc Nursing">B.Sc Nursing (4 Years)</option>
              <option value="Post B.Sc Nursing">Post B.Sc Nursing (2 Years)</option>
              <option value="B.Sc MLT">B.Sc MLT (Lab Technician - 3 Years)</option>
              <option value="BPT (Physiotherapy)">BPT (Physiotherapy - 4 Years)</option>
              <option value="Paramedical Diploma">Paramedical Diploma (DMLT, DMIT, DRGA, etc.)</option>
              <option value="NCLEX / Staff Nurse Coaching">NCLEX / Staff Nurse Coaching</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Previous Qualification / Eligibility</label>
            <input name="qualification" type="text" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Intermediate BiPC / GNM / 10th Pass" />
          </div>

          <div>
            <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Message or Questions (Optional)</label>
            <textarea name="message" rows={3} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Any queries regarding hostel, fee structure, etc." />
          </div>

          <div className="pt-2">
            <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-white font-bold shadow-lg hover:brightness-105 hover:scale-[1.01] transition-all cursor-pointer">
              <MessageCircle className="h-5 w-5 fill-current" /> Submit & Redirect to WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-14 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center gap-6 text-white text-center md:text-left">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] shrink-0 shadow-xl">
            <Trophy className="h-10 w-10" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-black">Ready to Start Your Nursing Career?</h2>
            <p className="mt-2 text-white/90 text-base sm:text-lg">Join TEJA Nursing Academy & Take The First Step Towards A Successful Future.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)} 
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 text-[var(--gold-foreground)] font-black shadow-lg hover:brightness-105 hover:scale-[1.02] transition-all cursor-pointer"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
      <ApplyNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[oklch(0.2_0.03_340)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary shrink-0"><Phone className="h-4 w-4" /></div>
          <div className="min-w-0"><div className="text-xs text-white/60">Call Us</div><div className="font-bold truncate">{PHONE}</div></div>
        </a>
        <a href={`https://wa.me/91${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary shrink-0"><MessageCircle className="h-4 w-4" /></div>
          <div className="min-w-0"><div className="text-xs text-white/60">WhatsApp</div><div className="font-bold truncate">Chat Now</div></div>
        </a>
        <a href="https://maps.google.com/?q=Nalgonda+Telangana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary shrink-0"><MapPin className="h-4 w-4" /></div>
          <div className="min-w-0"><div className="text-xs text-white/60">Location</div><div className="font-bold truncate">Nalgonda, Telangana</div></div>
        </a>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary shrink-0"><Clock className="h-4 w-4" /></div>
          <div className="min-w-0"><div className="text-xs text-white/60">Timing</div><div className="font-bold truncate">24/7 Available</div></div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} TEJA Nursing Academy & Coaching Centre. All rights reserved.
        <br />
        Designed &amp; Developed by{" "}
        <a href="https://codtechitsolutions.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
          CodTech IT Solutions
        </a>
      </div>
    </footer>
  );
}

export function WhatsAppFloatingButton() {
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("teja_popup_shown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsAutoModalOpen(true);
        sessionStorage.setItem("teja_popup_shown", "true");
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  const message = encodeURIComponent("Hello! I would like to know more about TEJA Nursing Academy.");
  return (
    <>
      <a
        href={`https://wa.me/91${WHATSAPP}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <ApplyNowModal isOpen={isAutoModalOpen} onClose={() => setIsAutoModalOpen(false)} />
    </>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      {children}
      <FinalCTA />
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[var(--gold)]/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 text-white text-center">
        <h1 className="text-5xl sm:text-6xl font-black">{title}</h1>
        {subtitle && <p className="mt-4 text-white/90 max-w-2xl mx-auto text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}