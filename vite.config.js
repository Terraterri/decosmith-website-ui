import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://mmworkspace.com/dekorlane/website/",
  base: "/",
  plugins: [
    react({
      fastRefresh: false,
    }),
  ],
});
