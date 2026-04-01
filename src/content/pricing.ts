export interface PricingItem {
  // i18n keys
  typeKey: string;
  price: string | null; // null = "Op aanvraag"
  popular?: boolean;
}

export const PRICING: PricingItem[] = [
  { typeKey: "pricing.apartment", price: "195", popular: false },
  { typeKey: "pricing.rowhouse", price: "260", popular: false },
  { typeKey: "pricing.house", price: "295", popular: true },
  { typeKey: "pricing.houseLarge", price: null },
  { typeKey: "pricing.nonResidential", price: null },
  { typeKey: "pricing.commonParts", price: null },
];
