import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  trailingSlash: "always",
  output: "static",
  build: {
    assets: "assets",
    format: "directory",
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
