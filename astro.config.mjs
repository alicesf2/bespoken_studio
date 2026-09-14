// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

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
      name: "Fuzzy Bubbles",
      cssVariable: "--font-bubbles",
    },
  ],
});
