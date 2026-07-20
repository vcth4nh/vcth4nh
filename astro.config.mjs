import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://thanh.vc",
  devToolbar: {
    enabled: false,
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => page !== "https://thanh.vc/retro/",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
