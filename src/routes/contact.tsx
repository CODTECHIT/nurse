import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { PageShell, PageHero, SectionTitle } from "@/components/site-layout";
import { PHONE, WHATSAPP } from "@/components/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TEJA Nursing Academy" },
      { name: "description", content: "Contact TEJA Nursing Academy in Nalgonda, Telangana. Call, WhatsApp or visit us for admissions in GNM, B.Sc, NCLEX and Paramedical courses." },
      { property: "og:title", content: "Contact TEJA Nursing Academy" },
      { property: "og:description", content: "Get in touch for admissions and enquiries." },
    ],
  }),
  component: ContactPage,
});

const contactCards = [
  { icon: Phone, label: "Call Us", value: PHONE, href: `tel:${PHONE}` },
  { icon: MessageCircle, label: "WhatsApp", value: WHATSAPP, href: `https://wa.me/91${WHATSAPP}` },
  { icon: MapPin, label: "Location", value: "Nalgonda, Telangana", href: "https://maps.google.com/?q=Nalgonda+Telangana" },
  { icon: Clock, label: "Timings", value: "9:00 AM – 7:00 PM" },
  { icon: Mail, label: "Email", value: "info@tejanursing.com", href: "mailto:info@tejanursing.com" },
];

function ContactPage() {
  return (
    <PageShell>
      <PageHero title="Get in Touch" subtitle="Have questions about admissions or courses? We're here to help." />

      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">
          <div>
            <SectionTitle overline="CONTACT DETAILS" />
            <div className="mt-8 space-y-4">
              {contactCards.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{label}</div>
                      <div className="font-bold text-foreground">{value}</div>
                    </div>
                  </>
                );
                const className = "flex items-center gap-4 rounded-2xl bg-white p-4 shadow-[var(--shadow-card)] border border-border/60 hover:border-primary/40 transition-colors";
                if (href) {
                  return (
                    <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={className}>
                      {inner}
                    </a>
                  );
                }
                return <div key={label} className={className}>{inner}</div>;
              })}
            </div>
          </div>

          <div>
            <SectionTitle overline="SEND US A MESSAGE" />
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll contact you shortly."); }} className="mt-8 space-y-4 rounded-3xl bg-white p-6 sm:p-8 shadow-[var(--shadow-card)] border border-border/60">
              <div>
                <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Full Name</label>
                <input required type="text" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Phone Number</label>
                <input required type="tel" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="10-digit mobile number" />
              </div>
              <div>
                <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Course Interested In</label>
                <input type="text" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. GNM, B.Sc Nursing, NCLEX" />
              </div>
              <div>
                <label className="text-xs font-bold text-foreground/80 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your query..." />
              </div>
              <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 text-primary-foreground font-bold shadow-[var(--shadow-soft)] hover:bg-primary-dark transition-colors">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}