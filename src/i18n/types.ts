export type Language = "nl" | "fr" | "en";

export interface Translations {
  [key: string]: string | Translations;
}

// Helper to get nested value by dot-notation key
export function getTranslation(translations: Translations, key: string): string {
  const keys = key.split(".");
  let current: any = translations;
  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = current[k];
    } else {
      return key; // fallback to key
    }
  }
  return typeof current === "string" ? current : key;
}
