import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart, Award } from "lucide-react";
import { PageShell, PageHero, SectionTitle } from "@/components/site-layout";
import { whyChoose, stats } from "@/components/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — TEJA Nursing Academy" },
      { name: "description", content: "Learn about TEJA Nursing Academy — our mission, vision and commitment to shaping successful nursing professionals in Nalgonda." },
      { property: "og:title", content: "About TEJA Nursing Academy" },
      { property: "og:description", content: "Our mission, vision and story — training the next generation of nurses." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Our Mission", desc: "To empower aspiring nurses with quality education, ethical values, and clinical expertise for a global career." },
  { icon: Eye, title: "Our Vision", desc: "To be Telangana's most trusted nursing academy — producing confident, competent, and compassionate healthcare professionals." },
  { icon: Heart, title: "Our Values", desc: "Discipline, dedication, compassion, and excellence in every aspect of nursing education and practice." },
  { icon: Award, title: "Our Legacy", desc: "Over a decade of consistent results, thousands of alumni serving in India and abroad, and unmatched trust from parents." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero title="About TEJA Nursing Academy" subtitle="Learn • Practice • Succeed — shaping the future of nursing since day one." />

      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle overline="WHO WE ARE" />
            <p className="mt-6 text-foreground/80 leading-relaxed">
              TEJA Nursing Academy & Coaching Centre is a premier institution based in Nalgonda, Telangana,
              dedicated to preparing students for successful careers in nursing and paramedical fields.
              With expert faculty, modern facilities and a proven track record, we are committed to
              delivering practical, exam-focused training that opens doors to hospitals in India and abroad.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              From GNM and B.Sc Nursing entrance coaching to NCLEX preparation and paramedical diplomas,
              we offer a complete ecosystem where students Learn, Practice, and Succeed.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-bold shadow-[var(--shadow-soft)] hover:bg-primary-dark transition-colors">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, num, label }) => (
              <div key={label} className="rounded-2xl bg-white p-5 shadow-[var(--shadow-card)] border border-border/60 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-3 text-2xl font-black text-primary">{num}</div>
                <div className="text-xs text-muted-foreground font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle overline="OUR VALUES" centered />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-[var(--shadow-card)] border border-border/60">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle overline="WHY CHOOSE TEJA?" centered />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChoose.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-white p-6 text-center shadow-[var(--shadow-card)] border border-border/60">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}