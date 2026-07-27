import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, SectionTitle } from "@/components/site-layout";
import { galleryImgs } from "@/components/site-data";
import { getSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => getSeoMeta({
    title: "Campus Gallery & Clinical Training Photos — TEJA Nursing Academy Nalgonda",
    description: "Explore campus photos, smart digital classrooms, advanced medical laboratories, and live hospital clinical training sessions at TEJA Nursing Academy Nalgonda.",
    keywords: ["TEJA Nursing Academy photos", "Nursing college campus Nalgonda", "Nursing lab photos Telangana", "Hospital clinical training gallery", "Paramedical training lab Nalgonda"],
    path: "/gallery",
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageShell>
      <PageHero title="Gallery" subtitle="Moments from our classrooms, clinical training, and campus life." />
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle overline="CAMPUS & CLASSROOMS" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...galleryImgs, ...galleryImgs].map((g, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-[var(--shadow-card)]">
                <img src={g} alt={`Gallery ${i + 1}`} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}