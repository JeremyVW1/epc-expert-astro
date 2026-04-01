// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://epc-expert.be",
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "nl",
        locales: { nl: "nl-BE", fr: "fr-BE", en: "en" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "fr", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
