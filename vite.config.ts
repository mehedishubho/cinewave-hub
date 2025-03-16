
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Next.js 15-like path aliases
      "app": path.resolve(__dirname, "./src/app"),
      "components": path.resolve(__dirname, "./src/components"),
      "lib": path.resolve(__dirname, "./src/lib"),
      "hooks": path.resolve(__dirname, "./src/hooks"),
      "public": path.resolve(__dirname, "./public"),
      "styles": path.resolve(__dirname, "./src/styles"),
    },
  },
}));
