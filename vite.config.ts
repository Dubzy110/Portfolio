import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import type { ViteUserConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    includeSource: ['src/**/*.{ts,tsx}'],
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
}) satisfies ViteUserConfig
