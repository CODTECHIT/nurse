import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowLeft, Clock, Users, Building, FileCheck, GraduationCap } from "lucide-react";
import { PageShell } from "@/components/site-layout";
import { allCourses, PHONE, WHATSAPP } from "@/components/site-data";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = allCourses.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.course) return {};
    const { course } = loaderData;
    return {
      meta: [
        { title: `${course.name} | TEJA Nursing Academy Nalgonda` },
        { name: "description", content: `Get admission in ${course.name} (${course.fullName || ''}). ${course.duration} programme. Eligibility: ${course.eligibility}.` },
        { property: "og:title", content: `${course.name} Course — TEJA` },
      ],
    };
  },
  component: CourseDetailPage,
});

function CourseDetailPage() {
  const { course } = Route.useLoaderData();

  const whatsappMessage = encodeURIComponent(
    `Hello Teja Nursing Academy, I am interested in the ${course.whatsappName}. Please send me admission, eligibility and fee details.`
  );
  const whatsappUrl = `https://wa.me/91${WHATSAPP}?text=${whatsappMessage}`;

  return (
    <PageShell>
      <section className="bg-secondary/30 border-b border-border py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-4">
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shrink-0">
              <GraduationCap className="h-8 w-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-wider uppercase mb-2">
                {course.category} Course
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">{course.name}</h1>
            </div>
          </div>
          {course.fullName && (
            <p className="text-lg md:text-xl text-muted-foreground font-medium mt-2">{course.fullName}</p>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Course Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 rounded-2xl border border-border p-4 bg-white shadow-sm">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Duration</div>
                    <div className="font-semibold text-foreground mt-1">{course.duration}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border p-4 bg-white shadow-sm">
                  <Users className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Gender Eligibility</div>
                    <div className="font-semibold text-foreground mt-1">{course.gender}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border p-4 bg-white shadow-sm">
                  <Building className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Hostel</div>
                    <div className="font-semibold text-foreground mt-1">{course.hostel}</div>
                  </div>
                </div>
                {course.medium && (
                  <div className="flex items-start gap-3 rounded-2xl border border-border p-4 bg-white shadow-sm">
                    <FileCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Medium</div>
                      <div className="font-semibold text-foreground mt-1">{course.medium}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility Criteria</h2>
              <div className="rounded-2xl bg-secondary/50 p-6 border border-border">
                <ul className="space-y-3 text-foreground/90 font-medium">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{course.eligibility}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Age Limit: {course.ageLimit}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-primary mb-2">Admissions Open</h3>
              <p className="text-sm text-muted-foreground mb-6">Contact us now to secure your seat or get more information about this course.</p>
              
              <div className="flex flex-col gap-3">
                <a 
                  href={`tel:${PHONE}`} 
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-6 py-3.5 text-primary-foreground font-bold shadow-[var(--shadow-soft)] hover:bg-primary-dark transition-colors"
                >
                  <Phone className="h-5 w-5" /> Call Now
                </a>
                <a 
                  href={whatsappUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] px-6 py-3.5 text-white font-bold shadow-md hover:brightness-105 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" /> Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
