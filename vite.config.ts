import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  build: {
    outDir: 'build' // Customize the output directory
  }
});
