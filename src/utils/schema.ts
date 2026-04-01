import { SITE } from "../content/site";
import { REGIONS } from "../content/regions";

function getSameAsLinks(): string[] {
  return Object.values(SITE.socialLinks).filter(
    (url): url is string => typeof url === "string" && url.length > 0,
  );
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE.website}/#local-business`,
    name: SITE.company,
    legalName: SITE.company,
    alternateName: SITE.name,
    description: "Erkende energiedeskundige voor EPC-attesten in Vlaams-Brabant",
    telephone: SITE.phoneInternational,
    email: SITE.email,
    url: SITE.website,
    image: `${SITE.website}${SITE.logo}`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.website}${SITE.logo}`,
    },
    vatID: SITE.vat.replace(/[\s.]/g, ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tervuren",
      addressRegion: "Vlaams-Brabant",
      postalCode: "3080",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.82330,
      longitude: 4.51420,
    },
    areaServed: REGIONS.map(r => ({
      "@type": "City",
      name: r.name,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    knowsLanguage: ["nl", "fr", "en"],
    sameAs: getSameAsLinks(),
    hasCredential: SITE.recognition.map(id => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional certification",
      name: "VEKA Energiedeskundige Type A",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Vlaams Energie- en Klimaatagentschap (VEKA)",
        url: "https://www.vlaanderen.be/veka",
      },
      identifier: id,
    })),
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.website}/#service-epc`,
    name: "EPC Certificaat",
    description: "Officieel energieprestatiecertificaat opgesteld door een VEKA-erkend energiedeskundige. Verplicht bij verkoop of verhuur van een woning in Vlaanderen.",
    provider: {
      "@id": `${SITE.website}/#local-business`,
    },
    serviceType: "Energy Performance Certificate",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 50.82330, longitude: 4.51420 },
      geoRadius: "30000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "EPC Tarieven",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "EPC Appartement" },
          price: "195",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "EPC Rijwoning" },
          price: "260",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "EPC Woning" },
          price: "295",
          priceCurrency: "EUR",
        },
      ],
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(i => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function regionSchema(city: string) {
  const slug = city.toLowerCase().replace(/\s+/g, "-");
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE.website}/regio/${slug}#local-business`,
    name: SITE.company,
    alternateName: SITE.name,
    telephone: SITE.phoneInternational,
    email: SITE.email,
    url: `${SITE.website}/regio/${slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tervuren",
      addressRegion: "Vlaams-Brabant",
      postalCode: "3080",
      addressCountry: "BE",
    },
    areaServed: { "@type": "City", name: city },
  };
}

export function blogPostSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE.website,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.company,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.website}${SITE.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.website}/blog/${post.slug}`,
    },
    url: `${SITE.website}/blog/${post.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Returns an aggregateRating object for inclusion in LocalBusiness schema.
 * Call this only when real Google review data is available.
 * Do NOT use placeholder/fake values — Google penalizes fabricated ratings.
 */
export function aggregateRatingSchema(rating: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
}) {
  if (rating.reviewCount < 1) throw new Error("aggregateRatingSchema: reviewCount must be >= 1");
  if (rating.ratingValue <= 0) throw new Error("aggregateRatingSchema: ratingValue must be > 0");
  return {
    "@type": "AggregateRating",
    ratingValue: rating.ratingValue,
    reviewCount: rating.reviewCount,
    bestRating: rating.bestRating ?? 5,
    worstRating: 1,
  };
}
