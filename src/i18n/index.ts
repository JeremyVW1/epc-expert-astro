import type { Language, Translations } from "./types";
import { getTranslation } from "./types";
import { nl } from "./nl";
import { fr } from "./fr";
import { en } from "./en";

const translationMap: Record<Language, Translations> = { nl, fr, en };

export type { Language };

export function getLangFromUrl(url: URL): Language {
  const param = url.searchParams.get("lang");
  if (param === "fr" || param === "en") return param;
  return "nl";
}

export function getLangFromCookie(cookieHeader: string | null): Language {
  if (!cookieHeader) return "nl";
  const match = cookieHeader.match(/epc-lang=(nl|fr|en)/);
  return (match?.[1] as Language) ?? "nl";
}

export function t(lang: Language, key: string, replacements?: Record<string, string>): string {
  let value = getTranslation(translationMap[lang], key);
  if (replacements) {
    for (const [k, v] of Object.entries(replacements)) {
      value = value.replace(new RegExp(`\\{${k}\\}`, "g"), v);
    }
  }
  return value;
}

export function toBCP47(lang: Language): string {
  return lang === "nl" ? "nl-BE" : lang === "fr" ? "fr-BE" : "en";
}
