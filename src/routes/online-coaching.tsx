import { createFileRoute } from "@tanstack/react-router";
import { 
  Smartphone, Monitor, CheckCircle, ExternalLink, Award, BookOpen, 
  Users, GraduationCap, Download, Phone, MessageCircle, ArrowRight, Sparkles 
} from "lucide-react";
import { PageShell, PageHero } from "@/components/site-layout";
import { APP_LINK, onlineCoachingList, onlineClassesList, PHONE, WHATSAPP } from "@/components/site-data";
import { Reveal, motion } from "@/components/site-motion";

export const Route = createFileRoute("/online-coaching")({
  head: () => ({
    meta: [
      { title: "Online Coaching & Digital Classes — TEJA Nursing Academy" },
      { name: "description", content: "Online classes for GNM, B.Sc Nursing, Post B.Sc, DMLT, B.Sc MLT and job coaching for Staff Nurse, Nursing Officer, Lab Technician and ANM via Android App." },
    ],
  }),
  component: OnlineCoachingPage,
});

function OnlineCoachingPage() {
  return (
    <PageShell>
      <PageHero 
        title="Online Coaching & Digital Classes" 
        subtitle="Learn anywhere, anytime with our official Android Application. Comprehensive classes for academic courses and government job exams." 
      />

      {/* ANDROID APP BANNER */}
      <section className="py-12 bg-pink-mesh relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl text-white" style={{ background: "var(--gradient-pink)" }}>
            <div className="absolute inset-0 bg-medical-cross opacity-40 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                  <Sparkles className="h-4 w-4" /> OFFICIAL ANDROID APP AVAILABLE
                </span>
                <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
                  Download TEJA Academy App for Online Classes & Coaching
                </h2>
                <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
                  Get instant access to live lectures, recorded videos, subject notes, test series, and previous year question papers directly on your smartphone.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col items-center justify-center gap-4">
                <a 
                  href={APP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-primary font-black text-lg shadow-2xl hover:bg-white/90 hover:scale-[1.03] transition-all"
                >
                  <Download className="h-6 w-6" /> Download Android App <ExternalLink className="h-5 w-5" />
                </a>
                <span className="text-xs text-white/80 font-medium">Available on Google Play Store</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONLINE COACHING FOR JOBS */}
      <section className="py-20 bg-background relative">
        <div className="mx-auto max-w-7xl px-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--gold-foreground)]">
              <Award className="h-3.5 w-3.5" /> GOVERNMENT & HOSPITAL JOBS
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">ONLINE COACHING FOR JOB'S</h2>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground">Specialized online coaching bundles designed by experienced medical faculty to crack competitive nursing and lab technician recruitment exams.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {onlineCoachingList.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -8 }} 
                  className="rounded-3xl bg-white p-8 shadow-[var(--shadow-card)] border border-border/80 hover:shadow-2xl hover:border-primary/50 transition-all h-full flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
                  
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-6">
                      <Award className="h-4 w-4" /> {item.badge}
                    </div>
                    <h3 className="text-2xl font-black text-foreground tracking-tight leading-snug">{item.title}</h3>
                    
                    <div className="mt-6 space-y-3 pt-6 border-t border-border/60">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366] mt-0.5">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-base font-bold text-foreground/90">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/40">
                    <a 
                      href={APP_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-white font-bold shadow-md hover:bg-primary-dark hover:scale-[1.02] transition-all text-sm"
                    >
                      <Smartphone className="h-4 w-4" /> Join Coaching on App <ExternalLink className="h-4 w-4 opacity-80" />
                    </a>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ONLINE ACADEMIC CLASSES */}
      <section className="py-20 bg-secondary/30 relative border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <Monitor className="h-3.5 w-3.5" /> DIGITAL ACADEMIC PROGRAMMES
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">ONLINE CLASSES FOR DEGREE & DIPLOMA</h2>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground">Complete year-wise and semester-wise digital lectures for all major nursing and paramedical courses.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineClassesList.map((cls, idx) => (
              <Reveal key={cls.title} delay={idx * 0.08}>
                <motion.div 
                  whileHover={{ y: -6 }} 
                  className="rounded-3xl bg-white p-7 shadow-[var(--shadow-card)] border border-border/60 hover:shadow-xl hover:border-primary/40 transition-all h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-extrabold text-foreground/80">{cls.badge}</span>
                      <Monitor className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-extrabold text-primary">{cls.title}</h3>

                    <div className="mt-5 space-y-2.5">
                      {cls.years.map((y, i) => (
                        <div key={i} className="flex items-center gap-2.5 bg-secondary/40 rounded-xl px-3.5 py-2.5 text-sm font-bold text-foreground">
                          <BookOpen className="h-4 w-4 text-primary shrink-0" />
                          <span>{y}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 pt-5 border-t border-border/40">
                    <a 
                      href={APP_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary/5 px-5 py-3 text-primary font-bold hover:bg-primary hover:text-white transition-colors text-sm"
                    >
                      <Download className="h-4 w-4" /> Watch on Android App
                    </a>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HELP CTA */}
      <section className="py-16 bg-white border-t border-border">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="text-3xl font-black text-foreground">Need Help Accessing Online Classes?</h3>
          <p className="mt-2 text-base text-muted-foreground">Call our technical support or WhatsApp us for instant login guidance and course activation.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-white font-bold shadow-md hover:brightness-105 transition-all">
              <Phone className="h-4 w-4" /> Call Technical Support
            </a>
            <a href={`https://wa.me/91${WHATSAPP}?text=${encodeURIComponent("Hello TEJA Academy, I need help regarding Online Classes / Coaching on the Android App.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-white font-bold shadow-md hover:brightness-105 transition-all">
              <MessageCircle className="h-4 w-4 fill-current" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
