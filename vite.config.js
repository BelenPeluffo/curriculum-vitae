import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@context": path.resolve(__dirname, "./src/context/"),
      "@services": path.resolve(__dirname, "./src/services/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@database": path.resolve(__dirname, "./src/database/"),
    },
  },
});
