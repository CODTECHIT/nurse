import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Sparkles, BookOpen } from "lucide-react";
import { PageShell, PageHero, SectionTitle } from "@/components/site-layout";
import { allCourses, coachingPrograms } from "@/components/site-data";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Courses — TEJA Nursing Academy" },
      { name: "description", content: "Explore GNM, B.Sc Nursing, B.Sc MLT, BPT, and Paramedical Diploma courses at TEJA Nursing Academy." },
      { property: "og:title", content: "Nursing & Paramedical Courses — TEJA" },
      { property: "og:description", content: "GNM, B.Sc Nursing, B.Sc MLT, BPT, and Paramedical Diplomas." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const mainCourses = allCourses.filter(c => c.category === "Main");
  const paramedical = allCourses.filter(c => c.category === "Paramedical");

  return (
    <PageShell>
      <PageHero title="Our Courses" subtitle="Comprehensive nursing and paramedical programmes designed for real-world success." />

      {/* NURSING PROGRAMMES */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle overline="ACADEMIC COURSES" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {mainCourses.map((c) => (
              <Link key={c.slug} to="/courses/$slug" params={{ slug: c.slug }} className="group rounded-2xl bg-white overflow-hidden shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all border border-border/60 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute -bottom-5 left-4 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5 pt-7 text-center flex-1 flex flex-col">
                  <h3 className="font-bold text-primary text-lg">{c.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground font-medium">{c.duration}</p>
                  <div className="mt-auto pt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-primary/40 px-4 py-1.5 text-xs font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Details <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARAMEDICAL COURSES */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle overline="PARAMEDICAL DIPLOMA COURSES" />
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
            2 Years Duration • Intermediate Eligibility • Free Hostel Available
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {paramedical.map((c) => (
              <Link key={c.slug} to="/courses/$slug" params={{ slug: c.slug }} className="group rounded-2xl bg-white p-5 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all border border-border/60 flex flex-col h-full">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{c.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{c.fullName || c.name}</p>
                  </div>
                </div>
                <div className="mt-auto pt-5 flex items-center justify-between text-xs font-bold">
                  <span className="text-muted-foreground">{c.duration}</span>
                  <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COACHING PROGRAMS */}
      <section className="py-16 md:py-20 bg-background border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle overline="OTHER PROGRAMS / COACHING" />
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
            Additional coaching and programs offered by our academy.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {coachingPrograms.map((c) => (
              <article key={c.slug} className="group rounded-2xl bg-white overflow-hidden shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all border border-border/60 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute -bottom-5 left-4 grid h-11 w-11 place-items-center rounded-full bg-[var(--gold)] text-[var(--gold-foreground)] shadow-lg">
                    <BookOpen className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5 pt-7 text-center flex-1 flex flex-col">
                  <h3 className="font-bold text-primary text-lg">{c.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground font-medium">{c.desc}</p>
                  <Link to="/contact" className="mt-auto pt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--gold)]/40 px-4 py-1.5 text-xs font-bold text-[var(--gold-foreground)] bg-[var(--gold)]/10 hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)] transition-colors">
                    Enquire Now <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}