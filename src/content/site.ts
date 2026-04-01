export const SITE = {
  name: "EPC Expert",
  phone: "0475 65 10 05",
  phoneHref: "tel:+32475651005",
  email: "info@epc-expert.be",
  emailHref: "mailto:info@epc-expert.be",
  phoneInternational: "+32 475 65 10 05",
  website: "https://epc-expert.be",
  logo: "/images/epc-expert-logo.png",
  logoSecondary: "/images/epc-expert-logo-secondary.png",
  company: "EPC Expert BV",
  vat: "BE 0757.587.024",
  recognition: ["EP18784", "EP18782"],
  address: {
    street: "Tervuren",
    postalCode: "3080",
    region: "Vlaams-Brabant",
    country: "Belgium",
    countryCode: "BE",
  },
  locations: ["Tervuren", "Meise"],
  socialLinks: {
    // Add URLs here when profiles are created:
    // facebook: "https://www.facebook.com/epcexpert",
    // linkedin: "https://www.linkedin.com/company/epc-expert-bv",
    // google: "https://g.page/epc-expert",
  },
} as const;
