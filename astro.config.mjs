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
      provider: fontProviders.local(),
      name: "More Sugar",
      cssVariable: "--font-more-sugar",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/more-sugar.regular.otf"],
            weight: "normal",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/more-sugar.thin.otf"],
            weight: 300,
            style: "normal",
          },
        ],
      },
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
