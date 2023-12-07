import { defineConfig } from 'vite';
import {resolve} from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            target: 'es2015',
            lib: {
                entry: resolve(__dirname, 'src/index.js'),
                name: 'vue3-select',
                fileName: (format) => `vue3-select.${format}.js`,
            },
            rollupOptions: {
                external: ['vue'],
                output: {
                    globals: { vue: 'Vue' }
                },
            },
        },
    },
});