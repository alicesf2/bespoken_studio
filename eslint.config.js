// eslint.config.js

import eslintParserAstro from "astro-eslint-parser";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.astro"],

    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },

    rules: {
      ...eslintPluginBetterTailwindcss.configs.recommended.rules,
    },

    settings: {
      "better-tailwindcss": {
        entryPoint: "src/styles/global.css",
        tailwindConfig: "tailwind.config.js",
      },
    },

    languageOptions: {
      parser: eslintParserAstro,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
];
