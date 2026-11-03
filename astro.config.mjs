// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "http://bespoken.studio",
  base: "/",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Redaction 35",
      cssVariable: "--font-redaction-35",
    },
  ],
  integrations: [
    sanity({
      projectId: "jhxi82o7",
      dataset: "production",
      useCdn: false,
    }),
  ],
});
