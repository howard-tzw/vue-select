import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),
  ],
  publicDir: false,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@tests': fileURLToPath(new URL('./tests', import.meta.url)),
    },
  },
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vue3-select',
      fileName: (format) => `vue3-select.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        assetFileNames(chunk): string {
          if (chunk.name === 'style.css') {
            return 'vue3-select.css'
          }
          return chunk.name || ''
        },
      },
    },
  },
  // @ts-ignore
  test: {
    coverage: {
      reporter: ['lcov'],
    },
  },
})
