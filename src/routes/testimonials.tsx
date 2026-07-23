import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { PageShell, PageHero, SectionTitle } from "@/components/site-layout";
import { testimonials } from "@/components/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — TEJA Nursing Academy" },
      { name: "description", content: "Success stories and testimonials from TEJA Nursing Academy students who cleared their exams and started their nursing careers." },
      { property: "og:title", content: "Student Testimonials — TEJA" },
      { property: "og:description", content: "Real success stories from our nursing graduates." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero title="Student Testimonials" subtitle="Hear from the students who trusted us with their nursing careers." />
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle overline="SUCCESS STORIES" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl bg-white p-6 sm:p-8 shadow-[var(--shadow-card)] border border-border/60 relative">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-relaxed">{t.quote}</p>
                <div className="mt-5 flex items-center gap-4">
                  <img src={t.img} alt={t.name} loading="lazy" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/30" />
                  <div>
                    <div className="flex text-[var(--gold)]">
                      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <div className="font-bold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}