import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/alexanderfarrel.github.io/",
  server: {
    host: true,
    staticPort: true,
    port: 8080,
  },
  preview: {
    host: true,
    port: 8080,
  },
});
