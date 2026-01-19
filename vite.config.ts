import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // ❌ DO NOT use lovable-tagger in production
    ...(mode === "development"
      ? [require("lovable-tagger").componentTagger()]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: ["lovable-tagger"],
    },
  },
}));
