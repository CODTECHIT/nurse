import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { PageShell, PageHero, SectionTitle } from "@/components/site-layout";
import { testimonials } from "@/components/site-data";
import { getSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/testimonials")({
  head: () => getSeoMeta({
    title: "Student Testimonials & Success Stories — TEJA Nursing Academy Nalgonda",
    description: "Read verified student reviews and success stories from TEJA Nursing Academy alumni working in NIMS, Yashoda, Apollo, AIIMS and abroad as Registered Nurses.",
    keywords: ["TEJA Nursing Academy reviews", "Student success stories Nalgonda", "Nursing college placement reviews Telangana", "GNM student testimonials Nalgonda", "Staff nurse exam toppers Nalgonda"],
    path: "/testimonials",
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
                <div className="mt-5">
                  <div className="flex text-[var(--gold)] mb-1">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}