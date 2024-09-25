import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    watch: {
      exclude: 'node_modules/**'
    },
    outDir: "../server/public",
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/gifts": {
        target: "http://localhost:3001",
      },
    },
  }
});