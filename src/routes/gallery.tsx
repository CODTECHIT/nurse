import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, SectionTitle } from "@/components/site-layout";
import { galleryImgs } from "@/components/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — TEJA Nursing Academy" },
      { name: "description", content: "A glimpse into life at TEJA Nursing Academy — classrooms, clinical training, events and student achievements." },
      { property: "og:title", content: "Gallery — TEJA Nursing Academy" },
      { property: "og:description", content: "Photos from classrooms, labs, clinical training and campus life." },
    ],
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