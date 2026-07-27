import { SITE_URL, SITE_NAME, PHONE } from "@/components/site-data";

export interface SeoOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  type?: "website" | "article";
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export function getSeoMeta({
  title,
  description,
  keywords = [],
  path = "",
  image = "/logo.jpeg",
  type = "website",
  schema,
}: SeoOptions) {
  const fullUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const fullImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

  const defaultKeywords = [
    "TEJA Nursing Academy",
    "Nursing College Nalgonda",
    "GNM course Nalgonda",
    "B.Sc Nursing Nalgonda",
    "Paramedical institute Telangana",
    "Staff nurse coaching Hyderabad",
    "Best nursing coaching centre Telangana",
    "BPT course Nalgonda",
    "B.Sc MLT college Nalgonda",
    "NCLEX coaching Telangana",
  ];

  const combinedKeywords = Array.from(new Set([...keywords, ...defaultKeywords])).join(", ");

  const meta = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: combinedKeywords },
    { name: "author", content: SITE_NAME },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "theme-color", content: "#004080" },

    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: fullUrl },
    { property: "og:image", content: fullImageUrl },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_IN" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: fullImageUrl },
  ];

  const links = [
    { rel: "canonical", href: fullUrl },
  ];

  const scripts: Array<{ type: string; children: string }> = [];

  if (schema) {
    const schemas = Array.isArray(schema) ? schema : [schema];
    schemas.forEach((s) => {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(s),
      });
    });
  }

  return {
    meta,
    links,
    scripts,
  };
}

export const defaultOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.jpeg`,
  "image": `${SITE_URL}/logo.jpeg`,
  "description": "Best nursing academy & coaching centre in Nalgonda, Telangana offering GNM, B.Sc Nursing, B.Sc MLT, BPT, and Paramedical diploma courses.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Clock Tower, Main Road",
    "addressLocality": "Nalgonda",
    "addressRegion": "Telangana",
    "postalCode": "508001",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": `+91-${PHONE}`,
    "contactType": "admissions",
    "areaServed": "IN",
    "availableLanguage": ["English", "Telugu", "Hindi"]
  },
  "sameAs": [
    "https://play.google.com/store/apps/details?id=com.iqfsaa.bnutkb"
  ]
};

export const defaultLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.jpeg`,
  "telephone": `+91-${PHONE}`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Clock Tower, Main Road",
    "addressLocality": "Nalgonda",
    "addressRegion": "Telangana",
    "postalCode": "508001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "17.0575",
    "longitude": "79.2691"
  }
};

export function getFaqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };
}

export function getCourseSchema(course: { name: string; fullName?: string; description: string; duration: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": SITE_NAME,
      "url": SITE_URL,
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Onsite",
      "duration": course.duration,
    },
  };
}
