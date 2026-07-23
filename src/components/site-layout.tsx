import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
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
            <div className="font-black text-primary text-lg sm:text-xl tracking-wider uppercase">TEJA</div>
            <div className="text-[11px] sm:text-xs text-muted-foreground font-bold uppercase tracking-wider mt-0.5">Nursing Academy<br />& Coaching Centre</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 mx-auto text-sm font-medium">
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

export function FinalCTA() {
  return (
    <section className="relative py-14 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center gap-6 text-white text-center md:text-left">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] shrink-0 shadow-xl">
          <Trophy className="h-10 w-10" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-black">Ready to Start Your Nursing Career?</h2>
          <p className="mt-2 text-white/90 text-sm sm:text-base">Join TEJA Nursing Academy & Take The First Step Towards A Successful Future.</p>
        </div>
        <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 text-[var(--gold-foreground)] font-black shadow-lg hover:brightness-105 hover:scale-[1.02] transition-all">
          Apply Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
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
          <div className="min-w-0"><div className="text-xs text-white/60">Timing</div><div className="font-bold truncate">9:00 AM – 7:00 PM</div></div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} TEJA Nursing Academy & Coaching Centre. All rights reserved.
      </div>
    </footer>
  );
}

export function WhatsAppFloatingButton() {
  const message = encodeURIComponent("Hello! I would like to know more about TEJA Nursing Academy.");
  return (
    <a
      href={`https://wa.me/91${WHATSAPP}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
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
        <h1 className="text-4xl sm:text-5xl font-black">{title}</h1>
        {subtitle && <p className="mt-4 text-white/90 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}