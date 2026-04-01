export interface ServiceType {
  slug: string;
  titleKey: string;
  descKey: string;
  icon: string;
  keyPrefix: string;
}

export const SERVICES: ServiceType[] = [
  {
    slug: "residentieel",
    titleKey: "services.residential.title",
    descKey: "services.residential.desc",
    icon: "Home",
    keyPrefix: "services.residential",
  },
  {
    slug: "niet-residentieel",
    titleKey: "services.nonResidential.title",
    descKey: "services.nonResidential.desc",
    icon: "Building2",
    keyPrefix: "services.nonResidential",
  },
  {
    slug: "gemeenschappelijke-delen",
    titleKey: "services.commonParts.title",
    descKey: "services.commonParts.desc",
    icon: "Building",
    keyPrefix: "services.commonParts",
  },
];
