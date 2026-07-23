import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, ArrowRight, Star, GraduationCap, BookOpen, Building2, Users,
  TrendingUp, Award, ChevronLeft, ChevronRight, Bell, Sparkles, Syringe,
  HeartPulse, Pill, Activity, Cross, Plus, ShieldCheck, PlayCircle, Quote,
} from "lucide-react";
import nurseHero from "@/assets/nurse-hero.png";
import {
  PHONE, whyChoose, allCourses, stats, facilities,
  testimonials, galleryImgs, admissionSteps, achievements, faqs,
  hospitals, perks,
} from "@/components/site-data";
import { Navbar, Footer, FinalCTA } from "@/components/site-layout";
import { Reveal, Counter, Marquee, motion } from "@/components/site-motion";

export const Route = createFileRoute("/")({
  component: Index,
});

const announcements = [
  { icon: GraduationCap, title: "Admissions Open", desc: "For GNM, B.Sc Nursing 2025-26", cta: "Apply Now", tone: "pink" },
  { icon: Bell, title: "Weekend Batches", desc: "New Weekend Batches Starting Soon", cta: "Know More", tone: "gold" },
  { icon: BookOpen, title: "New GNM Batch", desc: "New Batch Starting From 15th June 2026", cta: "Enroll Now", tone: "pink" },
  { icon: Award, title: "Scholarship Available", desc: "Merit Based Scholarship For Deserving Students", cta: "Check Now", tone: "gold" },
];

type FloatIcon = { Icon: typeof HeartPulse; top: string; left?: string; right?: string; delay: number };
const floatingIcons: FloatIcon[] = [
  { Icon: HeartPulse, top: "10%", left: "6%", delay: 0 },
  { Icon: Syringe, top: "70%", left: "10%", delay: 0.4 },
  { Icon: Pill, top: "20%", right: "42%", delay: 0.8 },
  { Icon: Cross, top: "78%", right: "38%", delay: 1.2 },
  { Icon: Activity, top: "8%", right: "8%", delay: 0.6 },
  { Icon: Plus, top: "55%", right: "4%", delay: 1.5 },
];

