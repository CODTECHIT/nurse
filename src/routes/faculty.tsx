import { createFileRoute } from "@tanstack/react-router";
import { UserCheck } from "lucide-react";
import { PageShell, PageHero, SectionTitle } from "@/components/site-layout";
import { faculty, facilities } from "@/components/site-data";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — TEJA Nursing Academy" },
      { name: "description", content: "Meet the expert faculty of TEJA Nursing Academy — experienced nurses, doctors and instructors mentoring the next generation." },
      { property: "og:title", content: "Our Faculty — TEJA Nursing Academy" },
      { property: "og:description", content: "Experienced faculty guiding future nursing professionals." },
    ],
  }),
  component: FacultyPage,
});

function FacultyPage() {
  return (
    <PageShell>
      <PageHero title="Our Faculty" subtitle="Learn from experienced professionals who bring years of clinical and academic expertise." />

      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle overline="MEET THE TEAM" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((f) => (
              <div key={f.name} className="rounded-2xl bg-white p-6 text-center shadow-[var(--shadow-card)] border border-border/60 hover:-translate-y-1 transition-all">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
                  <UserCheck className="h-9 w-9" />
                </div>
                <h3 className="mt-4 font-bold text-foreground">{f.name}</h3>
                <p className="text-sm text-primary font-semibold">{f.role}</p>
                <p className="mt-2 text-xs text-muted-foreground">{f.specialty}</p>
                <span className="mt-3 inline-block rounded-full bg-secondary/60 px-3 py-1 text-xs font-bold text-foreground/80">
                  {f.exp} experience
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle overline="OUR FACILITIES" centered />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilities.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl bg-white p-5 text-center shadow-[var(--shadow-card)] border border-border/60">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-3 text-sm font-bold text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}