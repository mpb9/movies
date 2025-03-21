import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), react(), jsconfigPaths()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      services: "/src/services",
      assets: "/src/assets",
    },
  },
  server: {
    port: 3000,
  },
  envPrefix: "REACT_APP_",
});