function Index() {
  const [tIndex, setTIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Marquee announcement bar */}
      <div className="bg-[oklch(0.2_0.03_340)] text-white text-xs py-2 overflow-hidden">
        <Marquee speed={38}>
          {[
            "🎓 Admissions Open — GNM & B.Sc Nursing 2026-27",
            "🩺 Free demo class every Saturday 10 AM",
            "🏆 Merit scholarships up to 30% for toppers",
            "🌍 NCLEX-RN batch starting soon — limited seats",
            "📞 Call 9052223330 for instant admission counselling",
          ].map((t, i) => (
            <span key={i} className="mx-8 whitespace-nowrap font-medium tracking-wide">{t}</span>
          ))}
        </Marquee>
      </div>

      <Navbar />

      {/* HERO */}
      <section id="home" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-70 bg-medical-cross pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-[26rem] h-[26rem] rounded-full bg-white/10 blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[22rem] h-[22rem] rounded-full bg-[var(--gold)]/25 blur-3xl animate-float-slower pointer-events-none" />

        {floatingIcons.map(({ Icon, top, left, right, delay }, i) => (
          <motion.div
            key={i}
            className="absolute text-white/25 hidden md:block"
            style={{ top, left, right }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -14, 0] }}
            transition={{ duration: 5 + i, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="h-10 w-10" strokeWidth={1.4} />
          </motion.div>
        ))}

        <svg className="absolute bottom-8 left-0 w-full h-16 opacity-30 pointer-events-none" viewBox="0 0 1400 80" fill="none">
          <path
            d="M0 40 L200 40 L230 40 L245 20 L260 60 L275 10 L290 60 L305 40 L560 40 L590 40 L605 20 L620 60 L635 10 L650 60 L665 40 L920 40 L950 40 L965 20 L980 60 L995 10 L1010 60 L1025 40 L1400 40"
            stroke="white" strokeWidth="2" strokeLinecap="round" className="animate-ecg"
          />
        </svg>

        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-8 items-center relative">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-4 py-1.5 text-xs sm:text-sm font-bold text-[var(--gold-foreground)] tracking-widest">
              <Sparkles className="h-3.5 w-3.5" /> LEARN • PRACTICE • SUCCEED
            </span>
            <h1 className="mt-5 text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              Become a
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Professional Nurse</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[var(--gold)]/50 rounded-full" />
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
              India's most trusted nursing academy in Nalgonda — where 5,000+ students discovered their calling in healthcare.
              Expert faculty, hands-on clinical training, and a career that heals the world.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { icon: Users, n: 5000, s: "+", l: "Students Trained" },
                { icon: TrendingUp, n: 95, s: "%", l: "Success Rate" },
                { icon: Building2, n: 40, s: "+", l: "Hospital Tie-ups" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-white/15 backdrop-blur ring-1 ring-white/20">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white leading-tight">
                    <div className="font-black text-xl">
                      <Counter to={s.n} suffix={s.s} />
                    </div>
                    <div className="text-xs text-white/80">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 text-[var(--gold-foreground)] font-bold shadow-[var(--shadow-soft)] hover:brightness-105 hover:scale-[1.03] transition-all"
              >
                Join Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-7 py-3.5 text-white font-bold hover:bg-white hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href="#courses" className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-white/90 font-semibold hover:text-white transition-colors">
                <PlayCircle className="h-5 w-5" /> Watch Intro
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-6 rounded-full border-2 border-dashed border-white/25 animate-spin-slow" />
              <div className="absolute inset-16 rounded-full border border-white/15 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

              <img src={nurseHero} alt="Professional nurse holding clipboard" width={900} height={1100} className="relative z-10 w-full h-auto drop-shadow-2xl" />

              <motion.div
                className="absolute -top-2 -right-2 sm:top-6 sm:right-2 z-20"
                animate={{ rotate: [0, -6, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[var(--gold)] animate-pulse-ring" />
                  <div className="relative grid h-28 w-28 sm:h-36 sm:w-36 place-items-center rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] text-center font-black text-xs sm:text-sm shadow-xl">
                    Your<br /><span className="text-primary text-base">Success</span><br />Our Promise
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-2 top-1/3 z-20 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary animate-heartbeat">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Live Clinical</div>
                  <div className="text-sm font-black text-foreground">Postings</div>
                </div>
              </motion.div>


            </div>
          </motion.div>
        </div>
      </section>

      {/* HOSPITAL PARTNERS MARQUEE */}
      <section className="border-y border-border bg-white py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Our Hospital Partners
          </div>
          <Marquee speed={35}>
            {hospitals.map((h) => (
              <div key={h} className="mx-8 flex items-center gap-2 text-primary/70 hover:text-primary transition-colors">
                <Cross className="h-5 w-5" />
                <span className="font-black text-lg tracking-wide whitespace-nowrap">{h}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section id="about" className="relative py-20 bg-pink-mesh overflow-hidden">
        <div className="absolute inset-0 bg-pink-dots opacity-40 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Why Choose Us</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
              A nursing academy built on <span className="text-gradient-pink">practice</span>, not theory.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We don't just teach nursing — we shape confident healthcare professionals who lead wards, ORs and communities across India and abroad.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="card-tilt group relative rounded-3xl bg-white p-6 shadow-[var(--shadow-card)] border border-border/60 hover:shadow-[var(--shadow-soft)] h-full">
                  <div className="absolute top-3 right-4 text-5xl font-black text-primary/5 group-hover:text-primary/10 transition-colors">
                    0{i + 1}
                  </div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-bold text-lg text-foreground">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-primary/20 bg-white/60 backdrop-blur p-4 flex gap-3 h-full">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">{p.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{p.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="py-20 bg-secondary/40 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <Reveal>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Our Courses</span>
                <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">Programmes that build careers.</h2>
              </div>
              <Link to="/courses" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 text-primary text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
                View All Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCourses.filter(c => c.category === "Main").map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link to="/courses/$slug" params={{ slug: c.slug }} className="block h-full">
                  <motion.article whileHover={{ y: -8 }} className="group rounded-3xl bg-white overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] border border-border/60 h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-black uppercase tracking-wider text-primary">Popular</div>
                      <div className="absolute -bottom-5 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg group-hover:rotate-12 transition-transform">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="p-5 pt-7 flex-1 flex flex-col">
                      <h3 className="font-bold text-primary text-lg">{c.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{c.duration}</p>
                      <div className="mt-auto pt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-3 transition-all">
                        View Details <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 rounded-3xl bg-gradient-to-br from-white via-white to-primary/5 p-8 sm:p-10 shadow-[var(--shadow-card)] border border-primary/20 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative flex flex-wrap items-baseline gap-3 justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gradient-pink">Paramedical Diploma Courses</h3>
                  <p className="mt-2 text-sm text-muted-foreground">2026 exam batch • Eligibility: Inter / 10th pass • Free Hostel</p>
                </div>
                <span className="rounded-full bg-[var(--gold)] px-4 py-1.5 text-xs font-bold text-[var(--gold-foreground)] shadow-md">✨ Admissions Open</span>
              </div>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 relative">
                {allCourses.filter(c => c.category === "Paramedical").map((p, i) => (
                  <Reveal key={p.slug} delay={i * 0.03}>
                    <Link to="/courses/$slug" params={{ slug: p.slug }} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3.5 text-sm border border-border/60 hover:border-primary/40 hover:shadow-md transition-all h-full group">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Cross className="h-4 w-4" />
                      </div>
                      <span className="text-foreground/90 font-medium pt-1">{p.name}</span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="relative py-14 overflow-hidden" style={{ background: "var(--gradient-pink)" }}>
        <div className="absolute inset-0 bg-medical-cross opacity-60 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 text-white relative">
          {stats.map(({ icon: Icon, num, label }, i) => {
            const numeric = parseInt(num.replace(/\D/g, ""), 10);
            const suffix = num.replace(/[\d,]/g, "");
            return (
              <Reveal key={label} delay={i * 0.08}>
                <div className="flex items-center gap-4 justify-center">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 backdrop-blur ring-1 ring-white/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black leading-none">
                      <Counter to={numeric} suffix={suffix} />
                    </div>
                    <div className="text-xs sm:text-sm text-white/85 mt-1">{label}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-dots opacity-30 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Admission Process</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">Join us in <span className="text-gradient-pink">4 simple steps</span></h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-primary/30" />
            {admissionSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12}>
                <div className="relative text-center">
                  <div className="mx-auto relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" />
                    <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground text-2xl font-black shadow-[var(--shadow-soft)]">
                      {s.n}
                    </div>
                  </div>
                  <h3 className="mt-6 font-bold text-lg text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section id="faculty" className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Our Facilities</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">Everything you need to <span className="text-gradient-pink">excel</span></h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilities.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 0.05}>
                <motion.div whileHover={{ y: -6, rotate: -1 }} className="group rounded-3xl bg-white p-6 text-center shadow-[var(--shadow-card)] border border-border/60 hover:border-primary/40 h-full">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 transition-all">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="mt-4 text-sm font-bold text-foreground">{label}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS TIMELINE */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-64 -translate-y-1/2 bg-pink-dots opacity-30 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 relative">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Our Journey</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">Milestones that <span className="text-gradient-pink">shaped us</span></h2>
          </Reveal>
          <div className="mt-14 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {achievements.map((a, i) => (
                <Reveal key={a.year} delay={i * 0.06}>
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                    <div className="md:w-1/2 md:px-8">
                      <div className="rounded-2xl bg-white border border-primary/20 shadow-[var(--shadow-card)] p-6 hover:border-primary/50 transition-colors">
                        <div className="text-xs font-black text-primary tracking-widest">{a.year}</div>
                        <h3 className="mt-2 text-xl font-bold text-foreground">{a.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground z-10 shadow-lg">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS + GALLERY */}
      <section className="py-20 bg-pink-mesh relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">
          <div id="testimonials">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Student Voices</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">Stories of <span className="text-gradient-pink">success</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <motion.div
                key={tIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 rounded-3xl bg-white p-8 shadow-[var(--shadow-card)] border border-border/60 relative"
              >
                <Quote className="h-10 w-10 text-primary/15" />
                <p className="text-base text-foreground/85 leading-relaxed -mt-2">{testimonials[tIndex].quote}</p>
                <div className="mt-6 flex items-center gap-4">
                  <img src={testimonials[tIndex].img} alt={testimonials[tIndex].name} loading="lazy" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/30" />
                  <div>
                    <div className="flex text-[var(--gold)]">
                      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <div className="font-bold text-foreground">{testimonials[tIndex].name}</div>
                    <div className="text-xs text-muted-foreground">{testimonials[tIndex].role}</div>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <button aria-label="Previous" onClick={() => setTIndex((i) => (i - 1 + testimonials.length) % testimonials.length)} className="grid h-10 w-10 place-items-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button aria-label="Next" onClick={() => setTIndex((i) => (i + 1) % testimonials.length)} className="grid h-10 w-10 place-items-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="mt-5 flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <span key={i} className={`h-1.5 rounded-full transition-all ${i === tIndex ? "w-8 bg-primary" : "w-1.5 bg-primary/30"}`} />
                  ))}
                </div>
              </motion.div>
            </Reveal>
          </div>

          <div id="gallery">
            <Reveal>
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Campus Life</span>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">Life at <span className="text-gradient-pink">TEJA</span></h2>
                </div>
                <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-primary text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
                  View All <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {galleryImgs.slice(0, 6).map((g, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <motion.div whileHover={{ scale: 1.05 }} className="aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-[var(--shadow-card)]">
                    <img src={g} alt={`Gallery ${i + 1}`} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -left-40 top-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-4xl px-4 relative">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">FAQs</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">Questions? <span className="text-gradient-pink">We have answers.</span></h2>
          </Reveal>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className={`rounded-2xl border transition-all ${openFaq === i ? "border-primary/50 bg-primary/5 shadow-md" : "border-border bg-white hover:border-primary/30"}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="font-bold text-foreground">{f.q}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 45 : 0 }} className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Plus className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Latest Updates</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">What's happening at <span className="text-gradient-pink">TEJA</span></h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {announcements.map(({ icon: Icon, title, desc, cta, tone }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-white p-6 shadow-[var(--shadow-card)] border border-border/60 hover:shadow-[var(--shadow-soft)] h-full flex flex-col">
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl ${tone === "gold" ? "bg-[var(--gold)] text-[var(--gold-foreground)]" : "bg-primary text-primary-foreground"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-bold text-lg text-foreground">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{desc}</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-3 transition-all">
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <div className="rounded-3xl p-10 sm:p-14 relative overflow-hidden" style={{ background: "var(--gradient-pink)" }}>
              <div className="absolute inset-0 bg-medical-cross opacity-50 pointer-events-none" />
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-float-slow" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center text-white">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    <Bell className="h-3.5 w-3.5" /> Stay Updated
                  </div>
                  <h3 className="mt-4 text-3xl sm:text-4xl font-black">Get admission updates in your inbox</h3>
                  <p className="mt-3 text-white/90">Batch dates, scholarships, exam alerts and career tips — one email a week.</p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }} className="flex flex-col sm:flex-row gap-3">
                  <input required type="email" placeholder="your@email.com" className="flex-1 rounded-full bg-white/95 text-foreground px-5 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-white/30" />
                  <button className="rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] px-6 py-3.5 font-bold hover:brightness-105 hover:scale-[1.03] transition-all shadow-lg whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}