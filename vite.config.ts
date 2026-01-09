import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { viteSourceLocator } from '@metagptx/vite-plugin-source-locator';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/StyleBank/",   // ← 바로 여기 (plugins 위)

  plugins: [
    viteSourceLocator({
      prefix: "mgx",
    }),
    react(),
  ],

  server: {
    watch: {
      usePolling: true,
      interval: 800,
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
